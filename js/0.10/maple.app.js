//const App = await init_ethers();
var mapleTokenInfo = null;
const BLOCKS_PER_DAY = 41143;
const burnWallet = "0x000000000000000000000000000000000000dead";

/***********  Maple  ************/
const MAPLE_CHEF_ADDR = "0xa1a691f0616F7eb84671Ff67A48cF1eB5E74fa41";
const MAPLE_TOKEN_ADDR = "0x67F0e196fF54A624E4063fa3619D483Be336d5DB";
const MAPLE_PRICE_LP = "0x7066141479Ec93aE77508D03C3493079aCe8eCBA"; // WMATIC-MAPLE
const MAPLE_TOKEN_ABI = MAPLE_TOKEN_ABI_v1;
const MAPLE_TICKER = "MAPLE";
const MAPLE_MULTIPLIER_DIVISOR = 100;
/***********  Maple  ************/

/***********  Maple Syrup ************/
//const MAPLESYRUP_TOKEN_ADDR = "0x59F2f1fCfE2474fD5F0b9BA1E73ca90b143Eb8d0"; // localhost
//const MAPLESYRUP_CHEF_ADDR = "0xC6bA8C3233eCF65B761049ef63466945c362EdD2"; // localhost
//const MAPLESYRUP_PRICE_LP = "0x7879a8493bEa46e2EBA3EF2ba9b885e548b9820A"; // localhost
const MAPLESYRUP_MULTIPLIER_DIVISOR = 1000;
//const MAPLESYRUP_CHEF_ADDR = "0x564afc3f6c050601cbd9f7649aaea47274bcb032"; // mainnet temp.
//const MAPLESYRUP_TOKEN_ADDR = "0x0fb9ebcc3021ea0400a5701e8de43d1eef5fb11d"; // mainnet temp.
//const MAPLESYRUP_PRICE_LP = null;

const MAPLESYRUP_CHEF_ADDR = "0x6ad893d5f90115049b1849aad1c153b0e99e7953"; // mainnet.
const MAPLESYRUP_TOKEN_ADDR = "0x217c2de853Bee4cc3e645Dd5E011e0267d09AbFF"; // mainnet.
const MAPLESYRUP_PRICE_LP = "0x65b4070edbf04061d29b4d7b608c5277765010a9"; // mainnet.
const MAPLESYRUP_TICKER = "SYRUP";
/***********  Maple Syrup ************/

const MASTER_CHEF_ADDR = MAPLESYRUP_CHEF_ADDR;
const MASTER_CHEF_ABI = MAPLESYRUP_CHEF_ABI;
const POOL_TOKEN_ADDR = MAPLESYRUP_TOKEN_ADDR;
const POOL_TOKEN_TICKER = MAPLESYRUP_TICKER;
const POOL_TOKEN_DECIMALS = 18;
const POOL_TOKEN_ABI = MAPLESYRUP_TOKEN_ABI;
const MULTIPLIER_DIVISOR = MAPLESYRUP_MULTIPLIER_DIVISOR;
const TESTMODE = false;
const MC_SUPPORTS_BOOST = true;
const POOL_CLASS = "syrup";

/*
const MASTER_CHEF_ADDR = MAPLE_CHEF_ADDR;
const MASTER_CHEF_ABI = MAPLE_CHEF_ABI_V1;
const POOL_TOKEN_ADDR = MAPLE_TOKEN_ADDR;
const POOL_TOKEN_TICKER = MAPLE_TICKER;
const POOL_TOKEN_DECIMALS = 18;
const POOL_TOKEN_ABI = MAPLE_TOKEN_ABI_v1;
const MULTIPLIER_DIVISOR = MAPLE_MULTIPLIER_DIVISOR;
const TESTMODE = false;
const MC_SUPPORTS_BOOST = false;
const POOL_CLASS = "maple";
*/

//const MC_SUPPORTS_BOOST = POOL_TOKEN_TICKER == MAPLESYRUP_TICKER ? true : false;

/************ RPC Definitions ************/

const RPC_API_URL = "https://polygon-mainnet.infura.io/v3/fa72a89dee9f4f9eaa48d34bbd103e5d"; // mainnet
const RPC_API_URL2 = "https://polygon-mainnet.infura.io/v3/cdc854e96bdf4d8fbe2f87ca6e02e1ec";
//const RPC_API_URL3 = "https://apis.ankr.com/e2fe9e4f93a9437fbe743cab9246351f/52fe06147bad9a5b45bccb219350a8b3/polygon/full/main";
//const RPC_API_URL3_WS = "wss://apis.ankr.com/wss/e2fe9e4f93a9437fbe743cab9246351f/52fe06147bad9a5b45bccb219350a8b3/polygon/full/main";
const RPC_API_URL4 = "https://rpc-mainnet.maticvigil.com/v1/64d43f17e4a8bc3daec1e2b0e51564fcee871440";
const RPC_API_URL4_WS = "wss://rpc-mainnet.maticvigil.com/ws/v1/64d43f17e4a8bc3daec1e2b0e51564fcee871440";
//const RPC_API_URL = "https://rpc-mainnet.maticvigil.com/v1/64d43f17e4a8bc3daec1e2b0e51564fcee871440"; // mainnet

const RPC_API_LIST = [RPC_API_URL4,RPC_API_URL2];

/************ RPC Definitions ************/

