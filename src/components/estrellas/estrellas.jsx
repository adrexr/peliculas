import React from "react";

export default function StarRating({ rating, max = 5 }) {
  
  const stars = Math.round((rating / 10) * max);

  return (
    <div>
      {[...Array(max)].map((_, i) => (
        <span key={i} style={{ color: i < stars ? "orange" : "#ccc", fontSize: "1.2em" }}>
          ★
        </span>
      ))}
      {rating}
    </div>
  );
}