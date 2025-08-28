import { IMAGE_URL } from '../../utils/constants';
import StarRating from '../estrellas/estrellas';
import './card.css'


export default function Carta({ props }) {
  const { title, poster_path, name } = props;
  return (
    <div className="card" >
      <img src={`${IMAGE_URL}${poster_path}`} alt="" />
      <h3>{props.title ? title : name}</h3>
      <StarRating rating={props.vote_average} />
    </div>
  )
}