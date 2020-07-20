import React from 'react';
import './App.css';
import SideMenu from "../components/SideMenu";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider} from '@material-ui/core';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
//import classes from '*.module.css';
import Productos from "../pages/Productos/Productos";


const theme = createMuiTheme({
palette:{
  primary:{
    main:"#FF0000",
    light:'3c44b126'
  },
  secondary:{
    main:"#f83245",
    light:'#f8324526'
  },
  background:{
    default:"#f4f5fd"
  },
},
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)' //sombreado en appbar
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

const useStyles = makeStyles({

  appMain:{
    paddingLeft:'320px',
    width:'100%'
  
  }
})
    
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}> 
    <SideMenu />
    <div className={classes.appMain}>
      <Header/>


      
      <Productos/>
    </div>
    <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
