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
        modalOpen,
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
            <span>{TITLE}</span>
            <button onClick={modalClose}>닫기</button>
        </ReactModal>
    );
};

export default InfoModal;