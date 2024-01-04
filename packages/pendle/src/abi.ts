export const SwapYTV3_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'market',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'exactPtIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minYtOut',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'guessMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'guessMax',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'guessOffchain',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxIteration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'eps',
            type: 'uint256',
          },
        ],
        internalType: 'struct ApproxParams',
        name: 'guessTotalPtToSwap',
        type: 'tuple',
      },
    ],
    name: 'swapExactPtForYt',
    outputs: [
      {
        internalType: 'uint256',
        name: 'netYtOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'netSyFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'market',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'exactSyIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minYtOut',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'guessMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'guessMax',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'guessOffchain',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxIteration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'eps',
            type: 'uint256',
          },
        ],
        internalType: 'struct ApproxParams',
        name: 'guessYtOut',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'limitRouter',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'epsSkipMarket',
            type: 'uint256',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'salt',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'expiry',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'nonce',
                    type: 'uint256',
                  },
                  {
                    internalType: 'enum IPLimitOrderType.OrderType',
                    name: 'orderType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'YT',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'maker',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'makingAmount',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lnImpliedRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'failSafeRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'permit',
                    type: 'bytes',
                  },
                ],
                internalType: 'struct Order',
                name: 'order',
                type: 'tuple',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'makingAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct FillOrderParams[]',
            name: 'normalFills',
            type: 'tuple[]',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'salt',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'expiry',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'nonce',
                    type: 'uint256',
                  },
                  {
                    internalType: 'enum IPLimitOrderType.OrderType',
                    name: 'orderType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'YT',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'maker',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'makingAmount',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lnImpliedRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'failSafeRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'permit',
                    type: 'bytes',
                  },
                ],
                internalType: 'struct Order',
                name: 'order',
                type: 'tuple',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'makingAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct FillOrderParams[]',
            name: 'flashFills',
            type: 'tuple[]',
          },
          {
            internalType: 'bytes',
            name: 'optData',
            type: 'bytes',
          },
        ],
        internalType: 'struct LimitOrderData',
        name: 'limit',
        type: 'tuple',
      },
    ],
    name: 'swapExactSyForYt',
    outputs: [
      {
        internalType: 'uint256',
        name: 'netYtOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'netSyFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'market',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'minYtOut',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'guessMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'guessMax',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'guessOffchain',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxIteration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'eps',
            type: 'uint256',
          },
        ],
        internalType: 'struct ApproxParams',
        name: 'guessYtOut',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'tokenIn',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'netTokenIn',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'tokenMintSy',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'pendleSwap',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'enum SwapType',
                name: 'swapType',
                type: 'uint8',
              },
              {
                internalType: 'address',
                name: 'extRouter',
                type: 'address',
              },
              {
                internalType: 'bytes',
                name: 'extCalldata',
                type: 'bytes',
              },
              {
                internalType: 'bool',
                name: 'needScale',
                type: 'bool',
              },
            ],
            internalType: 'struct SwapData',
            name: 'swapData',
            type: 'tuple',
          },
        ],
        internalType: 'struct TokenInput',
        name: 'input',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'limitRouter',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'epsSkipMarket',
            type: 'uint256',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'salt',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'expiry',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'nonce',
                    type: 'uint256',
                  },
                  {
                    internalType: 'enum IPLimitOrderType.OrderType',
                    name: 'orderType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'YT',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'maker',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'makingAmount',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lnImpliedRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'failSafeRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'permit',
                    type: 'bytes',
                  },
                ],
                internalType: 'struct Order',
                name: 'order',
                type: 'tuple',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'makingAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct FillOrderParams[]',
            name: 'normalFills',
            type: 'tuple[]',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'salt',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'expiry',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'nonce',
                    type: 'uint256',
                  },
                  {
                    internalType: 'enum IPLimitOrderType.OrderType',
                    name: 'orderType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'YT',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'maker',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'makingAmount',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lnImpliedRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'failSafeRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'permit',
                    type: 'bytes',
                  },
                ],
                internalType: 'struct Order',
                name: 'order',
                type: 'tuple',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'makingAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct FillOrderParams[]',
            name: 'flashFills',
            type: 'tuple[]',
          },
          {
            internalType: 'bytes',
            name: 'optData',
            type: 'bytes',
          },
        ],
        internalType: 'struct LimitOrderData',
        name: 'limit',
        type: 'tuple',
      },
    ],
    name: 'swapExactTokenForYt',
    outputs: [
      {
        internalType: 'uint256',
        name: 'netYtOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'netSyFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'netSyInterm',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'market',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'exactYtIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minPtOut',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'guessMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'guessMax',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'guessOffchain',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxIteration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'eps',
            type: 'uint256',
          },
        ],
        internalType: 'struct ApproxParams',
        name: 'guessTotalPtFromSwap',
        type: 'tuple',
      },
    ],
    name: 'swapExactYtForPt',
    outputs: [
      {
        internalType: 'uint256',
        name: 'netPtOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'netSyFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'market',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'exactYtIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minSyOut',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'limitRouter',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'epsSkipMarket',
            type: 'uint256',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'salt',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'expiry',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'nonce',
                    type: 'uint256',
                  },
                  {
                    internalType: 'enum IPLimitOrderType.OrderType',
                    name: 'orderType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'YT',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'maker',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'makingAmount',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lnImpliedRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'failSafeRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'permit',
                    type: 'bytes',
                  },
                ],
                internalType: 'struct Order',
                name: 'order',
                type: 'tuple',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'makingAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct FillOrderParams[]',
            name: 'normalFills',
            type: 'tuple[]',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'salt',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'expiry',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'nonce',
                    type: 'uint256',
                  },
                  {
                    internalType: 'enum IPLimitOrderType.OrderType',
                    name: 'orderType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'YT',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'maker',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'makingAmount',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lnImpliedRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'failSafeRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'permit',
                    type: 'bytes',
                  },
                ],
                internalType: 'struct Order',
                name: 'order',
                type: 'tuple',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'makingAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct FillOrderParams[]',
            name: 'flashFills',
            type: 'tuple[]',
          },
          {
            internalType: 'bytes',
            name: 'optData',
            type: 'bytes',
          },
        ],
        internalType: 'struct LimitOrderData',
        name: 'limit',
        type: 'tuple',
      },
    ],
    name: 'swapExactYtForSy',
    outputs: [
      {
        internalType: 'uint256',
        name: 'netSyOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'netSyFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'market',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'exactYtIn',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'tokenOut',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minTokenOut',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'tokenRedeemSy',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'pendleSwap',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'enum SwapType',
                name: 'swapType',
                type: 'uint8',
              },
              {
                internalType: 'address',
                name: 'extRouter',
                type: 'address',
              },
              {
                internalType: 'bytes',
                name: 'extCalldata',
                type: 'bytes',
              },
              {
                internalType: 'bool',
                name: 'needScale',
                type: 'bool',
              },
            ],
            internalType: 'struct SwapData',
            name: 'swapData',
            type: 'tuple',
          },
        ],
        internalType: 'struct TokenOutput',
        name: 'output',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'limitRouter',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'epsSkipMarket',
            type: 'uint256',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'salt',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'expiry',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'nonce',
                    type: 'uint256',
                  },
                  {
                    internalType: 'enum IPLimitOrderType.OrderType',
                    name: 'orderType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'YT',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'maker',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'makingAmount',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lnImpliedRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'failSafeRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'permit',
                    type: 'bytes',
                  },
                ],
                internalType: 'struct Order',
                name: 'order',
                type: 'tuple',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'makingAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct FillOrderParams[]',
            name: 'normalFills',
            type: 'tuple[]',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'salt',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'expiry',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'nonce',
                    type: 'uint256',
                  },
                  {
                    internalType: 'enum IPLimitOrderType.OrderType',
                    name: 'orderType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'YT',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'maker',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'makingAmount',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lnImpliedRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'failSafeRate',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'permit',
                    type: 'bytes',
                  },
                ],
                internalType: 'struct Order',
                name: 'order',
                type: 'tuple',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'makingAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct FillOrderParams[]',
            name: 'flashFills',
            type: 'tuple[]',
          },
          {
            internalType: 'bytes',
            name: 'optData',
            type: 'bytes',
          },
        ],
        internalType: 'struct LimitOrderData',
        name: 'limit',
        type: 'tuple',
      },
    ],
    name: 'swapExactYtForToken',
    outputs: [
      {
        internalType: 'uint256',
        name: 'netTokenOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'netSyFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'netSyInterm',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
