import React from 'react'
import './App.css';
import SideMenu from '../Components/SideMenu'
import Header from '../Components/Header'
import PageHeader from '../Components/PageHeader'; 
import {makeStyles, CssBaseline, createMuiTheme, ThemeProvider} from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group';

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
        <PageHeader 
          title='Page Header'
          subtitle='Page Description'
          icon={<GroupIcon fontSize='large'/>}
        />
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
