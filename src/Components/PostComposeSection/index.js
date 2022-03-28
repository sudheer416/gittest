import { Component } from "react";
import GifState from "../../Context/GifState";
import "./index.css";
import Search from "../../Components/Search.js";

class PostComposeSection extends Component {
  renderColorBoxes = () => {
    return (
      <div className="colorbox-section">
        <img
          className="box-img"
          src="https://www.linkpicture.com/q/box2.jpeg"
          alt="boxes"
        />
        <img
          className="box-img"
          src="https://www.linkpicture.com/q/box2.jpeg"
          alt="boxes"
        />
      </div>
    );
  };

  renderGifs = () => {};

  render() {
    return (
      <GifState.Consumer>
        {(value) => {
          let gifstate = value;
          const changeState = () => {
            <Search />;
            console.log("clicked");
            gifstate = !gifstate;
            console.log(gifstate);
          };

          return (
            <div>
              <div className="compose-section">
                <div className="input-section">
                  <img
                    className="profile-img"
                    src="https://alchinlong.com/wp-content/uploads/2015/09/sample-profile.png"
                    alt="profile"
                  />

                  <input
                    className="input-box"
                    type="input"
                    placeholder="Enter Something....."
                  />
                </div>
              </div>
              {this.renderColorBoxes()}
              {}
              <div className="container">
                <div className="button-up">
                  <button className="btn-option">
                    <i class="user plus icon"></i>Tag friends
                  </button>
                  <button className="btn-option">
                    <i class="map marker alternate icon"></i>Check In
                  </button>
                </div>
                <div className="button-up">
                  <button className="btn-option" onClick={changeState}>
                    <i class="icons8-gif"></i>
                    GIFS
                  </button>

                  <button className="btn-option" onClick={this.renderGifs}>
                    <i class="calendar alternate icon "></i>Tag Event
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </GifState.Consumer>
    );
  }
}

export default PostComposeSection;
