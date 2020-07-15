import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator"


export class PaletteMetaForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: true,
            newPaletteName: ""
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClickOpen = () => {
        this.setState({open: true});
      };
    
    handleClose = () => {
        this.setState({open: false});
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
        this.props.palettes.every(
            ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
        )
    )
    }
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {open, newPaletteName} = this.state
        const {palettes, hideForm} = this.props
        return (
            <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title" onClose={hideForm}>
                <DialogTitle id="form-dialog-title">Create a New Palette</DialogTitle>
                <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a unique Palette Name
                        </DialogContentText>
                        
                            <TextValidator 
                                value={this.state.newPaletteName} 
                                label="Palette Name"
                                onChange={this.handleChange} 
                                name="newPaletteName"  
                                fullWidth={true}
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={['This field is required', 'Palette Name already Used']} 
                            />
                        
                        
                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm} color="primary">
                            Cancel
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            type='submit'
                        >
                                Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
                
            </Dialog>
            
        )
    }
}

export default PaletteMetaForm
