import React from 'react';
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import Palette from "./Palette"
import PaletteList from "./PaletteList"

//HELPERS
import seedColors from "./seedColor"
import {generatePalette} from "./colorHelpers"


function findPalette(id) {
    return seedColors.find(palette => palette.id === id)
}


function App() {
    
    return (
            <Switch>
                <Route exact path="/" render={() => <PaletteList palettes={seedColors}/> }/>
                <Route 
                    exact 
                    path="/palette/:id" 
                    render={(routeProps) => 
                        <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
                    }
                />
            </Switch>

            // <div className="App">
            //     <Palette palette={generatePalette(seedColors[4])}/>
            // </div>
    );
}

export default App;
