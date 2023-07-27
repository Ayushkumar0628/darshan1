import React from 'react';

const HomeCards=(props)=>{
  return (
    <>
        <div className="features">
            <div className="row">
                <div className="text-col">
                    <h2>{props.title}</h2>
                    <p>{props.para}</p>
                </div>
                <div className="img-col">
                    <img src={props.imgsrc} alt="features" />
                </div>
            </div>
        </div>
        <hr />
    </>
  );
}

export default HomeCards;