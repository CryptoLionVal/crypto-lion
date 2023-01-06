import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Lion Validator</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by staking via&nbsp;
            <a target="_blank" href="https://wallet.keplr.app/chains/crypto-org?modal=validator&chain=crypto-org-chain-mainnet-1&validator_address=crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495" rel="noreferrer">Keplr Wallet</a>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="Crypto Lion Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.description}>
            <h1>
              Coming soon!
            </h1>
          </div>
        </div>
      </main>
    </>
  )
}
