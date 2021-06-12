//const App = await init_ethers();
var mapleTokenInfo = null;
const MAPLE_CHEF_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_token","internalType":"contract PolyMaple"},{"type":"uint256","name":"_startBlock","internalType":"uint256"},{"type":"uint256","name":"_tokenPerBlock","internalType":"uint256"},{"type":"uint256","name":"_startHarvestBlock","internalType":"uint256"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmissionRateUpdated","inputs":[{"type":"address","name":"caller","internalType":"address","indexed":true},{"type":"uint256","name":"previousAmount","internalType":"uint256","indexed":false},{"type":"uint256","name":"newAmount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OperatorshipTransferred","inputs":[{"type":"address","name":"previousOperator","internalType":"address","indexed":true},{"type":"address","name":"newOperator","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"RewardLockedUp","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amountLockedUp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"BONUS_MULTIPLIER","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"MAXIMUM_HARVEST_INTERVAL","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IBEP20"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"uint256","name":"_harvestInterval","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"canHarvest","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devAddress","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"feeAddress","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"operator","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingToken","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IBEP20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accTokenPerShare","internalType":"uint256"},{"type":"uint16","name":"depositFeeBP","internalType":"uint16"},{"type":"uint256","name":"harvestInterval","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"uint256","name":"_harvestInterval","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevAddress","inputs":[{"type":"address","name":"_devAddress","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setFeeAddress","inputs":[{"type":"address","name":"_feeAddress","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startHarvestBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract PolyMaple"}],"name":"token","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenPerBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalLockedUpRewards","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOperatorship","inputs":[{"type":"address","name":"newOperator","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[{"type":"uint256","name":"_tokenPerBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"},{"type":"uint256","name":"rewardLockedUp","internalType":"uint256"},{"type":"uint256","name":"nextHarvestUntil","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}];
const MAPLE_CHEF_ADDR = "0xa1a691f0616F7eb84671Ff67A48cF1eB5E74fa41";
const rewardTokenTicker = "MAPLE";
const BLOCKS_PER_DAY = 41143;
const MAPLE_TOKEN_CONTRACT = "0x67F0e196fF54A624E4063fa3619D483Be336d5DB";
const MAPLE_TOKEN_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"BurnRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"MaxTransferAmountRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"MinAmountToLiquifyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorshipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"TransferTaxRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"router","type":"address"},{"indexed":true,"internalType":"address","name":"pair","type":"address"}],"name":"UniswapRouterUpdated","type":"event"},{"inputs":[],"name":"BURN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_TRANSFER_TAX_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_addressToLastSwaptime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lockedTimeRecipient","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lockedTimeSender","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isExcludedFromAntiWhale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransferAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransferAmountRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAmountToLiquify","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_excluded","type":"bool"}],"name":"setExcludedFromAntiWhale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_seconds","type":"uint256"}],"name":"setLockTimeRecipientSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_seconds","type":"uint256"}],"name":"setLockTimeSenderSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperatorship","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferTaxRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_burnRate","type":"uint16"}],"name":"updateBurnRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_maxTransferAmountRate","type":"uint16"}],"name":"updateMaxTransferAmountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minAmount","type":"uint256"}],"name":"updateMinAmountToLiquify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"updateSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_transferTaxRate","type":"uint16"}],"name":"updateTransferTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_router","type":"address"}],"name":"updateUniswapRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const MAPLE_PRICE_LP = "0x7066141479Ec93aE77508D03C3493079aCe8eCBA"; // WMATIC-MAPLE

var tokenABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"ownerAddress","internalType":"address"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"MinTokensBeforeSwapUpdated","inputs":[{"type":"uint256","name":"minTokensBeforeSwap","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SwapAndLiquify","inputs":[{"type":"uint256","name":"tokensSwapped","internalType":"uint256","indexed":false},{"type":"uint256","name":"ethReceived","internalType":"uint256","indexed":false},{"type":"uint256","name":"tokensIntoLiqudity","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SwapAndLiquifyEnabledUpdated","inputs":[{"type":"bool","name":"enabled","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"_liquidityFee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"_maxTxAmount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"_taxFee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deliver","inputs":[{"type":"uint256","name":"tAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"enableTrading","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"excludeFromFee","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"excludeFromReward","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"includeInFee","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"includeInReward","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isExcludedFromFee","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isExcludedFromReward","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"pancakeswapV2Pair","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IUniswapV2Router02"}],"name":"pancakeswapV2Router","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"reflectionFromToken","inputs":[{"type":"uint256","name":"tAmount","internalType":"uint256"},{"type":"bool","name":"deductTransferFee","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setLiquidityFeePercent","inputs":[{"type":"uint256","name":"liquidityFee","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMaxTxPercent","inputs":[{"type":"uint256","name":"maxTxPercent","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setSwapAndLiquifyEnabled","inputs":[{"type":"bool","name":"_enabled","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTaxFeePercent","inputs":[{"type":"uint256","name":"taxFee","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"swapAndLiquifyEnabled","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenFromReflection","inputs":[{"type":"uint256","name":"rAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalFees","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"tradingEnabled","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"receive","stateMutability":"payable"}];
var poolABI = [{"type":"constructor","stateMutability":"nonpayable","payable":false,"inputs":[]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Burn","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":true},{"type":"uint256","name":"amount0","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount1","internalType":"uint256","indexed":false},{"type":"address","name":"to","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Mint","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":true},{"type":"uint256","name":"amount0","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount1","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Swap","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":true},{"type":"uint256","name":"amount0In","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount1In","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount0Out","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount1Out","internalType":"uint256","indexed":false},{"type":"address","name":"to","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Sync","inputs":[{"type":"uint112","name":"reserve0","internalType":"uint112","indexed":false},{"type":"uint112","name":"reserve1","internalType":"uint112","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"DOMAIN_SEPARATOR","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"MINIMUM_LIQUIDITY","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"PERMIT_TYPEHASH","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"","internalType":"address"},{"type":"address","name":"","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"uint256","name":"amount0","internalType":"uint256"},{"type":"uint256","name":"amount1","internalType":"uint256"}],"name":"burn","inputs":[{"type":"address","name":"to","internalType":"address"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"factory","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint112","name":"_reserve0","internalType":"uint112"},{"type":"uint112","name":"_reserve1","internalType":"uint112"},{"type":"uint32","name":"_blockTimestampLast","internalType":"uint32"}],"name":"getReserves","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"initialize","inputs":[{"type":"address","name":"_token0","internalType":"address"},{"type":"address","name":"_token1","internalType":"address"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"kLast","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"uint256","name":"liquidity","internalType":"uint256"}],"name":"mint","inputs":[{"type":"address","name":"to","internalType":"address"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nonces","inputs":[{"type":"address","name":"","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"permit","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"price0CumulativeLast","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"price1CumulativeLast","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"skim","inputs":[{"type":"address","name":"to","internalType":"address"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"swap","inputs":[{"type":"uint256","name":"amount0Out","internalType":"uint256"},{"type":"uint256","name":"amount1Out","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"bytes","name":"data","internalType":"bytes"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"sync","inputs":[],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"token0","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"token1","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"}],"constant":false}];

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
{ "id": "wmatic-usdc", "symbol": "WMATIC-USDC", "contract": "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827", "decimals": 18},
];

var poolContracts = [];
var poolDecimals = [];

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

const buyArea = document.getElementById("buyArea");
const resultArea = document.getElementById("resultArea");
var connectedToMM = false;
var toasty = null;

var masterChefContract;
var tokenContract;

ethereumButton.addEventListener('click', () => {
	getAccount();
});

addTokenButton.addEventListener('click', () => {
	addCustomToken();
});

async function addCustomToken() {
const tokenAddress = MAPLE_TOKEN_CONTRACT;
const tokenSymbol = 'MAPLE';
const tokenDecimals = 18;
const tokenImage = 'https://www.polymaple.com/assets/maple.png';

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
} catch (error) {
  console.log(error);
}
}

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];

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

async function getMaplePrice(prices) {
	const lpContract = new web3.eth.Contract(poolABI,MAPLE_PRICE_LP);
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
		prices[MAPLE_TOKEN_CONTRACT] = {usd: maplePrice};
		const maplePriceArea = document.getElementById("nativeTokenPrice");
		maplePriceArea.innerHTML = '$'+maplePrice;
	}

	return maplePrice;
}

async function startApp() {
  if (ethereum.networkVersion != null && ethereum.networkVersion != 137)
  {
	alert("Please connect to the Matic/Polygon network to use this page");
	return;
	  }
	const tokenContract = new web3.eth.Contract(MAPLE_TOKEN_ABI,MAPLE_TOKEN_CONTRACT);

	const totalSupplyRaw = await tokenContract.methods.totalSupply().call();
		   const totalSupply = web3.utils.fromWei(totalSupplyRaw);
	const tokenSupplyArea = document.getElementById("tokensupply");
	tokenSupplyArea.innerHTML = getToFixed(totalSupply,2);

	const burnWallet = "0x000000000000000000000000000000000000dead";
	getBalance(tokenContract, burnWallet).then(function (bal) {
		var decimals = 0;
		tokenContract.methods.decimals().call().then(function(result) {
			decimals = result;
			let tokBal = bal / Math.pow(10,decimals);
			const burnedTokensArea = document.getElementById("burnedtokens");
			burnedTokensArea.innerHTML = getToFixed(tokBal,2)+"";
		});
	});

	   masterChefContract = new web3.eth.Contract(MAPLE_CHEF_ABI,MAPLE_CHEF_ADDR);
   const prices = await getMaticPrices();
	   const emissionsPerBlockRaw = await masterChefContract.methods.tokenPerBlock().call();
   const emissionsPerBlock = web3.utils.fromWei(emissionsPerBlockRaw);

   const totalAllocPoints = await masterChefContract.methods.totalAllocPoint().call();
   const maplePrice = await getMaplePrice(prices);
   const marketCapArea = document.getElementById("marketCap");
   const marketCap = maplePrice * totalSupply;
   marketCapArea.innerHTML = "$"+getToFixed(marketCap,2)+"";

   const maxTransferAmountRaw = await tokenContract.methods.maxTransferAmount().call();
   const maxTransferAmount = web3.utils.fromWei(maxTransferAmountRaw);
   maxTransferAmountArea = document.getElementById("maxTransferAmount");
   maxTransferAmountArea.innerHTML = displayPrice(maxTransferAmount)+"";

   setupPools(prices,emissionsPerBlock,totalAllocPoints,maplePrice);
	  }


let innerReturnFunction = ({res, poolId}) => {
	return {res, poolId}; // return an object
}

async function connected(account)
{
	for (id = 0; id < poolCount; id++)
		   {
		const poolArea = document.getElementsByClassName('pool-'+id)[0];
		const pendingTokensRaw = await masterChefContract.methods.pendingToken(id,account).call();
		pendingTokens = web3.utils.fromWei(pendingTokensRaw);
		pendingTokens = displayPrice(pendingTokens,2);

		const userInfo = await masterChefContract.methods.userInfo(id,account).call();

		const contractAddr = poolContracts[id];
		const poolTokenContract = new web3.eth.Contract(tokenABI,contractAddr);
		poolTokenDecimals = poolDecimals[contractAddr];
		
		let stakedTokensRaw = userInfo.amount;
		stakedTokens = stakedTokensRaw/(10**poolTokenDecimals);

		if (poolArea)
		{
			const approveButton = poolArea.getElementsByClassName('approve')[0];
			approveButton.disabled = false;
			const connectText = poolArea.getElementsByClassName('connectwallet')[0];
			connectText.classList.add("d-none");

			var pendingTokenContent = pendingTokens;

			const pendingTokenArea = poolArea.getElementsByClassName('tokensearned')[0];
			if (pendingTokensRaw > 0)
			{
				pendingTokenContent = pendingTokenContent+" <a data-pid=\""+id+"\"href=\"#\" id=\"harvest-"+id+"\">Harvest</a>";
			}

			pendingTokenArea.innerHTML = pendingTokenContent;

			if (pendingTokensRaw > 0)
			{
				const harvestButton = document.getElementById("harvest-"+id);
				harvestButton.addEventListener("click",harvestClicked);
			}

			const stakedTokenArea = poolArea.getElementsByClassName('tokensstaked')[0];
			stakedTokenArea.setAttribute("data-tokensstaked",stakedTokens);
			stakedTokenArea.innerHTML = stakedTokens+"";
			const tokenStats = poolArea.getElementsByClassName("tokenstats")[0];
			tokenStats.classList.remove("d-none");

			const approveBtn = poolArea.getElementsByClassName('approve')[0];
			const contractAddr = approveBtn.getAttribute("data-contract");
			const stakingForm = poolArea.getElementsByClassName('stakingform')[0];
			const unstakingForm = poolArea.getElementsByClassName('unstakingform')[0];

			let walletAddress = ethereum.selectedAddress;
			const poolTokenContract = new web3.eth.Contract(tokenABI,contractAddr);
			var balance = await poolTokenContract.methods.balanceOf(walletAddress).call();
			var decimals = 0;
			var decimals = await poolTokenContract.methods.decimals().call();
							let tokBal = balance / Math.pow(10,decimals);

			const tokenBalanceArea = poolArea.getElementsByClassName('tokenbalance')[0];
			//tokenBalanceArea.setAttribute("tokenbalance",tokBal);
			tokenBalanceArea.setAttribute("data-yourtokens",tokBal);
			tokenBalanceArea.innerHTML = tokBal+"";

			let poolId = id;

			checkAllowance(contractAddr,account,MAPLE_CHEF_ADDR,poolId).then(function ({res,poolId,test}) {
				let allowance = res;
				if (allowance > 0)
					allowPool(approveBtn,stakingForm,unstakingForm, poolId, poolTokenDecimals);
					});

			if (stakedTokens > 0)
				unstakingForm.classList.remove("d-none");
		}
	}
}

function allowPool(approveBtn, stakingForm, unstakingForm, poolId, tokenDecimals)
{
	approveBtn.classList.add("d-none");
	stakingForm.classList.remove("d-none");

	const stakeButton = stakingForm.querySelector("[data-action='stake']");
	stakeButton.setAttribute("data-pid",poolId);
	stakeButton.setAttribute("data-decimals",tokenDecimals);
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
		alert("cannot harvest just yet.");
	}
}

function stakeClicked(event)
{
	const button = event.target;
	let pid = button.getAttribute("data-pid");

	const poolArea = document.getElementsByClassName('pool-'+pid)[0];
	const stakeAmountInput = poolArea.querySelector("[data-action='stakeamount']");
	var stakeAmtValue = stakeAmountInput.value;
	const tokenDecimals = button.getAttribute("data-decimals");

	stakeAmtValue = stakeAmtValue*(10**tokenDecimals);
	doDeposit(pid,stakeAmtValue).then(function (result) {
		console.log("depositRes",result);
	});
}

function unstakeClicked(event) {
	const button = event.target;
	let pid = button.getAttribute("data-pid");
	const poolArea = document.getElementsByClassName('pool-'+pid)[0];
	const stakeAmountInput = poolArea.querySelector("[data-action='unstakeamount']");
	const tokenDecimals = button.getAttribute("data-decimals");	
	var stakeAmtValue = stakeAmountInput.value;
	
	stakeAmtValue = stakeAmtValue*(10**tokenDecimals);

	doWithdraw(pid,stakeAmtValue).then(function (result) {
					console.log("withdrawRes",result);
			});
}

async function doCheckHarvest(pid,account) {
	res = await masterChefContract.methods.canHarvest(pid,ethereum.selectedAddress).send({from:ethereum.selectedAddress});
			return res;
}

async function doHarvest(pid) {
	res = await masterChefContract.methods.deposit(pid,0).send({from:ethereum.selectedAddress});
	return res;
}

async function doDeposit(pid,tokens) {
	let tokWei = tokens+"";
	res = await masterChefContract.methods.deposit(pid,tokWei).send({from:ethereum.selectedAddress});
	return res;
}

async function doWithdraw(pid,tokens) {
			//let tokWei = web3.utils.toWei(tokens+"");
	let tokWei = tokens+""; 
	res = await masterChefContract.methods.withdraw(pid,tokWei).send({from:ethereum.selectedAddress});
	return res;
}

async function setupPools(prices,emissionsPerBlock,totalAllocPoints,maplePrice)
{
   poolCount = parseInt(await masterChefContract.methods.poolLength().call(), 10);

   const poolContainer = document.getElementById("poolcontainer");
   const pool1 = poolContainer.getElementsByClassName("pool")[0];

   var tvl = 0;

   for (i = 0; i < poolCount; i++)
   {
	if (i > 0)
		injectNewPool(i,poolContainer,pool1);

	   val = await updatePoolInfo(i,prices,emissionsPerBlock,totalAllocPoints,maplePrice);
	tvl = tvl + val;
	   }

   const tvlArea = document.getElementById("totalValueLocked");
   tvlArea.innerHTML = "$"+getToFixed(tvl,2);
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

async function updatePoolInfo(id,prices,emissionsPerBlock,totalAllocPoints,maplePrice)
{
	const poolInfo = await masterChefContract.methods.poolInfo(id).call();
	poolContracts[id] = poolInfo.lpToken;
	const account = ethereum.selectedAddress;
	const userInfo = await masterChefContract.methods.userInfo(id,account).call();
	const nextHarvestUntil = userInfo.nextHarvestUntil;
	const currentTimestamp = Math.floor(Date.now() / 1000);
	const timestampDiff = nextHarvestUntil - currentTimestamp;

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
		multiplierArea.innerHTML = poolInfo.allocPoint/100+"x";

		var depFeeArea = poolArea.getElementsByClassName('depositFee')[0];
		depFeeArea.innerHTML = poolInfo.depositFeeBP/100+"%";
		var poolTitleArea = poolArea.getElementsByClassName('poolTitle')[0];
		const lpContractAddr = poolInfo.lpToken;
		var tokenName = poolInfo.lpToken;
		var tokenPrice;

		token = maticTokens.find( record => record.contract === poolInfo.lpToken)
		if (token)
			tokenName = token.symbol;

		if (poolInfo.lpToken == MAPLE_TOKEN_CONTRACT)
		{
			tokenName = "MAPLE!";
		}

		const lpContract = new web3.eth.Contract(poolABI,poolInfo.lpToken);
		const poolTokenDecimals = await lpContract.methods.decimals().call();
		poolDecimals[poolInfo.lpToken] = poolTokenDecimals;
		var imgWidth = 50;
		var fontSize = "fs-3";
		if (tokenName.includes("-"))
		{
			// custom code for LP token pricing.
			var token0 = null;
			var token1 = null;
			var totalSupply;

				token0 = await lpContract.methods.token0().call();
				token1 = await lpContract.methods.token1().call();
				totalSupply = await lpContract.methods.totalSupply().call();
				totalSupply = totalSupply / Math.pow(10, 18);

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

				var rate = reserve1/reserve0;
				var altRate = reserve0/reserve1;
			imgWidth = 100;
			fontSize = "fs-6";
		}

		poolTitleArea.innerHTML = "<img src=\"/assets/tokens/"+poolInfo.lpToken+".png\" height='50' width='"+imgWidth+"'/><span class='"+fontSize+"'>"+tokenName+"</span>";
		
		var apr = 0;

		const tokenDecimals = poolDecimals[poolInfo.lpToken];
		const poolLPContract = new web3.eth.Contract(tokenABI, poolInfo.lpToken);
		var poolTokenInContract = await getBalance(poolLPContract, MAPLE_CHEF_ADDR);
				poolTokenInContract = poolTokenInContract / Math.pow(10, tokenDecimals);


		var tokenPriceDisplay = "--";
		if (prices[lpContractAddr] && prices[lpContractAddr].usd)
			tokenPrice = prices[lpContractAddr].usd;

		const tokenPriceContainer = poolArea.getElementsByClassName('tokenPriceContainer')[0];

		if (tokenPrice > 0)
			tokenPriceDisplay = tokenPrice;

		var poolTotalValueLocks = poolTokenInContract * tokenPrice;
		const liquidityContainer = poolArea.getElementsByClassName('liquidityContainer')[0];

		var liquidityArea = poolArea.getElementsByClassName('liquidity')[0];

		if (poolTotalValueLocks > 0) {
			liquidityArea.innerHTML = '$'+displayPrice(poolTotalValueLocks,2);
			liquidityContainer.classList.remove("d-none");
		}
		else {
			liquidityContainer.classList.add("d-none");
		}

		const allocPoint = poolInfo.allocPoint;
		const dailyPoolEmissions = emissionsPerBlock * BLOCKS_PER_DAY * ( allocPoint / totalAllocPoints );

		if (tokenPrice >0)
			apr = (maplePrice * dailyPoolEmissions * 365) / poolTotalValueLocks;

		aprArea =  poolArea.getElementsByClassName('apr')[0];
		aprArea.innerHTML = Math.round(apr * 100) + "%";

		var loader = poolArea.getElementsByClassName('loader')[0];
		loader.classList.add("d-none");
		var poolInfoArea = poolArea.getElementsByClassName('poolinfo')[0];
		poolInfoArea.classList.remove("d-none");

		const approveButton = poolArea.getElementsByClassName('approve')[0];
		approveButton.setAttribute("data-contract",poolInfo.lpToken);
		approveButton.setAttribute("data-poolid",id);
		approveButton.addEventListener('click',approveContract);
	}

	return poolTotalValueLocks;
}

async function approveContract(event)
{
	const button = event.target;
	const contr = button.getAttribute("data-contract");
	button.disabled = true;
	const tokenContract = new web3.eth.Contract(tokenABI,contr);
	const numToApprove = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
	const tokenDecimals = await tokenContract.methods.decimals().call();

	doApprove(tokenContract,MAPLE_CHEF_ADDR,numToApprove).then(function (result) {
		// Need to enable staking here.
		if (result.status == true)
		{
			const poolId = button.getAttribute("data-poolid");
			const poolArea = document.getElementsByClassName('pool-'+poolId)[0];
			const approveBtn = poolArea.getElementsByClassName('approve')[0];
			const stakingForm = poolArea.getElementsByClassName('stakingform')[0];
			const unstakingForm = poolArea.getElementsByClassName('unstakingform')[0];
			allowPool(approveBtn, stakingForm, unstakingForm, poolId, tokenDecimals);
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
	const tokenContract = new web3.eth.Contract(tokenABI,contractAddr);
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
   const totalSupply = web3.utils.fromWei(totalSupplyRaw);
  return {totalSupply };
}

window.addEventListener('load', function() {

if (typeof web3 !== 'undefined') {
	  web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
		console.log("Web3 configured");
		startApp();
} else {
	console.log("No web3.");
	}


if (window.ethereum)
{
	// detect Metamask account change
	window.ethereum.on('accountsChanged', function (accounts) {
		console.log('accountsChanges',accounts);
	});

	 // detect Network account change
	window.ethereum.on('chainChanged', function(networkId){
		console.log('chainChanged',networkId);
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
  }*/

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
	const option = {animation: true};
	toasty = new bootstrap.Toast(toastEl, option);
	return toasty;
});
  });

console.log("ethereum.networkVersion:"+ethereum.networkVersion);
console.log("ethereum.selectedAddress:"+ethereum.selectedAddress);