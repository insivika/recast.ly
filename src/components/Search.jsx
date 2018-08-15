var Search = (props) => {
  console.log(props);
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={props.currentSearch} onChange={() => props.onSearchChange('poop')}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

//onClick={() => props.changeCurrentVideo(props.video)}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
