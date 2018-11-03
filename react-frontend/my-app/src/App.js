import React, { Component } from 'react';
import './App.css';
import Input from './components/input';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App au-body">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={40}
        >
          <Input></Input>
        </Grid>      </div>
    );
  }
}

export default App;
