import React from 'react'
import {AppBar, Badge, Grid, IconButton, InputBase, Toolbar} from '@material-ui/core'
import {NotificationsNone , ChatBubbleOutline ,PowerSettingsNew} from '@material-ui/icons'
function Header() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Grid container>
                        <Grid item>
                            <InputBase></InputBase>
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item>
                            <IconButton>
                                <Badge badgeContent={4} color='secondary'>
                                    <NotificationsNone/>
                                </Badge> 
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={6} color='primary'>
                                    <ChatBubbleOutline/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <PowerSettingsNew/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
