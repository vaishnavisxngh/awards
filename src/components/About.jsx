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

            <AnimatedTitle title="  About Me "
            containerClass = "mt-5 !text-black text-center"/>
        
            <div className="about-subtext">
                <p>Curious mind sculpting visuals where design breathes life into code</p>
                <p>
                    DESIGNER | DEVELOPER | DUMBASS
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