$(document).ready(function(){

    const abi=[
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftContractAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "auctionEndPeriod",
              "type": "uint256"
            }
          ],
          "name": "AuctionPeriodUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftContractAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "auctionSettler",
              "type": "address"
            }
          ],
          "name": "AuctionSettled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftContractAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "bidder",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "ethAmount",
              "type": "uint256"
            }
          ],
          "name": "BidMade",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftContractAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "highestBidder",
              "type": "address"
            }
          ],
          "name": "BidWithdrawn",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftContractAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "HighestBidTaken",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftContractAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newMinPrice",
              "type": "uint256"
            }
          ],
          "name": "MinimumPriceUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftContractAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "nftHighestBid",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftHighestBidder",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftSeller",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftRecipient",
              "type": "address"
            }
          ],
          "name": "NFTTransferredAndSellerPaid",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftContractAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftSeller",
              "type": "address"
            }
          ],
          "name": "NFTWithdrawn",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftContractAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftSeller",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "minPrice",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "auctionBidPeriod",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint8",
              "name": "bidIncreasePercentage",
              "type": "uint8"
            },
            {
              "indexed": false,
              "internalType": "uint8[]",
              "name": "feePercentages",
              "type": "uint8[]"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "feeRecipients",
              "type": "address[]"
            }
          ],
          "name": "NftAuctionCreated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftContractAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "masterTokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "batchTokens",
              "type": "uint256[]"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "nftSeller",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "minPrice",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "auctionBidPeriod",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint8",
              "name": "bidIncreasePercentage",
              "type": "uint8"
            },
            {
              "indexed": false,
              "internalType": "uint8[]",
              "name": "feePercentages",
              "type": "uint8[]"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "feeRecipients",
              "type": "address[]"
            }
          ],
          "name": "NftBatchAuctionCreated",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_nftContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "_batchTokenIds",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256",
              "name": "_minPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_auctionBidPeriod",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "_bidIncreasePercentage",
              "type": "uint8"
            },
            {
              "internalType": "uint8[]",
              "name": "_feePercentages",
              "type": "uint8[]"
            },
            {
              "internalType": "address[]",
              "name": "_feeRecipients",
              "type": "address[]"
            }
          ],
          "name": "createBatchNftAuction",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_nftContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_auctionBidPeriod",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "_bidIncreasePercentage",
              "type": "uint8"
            },
            {
              "internalType": "uint8[]",
              "name": "_feePercentages",
              "type": "uint8[]"
            },
            {
              "internalType": "address[]",
              "name": "_feeRecipients",
              "type": "address[]"
            }
          ],
          "name": "createNewNftAuction",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "failedTransferCredits",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_nftContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "makeBid",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_nftContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_nftRecipient",
              "type": "address"
            }
          ],
          "name": "makeCustomBid",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "minimumSettableIncreasePercentage",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "nftContractAuctions",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "minPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "auctionBidPeriod",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "auctionEnd",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nftHighestBid",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "bidIncreasePercentage",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "nftHighestBidder",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "nftSeller",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "nftRecipient",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "nftOwner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_nftContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOfNFT",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_nftContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "settleAuction",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_nftContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "takeHighestBid",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_nftContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_newMinPrice",
              "type": "uint256"
            }
          ],
          "name": "updateMinimumPrice",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "withdrawAllFailedCredits",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_nftContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "withdrawNft",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
    const addressSM="0x20528F29f58B2f311E7f1be5D44EB941f6d4Fb03";
    const web3=new Web3(window.ethereum);
    window.ethereum.enable();
    //tao contract MM
    var contract_MM= new web3.eth.Contract(abi,addressSM);
    console.log(contract_MM.methods);
    //tao contract Infura
    var provider=new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/a6f2e5ad07594856be3a78509a16ba75");
    var web3_infura=new Web3(provider);
    var contract_Infura=web3_infura.eth.Contract(abi,addressSM);
    //console.log(contract_Infura);

    contract_Infura.events.NftAuctionCreated({filter:{},fromBlock:"latest"},function(error,data){
        if(error){
            console.log(error);
        }
        else{
            console.log(data)
        }
    });

    var currentAccount=null;

    checkMM();
    $("#connectMM").click(function(){
        connectMM().then((data)=>{
            currentAccount=data[0];
            console.log(currentAccount);
        }).catch((err)=>{
            console.log(err);
        })
    });
    $("#nftOwner").click(function(){
        if(currentAccount != null && currentAccount.length >1)
        {
            const addressOwner = contract_MM.methods.nftOwner("0xBCC53EB45294E705ceb14679A6ddDf0d86895dA6",0).call();
            addressOwner
            .then((data)=>{
                console.log(data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else
        {
            alert("Vui long dang nhap MM");
        }
    });

    $("#createAuction").click(function(){
        if(currentAccount != null && currentAccount.length >1)
        {
            const addressOwner = contract_MM.methods.createNewNftAuction("0xBCC53EB45294E705ceb14679A6ddDf0d86895dA6",1,1000000000,2400,50,[],[]).send({from:currentAccount});
            addressOwner
            .then((data)=>{
                console.log(data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else
        {
            alert("Vui long dang nhap MM");
        }
    });
    
});

async function connectMM(){
    const accounts=await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}
function checkMM(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      }
    else{
        console.log("Ban chua cai Metamask")
    }
}