import Translations from '@assets/strings.json';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@state/state';
import { fetchOompaLoompaDetail } from '@state/detail';
import { useEffect } from 'react';
import './style.scss';

const Detail = ({ id }: { id: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { item, error, loading } = useSelector(
    (state: RootState) => state.oompaLoompasDetail,
  );

  useEffect(() => {
    dispatch(fetchOompaLoompaDetail(id));
  }, [id]);

  if (error !== null) {
    return (
      <div className="request-error">
        <p>{Translations.error.general}</p>
      </div>
    );
  }

  if (loading || !item) {
    return <></>;
  }

  const { image, first_name, last_name, gender, profession, quota } = item;

  return (
    <div className="oompalompa-detail-container">
      <div className="oompalompa-detail-image">
        <img src={image} />
      </div>
      <p className="oompalompa-detail-name">{`${first_name} ${last_name}`}</p>
      <p className="oompalompa-detail-gender">
        {gender === 'F' ? Translations.female : Translations.male}
      </p>
      <p className="oompalompa-detail-profession">{profession}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: quota,
        }}
        className="oompalompa-detail-quota"
      />
    </div>
  );
};

export default Detail;
