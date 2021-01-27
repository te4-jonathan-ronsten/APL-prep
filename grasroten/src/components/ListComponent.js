import React, { useEffect, useState} from 'react';
import List from '@material-ui/core/list';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PopUpModal from './Modal'

const useStyles = makeStyles({
    list: {
        width: 'auto',
        height: 'fit-content',
        margin: '10px',
        backgroundColor: 'white',
        padding: '0.5rem 0rem 0rem 0rem'
    },
    div: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 'auto',
        heigth: '50vh',
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        backgroundColor: 'white',
        width: 'auto',
        heigth: 'auto',
        margin: 'auto 1rem 0.5rem 1rem',
        borderRadius: '1px'
    }, 
    secondDiv: {
        borderBottom: '1px black solid',
        height: 'fit-content',
        paddingBottom: '0.5rem'
    },
    listItem: {
        backgroundColor: 'white',
        padding: '0rem 0.5rem',
        margin: '0rem',
        width: 'auto',
        height: 'fit-content',
        border: '1px grey solid',
        '&:nth-of-type(n+2)': {borderTop: '0px'}
    },
    listItemText: {
        borderBottom: '1px grey solid',
        padding: '0rem 0rem 0.5rem 1rem',
        margin: '0rem',
        height: '2.5rem',
        fontSize: '0.5rem'
    }
})

function ListComponent(props) {
    const classes = useStyles();
    let showModal = false

    const handleClick = (e) => {
        console.log('ehj')
        showModal=true
        console.log(showModal)
    }
    
    const deleteClick = (id) => {
        setData((singleData) => singleData.filter((newData) => newData.id !== id));
    };
    
    const viewMore = (element) => {
        console.log(element)
    }
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setData(() => {
           return props.newData.slice(0, 3)
        })
    }, [props.newData])

    useEffect(() => {
        console.log('hej')
    }, [showModal])

    return (
        <div className={classes.div}>
            <List className={classes.list}>
                <ListItemText
                    className={classes.listItemText}
                    primary="Mina föreningar"
                    secondary="Du kan stödja upp till 3 föreningar samtidigt. Poängen fördelas jämt över föreningarna."
                />
                <div style={{backgroundColor: 'lightgrey', padding: '10px'}}>
                    {
                        data.map((element) => (
                            <ListItem className={classes.listItem}>
                                <ListItemText
                                    key={element}
                                    primary={element.longname} 
                                    secondary={`${element.subcategory},  ${element.location['city']}`}
                                />
                                <DeleteForeverIcon fontSize={'large'}style={{marginRight: '30px'}} onClick={() => deleteClick(element.id)}/>
                                <ExpandMoreSharpIcon fontSize={'large'} onClick={() => viewMore(element)}/>
                            </ListItem>
                        ))
                    }
                </div>
            </List>
            <Button className={classes.button} onClick={handleClick}>
                Lägg till förening
            </Button>
            {
                (showModal === true) && <PopUpModal open={showModal}/>
            }
        </div>
    );
    
}

export default ListComponent