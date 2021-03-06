import React from 'react'
import './App.css';
import SideMenu from '../Components/SideMenu'
import Header from '../Components/Header'
import {makeStyles, CssBaseline} from '@material-ui/core'


const useStyles = makeStyles({
  appMain: {
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();
  return (<>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
      </div>
      <CssBaseline/>
    </>
  );
}

export default App;
