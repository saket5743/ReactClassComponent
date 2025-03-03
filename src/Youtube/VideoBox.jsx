import React, { Component } from "react";
import Videos from "./Youtube.json";

export default class VideoBox extends Component {
  constructor() {
    super();
    this.state = {
      value: [],
    };
  }

  render() {
    return (
      <div
        style={{
          marginTop: "168px",
          marginLeft: "250px",
          width: "1269px",
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          {Videos.map((video) => (
            <div
              key={video.id}
              style={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                width: "calc(33.33% - 20px)",
                backgroundColor: "white",
              }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {video.title}
              </h3>
              <p style={{ color: "gray", fontSize: "14px" }}>
                {video.description}
              </p>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  marginTop: "10px",
                  color: "blue",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Watch Video
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
