  import type { HardhatUserConfig } from "hardhat/config";
  import "@nomicfoundation/hardhat-toolbox";

  // const config: HardhatUserConfig = {
  //   solidity: "0.8.28",
  //   networks: {
  //     sepolia: {
  //       url: "https://api-unstable.shardeum.org", // RPC endpoint
  //       chainId:8080,
  //       accounts: ["8cbb501359024b3880acddcf0da8382f2e6084a5ad2e8aa3e8ada84ee86a31a6"], // wallet private key (with test SHM)
  //     },
  //   },
  // };

  // export default config;  

    const config: HardhatUserConfig = {
    solidity: "0.8.28",
    networks: {
      sepolia: {
        url: "https://1rpc.io/sepolia", // RPC endpoint
        chainId: 11155111,
        accounts: ["8cbb501359024b3880acddcf0da8382f2e6084a5ad2e8aa3e8ada84ee86a31a6"], // wallet private key (with test SHM)
      },
    },
  };

  export default config;  
