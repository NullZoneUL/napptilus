import Translations from '@assets/strings.json';
import { Link } from 'react-router-dom';
import { Routes } from '@/routes/pageConfig';
import './style.scss';

const Item = ({ data }: { data: Item }) => {
  const { image, first_name, last_name, gender, profession, id } = data;

  return (
    <Link to={`${Routes.detail}/${id}`}>
      <div className="item-element-container">
        <img src={image} />
        <div className="item-element-info-container">
          <p className="item-element-name">{`${first_name} ${last_name}`}</p>
          <p className="item-element-gender">
            {gender === 'F' ? Translations.female : Translations.male}
          </p>
          <p className="item-element-profession">{profession}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
