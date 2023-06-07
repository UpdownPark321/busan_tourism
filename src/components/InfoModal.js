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
            marginRight: '-30%',
            transform: 'translate(-50%, -50%)',
            padding: "40px",
            color: "black",
            backgroundColor: "white",
            borderRadius: "20px",

        },
        
    };
    return (
        <ReactModal isOpen={showModal} style={customStyles}>
                <h1 className='infoTitle'>{TITLE}</h1>
                <div className='infoText'>{INTRODUCE}</div>
                <button className='infoBtn' onClick={modalClose}>닫기</button>
        </ReactModal>
    );
};

export default InfoModal;