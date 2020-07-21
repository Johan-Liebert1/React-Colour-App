import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import Palette from "./Palette"
import PaletteList from "./PaletteList"
import SingleColorPalette from "./SingleColorPalette"

//HELPERS
import seedColors from "./seedColor"
import {generatePalette} from "./colorHelpers"
import NewPaletteForm from './NewPaletteForm';



class App extends Component {
    constructor(props){
        const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
        super(props)
        this.state ={
            palettes: savedPalettes || seedColors
        }
        this.savePalette = this.savePalette.bind(this)
        this.findPalette = this.findPalette.bind(this)
        this.removePalette = this.removePalette.bind(this)
    }

    savePalette(newPalette) {
        this.setState({palettes : [...this.state.palettes, newPalette]}, this.syncLocalStorage)
    } 

    findPalette(id) {
        return this.state.palettes.find(palette => palette.id === id)
    }

    removePalette(id){
        this.setState(
            st => (
                {palettes: st.palettes.filter(palette => palette.id !== id)}
            ),
            this.syncLocalStorage 
        )
    }

    syncLocalStorage() {
        //save palettes to local storage
        window.localStorage.setItem(
          "palettes",
          JSON.stringify(this.state.palettes)
        );
    }

    render() {
        return (
                <Switch>
                    <Route exact path="/" render={(routeProps) => 
                        <PaletteList 
                            palettes={this.state.palettes} 
                            deletePalette={this.removePalette} 
                            {...routeProps}/> 
                        }/>
                    <Route 
                        exact  
                        path = "/palette/new"
                        render = {(routeProps) => 
                            <NewPaletteForm  
                                savePalette={this.savePalette} 
                                palettes={this.state.palettes}
                                {...routeProps}
                            />}
                    />
                    <Route 
                        exact 
                        path="/palette/:id" 
                        render={(routeProps) => 
                            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                        }
                    />
                    <Route 
                        exact 
                        path="/palette/:paletteId/:colorId" 
                        render={routeProps => 
                            <SingleColorPalette
                                colorId={routeProps.match.params.colorId}
                                palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                            />
                        }
                    />

                </Switch>

                // <div className="App">
                //     <Palette palette={generatePalette(seedColors[4])}/>
                // </div>
        );
    }
}

export default App;
