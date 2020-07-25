import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css'

//COMPONENTS
import Palette from "./Palette"
import PaletteList from "./PaletteList"
import SingleColorPalette from "./SingleColorPalette"

//HELPERS
import seedColors from "./seedColor"
import {generatePalette} from "./colorHelpers"
import NewPaletteForm from './NewPaletteForm';

import { CSSTransition, TransitionGroup } from "react-transition-group";

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
            <Route render={({location}) => //location being grabbed from routeProps 
                <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={500}>
                <Switch location={location}>
                    <Route exact path="/" render={(routeProps) => 
                        <div className="page">
                            <PaletteList 
                                palettes={this.state.palettes} 
                                deletePalette={this.removePalette} 
                                {...routeProps}/> 
                            
                        </div>
                        }/>
                    <Route 
                        exact  
                        path = "/palette/new"
                        render = {(routeProps) => 
                            <div className="page">
                                <NewPaletteForm  
                                    savePalette={this.savePalette} 
                                    palettes={this.state.palettes}
                                    {...routeProps}
                                />
                                
                            </div>
                        }/>
                    <Route 
                        exact 
                        path="/palette/:id" 
                        render={(routeProps) => 
                            <div className="page">

                                <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                            </div>
                        }
                    />
                    <Route 
                        exact 
                        path="/palette/:paletteId/:colorId" 
                        render={routeProps => 
                            <div className="page">

                            <SingleColorPalette
                                colorId={routeProps.match.params.colorId}
                                palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                            />
                            </div>
                        }
                    />

                </Switch>
                </CSSTransition>
                </TransitionGroup>
            }/>
                // <div className="App">
                //     <Palette palette={generatePalette(seedColors[4])}/>
                // </div>
        );
    }
}

export default App;