const maticTokens = [
//{ "id": "maple","symbol": "MAPLE","contract": "0x67F0e196fF54A624E4063fa3619D483Be336d5DB" },
{ "id": "wmatic","symbol": "WMATIC","contract": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "decimals": 18 },
{ "id": "matic","symbol": "MATIC","contract": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "decimals": 18 },
{ "id": "tether","symbol": "USDT", "contract": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "decimals": 18 },
{ "id": "bitcoin","symbol": "WBTC", "contract": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "decimals": 8 },
{ "id": "ethereum", "symbol": "WETH", "contract": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "decimals": 18 },
{ "id": "usd-coin","symbol": "USDC", "contract": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "decimals": 6 },
{ "id": "dai","symbol": "DAI", "contract": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "decimals": 18 },
{ "id": "quick","symbol": "QUICK", "contract": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13", "decimals": 18 },
{ "id": "stake-dao", "symbol": "SDT", "contract": "0x361A5a4993493cE00f61C32d4EcCA5512b82CE90", "decimals": 18 },
{ "id": "yield-app", "symbol": "YLD", "contract": "0x4CEBdBCB286101A17D3eA1f7fe7bbDeD2B2053dd", "decimals": 18 },
{ "id": "aave", "symbol": "AAVE", "contract": "0xD6DF932A45C0f255f85145f286eA0b292B21C90B", "decimals": 18 },
{ "id": "polywhale", "symbol": "KRILL", "contract": "0x05089C9EBFFa4F0AcA269e32056b1b36B37ED71b", "decimals": 18 },
{ "id": "chainlink", "symbol": "LINK", "contract": "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39", "decimals": 18 },
{ "id": "sushi", "symbol": "SUSHI", "contract": "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a", "decimals": 18 },
{ "id": "dfyn-network", "symbol": "DFYN", "contract": "0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97", "decimals": 18 },
{ "id": "polydoge", "symbol": "POLYDOGE", "contract": "0x8a953cfe442c5e8855cc6c61b1293fa648bae472", "decimals": 18 },
{ "id": "wmatic-maple", "symbol": "WMATIC-MAPLE", "contract": "0x7066141479Ec93aE77508D03C3493079aCe8eCBA", "decimals": 18},
{ "id": "usdc-weth", "symbol": "USDC-WETH", "contract": "0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d", "decimals": 18},
{ "id": "wmatic-usdc", "symbol": "USDC-WMATIC", "contract": "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827", "decimals": 18},
{ "id": "syrup-usdc", "symbol": "USDC-SYRUP", "contract": "0x062a9F2C62cb21fcecfe6B768bEb15CADA496d54", "decimals": 18},
{ "id": "syrup-wmatic", "symbol": "SYRUP-WMATIC", "contract": "0x65b4070Edbf04061D29b4d7b608C5277765010A9", "decimals": 18},
];

const tokens = [
	{ "id": "maple","symbol": MAPLE_TICKER,"contract": MAPLE_TOKEN_ADDR },
	{ "id": "maplesyrup","symbol": MAPLESYRUP_TICKER,"contract": MAPLESYRUP_TOKEN_ADDR }
];

var poolContracts = [];
var poolDecimals = [];
poolDecimals["0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"] = 18; // WMATIC
poolDecimals[MAPLE_TOKEN_ADDR] = 18; // MAPLE
poolDecimals[MAPLESYRUP_TOKEN_ADDR] = 18; // SYRUP
poolDecimals["0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"] = 6; // USDC

var tokenPoolPrices = [];

var baseRewardPct = 1;

const lookUpPrices = async function(id_array) {
	let ids = id_array.join('%2C')
	const url = 'https://api.coingecko.com/api/v3/simple/price?ids=' + ids + '&vs_currencies=usd';
	const res = await fetch(url);
	const text = await res.text();
	return JSON.parse(text);
}

async function getMaticPrices() {
	const idPrices = await lookUpPrices(maticTokens.map(x => x.id));
	const prices = {}
	for (const bt of maticTokens)
	{
		if (idPrices[bt.id])
			prices[bt.contract] = idPrices[bt.id];
	}
	return prices;
}

const ethereumButton = document.getElementById('enableEthereumButton');
const addTokenButton = document.getElementById('addTokenButton');
const addSyrupTokenButton = document.getElementById('addSyrupTokenButton');
const addCustomTokensButton = document.getElementById('addCustomTokensButton');

const buyArea = document.getElementById("buyArea");
const resultArea = document.getElementById("resultArea");
var connectedToMM = false;
var toasty = null;

var masterChefContract;
var tokenContract;

var masterChefProp = {emissionsPerBlock: 0, totalAllocPoints: 0}
var maplePrice;
var tokenPrices;

var masterChefContractMM;
var tokenContractMM;

ethereumButton.addEventListener('click', () => {
	getAccount();
});

if (addTokenButton != null)
{
	addTokenButton.addEventListener('click', () => {
		const tokenAddress = MAPLE_TOKEN_ADDR;
		const tokenSymbol = 'MAPLE';
		const tokenDecimals = 18;
		const tokenImage = 'https://www.polymaple.com/assets/maple.png';

		addCustomToken(tokenAddress, tokenSymbol, tokenDecimals, tokenImage);
	});
}

if (addSyrupTokenButton != null) {
	addSyrupTokenButton.addEventListener('click', () => {
		const tokenAddress = MAPLESYRUP_TOKEN_ADDR;
		const tokenSymbol = 'SYRUP';
		const tokenDecimals = 18;
		const tokenImage = 'https://www.polymaple.com/assets/syrup/SyrupTokenIcon.png';

		addCustomToken(tokenAddress, tokenSymbol, tokenDecimals, tokenImage);
	});
}

if (addCustomTokensButton != null)
{
	addCustomTokensButton.addEventListener('click', () => {
		addCustomTokens();
	});
}

function addCustomTokens()
{
	const tokenAddress = MAPLE_TOKEN_ADDR;
	const tokenSymbol = 'MAPLE';
	const tokenDecimals = 18;
	const tokenImage = 'https://www.polymaple.com/assets/maple.png';

	addCustomToken(tokenAddress, tokenSymbol, tokenDecimals, tokenImage);

	const tokenAddress2 = MAPLESYRUP_TOKEN_ADDR;
	const tokenSymbol2 = 'SYRUP';
	const tokenDecimals2 = 18;
	const tokenImage2 = 'https://www.polymaple.com/assets/syrup/SyrupTokenIcon.png';

	addCustomToken(tokenAddress2, tokenSymbol2, tokenDecimals2, tokenImage2);
}

async function addCustomToken(tokenAddress, tokenSymbol, tokenDecimals, tokenImage) {
	try {
		// wasAdded is a boolean. Like any RPC method, an error may be thrown.
		const wasAdded = await ethereum.request({
			method: 'wallet_watchAsset',
			params: {
				type: 'ERC20', // Initially only supports ERC20, but eventually more!
				options: {
					address: tokenAddress, // The address that the token is at.
					symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
					decimals: tokenDecimals, // The number of decimals in the token
					image: tokenImage, // A string url of the token logo
				},
			},
		});
	}
	catch (error) {
		console.log(error);
	}
}

async function getAccount() {
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
	setupAccount(account);
}

function setupAccount(account) {
	ethereumButton.classList.add("btn-outline-primary");
	ethereumButton.classList.remove("btn-primary");
	ethereumButton.innerText = account.substring(0,4).concat("...").concat(account.substring(account.length-4));
	connectedToMM = true;
	connected(account);
}

function getToFixed(num,decimals)
{
	return (Math.round(num * 100) / 100).toFixed(2);
}

async function getTokenPrice(tokenAddr, pricesArr, poolABI, priceLPAddr)
{
	const lpContract = new web3api.eth.Contract(poolABI,priceLPAddr);
	
	token0 = await lpContract.methods.token0().call();
	token1 = await lpContract.methods.token1().call();

	var token0Price = 0;
	var token1Price = 0;

	if (pricesArr[token0])
		token0Price = pricesArr[token0].usd; // E.g. MATIC->USDC

	if (pricesArr[token1])
		token1Price = pricesArr[token1].usd; // E.g. 1 USDC worth of MATIC

	var tokenPrice = 0;

	if (token0Price == 0 && token1Price > 0)
	{
		console.log("need token0 price..");
	}
	else if (token0Price > 0 && token1Price == 0)
	{
		// need token1 price
		const reserves = await lpContract.methods.getReserves().call();
		const reserve0 = reserves[0];
		const reserve1 = reserves[1];
		var rate = reserve1/reserve0;
		var altRate = reserve0/reserve1;
		tokenPrice = altRate * (token0Price);
		pricesArr[tokenAddr] = {usd: tokenPrice};		
	}

	return tokenPrice;
}

/*
async function getMaplePrice(prices) {
	const lpContract = new web3api.eth.Contract(poolABI,MAPLE_PRICE_LP);
	token0 = await lpContract.methods.token0().call();
	token1 = await lpContract.methods.token1().call();

	var token0Price = 0;
	var token1Price = 0;

	if (prices[token0])
		token0Price = prices[token0].usd; // E.g. MATIC->USDC

	if (prices[token1])
		token1Price = prices[token1].usd; // E.g. 1 USDC worth of MATIC

	var maplePrice = 0;

	if (token0Price == 0 && token1Price > 0)
	{
		console.log("need token0 price..");
	}
	else if (token0Price > 0 && token1Price == 0)
	{
		// need token1 price
		reserves = await getReserves(lpContract);
		const reserve0 = reserves[0];
		const reserve1 = reserves[1];
		var rate = reserve1/reserve0;
		var altRate = reserve0/reserve1;
		maplePrice = altRate * (token0Price);
		prices[MAPLE_TOKEN_ADDR] = {usd: maplePrice};
		const maplePriceArea = document.getElementById("nativeTokenPrice");
		maplePriceArea.innerHTML = '$'+maplePrice;

		const footerTokenPriceArea = document.getElementById("footer_price");
		if (footerTokenPriceArea)
			footerTokenPriceArea.innerHTML = "Maple Price: " + "$"+displayPrice(maplePrice,2);
	}

	return maplePrice;
}
*/

var rewardsFromBoostArea;
var USDstakedInput;
var usdLPTokenStakedInput;
var lpTokensStakedInput;

function setupBoostCalculator()
{
	USDstakedInput = document.getElementById("usdValueStaked");
	USDstakedInput.addEventListener('change', calcInputChanged);

	usdLPTokenStakedInput = document.getElementById("usdLPTokenStaked");
	usdLPTokenStakedInput.addEventListener('change', calcInputChanged);

	lpTokensStakedInput = document.getElementById("lpTokensStaked");
	lpTokensStaked.addEventListener('change', calcInputChanged);

	rewardsFromBoostArea = document.getElementById("rewardsFromBoost");	
}

function calcInputChanged(event)
{
	let changedBoxId = event.target.id;
	let maplePrice = tokenPrices[MAPLE_PRICE_LP].usd;
	// update box 2 from the value in box 3.
	if (changedBoxId == "lpTokensStaked")
	{
		if (lpTokensStakedInput.value > 0)
			usdLPTokenStakedInput.value = (lpTokensStakedInput.value*maplePrice)+"";
	}
	else if (changedBoxId == "usdLPTokenStaked")
	{
		// update box 3 from the value in box 2.
		if (usdLPTokenStakedInput.value > 0)
			lpTokensStakedInput.value = (usdLPTokenStakedInput.value/maplePrice)+"";
	}

	if (USDstakedInput.value > 0 && usdLPTokenStakedInput.value > 0 && lpTokensStakedInput.value > 0)
	{
		//let pct = usdLPTokenStakedInput.value / USDstakedInput.value;
		//const requiredForMax = 0.80; // pctStakedForMaxBoost in MC.
		const requiredForMax = 0.50; // pctStakedForMaxBoost in MC.
		//let boostLevel = Math.min((usdLPTokenStakedInput.value / USDstakedInput.value / requiredForMax), 1) + 1;
		let boostLevel = Math.min((lpTokensStakedInput.value / USDstakedInput.value / requiredForMax), 1) + 1;
		rewardsFromBoostArea.value = displayPrice(boostLevel)+"x";
	}
}

async function startApp(selectedAddress) {
	console.log("startApp!");
	const networkMessageArea = document.getElementById("networkMessage");
	if (typeof ethereum !== 'undefined')
	{
		if (ethereum.networkVersion != null && ethereum.networkVersion != 137)
		{
			//alert("Please connect to the Matic/Polygon network to use this page");		
			if (networkMessageArea)
				networkMessageArea.classList.remove("d-none");

			if (ethereum.networkVersion != 31337)
				return;
		}
		else
		{
			if (networkMessageArea)
				networkMessageArea.classList.add("d-none");
		}
	}
	else
	{
		console.log("Need to install a web3 wallet.");
	}

	if (POOL_CLASS == "syrup")
	{
		const poolsTitleArea = document.getElementById("poolsTitle");
		poolsTitleArea.classList.add("d-none");
		const poolsTitleImageArea = document.getElementById("poolsTitleImage");
		poolsTitleImageArea.classList.remove("d-none");		
		//poolsTitleArea.innerHTML = "<img class='m-auto d-block' width='300' height='100' src='assets/syrup/MapleSyrupFarm.png'/>";
		if (MC_SUPPORTS_BOOST)
			setupBoostCalculator();
	}

	const tokenContract = new web3api.eth.Contract(MAPLE_TOKEN_ABI,MAPLE_TOKEN_ADDR);
	if (typeof ethereum !== 'undefined')
		tokenContractMM = new web3.eth.Contract(MAPLE_TOKEN_ABI,MAPLE_TOKEN_ADDR);

	let poolContract = null;
	let poolContractMM = null;
	if (typeof POOL_TOKEN_ADDR !== 'undefined')
	{
		poolContract = new web3api.eth.Contract(POOL_TOKEN_ABI,POOL_TOKEN_ADDR);
		if (typeof ethereum !== 'undefined')
			poolContractMM = new web3.eth.Contract(POOL_TOKEN_ABI,POOL_TOKEN_ADDR);
	}

	const prices = await getMaticPrices();

	// Maple Syrup info
	if (POOL_CLASS == "syrup" && poolContract != null)
	{
		const syruptokensupplyArea = document.getElementById("syruptokensupply");
		const syrupTotalSupplyRaw = await poolContract.methods.totalSupply().call();
		const syrupTotalSupply = web3api.utils.fromWei(syrupTotalSupplyRaw);
		syruptokensupplyArea.innerHTML = displayPrice(syrupTotalSupply,2);

		const syrupsyrupburnedtokensArea = document.getElementById("syrupburnedtokens");
		const syrupBurnBalanceRaw = await poolContract.methods.balanceOf(burnWallet).call();
		let syrupBurnBalanceRawBN = new BigNumber(syrupBurnBalanceRaw);
		let syrupBurnBalance = syrupBurnBalanceRawBN.shiftedBy(parseInt(-POOL_TOKEN_DECIMALS)).toFixed();
		syrupsyrupburnedtokensArea.innerHTML = displayPrice(syrupBurnBalance,2);

		syrupCirculatingSupply = syrupTotalSupply-syrupBurnBalance;
		const syrupCirculatingSupplyArea = document.getElementById("syrupcirculatingsupply");
		syrupCirculatingSupplyArea.innerHTML = displayPrice(syrupCirculatingSupply,2)+"";

		let _syrupPrice = 0;
		if (MAPLESYRUP_PRICE_LP != null)
			_syrupPrice = await getTokenPrice(POOL_TOKEN_ADDR, prices, poolABI, MAPLESYRUP_PRICE_LP);

		syrupTokenPriceArea = document.getElementById("syrupTokenPrice");
		syrupTokenPriceArea.innerHTML = "$"+_syrupPrice;

		const footerSyrupPriceArea = document.getElementById("footer_syrupprice");
		if (footerSyrupPriceArea)
		footerSyrupPriceArea.innerHTML = "Syrup Price: " + "$"+displayPrice(_syrupPrice,2);

		const syrupMarketCap = _syrupPrice * syrupTotalSupply;
		const syrupmarketCapArea = document.getElementById("syrupmarketCap");
		syrupmarketCapArea.innerHTML = "$"+displayPrice(syrupMarketCap,2);

		const footerSyrupMarketCapArea = document.getElementById("footer_syrupmarketcap");
		footerSyrupMarketCapArea.innerHTML = "Syrup MCap: " + "$"+displayPrice(syrupMarketCap,2)+"";

		const syrupmaxTransferAmountRaw = await poolContract.methods.maxTransferAmount().call();
		const syrupmaxTransferAmount = web3api.utils.fromWei(syrupmaxTransferAmountRaw);
		syrupmaxTransferAmountArea = document.getElementById("syrupmaxTransferAmount");
		syrupmaxTransferAmountArea.innerHTML = displayPrice(syrupmaxTransferAmount)+"";
		poolTokenPrice = _syrupPrice;	
	}

	const totalSupplyRaw = await tokenContract.methods.totalSupply().call();
	const totalSupply = web3api.utils.fromWei(totalSupplyRaw);
	const tokenSupplyArea = document.getElementById("tokensupply");
	tokenSupplyArea.innerHTML = displayPrice(totalSupply,2);

	/*
	getBalance(tokenContract, burnWallet).then(function (bal) {
		var decimals = 0;
		tokenContract.methods.decimals().call().then(function(result) {
			decimals = result;
			let tokBal = addDecimalPlace(bal,decimals);
			const burnedTokensArea = document.getElementById("burnedtokens");
			burnedTokensArea.innerHTML = displayPrice(tokBal,2)+"";
		});
	});*/

	let burnedTokenBalRaw = await tokenContract.methods.balanceOf(burnWallet).call();
	let decimals = await tokenContract.methods.decimals().call();
	let burnedTokens = new BigNumber(burnedTokenBalRaw);
	burnedTokens = burnedTokens.shiftedBy(parseInt(-decimals)).toFixed();
	const burnedTokensArea = document.getElementById("burnedtokens");
	burnedTokensArea.innerHTML = displayPrice(burnedTokens,2)+"";


	circulatingSupply = totalSupply-burnedTokens;
	const circulatingsupplyArea = document.getElementById("circulatingsupply");
	circulatingsupplyArea.innerHTML = displayPrice(circulatingSupply,2)+"";

	masterChefContract = new web3api.eth.Contract(MASTER_CHEF_ABI,MASTER_CHEF_ADDR);
	if (typeof ethereum !== 'undefined')
		masterChefContractMM = new web3.eth.Contract(MASTER_CHEF_ABI,MASTER_CHEF_ADDR);
	const emissionsPerBlockRaw = await masterChefContract.methods.tokenPerBlock().call();
	const emissionsPerBlock = web3api.utils.fromWei(emissionsPerBlockRaw);
	const totalAllocPoints = await masterChefContract.methods.totalAllocPoint().call();

	//const _maplePrice = await getMaplePrice(prices);
	const _maplePrice = await getTokenPrice(MAPLE_TOKEN_ADDR, prices, poolABI, MAPLE_PRICE_LP);
	if (POOL_CLASS == "maple")
		poolTokenPrice =_maplePrice;

	const maplePriceArea = document.getElementById("nativeTokenPrice");
	maplePriceArea.innerHTML = '$'+_maplePrice;

	const footerTokenPriceArea = document.getElementById("footer_price");
	if (footerTokenPriceArea)
		footerTokenPriceArea.innerHTML = "Maple Price: " + "$"+displayPrice(_maplePrice,2);

	const marketCapArea = document.getElementById("marketCap");
	const footerMarketCapArea = document.getElementById("footer_marketcap");
	const marketCap = _maplePrice * totalSupply;
	//marketCapArea.innerHTML = "$"+getToFixed(marketCap,2)+"";
	marketCapArea.innerHTML = "$"+displayPrice(marketCap,2)+"";
	footerMarketCapArea.innerHTML = "Maple MCap: " + "$"+displayPrice(marketCap,2)+"";

	const maxTransferAmountRaw = await tokenContract.methods.maxTransferAmount().call();
	const maxTransferAmount = web3api.utils.fromWei(maxTransferAmountRaw);
	maxTransferAmountArea = document.getElementById("maxTransferAmount");
	maxTransferAmountArea.innerHTML = displayPrice(maxTransferAmount)+"";


   tokenPrices = prices;
   masterChefProp = {emissionsPerBlock: emissionsPerBlock, totalAllocPoints: totalAllocPoints};
   maplePrice = _maplePrice;
   
   if (MC_SUPPORTS_BOOST)
	   baseRewardPct = await masterChefContract.methods.baseRewardPct().call();

	await setupPools(prices,emissionsPerBlock,totalAllocPoints,poolTokenPrice, baseRewardPct);
	if (selectedAddress != null)
		setupAccount(selectedAddress);
}


let innerReturnFunction = ({res, poolId}) => {
	return {res, poolId}; // return an object
}

function toFixed(x) {
	if (Math.abs(x) < 1.0) {
	  var e = parseInt(x.toString().split('e-')[1]);
	  if (e) {
		  x *= Math.pow(10,e-1);
		  x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
	  }
	} else {
	  var e = parseInt(x.toString().split('+')[1]);
	  if (e > 20) {
		  e -= 20;
		  x /= Math.pow(10,e);
		  x += (new Array(e+1)).join('0');
	  }
	}
	return x;
  }

async function connected(account)
{
	rewardToken = POOL_TOKEN_TICKER;
	for (id = 0; id < poolCount; id++)
	{
		const poolArea = document.getElementsByClassName('pool-'+id)[0];
		const pendingTokensRaw = await masterChefContract.methods.pendingToken(id,account).call();
		pendingTokens = web3api.utils.fromWei(pendingTokensRaw);
		pendingTokens = displayPrice(pendingTokens,2);

		const userInfo = await masterChefContract.methods.userInfo(id,account).call();

		const contractAddr = poolContracts[id];
		const poolTokenContract = new web3api.eth.Contract(tokenABI,contractAddr);
		poolTokenDecimals = poolDecimals[contractAddr];
		
		let stakedTokensRaw = userInfo.amount;
		let stakedTokensRawBN = new BigNumber(stakedTokensRaw);
		let stakedTokens = stakedTokensRawBN.shiftedBy(parseInt(-poolTokenDecimals)).toFixed();
		//stakedTokens = toFixed(stakedTokensRaw/(10**poolTokenDecimals));

		if (poolArea)
		{
			const approveButton = poolArea.getElementsByClassName('approve')[0];
			approveButton.disabled = false;
			const connectText = poolArea.getElementsByClassName('connectwallet')[0];
			connectText.classList.add("d-none");

			var pendingTokenContent = pendingTokens;
			if (pendingTokens > 0)
			{
				var pendingTokensInDollars = pendingTokens*tokenPrice;
				pendingTokenContent = pendingTokenContent + " ($"+getToFixed(pendingTokensInDollars)+")";
			}

			const pendingTokenArea = poolArea.getElementsByClassName('tokensearned')[0];
			if (pendingTokensRaw > 0)
			{
				pendingTokenContent = pendingTokenContent+" <a data-pid=\""+id+"\"href=\"#\" id=\"harvest-"+id+"\">Harvest</a>";
			}

			const earnTokenArea = poolArea.getElementsByClassName("earnToken")[0];
			earnTokenArea.innerHTML = rewardToken;

			pendingTokenArea.innerHTML = pendingTokenContent;

			if (pendingTokensRaw > 0)
			{
				const harvestButton = document.getElementById("harvest-"+id);
				harvestButton.addEventListener("click",harvestClicked);
			}

			const stakedTokenArea = poolArea.getElementsByClassName('tokensstaked')[0];
			stakedTokenArea.setAttribute("data-tokensstaked",stakedTokens);

			var stakedValueUSD;
			if (stakedTokens > 0)
			{
				const tokenPrice = poolArea.getAttribute("token-price");
				//const tokenPrice = tokenPoolPrices[contractAddr];
				if (tokenPrice)
				{
					stakedValueUSD = stakedTokens * tokenPrice;
				}
			}

			stakedTokenArea.innerHTML = stakedTokens+"";
			const tokenStats = poolArea.getElementsByClassName("tokenstats")[0];
			tokenStats.classList.remove("d-none");

			const approveBtn = poolArea.getElementsByClassName('approve')[0];
			const contractAddr = approveBtn.getAttribute("data-contract");
			const stakingForm = poolArea.getElementsByClassName('stakingform')[0];
			const unstakingForm = poolArea.getElementsByClassName('unstakingform')[0];

			let walletAddress = ethereum.selectedAddress;
			const poolTokenContract = new web3api.eth.Contract(tokenABI,contractAddr);
			var balance = await poolTokenContract.methods.balanceOf(walletAddress).call();
			var decimals = 0;
			var decimals = await poolTokenContract.methods.decimals().call();
			let tokBalRawBN = new BigNumber(balance);
			let tokBalBN = tokBalRawBN.shiftedBy(parseInt(-decimals));

			const tokenBalanceArea = poolArea.getElementsByClassName('tokenbalance')[0];
			//tokenBalanceArea.setAttribute("tokenbalance",tokBal);
			tokenBalanceArea.setAttribute("data-yourtokens",tokBalBN.toFixed());
			tokenBalanceArea.innerHTML = tokBalBN.toFixed();

			let poolId = id;

			checkAllowance(contractAddr,account,MASTER_CHEF_ADDR,poolId).then(function ({res,poolId,test}) {
				let allowance = res;
				//console.log("allowance on pool:" + poolId + " is ",res);
				if (allowance > 0)
					allowPool(approveBtn,stakingForm,unstakingForm, poolId, poolTokenDecimals, res, contractAddr);
			});

			if (stakedTokens > 0)
				unstakingForm.classList.remove("d-none");
		}
	}
}

/*
function addDecimalPlace(numberAsString,decimals)
{
	//balance is: 108745913455793527302 tokbal is : 108.74591345579353 decimals: 18 tokBalNew:
	if (numberAsString == 0)
		return 0;
	const len = numberAsString.length;
	const startPiece=numberAsString.substr(0,(len-decimals));
	const endPiece=numberAsString.substring(len-decimals);
	return startPiece+"."+endPiece;
}*/

function allowPool(approveBtn, stakingForm, unstakingForm, poolId, tokenDecimals, allowance, contractAddr)
{
	approveBtn.classList.add("d-none");
	stakingForm.classList.remove("d-none");

	const stakeButton = stakingForm.querySelector("[data-action='stake']");
	stakeButton.setAttribute("data-pid",poolId);
	stakeButton.setAttribute("data-decimals",tokenDecimals);
	stakeButton.setAttribute("data-allowance",allowance);	
	if (contractAddr != null)
		stakeButton.setAttribute("data-contract",contractAddr);
		
	const allowanceHumanReadable = allowance/(10**tokenDecimals);
	stakeButton.setAttribute("data-bs-content","Allowance: " + allowanceHumanReadable);

	stakeButton.addEventListener("click",stakeClicked);

	const unstakeButton = unstakingForm.querySelector("[data-action='unstake']");
	unstakeButton.setAttribute("data-pid",poolId);
	unstakeButton.setAttribute("data-decimals",tokenDecimals);
	unstakeButton.addEventListener("click",unstakeClicked);

	const maxStakeButton = stakingForm.querySelector("[data-action='maxstake']");
	maxStakeButton.setAttribute("data-pid",poolId);
	maxStakeButton.addEventListener("click",maxStakeClicked);

	const maxUnstakeButton = unstakingForm.querySelector("[data-action='maxunstake']");
	maxUnstakeButton.setAttribute("data-pid",poolId);
	maxUnstakeButton.addEventListener("click",maxUnstakeClicked);
}

async function stakeClicked(event)
{
	const button = event.target;
	setButtonLoading(button,"Staking...");

	let pid = button.getAttribute("data-pid");
	let allowance = button.getAttribute("data-allowance");

	const poolArea = document.getElementsByClassName('pool-'+pid)[0];
	const stakeAmountInput = poolArea.querySelector("[data-action='stakeamount']");
	var stakeAmtValue = stakeAmountInput.value;
	const tokenDecimals = button.getAttribute("data-decimals");	
	let stakeAmountBN = new BigNumber(stakeAmtValue);
	stakeAmtValue = stakeAmtValue*(10**tokenDecimals);
	stakeAmountBN = stakeAmountBN.shiftedBy(parseInt(tokenDecimals));
	if (allowance < stakeAmtValue)
	{
		// not enough allowance, need to approve.
		console.log("WARNING NOT ENOUGH ALLOWANCE!");
		const contr = button.getAttribute("data-contract");
		//console.log("contr: " + contr);
		const tokenContract = new web3api.eth.Contract(tokenABI,contr);		
		const numToApprove = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
		await doApprove(tokenContract,MASTER_CHEF_ADDR,numToApprove);		
	}

	doDeposit(pid,stakeAmountBN).then(function (result) {		
		console.log("depositRes",result);
		unsetButtonLoading(button,"Stake");
	});
}

function setButtonLoading(button,buttonText)
{
	button.disabled = true;
	button.innerHTML = "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span><span>"+buttonText+"</span>";
}

function unsetButtonLoading(button,buttonText)
{
	button.disabled = false;
	button.innerHTML = buttonText;
}

function maxUnstakeClicked(event)
{
	const button = event.target;	
	let pid = button.getAttribute("data-pid");
	const poolArea = document.getElementsByClassName('pool-'+pid)[0];
	const totalStakedArea = poolArea.querySelector("[data-tokensstaked]");
	const totalStaked = totalStakedArea.getAttribute("data-tokensstaked");
	const unstakeAmountInput = poolArea.querySelector("[data-action='unstakeamount']");
	unstakeAmountInput.value = totalStaked;
}

function maxStakeClicked(event)
{
	const button = event.target;
	let pid = button.getAttribute("data-pid");
	const poolArea = document.getElementsByClassName('pool-'+pid)[0];
	const totalStakedArea = poolArea.querySelector("[data-yourtokens]");
	const yourTokens = totalStakedArea.getAttribute("data-yourtokens");
	const stakeAmountInput = poolArea.querySelector("[data-action='stakeamount']");
	stakeAmountInput.value = yourTokens;
}

async function harvestClicked(event)
{
	const button = event.target;
	let account = ethereum.selectedAddress;
	let pid = button.getAttribute("data-pid");

	canHarvest = await masterChefContract.methods.canHarvest(pid,ethereum.selectedAddress).call();

	if (canHarvest)
	{
		doHarvest(pid).then(function(result) {
			console.log('harvestRes',result);
		});
	}
	else
	{
		//alert("cannot harvest just yet.");
		showModal("Cannot harvest yet","Please wait a bit longer before you can harvest rewards.");
	}
}

function showModal(title, body) {
	var myModalEl = document.getElementById('myModal');
	var modalTitle = document.getElementById('myModalTitleLabel');
	var myModalBody = document.getElementById('myModalBody');
	modalTitle.innerHTML = title;
	myModalBody.innerHTML = body;
	var myModal = new bootstrap.Modal(myModalEl);
	myModal.show();
}

function unstakeClicked(event) {
	const button = event.target;
	setButtonLoading(button,"Unstake...");
	let pid = button.getAttribute("data-pid");
	const poolArea = document.getElementsByClassName('pool-'+pid)[0];
	const stakeAmountInput = poolArea.querySelector("[data-action='unstakeamount']");
	const tokenDecimals = button.getAttribute("data-decimals");	
	var stakeAmtValue = stakeAmountInput.value;
	
	stakeAmtValue = stakeAmtValue*(10**tokenDecimals);

	doWithdraw(pid,stakeAmtValue).then(function (result) {
		console.log("withdrawRes",result);
		unsetButtonLoading(button,"Unstake");
	});
}

async function doCheckHarvest(pid,account) {
	res = await masterChefContractMM.methods.canHarvest(pid,ethereum.selectedAddress).send({from:ethereum.selectedAddress});
	return res;
}

async function doHarvest(pid) {
	var res;
	try {
		res = await masterChefContractMM.methods
			.deposit(pid,0)
			.send({from:ethereum.selectedAddress})
			.once("receipt", function(receipt) 
			{
				updatePoolInfo(pid,tokenPrices,masterChefProp.emissionsPerBlock,masterChefProp.totalAllocPoints,poolTokenPrice, baseRewardPct);
				connected(ethereum.selectedAddress);
				console.log('harvestRes', receipt);
				const transId = receipt.transactionHash;
				const transUrl = getScannerLinkForTransaction(transId);
				createToast("Harvest Transaction","5 seconds ago","Your harvest transaction has been completed.  <a href='"+transUrl+"' target='_blank' />View "+transId+"</a>");
				//alert("Harvest Transaction Completed");
			});
	}
	catch(err) {
		console.log("Exception in harvest call");
	}
	return res;
}

function numberToString(num)
{
    let numStr = String(num);

    if (Math.abs(num) < 1.0)
    {
        let e = parseInt(num.toString().split('e-')[1]);
        if (e)
        {
            let negative = num < 0;
            if (negative) num *= -1
            num *= Math.pow(10, e - 1);
            numStr = '0.' + (new Array(e)).join('0') + num.toString().substring(2);
            if (negative) numStr = "-" + numStr;
        }
    }
    else
    {
        let e = parseInt(num.toString().split('+')[1]);
        if (e > 20)
        {
            e -= 20;
            num /= Math.pow(10, e);
            numStr = num.toString() + (new Array(e + 1)).join('0');
        }
    }

    return numStr;
}

async function doDeposit(pid,tokens) {
	let tokWei = numberToString(tokens);
	//console.log("doDeposit and tokWei: " + tokWei);
	var res;
	try
	{
		res = await masterChefContractMM.methods
			.deposit(pid,tokWei)
			.send({from:ethereum.selectedAddress})
			.once("receipt", function(receipt) 
			{
				updatePoolInfo(pid,tokenPrices,masterChefProp.emissionsPerBlock,masterChefProp.totalAllocPoints,poolTokenPrice, baseRewardPct);
				connected(ethereum.selectedAddress);
				const transId = receipt.transactionHash;
				const transUrl = getScannerLinkForTransaction(transId);
				createToast("Stake Transaction","5 seconds ago","Your stake transaction has been completed.  <a href='"+transUrl+"' target='_blank' />View "+transId+"</a>");
				clearStakeBox(pid);
				//alert("Stake Transaction Completed");
			});
	}
	catch(err) {
		console.log("Exception in deposit call: " + err);
	}
	return res;
}

function clearStakeBox(id)
{
	const poolArea = document.getElementsByClassName('pool-'+id)[0];
	const stakeAmountInput = poolArea.querySelector("[data-action='stakeamount']");
	if (stakeAmountInput)
		stakeAmountInput.value = "";
}

function clearUnStakeBox(id)
{
	const poolArea = document.getElementsByClassName('pool-'+id)[0];
	const unstakeAmountInput = poolArea.querySelector("[data-action='unstakeamount']");
	if (unstakeAmountInput)
		unstakeAmountInput.value = "";
}

async function doWithdraw(pid,tokens) {
	//let tokWei = web3api.utils.toWei(tokens+"");
	let tokWei = numberToString(tokens);
	var res;
	try {
		res = await masterChefContractMM.methods
			.withdraw(pid,tokWei)
			.send({from:ethereum.selectedAddress})
			.once("receipt", function(receipt) 
			{
				updatePoolInfo(pid,tokenPrices,masterChefProp.emissionsPerBlock,masterChefProp.totalAllocPoints,poolTokenPrice, baseRewardPct);
				connected(ethereum.selectedAddress);
				const transId = receipt.transactionHash;
				const transUrl = getScannerLinkForTransaction(transId);
				createToast("Unstake Transaction","5 seconds ago","Your un-stake transaction has been completed.  <a href='"+transUrl+"' target='_blank' />View "+transId+"</a>");
				clearUnStakeBox(pid);
				//alert("Unstake Transaction Completed");
			});
	}
	catch(err) {
		console.log("Exception in withdraw call");
	}
	return res;
}

async function setupPools(prices,emissionsPerBlock,totalAllocPoints,poolTokenPrice, baseRewardPct)
{
   poolCount = parseInt(await masterChefContract.methods.poolLength().call(), 10);

   const poolContainer = document.getElementById("poolcontainer");
   const pool1 = poolContainer.getElementsByClassName("pool")[0];
   if (POOL_CLASS != null && POOL_CLASS != "")
	pool1.classList.add(POOL_CLASS);

   var tvl = 0;

	for (i = 0; i < poolCount; i++)
	{
		if (i > 0)
			injectNewPool(i,poolContainer,pool1);

		val = await updatePoolInfo(i,prices,emissionsPerBlock,totalAllocPoints,poolTokenPrice,baseRewardPct);
		tvl = tvl + val;
	}

	const tvlArea = document.getElementById("totalValueLocked");
	if (tvlArea != null)
	{
		tvlArea.innerHTML = "$"+displayPrice(tvl,2);
	}

	const footerTVLArea = document.getElementById("footer_tvl");
	if (footerTVLArea)
		footerTVLArea.innerHTML = "TVL: "+"$"+displayPrice(tvl,2);
	
	const loadingPools = document.getElementById("loading_pools");
	loadingPools.classList.add("d-none");
	poolContainer.classList.remove("d-none");
}


function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
	decimalCount = Math.abs(decimalCount);
	decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

	const negativeSign = amount < 0 ? "-" : "";

	let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
	let j = (i.length > 3) ? i.length % 3 : 0;

	return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
	console.log(e)
  }
}

