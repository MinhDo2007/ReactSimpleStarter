import React, { Component } from 'react'
import VideoListItem from './video_list_item';
import Pagination from './pagination'

const VideoList = (props) => {
  const videoItems = props.videosOnPage.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )
  });
  return (
    <div>
      <Pagination videos={props.videos} onVideoPage={props.onVideoPage} />
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    </div>
  )
}

export default VideoList;