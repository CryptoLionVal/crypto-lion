import styles from '../styles/Home.module.css'
import React, {useEffect, useRef} from "react";
import Script from "next/script";
import Image from 'next/image';
import logo from '../src/assets/cryptolion-logo-min.svg'
import bandLogo from '../src/assets/chains/c-lion-chain-BAND-min.svg'
import cantoLogo from '../src/assets/chains/c-lion-chain-CANTO-min.svg'
import comdexLogo from '../src/assets/chains/c-lion-chain-COMDEX-min.svg'
import crescentLogo from '../src/assets/chains/c-lion-chain-crescent-min.svg'
import cryptoOrgLogo from '../src/assets/chains/c-lion-chain-crypto-org-min.svg'
import desmosLogo from '../src/assets/chains/c-lion-chain-desmos-min.svg'
import decentrLogo from '../src/assets/chains/c-lion-chain-decentr-min.svg'
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
import twitterLogo from '../src/assets/twitter.svg'
import emailLogo from '../src/assets/mail.svg'
import discordLogo from '../src/assets/discord.svg'
import githubLogo from '../src/assets/github.svg'
import Head from "next/head";
import Typed from "typed.js";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';


export default function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['"Reliable roaring services"', '"Reliable staking services"'],
            startDelay: 300,
            typeSpeed: 60,
            smartBackspace: true,
            showCursor: false
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <Head>
                <title>Crypto Lion Validator</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js"/>
            <Script src="/planet.js"/>
            <Script src="https://kit.fontawesome.com/f05c8837f2.js"/>
            <div id="universe" className="h-screen w-screen relative">
                <div
                    className="p-0 m-0 fixed top-0 left-0 h-full w-full">
                    <div
                        className="container mx-auto px-6 grid grid-rows-10 grid-cols-1 gap-4 h-full w-full">
                        <div className="row-span-5 relative">
                            <Image
                                src={logo}
                                fill
                                alt="Crypto Lion"
                            />
                        </div>
                        <div className="row-span-2 flex justify-center">
                            <h3 className="text-white font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" ref={el}></h3>
                        </div>
                        <div className="row-span-2">
                            <Swiper
                                width={60}
                                loop
                                style={{paddingTop: '10vh', paddingBottom: '5vh', }}
                                wrapperTag="ul"
                                wrapperClass="social"
                                className={styles.social}>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/bandchain/bandvaloper1dndwcqre8wjnk4086vr76nu28q5lhnlsu36td8/stake"
                                       rel="noreferrer"
                                       target="_blank"
                                       title="Band Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={bandLogo} height={50} width={50} alt="Band Protocol"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/canto/cantovaloper1dwezh5d2d79te83u63cr9h8gce02c84t9hmvua/stake"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Canto Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={cantoLogo} height={50} width={50} alt="Canto"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/comdex/comdexvaloper16lhapna7nfm0j3pnwt7tn4lxtx3q7hs4p9klqz/stake"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Comdex Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={comdexLogo} height={50} width={50} alt="Comdex"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/crescent/crevaloper16lhapna7nfm0j3pnwt7tn4lxtx3q7hs4npa9ln/stake"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Crescent Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={crescentLogo} height={50} width={50} alt="Crescent"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://wallet.keplr.app/chains/crypto-org?modal=validator&chain=crypto-org-chain-mainnet-1&validator_address=crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Crypto Org Chain Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={cryptoOrgLogo} height={50} width={50}
                                                     alt="Crypto Org Chain"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/decentr/decentrvaloper16lhapna7nfm0j3pnwt7tn4lxtx3q7hs4purhmt/stake"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Decentr Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={decentrLogo} height={50} width={50} alt="Decentr"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/desmos/desmosvaloper1rmsuaqqfyrmrgc45p3d5jpkyrapzxwzjamp0q0/stake"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Desmos Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={desmosLogo} height={50} width={50} alt="Desmos"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://wallet.keplr.app/chains/e-money?modal=validator&chain=emoney-3&validator_address=emoneyvaloper16lhapna7nfm0j3pnwt7tn4lxtx3q7hs4a7j0wy"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="E-money Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={emoneyLogo} height={50} width={50} alt="E-money"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/fetchhub/fetchvaloper16lhapna7nfm0j3pnwt7tn4lxtx3q7hs4rycgky/stake"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Fetch.ai Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={fetchLogo} height={50} width={50} alt="Fetch.ai"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://wallet.keplr.app/chains/gravity-bridge?modal=validator&chain=gravity-bridge-3&validator_address=gravityvaloper16lhapna7nfm0j3pnwt7tn4lxtx3q7hs4qx9fgg"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Gravity Bridge Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={gravityLogo} height={50} width={50}
                                                     alt="Gravity Bridge"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://wallet.keplr.app/chains/irisnet?modal=validator&chain=irishub-1&validator_address=iva16lhapna7nfm0j3pnwt7tn4lxtx3q7hs44wy3cz"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Iris Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={irisLogo} height={50} width={50} alt="Iris"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/kichain/kivaloper16lhapna7nfm0j3pnwt7tn4lxtx3q7hs4sh3aq7/stake"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Ki Chain Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={kiLogo} height={50} width={50} alt="Ki Chain"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/lumnetwork/lumvaloper1cvgcj5e944aezjye0rxvw7urae9k6v0lf7zsn9/stake"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Lum Network Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={lumLogo} height={50} width={50} alt="Lum Network"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://wallet.keplr.app/chains/mars-hub?modal=validator&chain=mars-1&validator_address=marsvaloper16lhapna7nfm0j3pnwt7tn4lxtx3q7hs4uvtrk2"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Mars Protocol Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={marsLogo} height={50} width={50} alt="Mars Protocol"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/panacea/panaceavaloper1yr03eaz9ejndc4rt9244m6kcuva3ahfdkca377/stake"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Medibloc Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={mediblocLogo} height={50} width={50} alt="Medibloc"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://wallet.keplr.app/chains/shentu?modal=validator&chain=shentu-2.2&validator_address=certikvaloper16lhapna7nfm0j3pnwt7tn4lxtx3q7hs49pkc09"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="Shentu Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={shentuLogo} height={50} width={50} alt="Shentu"/></span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide tag="li">
                                    <a href="https://restake.app/xpla/xplavaloper1dwezh5d2d79te83u63cr9h8gce02c84t69x7a7/stake"
                                       target="_blank"
                                       rel="noreferrer"
                                       title="XPLA Valdator Crypto Lion">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><Image src={xplaLogo} height={50} width={50} alt="XPLA"/></span>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="row-span-1 flex justify-center  pt-3 text-white">
                            <a className="flex items-center" href="https://twitter.com/CryptoLionVal" title="Crypto Lion Twitter">
                                <Image className="mx-2" src={twitterLogo} height={16} width={16} alt="Crypto Lion Twitter"/>
                                <span className="">Twitter</span>
                            </a>
                            <a className="flex items-center " href="https://discord.gg/UJBwXnAc" title="Crypto Lion Discord">
                                <Image className="mx-2" src={discordLogo} height={16} width={16} alt="Crypto Lion Discord"/>
                                <span className="">Discord</span>
                            </a>
                            <a className="flex items-center " href="mailto:contact@cryptolion.finance" title="Crypto Lion Contact">
                                <Image className="mx-2" src={emailLogo} height={16} width={16} alt="Crypto Lion Contact"/>
                                <span className="">Email</span>
                            </a>
                            <a className="flex items-center " href="https://github.com/CryptoLionVal" title="Crypto Lion GitHub">
                                <Image className="mx-2" src={githubLogo} height={16} width={16} alt="Crypto Lion GitHub"/>
                                <span className="">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
