export default {
  title_template: `Crypto Lion Validator on CDC Chain Main-net | %s`,
  meta_description: `Crypto Lion is a blockchain validator running on Crypto.org Main-net Chain. You can make passive income by staking your CROs on it.`,

  pages: {
    home: {
      title: `Home`,
      meta_description: `Crypto Lion is a Validator of Crypto.org Main-net to serve service of passive income for CRO holders.`,
    },
    terms: {
      title: `Terms & Conditions`,
      meta_description: `Terms & Conditions of using Crypto Lion Staking Service`,
      content: `
      <h2 class="text-3xl">General</h2>
      <br>
      <p>
      Each user responsible for their delegated CROs. Crypto Lion under no circumstances accept any responsibility.
      In order to get news about updates and possible downtimes consider following us from Twitter or Telegram.
      </p>
      <br>
      <h2 class="text-3xl">Wallet Service</h2>
      <br>
      <p>
      Our wallet software reliable and safe for end users. When you open your wallet with your secret words, we are going
      to ask you a 6 digit number PIN to securely encrypt it and save to the session storage. Both encrypted wallet and hashed
      user PIN stored on users computer until session end or user decide to close their wallet. Please follow the link on the footer
      named GitHub in order to review our open source wallet code.
      </p>
      <br>
      <p>
          <strong class="text-red-600">Disclaimer:</strong> By using this option,
          you are accepting that all responsibility belongs to you.
          Crypto Lion only serve this option on
          <strong class="text-green-500">https://cryptolion.finance</strong>
          address. Please beware of scammers. We never store any data of you, and your wallet.
          You can check our open source code from the link on footer.
      </p>
      `,
    },
    privacy: {
      title: `Privacy Policy`,
      meta_description: `Privacy Policy of using Crypto Lion Staking Service`,
      content: `
      <h2 class="text-3xl">Cookies</h2>
      <br>
      <p>
      Cookies are small text files that are placed on your computer by websites that you visit.
      </p>
      <p>
      If you choose to accept the use of cookies, we will use Google Analytics in order to collect information on how you are using the website.
      </p>
      <p>
      Such information will allow us to improve the website.
      </p>
      <p>
      You can read an overview of Google's privacy policy
      <a class="underline"
      rel="nofollow"
      href="https://policies.google.com/technologies/partner-sites?hl=en-GB&amp;gl=uk"
      target="_blank">here</a>.
      </p>
      <p>
      These information will not be collected if you deny the use of cookies.
      </p>
      <br>
      <h2 class="text-3xl">Browser Session Storage</h2>
      <br>
      <p>
      Session Storage API lets us store data on user's modern browser in order to achieve temporary data storage. Crypto Lion
      Wallet stores below datas on user's computer since user open their wallet. For details please refer this
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"
        title="MDN Session Storage"
        rel="nofollow"
        class="underline"
        target="_blank">link</a>.
      <br>
      <br>
      <ul>
        <li><strong>lion_account_address</strong>: Wallet address data</li>
        <li><strong>lion_encrypted_wallet</strong>: Encrypted wallet data via PIN</li>
        <li><strong>lion_encrypted_pin</strong>: 6 digit hashed PIN</li>
      </ul>
      </p>
      `,
    },
    how_to_stake_cro: {
      title: `Staking Explained`,
      meta_description: `Step by step explanation of staking CROs as a delegator to the Crypto Lion Crypto.org Main-net node.`,
      steps_id: `staking-steps`,
      back_button: `Go back`,
      logout_button: `Logout`,
      logout_confirm: `You will be remove your wallet. Please confirm.`,
      dialog_button: `Close`,
      steps: {
        first: {
          title: `How would you like to stake?`,
          desc: `Please choose a comfortable way to stake. It is easy to stake your CROs here in the Crypto Lion Website. Feel free to check source code, we are open source.`,
          buttons: {
            defi: `Install Mobile DeFi Wallet App`,
            mnemonic: `Access Wallet via Keplr`,
            desktop: `Download CDC Desktop Wallet`,
          },
        },
        defi: {
          steps: [
            {
              title: `Install DeFi App`,
              desc: `
          Android:
          <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.com DeFi Wallet Android Application"
                href="https://play.google.com/store/apps/details?id=com.defi.wallet"
                >Play Store</a
          >
          <br>
          iOS:
          <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.com DeFi Wallet iOS Application"
                href="https://apps.apple.com/us/app/crypto-com-l-defi-wallet/id1512048310"
                >App Store</a
          >
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"/>
            </svg>
          `,
              next: true,
            },
            {
              title: `Import or Create Wallet`,
              desc: `
          Create or import a new wallet with your mnemonic keys.
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11.85 17.56a1.5 1.5 0 0 1-1.06.44H10v.5c0 .83-.67 1.5-1.5 1.5H8v.5c0 .83-.67 1.5-1.5 1.5H4a2 2 0 0 1-2-2v-2.59A2 2 0 0 1 2.59 16l5.56-5.56A7.03 7.03 0 0 1 15 2a7 7 0 1 1-1.44 13.85l-1.7 1.71zm1.12-3.95l.58.18a5 5 0 1 0-3.34-3.34l.18.58L4 17.4V20h2v-.5c0-.83.67-1.5 1.5-1.5H8v-.5c0-.83.67-1.5 1.5-1.5h1.09l2.38-2.39zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3z"/>
            </svg>
          `,
              next: true,
            },
            {
              title: `Stake your Funds`,
              desc: `
          Select staking tab and click delegate and paste our address.
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path
                    d="M17.62 10H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5c-1.2 0-2.3-.72-2.74-1.79l-3.5-7-.03-.06A3 3 0 0 1 5 9h5V4c0-1.1.9-2 2-2h1.62l4 8zM16 11.24L12.38 4H12v7H5a1 1 0 0 0-.93 1.36l3.5 7.02a1 1 0 0 0 .93.62H16v-8.76zm2 .76v8h2v-8h-2z" />
            </svg>
          `,
              next: false,
            },
          ],
        },
        desktop: {
          steps: [
            {
              title: `DownLoad Desktop Wallet`,
              desc: `
          Download:
              <a
                class="text-pink-500 underline"
                target="_blank"
                href="https://github.com/crypto-com/chain-desktop-wallet/releases"
                >Crypto.org Chain Desktop Wallet</a
              >
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"/>
            </svg>
          `,
              next: true,
            },
            {
              title: `Import or Create Wallet`,
              desc: `
          Create or import a new wallet with your mnemonic keys.
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11.85 17.56a1.5 1.5 0 0 1-1.06.44H10v.5c0 .83-.67 1.5-1.5 1.5H8v.5c0 .83-.67 1.5-1.5 1.5H4a2 2 0 0 1-2-2v-2.59A2 2 0 0 1 2.59 16l5.56-5.56A7.03 7.03 0 0 1 15 2a7 7 0 1 1-1.44 13.85l-1.7 1.71zm1.12-3.95l.58.18a5 5 0 1 0-3.34-3.34l.18.58L4 17.4V20h2v-.5c0-.83.67-1.5 1.5-1.5H8v-.5c0-.83.67-1.5 1.5-1.5h1.09l2.38-2.39zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3z"/>
            </svg>
          `,
              next: true,
            },
            {
              title: `Stake your Funds`,
              desc: `
          Select staking tab and click delegate and paste our address.
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path
                    d="M17.62 10H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5c-1.2 0-2.3-.72-2.74-1.79l-3.5-7-.03-.06A3 3 0 0 1 5 9h5V4c0-1.1.9-2 2-2h1.62l4 8zM16 11.24L12.38 4H12v7H5a1 1 0 0 0-.93 1.36l3.5 7.02a1 1 0 0 0 .93.62H16v-8.76zm2 .76v8h2v-8h-2z" />
            </svg>
          `,
              next: false,
            },
          ],
        },
        mnemonic: {
          title: `Please enter your mnemonic phrase.`,
          desc: ``,
          button: `Access Wallet`,
        },
        wallet: {
          title: `My Wallet`,
          explorer: `Show in Explorer`,
          staked_balance: `Delegated Balance:`,
          available_balance: `Available Balance:`,
          rewards: `Rewards:`,
          rewards_button_title: `Withdraw all`,
          renew_button_title: `Renew`,
          rewards_confirm: `All rewards will be withdrawn. Please confirm.`,
          stake_confirm: `The amount will be staked. Please confirm.`,
          desc: ``,
          button: `Delegate`,
        },
        final: {
          title: `Staked successfully!`,
          desc: `
          Congratulations, you have just completed staking process. You can now click
          below link in order to see further details on official blockchain explorer.
          Please follow us on Twitter & Telegram in order to get news and promotions.
          `,
          buttons: {
            telegram: `Crypto Lion Telegram Channel`,
            twitter: `Crypto Lion Twitter Page`,
          },
        },
      },
    },
  },

  navbar: {
    logo: {
      link: {
        title: `Crypto Lion CRO Validator`,
      },
    },
    links: [
      {
        name: `Home`,
        title: `Crypto Lion Homepage`,
        href: `/en/#validator-home`,
      },
      {
        name: `How staking work?`,
        title: `Simple steps of CRO staking`,
        href: `/en/#how-cro-staking-work`,
      },
      {
        name: `Staking Ways`,
        title: `How to stake CROs on Main-net, Explained`,
        href: { path: 'how-to-stake-cro', hash: 'staking-steps' },
      },
      {
        name: `FAQs`,
        title: `Frequently Asked Questions About CDC Main-net`,
        href: `/en/#f-a-qs`,
      },
    ],
    rate: {
      title: `Current rewards p.a. & validator commissions. Click to renew!`,
      fee: `fee`,
    },
  },

  stake_now: {
    name: `Stake Now`,
    title: `Stake your CROs to get your rewards!`,
  },

  copier: {
    title: `Click to copy delegation address.`,
    message: `Copy Staking Address`,
    done_message: `Copied!`,
  },

  disclaimer: {
    desc: `By using this wallet service, you are accepting our `,
  },

  statusButton: {
    name: `Main-net`,
    testNetName: `Croeseid Test-net`,
    message: `: Missed { missed } blocks in last { gap } blocks.`,
  },

  dialog: {
    messages: {
      password: `Please enter a 6 digit number password to secure your wallet during the session: `,
      confirm: `Please confirm your password:`,
      wrong: `Wrong password, please try again.`,
      unlock: `Please enter your pin:`,
    },
    buttons: {
      close: `Close`,
    },
  },

  cookie: {
    message: `Could we use cookies for analytics? To read details please visit our
        privacy policy page.`,
    accept_button: `Yes`,
    deny_button: `No`,
  },

  hero: {
    pre_title: `CRO Main-net Staking Rewards Set at <span class="font-bold">20%</span> APY`,
    title: `Time for Crypto.org Chain Main-net!`,
    desc: `
    <span class="font-bold">5 billion</span> CRO has been allocated for
            distribution as rewards over the next
            <span class="font-bold">10 years</span>.
    `,
  },

  sections: {
    how_to: {
      title: `How staking work?`,
      id: `how-cro-staking-work`,
      steps: {
        first: {
          title: `Hold CROs and earn interest at the same time!`,
          desc: `
            You already have some CRO in your wallet. Great! because fully
            decentralized Crypto.org Chain offers you
            <span class="font-bold">20%</span> APY
            <br />
            <br />
            Official source:

            <a
              class="text-pink-500 underline"
              target="_blank"
              href="https://blog.crypto.com/cro-mainnet-staking-rewards-set-at-20-apy/"
              >CRO Main-net Staking Rewards</a
            >
          `,
        },
        second: {
          title: `Create a brand new Crypto.org Chain Wallet`,
          desc: `
              You can delegate your CROs in minutes. Just download latest
              official desktop wallet below link and join the party!
              <br />
              <br />
              Download from:

              <a
                class="text-pink-500 underline"
                target="_blank"
                href="https://github.com/crypto-com/chain-desktop-wallet/releases"
                >Crypto.org Chain Desktop Wallet</a
              >
          `,
        },
        third: {
          title: `Delegate your CROs on Crypto Lion Node`,
          desc: `
            Open the Wallet App then select
            <span class="font-bold">Staking</span> tab, then switch
            <span class="font-bold">Delegate Funds</span> tab on, copy our node
            address from right top of this website and paste in
            <span class="font-bold">Validator address</span>
            area. Review and accept.
          `,
        },
        fourth: {
          title: `Enjoy with 20% APY!`,
          desc: `
              Tadaa! You have just staked your funds. Now you can have a look at
              the transaction on our node's page and tract your rewards.
              <br />
              <br />
              Our Validator's Page:

              <a
                class="text-pink-500 underline"
                target="_blank"
                href="https://crypto.org/explorer/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495"
                >Crypto Lion Node on Crypto.org Chain</a
              >
          `,
        },
      },
    },
    why_us: {
      title: `Why Crypto Lion Node?`,
      cards: {
        first: {
          title: `Powerful Infrastructure`,
          subtitle: `We are using latest firmware and software.`,
          desc: `We are using dedicated servers with industry standard high internet connection with latest version operating systems.`,
          link: {
            name: `See Statistics`,
            title: `See how the validator performs on blockchain`,
          },
        },
        second: {
          title: `Community Supported`,
          subtitle: `We are from big Crypto.com family.`,
          desc: `We are people from the turkish community of CDC. We care friendly medium and love to meet new crypto lovers.`,
          link: {
            name: `Checkout Twitter`,
            title: `Follow us on Twitter!`,
          },
        },
        third: {
          title: `Reliable`,
          subtitle: `We are also delegators of our node.`,
          desc: `We are also delegators of our node. Hundred thousands of CROs already staked on our validator.`,
          link: {
            name: `Our Delegators`,
            title: `See wallets of people who chosen us`,
          },
        },
      },
    },
    f_a_qs: {
      title: `FAQs`,
      id: `f-a-qs`,
      search_placeholder: `Search`,
      items: [
        {
          title: `What is a validator?`,
          desc: `
          A full-node in consensus by broadcasting votes which contain cryptographic
          signatures signed by their private key. Validators commit new blocks
          in the blockchain and receive revenue in exchange for their work.
          `,
          separate: true,
        },
        {
          title: `What is 'staking'?`,
          desc: `
          Crypto.org Chain is a public Proof-Of-Stake (PoS) blockchain, meaning
          that the weight of validators is determined by the amount of staking
          tokens (CROs) bonded as collateral. These CROs can be self-delegated
          directly by the validator or delegated to them by other CRO holders.
          `,
          separate: true,
        },
        {
          title: `What is a delegator?`,
          desc: `
          Delegators are CRO holders who cannot, or do not want to run a validator
          themselves. CRO holders can delegate CROs to a validator and obtain a
          part of their revenue in exchange.
          `,
          separate: true,
        },
        {
          title: `How can I stake?`,
          desc: `
          You can use our website, Defi App for mobiles, Crypto.com's Desktop wallet or using command line.
          `,
          separate: true,
        },
        {
          title: `How often can I claim my rewards?`,
          desc: `
          You can withdraw your CROs whatever often you want. There is no limit
          for this operation.
          `,
          separate: true,
        },
        {
          title: `Is there a cool-down time when I want to undelegate my funds?`,
          desc: `
          Yes. You can undelegate whenever you want but there is 28 days
          cool-down time to be available your CROs back to your delegator
          wallet.
          `,
          separate: false,
        },
        {
          title: `Why should I trust you as a delegator? Can you access our coins?`,
          desc: `
          Your wallet completely belongs to you and only you have access with your
          mnemonic secret words. You should keep them safe. We are Crossfire competition
          participants which has experience running a tendermint node and maintenance it.
          Plus you can always undelegate your staked CROs even any validator stop working and
          jailed for some reason. We are guarantee that we will announce any forecast
          about maintaining and upgrading jobs that reflects your staking.
          `,
          separate: false,
        },
      ],
    },
    action: {
      title: `Start Enjoying the Benefits of Staking`,
      subtitle: `Earn interest almost 20%!`,
    },
  },

  footer: {
    logo: {
      link: {
        title: `Crypto Lion CRO Validator`,
      },
    },
    groups: [
      {
        name: `Validator`,
        links: [
          {
            name: `Terms & Conditions`,
            title: `Terms & Conditions`,
            target: `_self`,
            href: `terms-and-conditions`,
          },
          {
            name: `Privacy Policy`,
            title: `Privacy Policy`,
            target: `_self`,
            href: `privacy-policy`,
          },
          {
            name: `Status`,
            title: `Status of both maın and test net servers`,
            target: `_blank`,
            href: `https://cryptolion.freshstatus.io/`,
          },
        ],
      },
      {
        name: `Social`,
        links: [
          {
            name: `Twitter`,
            target: `_blank`,
            title: `Crypto Lion Validator Twitter Address`,
            href: `https://twitter.com/CryptoLionVal`,
          },
          {
            name: `Telegram`,
            title: `Follow us from our Telegram channel`,
            target: `_blank`,
            href: `https://t.me/CryptoLionValidator`,
          },
          {
            name: `Write Us`,
            title: `Email us what you are thinking`,
            target: `_self`,
            href: `mailto:cryptolion-node@protonmail.com`,
          },
        ],
      },
      {
        name: `Official Resources`,
        links: [
          {
            name: `Crypto.org`,
            target: `_blank`,
            title: `Crypto.org Chain`,
            href: `https://crypto.org/`,
          },
          {
            name: `Crypto.org Chain Whitepaper`,
            title: `Crypto.org Chain Whitepaper PDF`,
            target: `_blank`,
            href: `https://crypto.org/chain_whitepaper.pdf`,
          },
          {
            name: `Crypto.org Chain Docs`,
            title: `Crypto.org Chain Documentation`,
            target: `_blank`,
            href: `https://crypto.org/docs/`,
          },
        ],
      },
      {
        name: `Explorers`,
        links: [
          {
            name: `on Main-net`,
            target: `_blank`,
            title: `Crypto.org Chain Main-net Explorer`,
            href: `https://crypto.org/explorer/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495`,
          },
          {
            name: `on Mintscan by Cosmostation`,
            target: `_blank`,
            title: `Mintscan Main-net Explorer`,
            href: `https://www.mintscan.io/crypto-org/validators/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495`,
          },
          {
            name: `on Testnet Croeseid 3`,
            target: `_blank`,
            title: `Crypto.org Croeseid 3 Testnet Explorer`,
            href: `https://crypto.org/explorer/croeseid3/validator/tcrocncl1j6cggamet73e2ymmvl58vwj6xv3pm89phczahv`,
          },
        ],
      },
    ],
    copyright: `
        All rights reserved. We are happy to share the source code on
        <a
          href="https://github.com/mcanvar/crypto-lion"
          title="A powerful CDC Chain Main-net Node for staking purpose."
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >GitHub</a
        >. Feel free to make a PR, fork and use it for your non-commercial
        purposes. May the world is a better place with our open ♥️.
    `,
  },
}
