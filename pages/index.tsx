import styles from '../styles/Home.module.css'
import React from "react";
import Script from "next/script";
import Image from 'next/image';
import logo from '../src/assets/amblem-white.png'
import bandLogo from '../src/assets/chains/c-lion-chain-BAND-min.svg'
import cantoLogo from '../src/assets/chains/c-lion-chain-CANTO-min.svg'
import comdexLogo from '../src/assets/chains/c-lion-chain-COMDEX-min.svg'
import crescentLogo from '../src/assets/chains/c-lion-chain-crescent-min.svg'
import cryptoOrgLogo from '../src/assets/chains/c-lion-chain-crypto-org-min.svg'
import desmosLogo from '../src/assets/chains/c-lion-chain-desmos-min.svg'
import emoneyLogo from '../src/assets/chains/c-lion-chain-emoney-min.svg'
import fetchLogo from '../src/assets/chains/c-lion-chain-fetchai-min.svg'
import gravityLogo from '../src/assets/chains/c-lion-chain-gravity-bridge-min.svg'
import irisLogo from '../src/assets/chains/c-lion-chain-iris-min.svg'
import kiLogo from '../src/assets/chains/c-lion-chain-kichain-min.svg'
import lumLogo from '../src/assets/chains/c-lion-chain-lumchain-min.svg'
import marsLogo from '../src/assets/chains/c-lion-chain-mars-protocol-min.svg'
import mediblocLogo from '../src/assets/chains/c-lion-chain-medibloc-min.svg'
import shentuLogo from '../src/assets/chains/c-lion-chain-shentu-min.svg'
import xplaLogo from '../src/assets/chains/c-lion-chain-xpla-min.svg'
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Crypto Lion Validator</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js" />
            <Script src="/planet.js" />
            <Script src="https://kit.fontawesome.com/f05c8837f2.js" />
            <div id="universe" className={styles.universe}>

                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.logo}>
                            <Image
                                width={250}
                                height={250}
                                src={logo}
                                alt="Crypto Lion"
                            />
                            <h1 className={styles.logoText}>Crypto Lion</h1>
                        </div>
                        <h3 className={styles.slugText}>&ldquo;Reliable staking services&rdquo;</h3>
                    </div>

                    <div className={styles.footer}>
                        <ul className={styles.social}>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={bandLogo} height={50} width={50}  alt="Band Protocol"/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={cantoLogo} height={50} width={50}  alt="Canto"/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={comdexLogo} height={50} width={50}  alt="Comdex"/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={crescentLogo} height={50} width={50}  alt="Crescent"/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={cryptoOrgLogo} height={50} width={50}  alt="Crypto Org Chain"/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={desmosLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={emoneyLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={fetchLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={gravityLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={irisLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={kiLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={lumLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={marsLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={mediblocLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={shentuLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image src={xplaLogo} height={50} width={50}  alt=""/></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
