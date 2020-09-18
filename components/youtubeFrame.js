import React, { Component } from "react";
import YouTube from "react-youtube";

class YoutubeFrame extends Component {
  render() {
    const opts = {
      //   height: this.props.height, //"390",
      //   width: this.props.width, //"640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <YouTube
        videoId={this.props.videoId}
        className="w-full sm:h-68 lg:h-70"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubeFrame;
