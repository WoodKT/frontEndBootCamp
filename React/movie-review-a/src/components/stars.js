import React, { useState } from "react";

const Stars = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
      <div className="stars">
          {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                  <button 
                  type="button" 
                  key={index} 
                  className={index <= (hover || rating) ? "on" : "off"}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)} 
                  onMouseLeave={() => setHover(rating)}
                  >
                      <span className="star">&#9733;</span>
                  </button>
              );
          })}
      </div>
  );
};

export default Stars;


   //https://javascript.plainenglish.io/react-5-star-rating-system-4fa81b71cac9
   //https://www.geeksforgeeks.org/how-to-create-a-rating-component-in-reactjs/
   //https://www.30secondsofcode.org/react/s/star-rating

   //https://www.section.io/engineering-education/building-a-custom-user-reviews-page-in-react-typescript-and-reactstrap/