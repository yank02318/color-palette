import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import Singlecolorpalette from "./SingleColorPalette";
import Newpaletteform from "./NewPaletteForm";
import colors from "./seedColors";
import { generatePalette } from "./colorHelpers";

export default class App extends Component {
  findPalette(id) {
    return colors.find((palette) => {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/palette/new" render={() => <Newpaletteform />} />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={colors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <Singlecolorpalette
              cId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(colors[4])} />
      // </div>
    );
  }
}
