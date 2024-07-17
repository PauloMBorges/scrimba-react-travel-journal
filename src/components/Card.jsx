import images from "../assets/images";
import { PositionIcon } from "../assets/icons.jsx";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={images[props.card.imageUrl]} alt={props.card.imageAlt} />
        <div className="card-info">
          <div className="card-location">
            <PositionIcon />
            <span>{props.card.location}</span>
            <a href={props.card.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="card-title">{props.card.title}</h1>
          <div className="card-date">
            <span>
              {props.card.startDate} - {props.card.endDate}
            </span>
          </div>
          <p className="card-description">{props.card.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
