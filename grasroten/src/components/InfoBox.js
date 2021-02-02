import React from 'react';
import {makeStyles} from '@material-ui/styles'
import Divider  from '@material-ui/core/Divider';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    box1: {
        gridArea: 'box1',
        backgroundColor: 'white',
        height: 'fit-content'
    },
    box2: {
        gridArea: 'box2',
        backgroundColor: 'white',
        height: 'fit-content'
    },
    box3: {
        gridArea: 'box3',
        backgroundColor: 'white',
        height: 'fit-content'
    },
    text: {
        margin: '1rem'
    },
    boldText: {
        fontWeight: 'bold',
        margin: '1rem',
        alignItems: 'center',
        alignSelf: 'center',
        display: 'flex'
    },
    icon: {
        marginLeft: 'auto'
    }
})

export default function InfoBox() {
    const classes = useStyles();
    return (
        <div className='infoBox'>
            <div className={classes.box1}>
                <div className={classes.text}>SÅ HÄR ANSLUTER NI ER</div>
                <h2 className={classes.text}>Anslut förening</h2>
                <ol>
                    <li>Gå in på svenskaspel.se/grasroten/partner</li>
                    <li>Logga in med dina inloggningsuppgifter: Användarnamn & lösenord</li>
                    <li>Läs och godkänn villkoren</li>
                </ol>
                <Divider />
                <div className={classes.boldText}>Logga in föreing /skapa konto här <KeyboardArrowRightIcon fontSize={'large'} className={classes.icon}/></div>
            </div>
            <div className={classes.box2}>
                <div className={classes.text}>FÖRENINGAR</div>
                <h2 className={classes.text}>Så här gick det!</h2>
                <div className={classes.text}>Finns de föreningar du valt att stödja med på topp tio listan? Eller varför inte kolla in hur mycket pengar som fördelats per län</div>
                <Divider />
                <div className={classes.boldText}>Se hela föreningslistan från A-Ö (Pdf) <KeyboardArrowRightIcon fontSize={'large'} className={classes.icon}/></div>
                <Divider />
                <div className={classes.boldText}>Se hur pengarna fördelades <KeyboardArrowRightIcon fontSize={'large'} className={classes.icon}/></div>
            </div>
            <div className={classes.box3}>
                <h2 className={classes.text}>Om Gräsroten</h2>
                <div className={classes.text}>
                    Varje år satsar Svenska Spel 50 miljoner kronor på gräsrötterna i svensk idrott.
                    Förra året hjälpte vi och våra kunder mer än 6300 föreningar i 69 olika idrotter 
                    run om i landet att utvecka sin verksamhet och till exempel bygga omklädningsrum, 
                    åka på träningsläger eller köpa matchtröjor.
                </div>
                <Divider />
                <div className={classes.boldText}>Läs mer om Gräsroten <KeyboardArrowRightIcon fontSize={'large'} className={classes.icon}/></div>
            </div>
        </div>
    )
}