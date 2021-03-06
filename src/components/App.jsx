
class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeCurrentVideo = this.changeCurrentVideo.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      currentSearch: ''
    };
    this.searchYouTubeDebounced = _.debounce(this.props.searchYouTube, 500);
  }
  componentDidMount() {
    this.props.searchYouTube({max: 5, query: this.state.currentSearch, key: window.YOUTUBE_API_KEY}, (videoList) => { this.setState({videos: videoList}); });

  }

  //this.props.searchYouTube({max: 5, query: 'cats', key: window.YOUTUBE_API_KEY}, (data) =>{ return data; })
  changeCurrentVideo(selectedVideo) {
    this.setState({currentVideo: selectedVideo});
  }

  onSearchChange(input) {
    this.setState({currentSearch: input});
    this.searchYouTubeDebounced({max: 5, query: this.state.currentSearch, key: window.YOUTUBE_API_KEY}, (videoList) => { this.setState({videos: videoList}); });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search currentSearch={this.state.currentSearch} onSearchChange={this.onSearchChange}/>
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
