"use client";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function SpatialImage({src,fallbackSrc,alt}:{src:string;fallbackSrc:string;alt:string}){
  const ref=useRef<HTMLDivElement>(null);const [current,setCurrent]=useState(src);const [failed,setFailed]=useState(false);const reduce=useReducedMotion();
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});const y=useTransform(scrollYProgress,[0,1],reduce?[0,0]:[-22,22]);const scale=useTransform(scrollYProgress,[0,.5,1],reduce?[1,1,1]:[1.06,1,1.06]);
  if(failed)return null;
  return <motion.div ref={ref} className="spatial-image"><motion.div style={{y,scale}}><Image src={current} alt={alt} fill sizes="(max-width: 960px) 100vw, 55vw" unoptimized onError={()=>{if(current===src)setCurrent(fallbackSrc);else setFailed(true)}}/></motion.div></motion.div>
}
