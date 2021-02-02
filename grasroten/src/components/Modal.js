import React, {useEffect} from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import {uid} from 'uid';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
    modalBody: {
        width: '20rem',
        height: '30rem',
        backgroundColor: 'white',
        margin: 'auto'
    },
    form: {
        backgroundColor: 'white',
        padding: '1rem 0px 2rem 1rem',
    },
    button: {
        border: '1px black solid',
        float: 'right',
        margin: '10px 10px'
    },
    icon: {
        float: 'right',
        marginRight: '10px'
    }
})

export default function PopUpModal(props) {
    const classes = useStyles()

    const handleClick = () => {
        const newClub = {
            'location': {
                'adress': document.getElementById('adress').value,
                'city': document.getElementById('ort').value,
                'zipcode': document.getElementById('postnummer').value
            },
            'longname': document.getElementById('name').value,
            'supporters': 100,
            'id': uid(),
            'points': Math.floor((Math.random() * 100000)),
            'subcategory': document.getElementById('sport').value,
            'homepage': document.getElementById('url').value
        }
        props.addClub(newClub);
        props.changeModal();
    }

    const clearModal = () => {
        props.changeModal();
    }

    return (
       <Modal
        open={props.open}
        className={classes.modalBody}
       >
           <form className={classes.form}>
               <Button onClick={clearModal} className={classes.icon}>
                    <ClearIcon fontSize={'large'}/>
               </Button>
                <h2>
                    Vänligen fyll i din förenings information.
                </h2>
                <TextField id="name" label="Föreningsnamn"/>
                <TextField id="sport" label="Sport"/>
                <TextField id="postnummer" label="Postnummer"/>
                <TextField id="ort" label="Ort"/>
                <TextField id="adress" label="Adress"/>
                <TextField id="url" label="Url till hemsida"/>
                <Button onClick={handleClick} className={classes.button}>
                    Lägg till
                </Button>
           </form>
       </Modal>
    );
}