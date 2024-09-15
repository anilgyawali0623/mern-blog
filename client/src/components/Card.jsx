import React from "react";
import "./Card.css";
import Button from "./Button";
import { format } from "date-fns";
function Card({ description, urlToImage, author, date }) {
  // Provide default values to avoid null/undefined errors
  const defaultDescription = "No description available";
  const defaultImage = "default-image-url.jpg"; // Use a valid default image URL
  const defaultAuthor = "Unknown author";

  // Truncate description and handle undefined/null values
  const truncatedDescription =
    (description?.length > 70
      ? description.slice(0, 100)
      : description?.slice(0, 60)) || defaultDescription;
  const formattedDate = format(new Date(date), "yyyy/M/d");
  return (
    <div className="card display">
      <div className="card-image">
        <img src={urlToImage || defaultImage} alt="Article" />
      </div>
      <div className="card-info">
        <div className="info-content">
          <p>
            {truncatedDescription}....
            <span style={{ color: "brown" }}>read more</span>
          </p>
        </div>
        <div
          className="inner-info display"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "14px",
          }}
        >
          <span>by {author || defaultAuthor}</span>
          <span>{formattedDate}</span> {/* Display current date */}
        </div>
      </div>
      <div className="card-button">
        <Button name="read more" fontSize="11px" background="pink" />
      </div>
    </div>
  );
}

export default Card;
