import React from 'react';

const Information = (props) => {
  console.log(props);

  const makeJsxEle = (data) => {
    return data.map((item) => (
      <div className="tour-spot" key={item.MAIN_TITLE}>
        <h3>{item.MAIN_TITLE}</h3>
        <img src={item.MAIN_IMG_NORMAL} width='230' height='150' alt={item.MAIN_TITLE} className='leftArea'></img>
        <div className='rightArea'>
          <span>{item.SUBTITLE?item.SUBTITLE:item.TITLE}</span>
        </div>
      </div>
    ));
  };

  return (
    <div className="Information">
    
      <main>
        <section className="content">
      
          <div className="tour-spots">
            {makeJsxEle(props.data)}
          </div>
        </section>
      </main>
    </div>
    
  );
}


export default Information;