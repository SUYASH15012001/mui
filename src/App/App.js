import React from 'react'
import './App.css';
import SideMenu from '../Components/SideMenu'
import Header from '../Components/Header'
import Employees from '../pages/Employees/Employees';
import {makeStyles, CssBaseline, createMuiTheme, ThemeProvider} from '@material-ui/core'

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#333966",
      light:"#3c44b126"
    },
    secondary:{
      main:"#f83245",
      light:"#f8324526"
    },
    background:{
      default:'#f4f5fd'
    }
  },
  shape:{
    borderRadius:'12px'
  },
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
