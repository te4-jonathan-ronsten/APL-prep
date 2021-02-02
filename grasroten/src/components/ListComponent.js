import React, { useEffect, useState} from 'react';
import List from '@material-ui/core/list';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PopUpModal from './Modal';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles({
    list: {
        width: 'auto',
        height: 'auto',
        margin: '10px',
        backgroundColor: 'white',
        padding: '0.3rem 0rem 0rem 0rem'
    },
    div: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 'auto',
        heigth: 'auto',
        maxHeight: '60vh',
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: 'inherit',
        heigth: 'auto',
        margin: 'auto 0rem 0.5rem 0rem',
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
        height: 'auto',
        border: '1px grey solid',
        '&:nth-of-type(n+2)': {borderTop: '0px'},
        fontSize: '2px'
    },
    listItemText: {
        borderBottom: '1px grey solid',
        padding: '0rem 0rem 2rem 1rem',
        margin: '0rem',
        height: '2.5rem'
    },
    collapse: {
        backgroundColor: 'lightgrey'
    },
    collapsedList: {
        height: '2rem',
        paddingLeft: '0.5rem',
        marginBottom: '0.5rem'
    }
})

function ListComponent(props) {
    const classes = useStyles();
    
    const deleteClick = (id) => {
        setData((singleData) => singleData.filter((newData) => newData.id !== id));
    };
    
    const [showCollapse, setShowCollapse] = useState([])
    const viewMore = (element) => {
        if(showCollapse.length > 1){  //Check så man ej kan expandera fler än 2 listItems i taget, då listan blir för stor.
            setShowCollapse([element.longname])
        }else {
            setShowCollapse((name)=> {
                return [...name, element.longname]
            })
        }
    }
    
    const viewLess = (name) => {
        setShowCollapse((singleItem) => singleItem.filter((newItem) => newItem !== name));
    }
    
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(() => {
            return props.newData.slice(0, 3)
        })
    }, [props.newData])
    
    const addClub = (newClub) => {
        setData((club)=> {
            return [...club, newClub]
        })      
    }
    
    const [showModal, setShowModal] = useState(false)
    const changeModal = () => {
        setShowModal(!showModal);
    }

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
                            <div>
                                <ListItem className={classes.listItem}>
                                    <ListItemText
                                        key={element}
                                        primary={element.longname} 
                                        secondary={`${element.subcategory},  ${element.location['city']}`}
                                    />
                                    <DeleteForeverIcon style={{marginRight: '0.5rem'}} onClick={() => deleteClick(element.id)}/>
                                    {showCollapse.includes(element.longname) ? <ExpandLessIcon style={{backgroundColor: 'lightgrey'}} onClick={() => viewLess(element.longname)}/> : <ExpandMoreSharpIcon style={{backgroundColor: 'lightgrey'}} onClick={() => viewMore(element)}/>}
                                </ListItem>
                                <Collapse className={classes.collapse} in={showCollapse.includes(element.longname)}>
                                <List>
                                    <ListItem className={classes.collapsedList}>
                                        <ListItemText 
                                            key={element.supporters}
                                            primary="Antal supportrar:" 
                                            secondary={element.supporters}
                                        />
                                        <ListItemText
                                            key={element.points}
                                            primary="Antal Poäng:"
                                            secondary={element.points}
                                        />
                                    </ListItem>
                                </List>
                            </Collapse> 
                            </div>
                        ))
                    }
                </div>
            </List>
            <Button className={classes.button} onClick={changeModal}>
                Lägg till förening
            </Button>
            {
                (showModal === true) && <PopUpModal open={showModal} addClub={addClub} changeModal={changeModal}/>
            }
        </div>
    );
    
}

export default ListComponent