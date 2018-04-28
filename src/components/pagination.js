import React, { Component } from 'react'

class Pagination extends Component {
  constructor(props){
    super(props)

    this.state = {
      listPerPage: 5
    }
  }

  onChangePage(number){
    let indexOfLastVideos = number * this.state.listPerPage;
    let indexOfFirstVideos = indexOfLastVideos - this.state.listPerPage;
    let videos =  this.props.videos.slice(indexOfFirstVideos, indexOfLastVideos)
    this.props.onVideoPage(videos)
  }

  render(){
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.videos.length/5); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={ () => this.onChangePage(number)}
        >
          {number}
        </li>
      );
    });

    return (
      <ul className="page-numbers">
        {renderPageNumbers}
      </ul>
    )
  }
}

export default Pagination