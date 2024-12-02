/* eslint-disable @typescript-eslint/no-unused-vars */
import Translations from '@assets/strings.json';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ONE_DAY } from './list';

interface OompaLoompaDetailState {
  item: DetailItem | null;
  loading: boolean;
  error: string | null;
}

const initialState: OompaLoompaDetailState = {
  item: null,
  loading: false,
  error: null,
};

const URL =
  'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/';

export const fetchOompaLoompaDetail = createAsyncThunk<
  DetailItem,
  number,
  { rejectValue: string }
>('oompaLoompasDetail/fetchOompaLoompaDetail', async (id, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as {
      oompaLoompaDetail: OompaLoompaDetailState;
    };
    const savedItem = state.oompaLoompaDetail?.item;

    if (
      savedItem?.id === id &&
      savedItem.lastFetched &&
      Date.now() - savedItem.lastFetched < ONE_DAY
    ) {
      return savedItem;
    }

    const response = await fetch(`${URL}${id}`);

    if (!response.ok) {
      return thunkAPI.rejectWithValue(Translations.error.response);
    }
    const data: DetailItem = await response.json();
    return { ...data, lastFetched: Date.now() };
  } catch (error) {
    return thunkAPI.rejectWithValue(Translations.error.network);
  }
});

const oompaLoompasDetailSlice = createSlice({
  name: 'oompaLoompasDetail',
  initialState,
  reducers: {
    clearItems(state) {
      state.item = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchOompaLoompaDetail.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOompaLoompaDetail.fulfilled,
        (state, action: PayloadAction<DetailItem>) => {
          state.loading = false;
          state.item = action.payload;
        },
      )
      .addCase(fetchOompaLoompaDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || Translations.error.unknown;
      });
  },
});

export default oompaLoompasDetailSlice.reducer;