function getParameterCaseInsensitive(object, key) {
	return object[Object.keys(object)
		.find(k => k.toLowerCase() === key.toLowerCase())
	];
}

function displayPrice(price,decimals) {
	return formatMoney(price);
}

function injectNewPool(id,poolContainer,pool)
{
	var newPool = pool.cloneNode(true);
	newPool.classList.remove("pool-0");
	newPool.classList.add("pool-"+id);
	poolContainer.appendChild(newPool);
}

async function updatePoolInfo(id,prices,emissionsPerBlock,totalAllocPoints,poolTokenPrice,baseRewardPct)
{
	const poolInfo = await masterChefContract.methods.poolInfo(id).call();
	poolContracts[id] = poolInfo.lpToken;
	let account = null;
	if (typeof ethereum !== 'undefined')
		account = ethereum.selectedAddress;

	var timestampDiff = null;
	if (account != null)
	{
		const userInfo = await masterChefContract.methods.userInfo(id,account).call();
		const nextHarvestUntil = userInfo.nextHarvestUntil;
		const currentTimestamp = Math.floor(Date.now() / 1000);
		timestampDiff = nextHarvestUntil - currentTimestamp;
	}

	const poolArea = document.getElementsByClassName('pool-'+id)[0];
	if (poolArea)
	{
		const lockArea = poolArea.getElementsByClassName("locked")[0];
		if (timestampDiff > 0)
		{
			var date = new Date(timestampDiff);
			// hide lock.
			lockArea.classList.remove("d-none");
			const timeLeftArea = lockArea.getElementsByClassName("timeleft")[0];
			const minsLeft = timestampDiff / 60;
			if (minsLeft < 60)
				timeLeftArea.innerHTML = Math.round(minsLeft) + " m";
			else
			{
				const hours = minsLeft / 60;
				const rHours = Math.floor(hours);
				var minutes = (hours - rHours) * 60;
				var rMinutes = Math.round(minutes);
				timeLeftArea.innerHTML = Math.floor(rHours) + "h " + rMinutes +"m";
			}
		}
		else
		{
			lockArea.classList.add("d-none");
		}

		var multiplierArea = poolArea.getElementsByClassName('multiplier')[0];
		multiplierArea.innerHTML = poolInfo.allocPoint/MULTIPLIER_DIVISOR+"x";

		var depFeeArea = poolArea.getElementsByClassName('depositFee')[0];
		depFeeArea.innerHTML = poolInfo.depositFeeBP/100+"%";
		var poolTitleArea = poolArea.getElementsByClassName('poolTitle')[0];
		const lpContractAddr = poolInfo.lpToken;
		var tokenName = poolInfo.lpToken;

		var tokenPrice;

		token = maticTokens.find( record => record.contract === poolInfo.lpToken);
		token2 = tokens.find( record => record.contract === poolInfo.lpToken);

		if (token)
			tokenName = token.symbol;
		else if (poolInfo.lpToken == POOL_TOKEN_ADDR)
			tokenName = POOL_TOKEN_TICKER;
		else if (token2)
			tokenName = token2.symbol;

		const lpContract = new web3api.eth.Contract(poolABI,poolInfo.lpToken);
		const poolTokenDecimals = await lpContract.methods.decimals().call();
		poolDecimals[poolInfo.lpToken] = poolTokenDecimals;
		var imgWidth = 50;
		var fontSize = "fs-3";
		if (tokenName.includes("-"))
		{
			// custom code for LP token pricing.
			var token0 = null;
			var token1 = null;
			//var totalSupply;
			token0 = await lpContract.methods.token0().call();
			token1 = await lpContract.methods.token1().call();
			totalSupplyRaw = await lpContract.methods.totalSupply().call();
			let totalSupplyRawBN = new BigNumber(totalSupplyRaw);
			let totalSupply = totalSupplyRawBN.shiftedBy(parseInt(-18)).toFixed();
			//totalSupply = totalSupply / Math.pow(10, 18);
			//totalSupply = addDecimalPlace(totalSupply, 18);

			var token0Price = 0;
			var token1Price = 0;
			if (prices[token0])
				token0Price = prices[token0].usd;
			if (prices[token1])
				token1Price = prices[token1].usd;

			const reserves = await getReserves(lpContract);

			var token0Info = maticTokens.find( record => record.contract === token0);
			var token1Info = maticTokens.find( record => record.contract === token1);

			var token0Decimals = poolDecimals[token0];
			var token1Decimals = poolDecimals[token1];

			const reserve0 = reserves[0] / Math.pow(10, token0Decimals);
			const reserve1 = reserves[1] / Math.pow(10, token1Decimals);

			const totalValueOfLP = 	token0Price * reserve0 + token1Price * reserve1;
			tokenPrice = totalValueOfLP / totalSupply;
			poolArea.setAttribute("token-price",tokenPrice);
			var rate = reserve1/reserve0;
			var altRate = reserve0/reserve1;
			imgWidth = 100;
			fontSize = "fs-6";
			var priceObj = {usd: tokenPrice};
			tokenPrices[poolInfo.lpToken] = priceObj;
		}

		poolTitleArea.innerHTML = "<img src=\"/assets/tokens/"+poolInfo.lpToken+".png\" height='50' width='"+imgWidth+"'/><span class='"+fontSize+"'>"+tokenName+"</span>";
		
		var baseAPR = 0;

		const tokenDecimals = poolDecimals[poolInfo.lpToken];
		const poolLPContract = new web3api.eth.Contract(tokenABI, poolInfo.lpToken);
		var poolTokenInContract = await getBalance(poolLPContract, MASTER_CHEF_ADDR);
		poolTokenInContract = poolTokenInContract / Math.pow(10, tokenDecimals);

		var tokenPriceDisplay = "--";
		if (prices[lpContractAddr] && prices[lpContractAddr].usd)
			tokenPrice = prices[lpContractAddr].usd;

		const tokenPriceContainer = poolArea.getElementsByClassName('tokenPriceContainer')[0];

		tokenPoolPrices[lpContractAddr] = tokenPrice;

		if (tokenPrice > 0)
			tokenPriceDisplay = tokenPrice;

		var poolTotalValueLocks = poolTokenInContract * tokenPrice;
		const liquidityContainer = poolArea.getElementsByClassName('liquidityContainer')[0];

		var liquidityArea = poolArea.getElementsByClassName('liquidity')[0];

		if (poolTotalValueLocks > 0) {

			var liquidityLink = "";
			var liquidityHref = "";
			if (token0 && token1)
			{
				liquidityLink = "https://quickswap.exchange/#/add/"+token0+"/"+token1;
				liquidityHref = "<a href='"+liquidityLink+"' target='_blank'/>Create LP</a>";
			}

			liquidityArea.innerHTML = '$'+displayPrice(poolTotalValueLocks,2) + " "+liquidityHref;
			liquidityContainer.classList.remove("d-none");
		}
		else {
			liquidityContainer.classList.add("d-none");
		}

		const allocPoint = poolInfo.allocPoint;
		const dailyPoolEmissions = emissionsPerBlock * BLOCKS_PER_DAY * ( allocPoint / totalAllocPoints );


		const isBoosted = poolInfo.isBoosted;
		
		if (tokenPrice >0)
		{
			baseAPR = ((poolTokenPrice * dailyPoolEmissions * 365) / poolTotalValueLocks) * baseRewardPct/10000;
		}

		if (isBoosted)
		{		
			//boostApr = apr * boostReward;
			//const maxBoostAmt = (apr * (1/(baseRewardPct/10000))) - apr;

			var boostReward  = await masterChefContract.methods.getTotalRewardPct(id,account).call();
			poolArea.classList.add("boosted");
			const boostedArea = poolArea.getElementsByClassName("boost")[0];
			boostedArea.classList.remove("d-none");
			const boostedApr = boostedArea.getElementsByClassName("boostapr")[0];
			//console.log("poolid: " + id + " BoostedApr: baseApr: " + baseAPR + " boostReward: " + boostReward +  "baseRewardPct: " + baseRewardPct);

			boostedApr.innerHTML = "+"+Math.round(((poolTokenPrice * dailyPoolEmissions * 365) / poolTotalValueLocks) * (boostReward - baseRewardPct)/(10000) * 100) +"%";
			//boostedApr.innerHTML = Math.round( ((poolTokenPrice * dailyPoolEmissions * 365) / poolTotalValueLocks) * (boostReward - baseRewardPct)/(10000-baseRewardPct) * 100 );
			//boostedApr.innerHTML = "+"+Math.round(baseAPR * (boostReward)/10000 * 100)  + "%";
			//boostedApr.innerHTML = "+"+Math.round(baseAPR * (boostReward - baseRewardPct)/10000 * 100)  + "%";
		}
		else if (MC_SUPPORTS_BOOST)
		{
			// since we support boost but this isn't a boosted pool we will assume it gets auto boosted.
			poolArea.classList.add("boosted");
			const boostedArea = poolArea.getElementsByClassName("boost")[0];
			boostedArea.classList.remove("d-none");
			const boostedApr = boostedArea.getElementsByClassName("boostapr")[0];
			boostedApr.innerHTML = "+"+Math.round(baseAPR*100) + "%";
		}		

		aprArea =  poolArea.getElementsByClassName('apr')[0];
		aprArea.innerHTML = Math.round(baseAPR*100) + "%";


		var loader = poolArea.getElementsByClassName('loader')[0];
		loader.classList.add("d-none");
		var poolInfoArea = poolArea.getElementsByClassName('poolinfo')[0];
		poolInfoArea.classList.remove("d-none");

		const approveButton = poolArea.getElementsByClassName('approve')[0];
		approveButton.setAttribute("data-contract",poolInfo.lpToken);
		approveButton.setAttribute("data-poolid",id);
		approveButton.addEventListener('click',approveContract);

		if (MC_SUPPORTS_BOOST)
		{
			const boosterPoolArea = poolArea.getElementsByClassName('boosterpool')[0];
			const boostHeaderArea = poolArea.getElementsByClassName('boost-header')[0];
			if (poolInfo.lpToken == MAPLE_PRICE_LP)
			{
				boosterPoolArea.classList.remove('d-none');
				boostHeaderArea.classList.remove('d-none');
			}
			else
			{
				boosterPoolArea.classList.add('d-none');
				boostHeaderArea.classList.add('d-none');
			}
		}
		/*
		var popoverTriggerList = [].slice.call(poolArea.querySelectorAll('[data-bs-toggle="popover"]'))
		var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
			  return new bootstrap.Popover(popoverTriggerEl);
		});*/
	}

	return poolTotalValueLocks;
}

