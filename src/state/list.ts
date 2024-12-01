/* eslint-disable @typescript-eslint/no-unused-vars */
import Translations from '@assets/strings.json';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface OompaLoompaState {
  items: Item[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
}

const initialState: OompaLoompaState = {
  items: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
};

const URL =
  'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas';

export const fetchOompaLoompas = createAsyncThunk<
  ItemListRoot,
  number,
  { rejectValue: string }
>('oompaLoompas/fetchOompaLoompas', async (page, thunkAPI) => {
  try {
    const response = await fetch(`${URL}?page=${page}`);

    if (!response.ok) {
      return thunkAPI.rejectWithValue(Translations.error.response);
    }
    const data: ItemListRoot = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(Translations.error.network);
  }
});

const oompaLoompaSlice = createSlice({
  name: 'oompaLoompas',
  initialState,
  reducers: {
    clearItems(state) {
      state.items = [];
      state.currentPage = 1;
      state.totalPages = 0;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchOompaLoompas.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOompaLoompas.fulfilled,
        (state, action: PayloadAction<ItemListRoot>) => {
          state.loading = false;
          state.items = state.items.concat(action.payload.results);
          state.currentPage = action.payload.current;
          state.totalPages = action.payload.total;
        },
      )
      .addCase(fetchOompaLoompas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || Translations.error.unknown;
      });
  },
});

export default oompaLoompaSlice.reducer;
