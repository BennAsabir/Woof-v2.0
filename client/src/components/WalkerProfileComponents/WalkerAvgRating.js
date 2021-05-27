import React from 'react';
import StarRatings from 'react-star-ratings';
import { RatingIconSVG } from '../../utils/helpers'




function WalkerAvgRating({average_rating}) {
    // const starRating = {parseFloat(average_rating).toFixed(1)};
    return (
        <div className="walker-contact-container">
          <div className="walker-header"><h3>My Rating <span className="light">({average_rating.toFixed(1)})</span></h3></div>
          <div className="average-rating">
          <StarRatings
            rating= {average_rating}
            starDimension="64px"
            starSpacing="6px"
            starRatedColor="#000000"
            starEmptyColor="#DFD8D8"
            svgIconViewBox={RatingIconSVG.box}
            svgIconPath={RatingIconSVG.coords}
          />
          </div>
          <div className="average-rating-mobile">
          <StarRatings
            rating= {average_rating}
            starDimension="36px"
            starSpacing="3px"
            starRatedColor="#000000"
            starEmptyColor="#DFD8D8"
            svgIconViewBox={RatingIconSVG.box}
            svgIconPath={RatingIconSVG.coords}
          />
          </div>
        </div>
    )
}

export default WalkerAvgRating;
