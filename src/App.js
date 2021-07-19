import React, { Component } from "react";
import Palette from "./Palette";
import colors from "./seedColors";
import { generatePalette } from "./colorHelpers";

export default class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(colors[4])} />
      </div>
    );
  }
}
