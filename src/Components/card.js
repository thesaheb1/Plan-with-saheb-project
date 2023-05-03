import React,{useState} from "react";

const Card = ({id,image,info,price,name,removecard}) => {
  const [readmore,setreadmore] = useState(false);
  let description = readmore ? info : `${info.substring(0,200)}...`;

  function readmorehandler()
  {
    setreadmore(!readmore);
  }
  return (
    <div className="card-content">
      <img className="image" src={image} alt="" />
      <div className="info-content">
        <p className="price">₹{price}</p>
        <p className="city">{name}</p>
        <p className="description">
          {description}
          <span className="read-more" onClick={readmorehandler}>{readmore ? ` show less`: ` show more`}</span></p>
      </div>
        <button className="btn" onClick={()=>{removecard(id)}}>Not Interested</button>
    </div>
  );
};

export default Card;
