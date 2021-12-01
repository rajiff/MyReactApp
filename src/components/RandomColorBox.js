import React from "react";

export default class RandomColorBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorName: "blue"
    }
  }

  invertColor = (color) => {
      return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6);
  }

  handleColorChange = (e) => {
    this.setState({colorName: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" 
        style={{ padding: "12px", fontSize: "16px" }}
        value={this.state.colorName}
        onChange={this.handleColorChange}></input>
        <button type="button" 
        style={{ padding: "12px", color: this.invertColor(this.state.colorName), background: this.state.colorName, borderRadius: "4px", fontSize: "16px", fontWeight: 600 }}>Change</button>
      </div>
    )
  }
}