import React from 'react'
import {AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar} from '@material-ui/core'
import {NotificationsNone , ChatBubbleOutline ,PowerSettingsNew , Search} from '@material-ui/icons'


const useStyles = makeStyles({
    root:{
        backgroundColor:"#fff"
    },
    searchInput:{
        opacity:'0.5',
        padding:"0 8px",
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight:'8px'
        }
    },
})
function Header() {
    const classes=useStyles();
    return (
            <AppBar position='static' className={classes.root}>
                <Toolbar>
                    <Grid container alignItems='center'>
                        <Grid item>
                            <InputBase
                                className={classes.searchInput}
                                placeholder='Search topics'
                                startAdornment={<Search fontSize='small'/>}
                            />    
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item>
                            <IconButton>
                                <Badge badgeContent={4} color='secondary'>
                                    <NotificationsNone fontSize='small'/>
                                </Badge> 
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={6} color='primary'>
                                    <ChatBubbleOutline fontSize='small'/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <PowerSettingsNew fontSize='small'/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
    )
}

export default Header
