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
  NFTManagerABI,
  NFTManagerAddress,
  poolAddress,
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
  const [loader, setLoader] = useState(false);
  const [price, setPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState();
  const [intializedVar, setIntializedVar] = useState(false);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1);

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

        // console.log(accounts[0]);
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
      alert("confirm transaction");

      var value = 0.05;
      value = window.web3.utils.toWei(value.toString(), "ether");
      if (boolean1 == true && boolean2 == true && boolean3 == true) {
        try {
          const PausableMintBurn = await cycContract.methods
            .DeployPausableMintBurn(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(PausableMintBurn);
        } catch (err) {
          console.log("PausableMintBurn", err);
        }
      } else if (boolean1 == true && boolean2 == true && boolean3 == false) {
        try {
          const MintBurn = await cycContract.methods
            .DeployMintBurn(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(MintBurn);
        } catch (err) {
          console.log("MintBurn", err);
        }
      } else if (boolean1 == true && boolean2 == false && boolean3 == true) {
        try {
          const PausableBurn = await cycContract.methods
            .DeployPausableBurn(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(PausableBurn);
        } catch (err) {
          console.log("PausableBurn", err);
        }
      } else if (boolean1 == false && boolean2 == true && boolean3 == true) {
        try {
          const PausableMint = await cycContract.methods
            .DeployPausableMint(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(PausableMint);
        } catch (err) {
          console.log("PausableMint", err);
        }
      } else if (boolean1 == true && boolean2 == false && boolean3 == false) {
        try {
          const burnable = await cycContract.methods
            .DeployBurnable(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(burnable);
        } catch (err) {
          console.log("burnable", err);
        }
      } else if (boolean1 == false && boolean2 == true && boolean3 == false) {
        try {
          const Mintable = await cycContract.methods
            .DeployMintable(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(Mintable);
        } catch (err) {
          console.log("Mintable", err);
        }
      } else if (boolean1 == false && boolean2 == false && boolean3 == true) {
        try {
          const Pausable = await cycContract.methods
            .DeployPausable(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value });
          console.log(Pausable);
        } catch (err) {
          console.log("Pausable", err);
        }
      } else if (boolean1 == false && boolean2 == false && boolean3 == false) {
        try {
          var returnValue;

          const ERC20 = await cycContract.methods
            .DeployERC20(name, symbol, totalSupply, decimals)
            .send({ from: account[0], value: value })
            .then((value) => {
              returnValue = value;
            });

          // if (loader == 0) {
          console.log("ERC20", ERC20);
          console.log(returnValue);
          console.log(returnValue.events.TokenCreated.returnValues.token);
          return swal({
            title: "kindly save the following address",
            text:
              "Token Address:" +
              returnValue.events.TokenCreated.returnValues.token,
            icon: "warning",
            button: "OK!",
            className: "modal_class_success",
          });
          // }

          // return swal({
          //   title: "Attention",
          //   text: ERC20.returnVales[1],
          //   icon: "warning",
          //   button: "OK!",
          //   className: "modal_class_success",
          // });
        } catch (err) {
          console.log("ERC20", err);
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
      // sqrtPriceX96 from pool contract
      let sqrtPriceX96 = slot0[0];
      console.log(Number(sqrtPriceX96));
      console.log(sqrtPriceX96);
      // price from sqrtPriceX96
      let price = Number((Number(sqrtPriceX96) / 2 ** 96) ** 2);
      let yes = Math.sqrt(price) * 2 ** 96;
      console.log(yes);
      console.log(price);
      console.log("mujee ", Number(price));
      console.log("------------------");
      let calculatedsqrtPriceX96 = Math.sqrt(2) * 2 ** 96;
      console.log("calculated: ", calculatedsqrtPriceX96.toLocaleString());
      //tick to sqrtPriceX96
      let tick = slot0[1];
      let mysqrtpricex96 = 1.0001 ** (tick / 2) * 2 ** 96;
      console.log("tick to sqrtPricex96:", mysqrtpricex96);
      //tick from newPool
      let CalculatedP = 112045541949572290000000000000 / 2 ** 96;
      let newbase = Math.sqrt(1.0001);
      let myNewTick = Math.log(CalculatedP) / Math.log(newbase);
      console.log("new calculated tick is :", myNewTick.toFixed(0));
      //price to tick
      //this is sqrtPriceX96/2^96
      let p = slot0[0] / 2 ** 96;
      let base = Number(Math.sqrt(1.0001));
      let newTick = Math.log(p) / Math.log(base);
      console.log("new tick price:", newTick);
      // setting tick spacing
      const tickSpacing = await PoolContract.methods.tickSpacing().call();
      console.log("tick spacing", tickSpacing);
      let mod = newTick % tickSpacing;
      if (mod == 0) {
        console.log(newTick);
      } else if (mod > tickSpacing / 2) {
        console.log(mod);
        console.log(tickSpacing);
        const val = Number(Number(tickSpacing) - Number(mod));
        console.log(newTick);
        newTick = newTick + val;
        console.log(Number(newTick));
      } else if (mod < tickSpacing / 2) {
        const val = Number(mod);
        newTick = newTick - val;
        console.log(Number(newTick));
      }
    }
  };
  async function getFactoryContract() {
    const factoryContract = new window.web3.eth.Contract(
      factoryABI,
      factoryAddress
    );
    return factoryContract;
  }
  async function getManagerContract() {
    const NFTManagerContract = new window.web3.eth.Contract(
      NFTManagerABI,
      NFTManagerAddress
    );
    return NFTManagerContract;
  }

  async function AddLiquidityProfessionally(
    token0,
    token1,
    fee,
    pRatio,
    minPrice,
    maxPrice,
    token0Amount,
    token1Amount
  ) {
    if (window.ethereum) {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const factoryContract = await getFactoryContract();
      let checkPoolAddress = await returnPoolAddress(
        factoryContract,
        token0,
        token1,
        fee
      );
      console.log(token0, "ok", token1, "ok", token0Amount, "ok", token1Amount);

      console.log("CHECKPOOLADDRESS", checkPoolAddress);
      var boolForReverseCheck = false;
      if (token0 > token1) {
        [token0, token1] = [token1, token0];
        [token0Amount, token1Amount] = [token1Amount, token0Amount];
        [minPrice, maxPrice] = [1 / minPrice, 1 / maxPrice];
        boolForReverseCheck = true;
        console.log("if worked.............................");
      }
      // sqrtPriceX96 = sqrtPriceX96.toLocaleString("fullwide", {
      //   useGrouping: false,
      // });

      const poolContract = getPoolContract(checkPoolAddress);
      const slot0 = await poolContract.methods.slot0().call();
      const tickSpacing = await poolContract.methods.tickSpacing().call();
      let CurrentTick = slot0[1];
      console.log("tick spacing", tickSpacing);

      let SQRPRICE296min = (Math.sqrt(minPrice) * 2 ** 96).toLocaleString(
        "fullwide",
        {
          useGrouping: false,
        }
      );
      console.log("sqrt price:", SQRPRICE296min);

      let CalculatedPmin = SQRPRICE296min / 2 ** 96;
      let newbasemin = Math.sqrt(1.0001);
      let minTick = Math.log(CalculatedPmin) / Math.log(newbasemin);
      console.log("new calculated min tick is :", minTick.toFixed(0));

      let modForMin = minTick % tickSpacing;
      if (modForMin == 0) {
        console.log(minTick);
      } else if (modForMin > tickSpacing / 2) {
        console.log(modForMin);
        console.log(tickSpacing);
        const val = Number(Number(tickSpacing) - Number(modForMin));
        console.log(val);
        // console.log(minTick);
        minTick = minTick + val;
      } else if (modForMin < tickSpacing / 2) {
        const val = Number(modForMin);
        console.log(val);
        minTick = minTick - val;
      }
      console.log("minimum tick exact", Number(minTick));

      //MACX PRICE

      let SQRPRICE296max = (Math.sqrt(maxPrice) * 2 ** 96).toLocaleString(
        "fullwide",
        {
          useGrouping: false,
        }
      );
      console.log("sqrt price:", SQRPRICE296max);

      let CalculatedPmax = SQRPRICE296max / 2 ** 96;
      let newbasemax = Math.sqrt(1.0001);
      let myNewTickmax = Math.log(CalculatedPmax) / Math.log(newbasemax);
      console.log("new calculated max tick is :", myNewTickmax.toFixed(0));

      let modFormax = myNewTickmax % tickSpacing;
      if (modFormax == 0) {
        // console.log(minTick);
      } else if (modFormax > tickSpacing / 2) {
        console.log(modFormax);
        console.log(tickSpacing);
        const val = Number(Number(tickSpacing) - Number(modFormax));
        console.log(val);
        // console.log(minTick);
        myNewTickmax = myNewTickmax + val;
      } else if (modFormax < tickSpacing / 2) {
        const val = Number(modFormax);
        console.log(val);
        myNewTickmax = myNewTickmax - val;
      }
      console.log("maximum tick exact", Number(myNewTickmax));

      let minSqrtPrice = 1.0001 ** (minTick / 2) * 2 ** 96;
      console.log("Min tick to sqrtPricex96:", minSqrtPrice);

      let maxSqrtPrice = (
        1.0001 ** (myNewTickmax / 2) *
        2 ** 96
      ).toLocaleString("fullwide", {
        useGrouping: false,
      });
      console.log("Max tick to sqrtPricex96:", maxSqrtPrice);

      let Minprice = Number((Number(minSqrtPrice) / 2 ** 96) ** 2);
      let Maxprice = Number((Number(maxSqrtPrice) / 2 ** 96) ** 2);

      console.log("price max", Maxprice);
      console.log("price min", Minprice);
      if (boolForReverseCheck) {
        setMaxPrice((1 / Maxprice).toFixed(2));
        setMinPrice((1 / Minprice).toFixed(2));

        [minTick, myNewTickmax] = [myNewTickmax, minTick];
      } else {
        setMaxPrice(Maxprice.toFixed(2));
        setMinPrice(Minprice.toFixed(2));
      }
      [token0Amount, token1Amount] = await takeDepositAmount(
        token0,
        token1,
        token0Amount,
        token1Amount
      );
      console.log("OK", token0Amount, "second", token1Amount);
      const TimeOut = Date.now() + 5 * 60;
      console.log("Date:", Date.now() + 5 * 60);
      const addliquityForPool = await addLiqidityToPool(
        token0,
        token1,
        fee,
        minTick,
        myNewTickmax,
        token0Amount,
        token1Amount,
        0,
        0,
        account[0],
        TimeOut
      );

      // const mintLiquidity = await NFTManagerContract.methods
      //   .mint([
      //     token0,
      //     token1,
      //     fee,
      //     minTick,
      //     myNewTickmax,
      //     token0Amount,
      //     token1Amount,
      //     0,
      //     0,
      //   account[0],
      //   date
      // ])
      // .send();
    }
  }

  async function returnPoolAddress(factoryContract, token0, token1, fee) {
    const checkPoolAddress = await factoryContract.methods
      .getPool(token0, token1, fee)
      .call();
    return checkPoolAddress;
  }
  function getPoolContract(newPoolAddress) {
    const poolContract = new window.web3.eth.Contract(poolABI, newPoolAddress);
    return poolContract;
  }
  function tickToPrice(tick) {}
  function PriceToTick(price) {}

  async function mintPosition(newPoolAddress) {}
  async function getPriceFromPool(token0, token1, newPoolAddress) {
    const poolContract = getPoolContract(newPoolAddress);
    const slot0 = await poolContract.methods.slot0().call();
    console.log(slot0);
    let mysqrtPriceX96 = slot0[0];
    console.log("First SQRT PRICE", mysqrtPriceX96);
    let myprice = Number((Number(mysqrtPriceX96) / 2 ** 96) ** 2);
    setPrice(myprice.toFixed(2));
    console.log("mujee ", Number(myprice));
    let myTick = slot0[1];
    console.log("current tick", myTick);
    let power = myTick / 2;
    let MySqrtPrice = 1.0001 ** power;
    MySqrtPrice = MySqrtPrice * 2 ** 96;
    console.log("calculated sqrtPricex96:", MySqrtPrice);

    let Myprice = Number((Number(MySqrtPrice) / 2 ** 96) ** 2);
    console.log("calculated price fromMysqrt:", Myprice);

    if (token0 > token1) {
      setCurrentPrice((1 / myprice).toFixed(2));
    } else {
      setCurrentPrice(myprice.toFixed(2));
    }
  }
  async function getPriceOnClick(token0, token1, fee) {
    console.log("fee", fee);
    const factoryContract = await getFactoryContract();
    let checkPoolAddress = await returnPoolAddress(
      factoryContract,
      token0,
      token1,
      fee
    );
    console.log("pool value here:", checkPoolAddress);
    if (checkPoolAddress == 0x0000000000000000000000000000000000000000) {
      setCurrentPrice("need to initialize");
      setIntializedVar(false);
      // await getPriceFromPool(checkPoolAddress);
    } else {
      await getPriceFromPool(token0, token1, checkPoolAddress);
      setIntializedVar(true);
    }
  }

  const initializePool = async (token0, token1, fee, pRatio) => {
    console.log("--------function call--------");

    var returnValue;
    if (window.ethereum) {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // const factoryContract = await getFactoryContract();
      // const checkPoolAddress = await returnPoolAddress(
      //   factoryContract,
      //   token0,
      //   token1,
      //   fee
      // );
      // console.log("CHECKPOOLADDRESS", checkPoolAddress);

      const NFTManagerContract = await getManagerContract();

      console.log("haha", NFTManagerContract);

      let sqrtPriceX96 = Math.sqrt(pRatio) * 2 ** 96;
      sqrtPriceX96 = sqrtPriceX96.toLocaleString("fullwide", {
        useGrouping: false,
      });
      console.log(sqrtPriceX96);
      if (token0 > token1) {
        [token0, token1] = [token1, token0];
      }
      const createAndInitialize = await NFTManagerContract.methods
        .createAndInitializePoolIfNecessary(token0, token1, fee, sqrtPriceX96)
        .send({ from: account[0] })
        .then((value) => {
          returnValue = value;
        });
      console.log("executed with 500 with SAME : ", createAndInitialize);
      setIntializedVar(true);
      const newPoolAddress = returnValue.events[1].address;
      console.log(newPoolAddress);
      setCurrentPrice(pRatio);
      return newPoolAddress;

      if (token0 < token1) {
        const createAndInitialize = await NFTManagerContract.methods
          .createAndInitializePoolIfNecessary(token0, token1, fee, sqrtPriceX96)
          .send({ from: account[0] })
          .then((value) => {
            returnValue = value;
          });
        console.log("executed with 500 with SAME : ", createAndInitialize);
        console.log(returnValue);
        const newPoolAddress = returnValue.events[1].address;
        console.log(newPoolAddress);
        // calculating price
        const poolContract = getPoolContract(newPoolAddress);
        const slot0 = await poolContract.methods.slot0().call();
        console.log(slot0);
        //price from sqrtPriceX96
        let mysqrtPriceX96 = slot0[0];
        let myprice = Number((Number(mysqrtPriceX96) / 2 ** 96) ** 2);
        setPrice(myprice.toFixed(2));
        console.log("mujee ", Number(myprice));
        //calculating tick
        const tickSpacing = await poolContract.methods.tickSpacing().call();
        console.log("tick spacing", tickSpacing);
        //finding tick for min price
        console.log(minPrice);
        let modForMin = minPrice % tickSpacing;
        if (modForMin == 0) {
          console.log(minPrice);
        } else if (modForMin > tickSpacing / 2) {
          console.log(modForMin);
          console.log(tickSpacing);
          const val = Number(Number(tickSpacing) - Number(modForMin));
          console.log(val);
          console.log(minPrice);
          minPrice = minPrice + val;
          console.log(Number(minPrice));
        } else if (modForMin < tickSpacing / 2) {
          const val = Number(modForMin);
          console.log(val);
          minPrice = minPrice - val;
          console.log(Number(minPrice));
        }

        //finding tick for max price
        let modForMax = maxPrice % tickSpacing;
        if (modForMax == 0) {
          console.log(maxPrice);
        } else if (modForMax > tickSpacing / 2) {
          console.log(modForMax);
          console.log(tickSpacing);
          const val = Number(Number(tickSpacing) - Number(modForMax));
          console.log(val);
          console.log(maxPrice);
          maxPrice = maxPrice + val;
          console.log(Number(maxPrice));
        } else if (modForMax < tickSpacing / 2) {
          const val = Number(modForMax);
          console.log(val);
          maxPrice = maxPrice - val;
          console.log(Number(maxPrice));
        }
      } else {
        [token0, token1] = [token1, token0];
        const createAndInitialize = await NFTManagerContract.methods
          .createAndInitializePoolIfNecessary(token0, token1, fee, sqrtPriceX96)
          .send({ from: account[0] })
          .then((value) => {
            returnValue = value;
          });
        console.log("executed with 500 with CHANGED : ", createAndInitialize);
        console.log(returnValue);
        const newPoolAddress = returnValue.events[1].address;
        console.log(newPoolAddress);
        const poolContract = new window.web3.eth.Contract(
          poolABI,
          newPoolAddress
        );
        const slot0 = await poolContract.methods.slot0().call();
        console.log(slot0);
        //price from sqrtPriceX96
        let mysqrtPriceX96 = slot0[0];
        let myprice = Number((Number(mysqrtPriceX96) / 2 ** 96) ** 2);
        setPrice(myprice.toFixed(2));
        console.log("mujee ", Number(myprice));
        //inverted ticks when token0>token1
        const tickSpacing = await poolContract.methods.tickSpacing().call();
        console.log("tick spacing", tickSpacing);
        //finding tick for min price
        minPrice = 1 / minPrice;
        let modForMin = minPrice % tickSpacing;
        if (modForMin == 0) {
          console.log(minPrice);
        } else if (modForMin > tickSpacing / 2) {
          console.log(modForMin);
          console.log(tickSpacing);
          const val = Number(Number(tickSpacing) - Number(modForMin));
          console.log(val);
          console.log(minPrice);
          minPrice = minPrice + val;
          console.log(Number(minPrice));
        } else if (modForMin < tickSpacing / 2) {
          const val = Number(modForMin);
          console.log(val);
          minPrice = minPrice - val;
          console.log(Number(minPrice));
        }
        //finding tick for max price
        maxPrice = 1 / maxPrice;
        let modForMax = maxPrice % tickSpacing;
        if (modForMax == 0) {
          console.log(maxPrice);
        } else if (modForMax > tickSpacing / 2) {
          console.log(modForMax);
          console.log(tickSpacing);
          const val = Number(Number(tickSpacing) - Number(modForMax));
          console.log(val);
          console.log(maxPrice);
          maxPrice = maxPrice + val;
          console.log(Number(maxPrice));
        } else if (modForMax < tickSpacing / 2) {
          const val = Number(modForMax);
          console.log(val);
          maxPrice = maxPrice - val;
          console.log(Number(maxPrice));
        }
      }
    }
  };
  function getTokenContracts(token) {
    const tokenContract = new window.web3.eth.Contract(kyzABI, token);

    return tokenContract;
  }
  async function takeDepositAmount(token0, token1, token0Amount, token1Amount) {
    const token0Contract = getTokenContracts(token0);
    const token1Contract = getTokenContracts(token1);

    console.log(token0, "ok", token1, "ok", token0Amount, "ok", token1Amount);
    const token0Decimals = await token0Contract.methods.decimals().call();
    const token1Decimals = await token1Contract.methods.decimals().call();
    console.log(token0Decimals);
    console.log(token1Decimals);
    const amount0WithDecimals = Number(
      token0Amount * 10 ** token0Decimals
    ).toLocaleString("fullwide", {
      useGrouping: false,
    });
    const amount1WithDecimals = Number(
      token1Amount * 10 ** token1Decimals
    ).toLocaleString("fullwide", {
      useGrouping: false,
    });
    console.log("Amount 0 with Decimals: ", amount0WithDecimals);
    console.log("Amount 1 with Decimals: ", amount1WithDecimals);
    return [amount0WithDecimals, amount1WithDecimals];
  }
  async function addLiqidityToPool(
    token0,
    token1,
    fee,
    tickLower,
    tickUpper,
    amount0Desired,
    amount1Desired,
    amount0min,
    amount1Min,
    recipient,
    deadline
  ) {
    if (window.ethereum) {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const NFTManagerContract = await getManagerContract();

      console.log(
        token0,
        "ok",
        token1,
        "ok",
        fee,
        "ok",
        tickLower,
        "ok",
        tickUpper,
        "ok",
        amount0Desired,
        "ok",
        amount1Desired,
        "ok",
        amount0min,
        "ok",
        amount1Min,
        "ok",
        recipient,
        "ok",
        deadline
      );

      const addLiquidity = await NFTManagerContract.methods
        .mint([
          token0,
          token1,
          fee,
          tickLower,
          tickUpper,
          amount0Desired,
          amount1Desired,
          amount0min,
          amount1Min,
          recipient,
          deadline,
        ])
        .send({ from: account[0] });
    }
  }
  async function approveTokens(token, tokenAmount) {
    if (window.ethereum) {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("token address", token);

      const tokenContract = getTokenContracts(token);
      const tokenDecimals = await tokenContract.methods.decimals().call();
      const amountWithDecimals = Number(
        tokenAmount * 10 ** tokenDecimals
      ).toLocaleString("fullwide", {
        useGrouping: false,
      });
      const approveTokenss = await tokenContract.methods
        .approve(NFTManagerAddress, amountWithDecimals)
        .send({ from: account[0] });

      console.log("approved", approveTokenss);
    }
  }
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
        loader,
        setLoader,
        initializePool,
        setPrice,
        price,
        AddLiquidityProfessionally,
        currentPrice,
        setCurrentPrice,
        getPriceOnClick,
        intializedVar,
        maxPrice,
        setMaxPrice,
        minPrice,
        setMinPrice,
        takeDepositAmount,
        approveTokens,
      }}
    >
      {children}
    </Token1Context.Provider>
  );
}
