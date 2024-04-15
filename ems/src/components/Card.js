import React from "react";

export default function Card(props) {
    // let myStyl={
    //     `background:`
    // }
    const {cardbgcolor,number,category,pageLink}=props
  return (
    <>
      <div className="container">
        <div className="card mb-4" style={{ width: "18rem" }}>
          <div className="card-body" style={{background:`${cardbgcolor}`}}>
            <h2 className="card-title" style={{fontWeight:'800'}}>{number}</h2>
            <p className="card-text">{category}</p>
            <a href={`${pageLink}`} className="card-link card-footer" style={{background: '#ffffff61'}}>
              More Info →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