async function approveContract(event)
{
	const button = event.target;
	const contr = button.getAttribute("data-contract");
	button.disabled = true;
	const tokenContractMM = new web3.eth.Contract(tokenABI,contr);
	const numToApprove = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
	const tokenDecimals = await tokenContractMM.methods.decimals().call();

	doApprove(tokenContractMM,MASTER_CHEF_ADDR,numToApprove).then(function (result) {
		// Need to enable staking here.
		if (result.status == true)
		{
			const poolId = button.getAttribute("data-poolid");
			const poolArea = document.getElementsByClassName('pool-'+poolId)[0];
			const approveBtn = poolArea.getElementsByClassName('approve')[0];
			const stakingForm = poolArea.getElementsByClassName('stakingform')[0];
			const unstakingForm = poolArea.getElementsByClassName('unstakingform')[0];
			allowPool(approveBtn, stakingForm, unstakingForm, poolId, tokenDecimals, numToApprove, contr);
		}
	});
}

async function getLPTokens(lpContract) {
	const token0 = await lpContract.methods.token0().call();
	const token1 = await lpContract.methods.token1().call();
	return {token0, token1};
}

async function getReserves(lpContract) {
	const reserves = await lpContract.methods.getReserves().call();
	return reserves;
}

async function checkAllowance(contractAddr,owner,spender,poolId) {
	const tokenContract = new web3api.eth.Contract(tokenABI,contractAddr);
	var res = await tokenContract.methods.allowance(owner,spender).call();
	return innerReturnFunction({res,poolId});
}

