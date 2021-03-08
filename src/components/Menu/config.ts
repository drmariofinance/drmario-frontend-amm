import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.drmario.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.drmario.finance/farms'
  },
  {
    label: 'Medical Bottles',
    icon: 'MedicalBottleAIcon',
    href: 'https://www.drmario.finance/medicalbottles'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.drmario.finance/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x3f84A87B57389DD6AAD3d8ca62F235f40C323e67',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/drmario-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/drmario-finance/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x3f84A87B57389DD6AAD3d8ca62F235f40C323e67',
      // },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/drmariofinance/",
      },
      // {
      //   label: "Docs",
      //   href: "https://drmario.gitbook.io/goose-finance/",
      // },
      {
        label: "Blog",
        href: "https://dr-mario-finance.medium.com/",
      },
    ],
  },
  {
    label: 'Audit by TechRate',
    icon: 'AuditIcon',
    href: '#',
  }
]

export default config
