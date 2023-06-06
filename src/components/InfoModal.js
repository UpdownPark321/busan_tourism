import React from 'react';
import ReactModal from 'react-modal';

const InfoModal = (props) => {
    const {
        ADDR,
        TELNUM,
        HOMEPAGEURL,
        INTRODUCE,
        MODALIMG,
        TITLE, 
        USAGEAMOUNT, 
        TRAFFICINFO, 
        USAGETIME,
        showModal,
        modalClose 
    } = props

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <ReactModal isOpen={showModal} style={customStyles}>
            <h1>{TITLE}</h1>
            <span>{INTRODUCE}</span>
            <button onClick={modalClose}>닫기</button>
        </ReactModal>
    );
};

export default InfoModal;