import React, { Component } from "react";
import Colorbox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import PaletteStyles from "./styles/PaletteStyles";
import { withStyles } from "@material-ui/core/styles";
class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, id, paletteName } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((c) => (
      <Colorbox
        background={c[format]}
        name={c.name}
        key={c.id}
        moreUrl={`/palette/${id}/${c.id}`}
        showingFullPalette={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          showingSlider={true}
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} />
      </div>
    );
  }
}

export default withStyles(PaletteStyles)(Palette);
