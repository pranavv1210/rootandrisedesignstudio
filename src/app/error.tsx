"use client";
export default function ErrorPage({reset}:{error:Error;reset:()=>void}){return <main className="not-found"><span>Route interrupted</span><h1>The drawing needs<br/>another pass.</h1><p>The experience could not be loaded.</p><button onClick={reset}>Try again</button></main>}
