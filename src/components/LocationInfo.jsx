const LocationInfo = ({ location }) => {
  return (
    <article className="Location__Info">
      <h2 className="Location__name">{location?.name}</h2>
      <ul className="Location__List">
        <li className="Location__Type location__item">
          <span className="type">Type:</span>
          <span className="type__info">{location?.type}</span>
        </li>
        <li className="Location__Dimension location__item">
          <span className="dimension">Dimension:</span>
          <span className="dimension__info">
            {location?.dimension || "unknown"}
          </span>
        </li>
        <li className="Location__Population location__item">
          <span className="population">Population:</span>
          <span className="population__info">
            {location?.residents.length}
          </span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
