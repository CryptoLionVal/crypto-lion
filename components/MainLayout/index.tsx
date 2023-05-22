import React from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css'

type MainLayoutProps = {
    children: React.ReactNode,
};

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Head>
                <title>Crypto Lion Validator</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js" />
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="http://localhost:3000/planet.js" />
            </Head>
            <main className={styles.main}>
            </main>
        </>
    );
}
