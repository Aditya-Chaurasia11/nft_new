import React from "react";
import { useNavigate } from "react-router-dom";

import "./card.css";

const Card = ({ name, index, address, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("asddada");
    console.log(index, address);
    navigate(`/nft/${address}/${index}`);
  };

  return (
    // https://eth-sepolia.g.alchemy.com/nft/v2/6ToPbDTF5nhiVtF7Zb1eE4fTdZ2_Wrkk/getNFTMetadata?contractAddress=0xA1436b27e514DCD0ab633b9626FC730f5fbCCd2e&tokenId=3&refreshCache=true

    <div className="card_container" onClick={handleClick}>
      <div className="card_container_img">
        <img src={img}></img>
      </div>
      <div className="card_container_body">
        <div className="card_container_body_upper">
          <div>{name}</div>
          <div>{index}</div>
        </div>
        <div className="card_container_body_lower">
          {/* <div>{address}</div> */}
          0x2b051F456D5cbF
        </div>
      </div>
    </div>
  );
};

export default Card;
