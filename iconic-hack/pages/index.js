import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Canvas from '../components/Canvas';

export default function Home() {
  const [threadLink, setThreadLink] = useState('');
  const [apiId, setApiId] = useState('');
  function handleChange(e) {
    setThreadLink(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Iconic Hack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      {/* <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
      </canvas> */}
      <input type="text" key ="textbox" id="text" value={threadLink} onChange={(e)=>{setThreadLink(e.target.value)}}/>
      
      <Canvas text ={threadLink}/>
      </main>

      
    </div>
  )
}
