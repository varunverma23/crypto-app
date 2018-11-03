import React, { Component } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import en from 'react-json-editor-ajrm/locale/en';
import sampleObject from '../components/sampleObject';
import Button from '@material-ui/core/Button';
import config from '../config'
import TableComponent from './resultTable';
import Grid from '@material-ui/core/Grid';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonInput: sampleObject,
            jsonValid: true,
            results: []
        };
    }

    handleEvent = e => {
        let jsonValid = true;
        if (e.jsObject) {
            const rel = e.jsObject;
            this.setState({
                jsonInput: rel,
                jsonValid: jsonValid
            });
        } else {
           
            if (e.error) {
                jsonValid = false;
            }
            this.setState({
                jsonValid: jsonValid
            });
        }
    }

    handleSubmit = e => {
        var results = [];
        fetch(config.API.SAVE_API_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.jsonInput.sampleObject)
        }).then((response) => {
            console.log("Success");
            return response.json();
        }).catch((error) => {
            console.log('error --->' + error);
        }).then((data) => {
            if (data) {
                results = data.body;
                this.setState({
                    results: results
                });
            }

        });

        var Scroll = require('react-scroll');   
        var scroll = Scroll.animateScroll;
 
        scroll.scrollToBottom();
    }


    render() {
        return (
            <div>
                <p>Welcome to the Crypto App.</p>
                <p>Please enter the input in below json format and click on Submit.</p>
               

                <Grid item  >
                        <div className="content" id="content">
                            <JSONInput
                                id='a_unique_id'
                                locale={en}
                                placeholder={sampleObject}
                                height='450px'
                                width='550px'
                                onChange={this.handleEvent}
                            //   theme='light_mitsuketa_tribute'

                            />
                        </div>

                        <div className="col-md-offset-1 col-md-12 col-md-push-4 content buttonCenter" id="content">
                            <Button variant="contained" size="medium" onClick={this.handleSubmit} color="primary" disabled={!this.state.jsonValid}>
                                Submit
                    </Button>
                        </div>
                </Grid>
                <Grid container spacing={40}>
                    {this.state.results && this.state.results.map((crypto, index) => (
                        <Grid item key={index}>
                            <TableComponent currencyData={crypto}></TableComponent>
                        </Grid>
                    ))}
                    {!this.state.results &&  <Grid item ><p>The json input is not valid. Please follow the Sample json given</p> </Grid>}
                </Grid>
            </div>
        )
    }
}



export default Input;
