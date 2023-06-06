import React, { useState } from 'react';
import InfoModal from './InfoModal';

const Information = (props) => {

  const [showModal, setShowModal] = useState(false);

  const [addr,setAddr] = useState('');
  const [telNum,setTelNum] = useState('');
  const [homepageUrl,setHomepageUrl] = useState('');
  const [introduce,setIntroduce] = useState('');
  const [modalImg,setModalImg] = useState('');
  const [title,setTitle] = useState('');
  const [usageAmount,setUsageAmount] = useState('');
  const [trafficInfo,setTrafficInfo] = useState('');
  const [usageTime,setUsageTime] = useState('');

  const makeJsxEle = (data) => {//JSX element 생성 함수
    return data.map((item) => (//각 element 클릭 시 해당 관광지 에 해당하는 정보를 state에 저장할 수 있도록 영역에 click event 추가
      <div className="tour-spot" key={item.MAIN_TITLE} onClick={() => modalOpen(item.ADDR1,item.CNTCT_TEL,item.HOMEPAGE_URL,item.ITEMCNTNTS,item.MAIN_IMG_THUMB,item.MAIN_TITLE,item.USAGE_AMOUNT,item.TRFC_INFO,item.USAGE_DAY_WEEK_AND_TIME)}>
        <h3>{item.MAIN_TITLE}</h3>
        <img src={item.MAIN_IMG_NORMAL}  alt={item.MAIN_TITLE} className='leftArea'></img>
        <div className='rightArea'>
          <span>{item.SUBTITLE?item.SUBTITLE:item.TITLE}</span>
        </div>
      </div>
    ));
  };

  //modal을 열 때 실행되는 함수. 필요한 데이터들이 state에 들어가도록 구성

  const modalOpen = (ADDR1,CNTCT_TEL,HOMEPAGE_URL,ITEMCNTNTS,MAIN_IMG_THUMB,MAIN_TITLE,USAGE_AMOUNT,TRFC_INFO,USAGE_DAY_WEEK_AND_TIME) => {
    setAddr(ADDR1);
    setTelNum(CNTCT_TEL);
    setHomepageUrl(HOMEPAGE_URL);
    setIntroduce(ITEMCNTNTS);
    setModalImg(MAIN_IMG_THUMB);
    setTitle(MAIN_TITLE);
    setUsageAmount(USAGE_AMOUNT);
    setTrafficInfo(TRFC_INFO);
    setUsageTime(USAGE_DAY_WEEK_AND_TIME);

    setShowModal(true);
  }

  // modal을 닫을 때 사용하는 함수

  const modalClose = () =>{
    setShowModal(false);
  }

  return (
    <div className="Information">
        <section className="content">
          <div className="tour-spots">
            {makeJsxEle(props.data)}
          </div>
        </section>
        {/* showModal이 true일 경우 modal이 열림 false일 경우 modal이 닫힘. 각 정보와 함수는 props로 전달 */}
        {showModal && (
        <InfoModal
          ADDR = {addr}
          TELNUM = {telNum}
          HOMEPAGEURL = {homepageUrl}
          INTRODUCE = {introduce}
          MODALIMG = {modalImg}
          TITLE = {title}
          USAGEAMOUNT = {usageAmount}
          TRAFFICINFO = {trafficInfo}
          USAGETIME = {usageTime}

          showModal = {showModal}

          modalClose = {modalClose}
        />)}
    </div>
  );
}


export default Information;