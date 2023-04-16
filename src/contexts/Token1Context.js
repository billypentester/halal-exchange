import React, { createContext, useState, useEffect } from "react";

import {
  DMATICAddress,
  DMATICABI,
  DUSDAddress,
  DUSDABI,
  DTXAddress,
  DTXABI,
  factoryAddress,
  factoryABI,
  routerAddress,
  routerABI,
  pairAddress,
  pairABI,
  kyzAddress,
  kyzABI,
  poolABI,
  quoterABI,
  quoterAddress,
  chainId,
  createYourTokenABI,
  createYourTokenAddress,
} from "../utils/contants";
import swal from "sweetalert";
export const Token1Context = createContext();

const Web3 = require("web3");
const web3 = new Web3(
  "https://polygon-mumbai.infura.io/v3/6e2754c1907e44d0aea9fe116ebbe15d"
);
export default function TokenProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState("");
  const [estimatedValue, setEstimatedValue] = useState();
  const [estimatedValue1, setEstimatedValue1] = useState();

  window.web3 = new Web3(window.ethereum);

  async function Swap(amounts, bool, percent) {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // console.log(account[0]);
        if (bool) {
          const ContractRouter = new window.web3.eth.Contract(
            routerABI,
            routerAddress
          );
          const Contract = new window.web3.eth.Contract(kyzABI, kyzAddress);
          // const userAddress = window.web3.utils.toChecksumAddress(
          //   window.ethereum.selectedAddress
          // );

          const amount = window.web3.utils.toWei(
            amounts?.toString() || "0",
            "ether"
          );
          console.log(amount);
          const Balance = await Contract.methods.balanceOf(account[0]).call();
          console.log(Balance);
          if (Balance < amount) {
            return swal({
              title: "Attention",
              text: `You don't have sufficient balance.`,
              icon: "warning",
              button: "OK!",
              className: "modal_class_success",
            });
          }
          console.log(estimatedValue1);

          var slippageValue =
            estimatedValue1 - (percent * estimatedValue1) / 100;
          console.log("slippages", slippageValue);
          slippageValue = window.web3.utils.toWei(
            slippageValue.toString(),
            "ether"
          );
          console.log("slippages", slippageValue);
          const Approve = await Contract.methods
            .approve(routerAddress, amount)
            .send({ from: account[0] });
          await Approve;
          const ExactInputSingle = ContractRouter.methods
            .exactInputSingle([
              kyzAddress,
              DTXAddress,
              3000,
              account[0],
              1780400920,
              amount,
              slippageValue,
              0,
            ])
            .send({ from: account[0] });

          await ExactInputSingle;
          return swal({
            title: "successfully Swapped",
            text: `Transaction Successfull`,
            icon: "success",
            button: "OK!",
            className: "modal_class_success",
          });
        } else {
          const ContractRouter = new window.web3.eth.Contract(
            routerABI,
            routerAddress
          );
          const Contract = new window.web3.eth.Contract(kyzABI, DTXAddress);
          // const userAddress = window.web3.utils.toChecksumAddress(
          //   window.ethereum.selectedAddress
          // );

          const amount = window.web3.utils.toWei(amounts.toString(), "ether");

          console.log(amount);

          const Balance = await Contract.methods.balanceOf(account[0]).call();
          console.log(Balance);
          if (Balance < amount) {
            return swal({
              title: "Attention",
              text: `You don't have sufficient balance.`,
              icon: "warning",
              button: "OK!",
              className: "modal_class_success",
            });
          }

          var slippageValue =
            estimatedValue1 - (percent * estimatedValue1) / 100;
          console.log("slippages", slippageValue);
          slippageValue = window.web3.utils.toWei(
            slippageValue.toString(),
            "ether"
          );
          console.log("slippages", slippageValue);
          const Approve = await Contract.methods
            .approve(routerAddress, amount)
            .send({ from: account[0] });
          await Approve;

          // console.log(Approve);

          // const ExactInputSingle = await ContractRouter.methods
          //   .exactInputSingle([
          //     kyzAddress,
          //     DTXAddress,
          //     3000,
          //     account[0],
          //     1780400920,
          //     amount,
          //     0,
          //     0,
          //   ])
          //   .send({ from: account[0] });
          const ExactInputSingle = ContractRouter.methods
            .exactInputSingle([
              DTXAddress,
              kyzAddress,

              3000,
              account[0],
              1780400920,
              amount,
              slippageValue,
              0,
            ])
            .send({ from: account[0] });

          await ExactInputSingle;
          return swal({
            title: "successfully Swapped",
            text: `Transaction Successfull`,
            icon: "success",
            button: "OK!",
            className: "modal_class_success",
          });
        }

        // const value = await window.web3.eth.call(
        //   {
        //     from: account[0],
        //     to: routerAddress,
        //     data: ExactInputSingle.encodeABI(),
        //   },
        //   "latest"
        // );
        // console.log(Number(value));
      } catch (error) {
        console.log(error);
        return swal({
          title: "Attention",
          text: `Transaction Reverted.`,
          icon: "warning",
          button: "OK!",
          className: "modal_class_success",
        });
      }
      // console.log(userAddress);
    }
  }
  const connectWallet = async () => {
    // const provider = await detectEthereumProvider();
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: Web3.utils.toHex(chainId),
              chainName: "Mumbai Testnet",
              rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
              nativeCurrency: {
                name: "Mumbai Testnet",
                symbol: "MATIC",
                decimals: 18,
              },
              blockExplorerUrls: ["https://polygonscan.com/"],
            },
          ],
        });
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(chainId) }],
        });
        setWalletAddress(accounts[0]);

        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("please install MetaMask");
    }
  };
  const findPool = async () => {
    const factoryContract = new window.web3.eth.Contract(
      factoryABI,
      factoryAddress
    );
    console.log(factoryContract);
    const getPoolAddress = await factoryContract.methods
      .getPool(kyzAddress, DTXAddress, 3000)
      .call();
    const boolean = kyzAddress < DTXAddress;
    console.log(boolean);
    console.log(getPoolAddress);
    console.log("err", poolABI);
    const PoolContract = new window.web3.eth.Contract(poolABI, getPoolAddress);
    console.log(PoolContract);
    const ok = window.web3.eth.abi.encodeParameters(
      ["address", "uint24", "address"],
      [
        "0x464f5831dbb146dace9f28fb106b893cfce37034",
        "3000",
        "0x4b919a6a9e7f7e382263579f80a4b41f0625a14a",
      ]
    );
    console.log(ok);
    const swapp = await PoolContract.methods.swap(
      walletAddress,
      boolean,
      "1000000000000000000",
      "4295128740",
      ok
    );

    const value = await window.web3.eth.call(
      {
        from: walletAddress,
        to: getPoolAddress,
        data: swapp.encodeABI(),
      },
      "latest"
    );
    console.log(Number(value));
  };
  const quoter = async (amounts, token) => {
    const quoterContract = new window.web3.eth.Contract(
      quoterABI,
      quoterAddress
    );
    console.log(amounts);

    if (token == 1) {
      if (amounts == 0) {
        setEstimatedValue(0);
        return;
      }
      const amount = window.web3.utils.toWei(amounts.toString(), "ether");

      console.log(amount);
      // const amount = web3.utils.fromWei(amounts, "ether");

      // console.log(quoterContract);
      const QUOTEExactInputSingle =
        await quoterContract.methods.quoteExactInputSingle(
          kyzAddress,
          DTXAddress,
          3000,
          amount,
          0
        );

      const resultEst = await window.web3.eth.call(
        {
          from: "0x0000000000000000000000000000000000000000",
          to: quoterAddress,
          data: QUOTEExactInputSingle.encodeABI(),
        },
        "latest"
      );
      const amount1 = window.web3.utils.fromWei(resultEst.toString(), "ether");

      console.log(amount);
      setEstimatedValue(Number(amount1).toFixed(5));
      console.log(Number(amount1).toFixed(5));
    } else {
      if (amounts == 0) {
        setEstimatedValue1(0);
        return;
      }
      const amount = window.web3.utils.toWei(amounts.toString(), "ether");

      console.log(amount);
      // const amount = web3.utils.fromWei(amounts, "ether");

      // console.log(quoterContract);
      const QUOTEExactInputSingle =
        await quoterContract.methods.quoteExactInputSingle(
          DTXAddress,
          kyzAddress,

          3000,
          amount,
          0
        );

      const resultEst = await window.web3.eth.call(
        {
          from: "0x0000000000000000000000000000000000000000",
          to: quoterAddress,
          data: QUOTEExactInputSingle.encodeABI(),
        },
        "latest"
      );
      const amount1 = window.web3.utils.fromWei(resultEst.toString(), "ether");

      console.log(amount);
      setEstimatedValue1(Number(amount1).toFixed(5));
      console.log(Number(amount1).toFixed(5));
    }
  };
  const createToken = async (
    name,
    symbol,
    totalSupply,
    decimals,
    boolean1,
    boolean2,
    boolean3
  ) => {
    if (window.ethereum) {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const cycContract = new window.web3.eth.Contract(
        createYourTokenABI,
        createYourTokenAddress
      );

      var value = 0.05;
      value = window.web3.utils.toWei(value.toString(), "ether");
      if (boolean1 == true && boolean2 == true && boolean3 == true) {
        try {
          const PausableMintBurn = await cycContract.methods
            .DeployPausableMintBurn(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(PausableMintBurn);
        } catch (err) {
          console.log(err);
        }
      } else if (boolean1 == true && boolean2 == true && boolean3 == false) {
        try {
          const MintBurn = await cycContract.methods
            .DeployMintBurn(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(MintBurn);
        } catch (err) {
          console.log(err);
        }
      } else if (boolean1 == true && boolean2 == false && boolean3 == true) {
        try {
          const PausableBurn = await cycContract.methods
            .DeployPausableBurn(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(PausableBurn);
        } catch (err) {
          console.log(err);
        }
      } else if (boolean1 == false && boolean2 == true && boolean3 == true) {
        try {
          const PausableMint = await cycContract.methods
            .DeployPausableMint(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(PausableMint);
        } catch (err) {
          console.log(err);
        }
      } else if (boolean1 == true && boolean2 == false && boolean3 == false) {
        try {
          const burnable = await cycContract.methods
            .DeployBurnable(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(burnable);
        } catch (err) {
          console.log(err);
        }
      } else if (boolean1 == false && boolean2 == true && boolean3 == false) {
        try {
          const Mintable = await cycContract.methods
            .DeployMintable(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(Mintable);
        } catch (err) {
          console.log(err);
        }
      } else if (boolean1 == false && boolean2 == false && boolean3 == true) {
        try {
          const Pausable = await cycContract.methods
            .DeployPausable(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(Pausable);
        } catch (err) {
          console.log(err);
        }
      } else if (boolean1 == false && boolean2 == false && boolean3 == false) {
        try {
          const ERC20 = await cycContract.methods
            .DeployERC20(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(ERC20);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const getPrice = async () => {
    if (window.ethereum) {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const factoryContract = new window.web3.eth.Contract(
        factoryABI,
        factoryAddress
      );

      const getPoolAddress = await factoryContract.methods
        .getPool(kyzAddress, DTXAddress, 3000)
        .call();

      const boolean = kyzAddress < DTXAddress;
      console.log(boolean);
      console.log(getPoolAddress);
      const PoolContract = new window.web3.eth.Contract(
        poolABI,
        getPoolAddress
      );
      console.log(PoolContract);
      const slot0 = await PoolContract.methods.slot0().call();

      let sqrtPriceX96 = slot0[0];
      console.log(sqrtPriceX96);

      let price = Number((Number(sqrtPriceX96) / (2 ^ 96)) ^ 2);
      let yes = Math.sqrt(price) * (2 ^ 92);
      console.log(yes);
      console.log(Number(price));
    }
  };

  return (
    <Token1Context.Provider
      value={{
        Swap,
        connectWallet,
        walletAddress,
        findPool,
        quoter,
        estimatedValue,
        setEstimatedValue,
        estimatedValue1,
        setEstimatedValue1,
        createToken,
        getPrice,
      }}
    >
      {children}
    </Token1Context.Provider>
  );
}
