import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap' ;
import AnimatedTitle from './AnimatedTitle';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger: '#clip' ,
                start:'center center' ,
                end: '+=800 center' ,
                scrub:0.5 ,
                pin: true ,
                pinSpacing:true ,
            }
        })
        clipAnimation.to('.mask-clip-path' , {
            width: '100vw' ,
            height: '100vh' ,
            borderRadius : 0 ,
        })
    })
  return (
    <div id="about" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:test-[10px]">
                Hello There
            </h2>

            <AnimatedTitle title="Discover The World"
            containerClass = "mt-5 !text-black text-center"/>
        
            <div className="about-subtext">
                <p>The Metagame begins-your life, a new MMORPG</p>
                <p>
                    Zentry is an unified play layer driving attention and contribution
                </p>
            </div>
        </div>
        <div className="h-dvh w-screen" id ="clip">
            <div className="mask-clip-path about-image">
                <img 
                src="img/about.webp"
                alt="Background"
                className="absolute left-0 top-0 size-full object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default About