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
   //https://w3collective.com/react-star-rating-component/

   //https://www.section.io/engineering-education/building-a-custom-user-reviews-page-in-react-typescript-and-reactstrap/



   // https://github.com/jmsv23/react-hooks-talk/tree/f811441e7ea3e79319cd20b43474c4995d835bb7/src/components/stateless/RatingStar

   // https://github.com/amaltapalov/treehouse-react-search-form/blob/8c72cd1085b1ff542a7d7782f7de61c6f3a9acf7/src/components/SearchForm.js

   // https://github.com/jsnidar/lovely-meal-tracker/tree/main/src

   // https://github.com/maxwellainatchi/react-movie-time/tree/5d311cb22726641c4cb7c2bb053d6d7d27efd907

   // https://github.com/jsnidar/lovely-meal-tracker/blob/main/src/components/AddMealForm.js

   // 


