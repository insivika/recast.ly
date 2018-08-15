
class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeCurrentVideo = this.changeCurrentVideo.bind(this);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]

    };
  }

  changeCurrentVideo(selectedVideo) {
    this.setState({currentVideo: selectedVideo});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList changeCurrentVideo={this.changeCurrentVideo} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
