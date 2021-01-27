import React, {useEffect} from 'react';
import Modal from '@material-ui/core/Modal'

export default function PopUpModal(props) {
    let open = props.open

    useEffect(() => {
        open = props.open
    }, [props.open])

    return (
       <Modal
        open={props.open}
       >
           <h1>Hej</h1>
       </Modal>
    );
}