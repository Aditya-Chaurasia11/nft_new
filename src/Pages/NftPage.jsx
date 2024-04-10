import React, { useEffect, useState } from "react";

const NftPage = () => {
  const [nftList, setNftlist] = useState({});

  const allNFT = () => {
    const options = { method: "GET" };

    fetch(
      `https://eth-sepolia.g.alchemy.com/nft/v2/6ToPbDTF5nhiVtF7Zb1eE4fTdZ2_Wrkk/getNFTMetadata?contractAddress=0xA1436b27e514DCD0ab633b9626FC730f5fbCCd2e&tokenId=3&refreshCache=true`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setNftlist(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // contract && allNFT();
    allNFT();
  }, []);

  const handleClick1 = () => {
    console.log("adadad");
  };

  const handleClick2 = () => {
    console.log("adadad");
  };

  return (
    <>
      <div>
        <img src={nftList?.metadata?.image}></img>
        <button onClick={handleClick1}> Deploy on sepolia</button>
        <button onClick={handleClick2}> Deploy on op</button>
      </div>
    </>
  );
};

export default NftPage;
