import React from "react";

function BookCard(props) {
  return (
    
    <div class="card">
      <div className="card-body">{props.children}</div>
       </div>
  );
}

export default BookCard;
