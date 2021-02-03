import React from 'react';
import NavBar from './NavBar';
import ListComponentContainer from '../containers/ListComponentContainer';
import { makeStyles } from '@material-ui/styles';
import InfoBox from './InfoBox'

const useStyles = makeStyles({
    p: {
        width: '23rem',
        marginLeft: '10px'
    },
    bodyDiv: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    h2: {
        marginLeft: '10px'
    }
})

export default function Grasroten() { 
    const classes = useStyles();
    return (
        <div className='gridDiv'>
            <NavBar />
            <div className="mainDiv">
                <div className="text" style={{gridArea: 'a'}}>
                    <h2 className={classes.h2}>Hjälp oss stödja idrottens rötter</h2>
                    <p className={classes.p}>Inget kan blomma utan starka rötter. Därför sponsrar 
                        vi ungdomsidrotten i Sverige. Du kan hjälpa oss!
                    </p>
                    <p className={classes.p}>Gräsroten, för ungdomsidrotten i Sverige</p>
                </div>
                <ListComponentContainer style={{gridArea: 'b'}}/>
            </div>
            <InfoBox />
        </div>
    );  
}