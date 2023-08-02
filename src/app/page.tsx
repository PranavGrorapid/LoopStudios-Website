"use client"

import Creations from "./components/Creations"
import Features from "./components/Features"
import Footers from "./components/Footers"
import Hero from "./components/Hero"
import { josephin_sans } from "./fonts"



export default function Home() {
  return (
   <div >
    
     <Hero/>
     <Features/>
     <Creations/>
     <Footers/>
   </div>
  )
}
