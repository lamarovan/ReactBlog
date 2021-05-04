import React from "react";
import { useHistory } from "react-router-dom";

import "./card.scss";

function Card({ id, title, author }) {
  let history = useHistory();

  return (
    <div className="card" onClick={() => history.push(`/blog/${id}`)}>
      <h2 className="cardTitle">{title}</h2>
      <p>Author: {author}</p>
    </div>
  );
}

export default Card;
