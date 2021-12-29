import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card">
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <div className="card-description">
                <span>Especie: {item.species}</span>
                <br />
                <span>Ubicación: {item.location.name}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
