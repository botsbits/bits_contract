# Bits ERC20 Smart-Contract

## Environment variables
- `RPC_URL` gRPC url, you can get it from INFURA
- `PRIVATE_KEY` private key of your wallet
- `ETHERSCAN_API_KEY` private key of etherscan api for contract validation

### 1. Deployment
**ENV variables:**
- `BITS_NAME` (default: "BITS")
- `BITS_SYMBOL` (default: "BITS")
- `ADDRESS`
- `AMOUNT` (default: 1_000_000_000 * 10 ** 18)

**Command:**
```bash
npx hardhat run --network rinkeby scripts/01_deploy.js
```

### 2. Verification
**ENV variables:**
- `TOKEN_ADDRESS`

**Command:**
```bash
npx hardhat run --network rinkeby scripts/01_deploy.js
```

### 3. Moving owner
After deployment you need to set owner of a contract to `0xa9e49e987cd2cD4081d89a23f0d88c53618d001C`