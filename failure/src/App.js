import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <AppBar style={{fontFamily:  'Kaushan Script',backgroundColor: '#EC407A', padding: 10}} showMenuIconButton={false} titleStyle ={{color: '#ffffff',fontSize: 40}}title="Short Stories" />
    </MuiThemeProvider>
    );
  }
}

export default App;