async function doApprove(tokenContract,approveTok,tokens) {	
	res = await tokenContract.methods.approve(approveTok,tokens).send({from:ethereum.selectedAddress});
	return res;
}

async function getBalance(tokenContract,walletAddress) {
  balance = await tokenContract.methods.balanceOf(walletAddress).call();
  return balance;
}

async function getTokenInfo(tokenContract) {
  const totalSupplyRaw = await tokenContract.methods.totalSupply().call();
   const totalSupply = web3api.utils.fromWei(totalSupplyRaw);
  return {totalSupply };
}


function getRandomRPC()
{
	let numURLS = RPC_API_LIST.length;
	let rndItem = Math.floor(Math.random() * numURLS); // random number between 0 and (the number of urls - 1)
	return RPC_API_LIST[rndItem];
}

window.addEventListener('load', function() {
	let selectedRPC = getRandomRPC();

	if (TESTMODE)
		selectedRPC = "http://localhost:8545";

	console.log("Selected Internal RPC url: " + selectedRPC);
	web3api = new Web3(new Web3.providers.HttpProvider(selectedRPC));
	//web3api = new Web3(new Web3.providers.WebsocketProvider(RPC_API_URL3_WS));

	if (typeof web3 !== 'undefined') {
		//console.log("Given provider: ", Web3.givenProvider);
		web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
		console.log("Web3 configured");		
		console.log("ethereum.networkVersion:"+ethereum.networkVersion);
		console.log("ethereum.selectedAddress:"+ethereum.selectedAddress);

		if (ethereum.selectedAddress)
		{
			//console.log("got a selectedAddress: " + ethereum.selectedAddress);
			startApp(ethereum.selectedAddress);
			//getAccount();
		}
		else
		{
			startApp(null);
		}

	} else {
		console.log("No web3.");		
		//web3api = new Web3(new Web3.providers.HttpProvider('https://polygon-mainnet.infura.io/v3/d6a4db6e85b648169b520209a7775dbe'));
		
		startApp(null);		
	}

	if (window.ethereum)
	{
		// detect Metamask account change
		window.ethereum.on('accountsChanged', function (accounts) {
			console.log('accountsChanges',accounts);
			location.reload();
		});

		// detect Network account change
		window.ethereum.on('chainChanged', function(networkId){
			console.log('chainChanged',networkId);
			location.reload();
		});
	}

	/*
	window.ethereum.on('accountsChanged', handleAccountsChanged);
	function handleAccountsChanged(accounts) {
	if (accounts.length === 0) {
	  // MetaMask is locked or the user has not connected any accounts
	  console.log('Please connect to MetaMask.');
	} else if (accounts[0] !== currentAccount) {
	  currentAccount = accounts[0];
	  console.log("Connected and account is: " + currentAccount);
	  // Do any other work!
	}
  	}
	*/
	/*
	var toastElList = [].slice.call(document.querySelectorAll('.toast'));
	var toastList = toastElList.map(function (toastEl) {
		const option = {animation: true};
		toasty = new bootstrap.Toast(toastEl, option);
		return toasty;
	});
	*/
});

function createToast(titleVal,timeVal, bodyVal, transactionHash)
{
	const toastArea = document.getElementById("toastArea");
	if (toastArea == null)
		return;
	
	var toastStr = "<div id='liveToast' class='toast hide' role='alert' aria-live='assertive' aria-atomic='true' data-bs-delay='15000'><div class='toast-header'><strong class='me-auto'>"+titleVal+"</strong><small>"+timeVal+"</small><button type='button' class='btn-close' data-bs-dismiss='toast' aria-label='Close'></button></div><div class='toast-body' id='toastBody'>"+bodyVal+"</div></div>";
	var toastEl = createElementFromHTML(toastStr);
	toastArea.appendChild(toastEl);
	toasty = new bootstrap.Toast(toastEl, {animation:true});
	toasty.show();
}

function getScannerLinkForTransaction(transactionId)
{
	return "https://www.polygonscan.com/tx/"+transactionId;		
}

function createElementFromHTML(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();
  
	// Change this to div.childNodes to support multiple top-level nodes
	return div.firstChild; 
}