import React from 'react';
import List from '@material-ui/core/list';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    list: {
        width: '500px',
        height: '30vh',
        marginTop: '10px',
        marginLeft: 'auto',
        backgroundColor: 'white'
    },
    div: {

    }
})

function ListComponent(props) {
    const classes = useStyles();
    return (
        <div>
            <List className={classes.list}>
                <div>
                    <h1>Mina föreningar</h1>
                    <p>Du kan stödja upp till 3 föreningar samtidigt. Poängen fördelas jämt över föreningarna.</p>
                </div>
                {
                    props.newData.slice(0, 3).map((element) => (
                        <ListItem>
                            <ListItemText 
                                primary={element.longname} 
                                secondary={`${element.subcategory} + ${element.location['city']}`}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );
    
}

export default ListComponent