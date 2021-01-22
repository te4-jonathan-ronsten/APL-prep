import React from 'react';
import svenskaSpelImg from '../img/grasroten.svg';
import Appbar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    header: {
        backgroundColor: 'red',
        width: '100%',
        heigth: 'auto'
    },
    img: {
        margin: 'auto',
        marginLeft: '43%',
        width: '200px',
        height: '45px'
    }
})
export default function NavBar() {
    const classes = useStyles();
    return (
        <Appbar className={classes.header} >
            <toolbar>
                <img 
                    className={classes.img}
                    src={svenskaSpelImg}
                    alt="Logo"
                />
            </toolbar>
        </Appbar>
    );
    
};