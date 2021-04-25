import { Card, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor:'#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        margin:theme.spacing(2)
    },
    pageIcon:{
        color:'#3c44b1',
        padding:theme.spacing(2),
        // display:"inline-block"
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '&.MuiTypography-subtitle2':{
            opacity:"0.6"
        }
    }
}))

function PageHeader(props) {

    const classes = useStyles();

    const {icon, subtitle, title } = props
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div>
                    <Typography className={classes.pageTitle} variant='h6' component='div'>
                        {title}
                    </Typography>
                    <Typography className={classes.pageTitle} variant='subtitle2' component='div'>
                        {subtitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader
