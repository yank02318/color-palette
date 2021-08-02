import React from "react";
import MiniPaletteStyles from "./styles/MiniPaletteStyles";
import { withStyles } from "@material-ui/core/styles";

function MiniPalette(props) {
  const { classes, paletteName, colors, handleClick } = props;
  const miniBoxes = colors.map((c) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: c.color }}
      key={c.name}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniBoxes}</div>
      <h5 className={classes.title}>{paletteName}</h5>
    </div>
  );
}

export default withStyles(MiniPaletteStyles)(MiniPalette);
