import React, { Component } from "react";
import Videos from "./Youtube.json";

export default class VideoBox extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  handleClickVideo = (video) => {
    this.setState({ value: video });
  };

  closeVideo = () => {
    this.setState({ value: null });
  };

  render() {
    return (
      <div>
        <div
          style={{
            marginTop: "168px",
            marginLeft: "250px",
            width: "1269px",
            padding: "30px",
          }}
        >
          {this.state.value ? (
            <div
              style={{
                position: "relative",
                width: "100%",
                textAlign: "center",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <button
                onClick={this.closeVideo}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                X
              </button>
              <h3>{this.state.value.title}</h3>
              <iframe
                width="100%"
                height="500px"
                src={this.state.value.url.replace("watch?v=", "embed/")}
                title={this.state.value.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
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
                  <button
                    to={video.url}
                    style={{
                      display: "block",
                      marginTop: "10px",
                      color: "blue",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                    onClick={() => this.handleClickVideo(video)}
                  >
                    Watch Video
                  </button>
                </div>
              ))}
            </div>
          )}
          <div
            style={{
              backgroundColor: "yellow",
              marginTop: "20px",
              width: "auto",
            }}
          ></div>
        </div>
      </div>
    );
  }
}
