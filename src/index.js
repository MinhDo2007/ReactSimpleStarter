import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import ColorPage from './components/color_page'

const API_KEY = 'AIzaSyByQsM863h2sgewo5UqFRGJ1fK55c5r_zE'
// Create a new component. This component should produce
// some HTML


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
      videosOnPage: [],
      color: 'white'
    };

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term, maxResults: 50}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
        videosOnPage: videos.slice(0,5)
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    const appStyle = {
      'backgroundColor': this.state.color,
      'overflow': 'hidden'
    }

    return (
      <div style={appStyle}>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos}
          videosOnPage={this.state.videosOnPage}
          onVideoPage = {(videosOnPage) => this.setState({videosOnPage})}
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} />
        <ColorPage onChangeColor={(color) => this.setState({color})} />
      </div>
    )
  };
}


ReactDOM.render(<App />, document.getElementById('root'));
