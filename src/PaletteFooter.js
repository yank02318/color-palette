import React from "react";
import FooterStyles from "./styles/FooterStyles";
import { withStyles } from "@material-ui/core/styles";

function PaletteFooter(props) {
  const { paletteName, classes } = props;
  return <footer className={classes.Footer}>{paletteName}</footer>;
}
export default withStyles(FooterStyles)(PaletteFooter);
