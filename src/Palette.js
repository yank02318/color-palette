import React, { Component } from "react";
import Colorbox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 500,
    };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((c) => (
      <Colorbox background={c.hex} name={c.name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
