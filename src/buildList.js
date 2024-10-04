const { version } = require('../package.json');
const kaia = require('./tokens/kaia.json');
const sepolia = require('./tokens/sepolia.json');
const base = require('./tokens/base.json');
const kairos = require('./tokens/kairos.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  const l1List = {
    name: 'Defolym3 Default',
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: '',
    keywords: ['defolym3', 'default'],
    tokens: [...kaia, ...sepolia, ...base, ...kairos]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          //return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
  return l1List;
};
