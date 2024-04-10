import React, { useEffect, useState } from "react";
import "./nft.css";
import Card from "../Components/Card";

const Nft = () => {
  const [nftList, setNftlist] = useState([]);

  const account = "0xfddD2b8D9aaf04FA583CCF604a2De12668200582";

  const allNFT = () => {
    const options = { method: "GET" };

    fetch(
      `https://eth-sepolia.g.alchemy.com/nft/v2/6ToPbDTF5nhiVtF7Zb1eE4fTdZ2_Wrkk/getNFTs?pageKey=undefined&owner=${account}&pageSize=24&withMetadata=true`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setNftlist(response.ownedNfts);
        console.log(response.ownedNfts);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // contract && allNFT();
    allNFT();
  }, []);

  return (
    <div className="nft_container">
      <div className="nft_container_upper">
        <div>My NFTs</div>
        <div className="nft_container_upper_add">0xfddD..0200582</div>
      </div>
      <div className="nft_container_middle">
        <div className="flex gap-x-4">
          <p className="py-4 font-mono text-xl text-left text-gray-400 uppercase w-fit lg:whitespace-nowrap">
            COLLECTIBLES
          </p>
          <div className="hidden w-full grid-cols-1 grid-rows-2 divide-y divide-[#8c8c8c]/30 lg:grid">
            <div className="w-full"></div>
            <div className="w-full"></div>
          </div>
        </div>
      </div>
      <div className="nft_container_lower">
        {nftList?.map((k) => {
          return (
            <Card
              name={k?.contractMetadata.name}
              index={parseInt(k?.id.tokenId, 16)}
              address={k?.contract.address}
              img={k?.metadata.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Nft;
