import React, { Component } from "react";
import { Link } from "react-router-dom";
import Colorbox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import PaletteStyles from "./styles/PaletteStyles";
import { withStyles } from "@material-ui/core/styles";

class Singlecolorpalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this._shades = this.gatherShades(this.props.palette, this.props.cId);
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorToFilter) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilter)
      );
    }
    //return all shades of given color
    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { format } = this.state;
    const { paletteName, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map((c) => (
      <Colorbox
        key={c.name}
        name={c.name}
        background={c[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar changeFormat={this.changeFormat} showingSlider={false} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`} href="/">
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} />
      </div>
    );
  }
}

export default withStyles(PaletteStyles)(Singlecolorpalette);
