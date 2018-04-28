import React, {Component} from 'react';

class ColorPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      colors: ['white', 'red', 'blue', 'green', 'yellow']
    };
  }

  changeColor = (color) => {
    this.props.onChangeColor(color)
  }

  showColor(color){
    return {
      backgroundColor: color,
      margin: 10,
      borderRadius: 25,
      border: '2px solid #73AD21',
    }
  }

  render(){
    const elementColor = this.state.colors.map((color, index) => {
      return <button type="button" className="btn" style={this.showColor(color)} onClick={() => this.changeColor(color)} >{color}</button>
    })


    return(
      <div>
        {elementColor}
      </div>
    )
  }
}

export default ColorPage;