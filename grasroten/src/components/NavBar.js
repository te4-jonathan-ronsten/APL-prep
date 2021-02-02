import React from 'react';
import svenskaSpelImg from '../img/grasroten.svg';
import Appbar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/styles';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles({
    header: {
        backgroundColor: 'red',
        width: '100%',
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: '15% 1fr 15%',
        gridArea: 'header'
    },
    img: {
        margin: 'auto',
        width: '8rem',
        height: '3rem',
        gridColumn: '2'
    },
    div: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        float: 'right',
        height: '100%',
        maxHeight: 'inherit',
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,auto)',
    },
    p: {
        float: 'left',
        fontWeight: 'bold',
        color: 'white',
        marginLeft: '1rem'
    },
    secondP: {
        marginRight: '1rem',
        float: 'right'
    }
})
export default function NavBar() {
    const classes = useStyles();

    const wallet = 367;

    return (
        <Appbar className={classes.header} >
            <img 
                className={classes.img}
                src={svenskaSpelImg}
                alt="Logo"
            />
            <div className={classes.div}>
                <p className={classes.p}>Christofer</p>
                <p style={{marginLeft: 'auto'}}className={classes.secondP}>
                    {wallet} kr
                </p>
                <Badge badgeContent={1} color='error'></Badge>
            </div>
        </Appbar>
    );
    
};