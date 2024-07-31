require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    scroll: {
      url: "https://scroll-alpha-testnet.blockpi.network/v1/rpc/public", // Scroll ağının RPC URL'si
      accounts: [`0xa7b3251a6828a94ebf7750e653033e4f637705428689ade9cdc310aba3b773d1`], // Özel anahtarınızı buraya ekleyin
    },
  },
};
