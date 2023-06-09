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
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
            top: '50%',
            left: '50%',
            outline: 'none',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
            background: '#FBF8EF',
            width: '900px',
            height: '600px',
            maxWidth:'100%'
        },
    };
    return (
        <ReactModal isOpen={showModal} style={customStyles} onRequestClose={() => modalClose()}>
            <h1>{TITLE}</h1>
            <div style={{display:'inline-flex', width:'900px', maxWidth:'100%', justifyContent:'space-between'}}>
                <div>
                    <img src={MODALIMG} alt={TITLE} style={{width:'300px', height:'270px', marginRight:'30px'}}/>
                </div>
                <div style={{width: '600px', height:'320px'}}>
                    <p>주소 : {ADDR}</p>
                    <p>연락처 : {TELNUM}</p>
                    <p>홈페이지 주소 : <a href={HOMEPAGEURL?HOMEPAGEURL:null} className='modalHomepage'>{HOMEPAGEURL?HOMEPAGEURL:'홈페이지가 없습니다.'}</a></p>
                    <p>관람료 : {USAGEAMOUNT}</p>
                    <p>찾아오는 길 : {TRAFFICINFO}</p>
                    <p>이용 가능 시간 : {USAGETIME}</p>
                </div>
            </div>
            <div className='modalIntroArea'>
                <span>{INTRODUCE}</span>
            </div>
            <br/>
            <button onClick={modalClose}>닫기</button>
        </ReactModal>
    );
};

export default InfoModal;