// import classes from './Modal.module.css';

// import ReactDOM from 'react-dom';
// import React, { Fragment } from 'react';




// const Backdrop = props => {
//     return <div className={classes.backdrop}></div>
// }

// const ModalOverlay = props => {
//     return( <div className={classes.modal}>
//         <div className={classes.content}>{props.children}</div>
//         <button>HIDE MODAL</button>
//     </div>
//     );
// }


// const portalElement = document.getElementById('overlays');

// const Modal = ({visible, children, props}) => {

    
   
// const setHideModal = () => {
//     setModalVisible(false);
// }



    

//     if(!visible){
//         return null;
//     }else{
//         return (
//             <Fragment>
//                 <button onClick={setHideModal} >aaa</button>
//                 {ReactDOM.createPortal(<Backdrop onClick={setHideModal} />,portalElement)}
//                 {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>,portalElement)}
//             </Fragment>
//         )
//     }
  
// }

// export default Modal;


import classes from './Modal.module.css';

import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';


const portalElement = document.getElementById('overlays');

const Modal = ({visible, children, props}) => {
    
    const setHideModal = (props) => {
        let close = false;
        props.setHideModal(close);
    }

    if(!visible){
        return null;
    }else{
        return (
            <Fragment>
                {ReactDOM.createPortal(<div onClick={setHideModal} className={classes.modal}>{children}</div>,portalElement)}
            </Fragment>
        )
    }
  
}

export default Modal;
