import { useRef , useState , useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Button from './Button';
import { useWindowScroll } from 'react-use';
import { TiLocationArrow } from 'react-icons/ti';

const NavItems = ['Nexus', 'Vault' , 'Prologue' , 'About', 'Contact'] ;

const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive , setIsIndicatorActive] = useState(false);
   
   const [ lastScrollY, setLastScrollY ] = useState(0);
   const [ isNavbarVisible, setIsNavbarVisible ] = useState(true);
    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);

    const { y : currentScrollY } = useWindowScroll();

    useEffect(() => {
      if (currentScrollY === 0) {
        setIsNavbarVisible(true);
        navContainerRef.current.classList.remove('floating-nav');
        } else if(currentScrollY > lastScrollY) {
          setIsNavbarVisible(false);
          navContainerRef.current.classList.add('floating-nav');
        } else if(currentScrollY < lastScrollY) {
          setIsNavbarVisible(true);
          navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY , lastScrollY]);

useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavbarVisible ? 0 : '-100%',
      opacity: isNavbarVisible ? 1 : 0,
      duration: 0.5,
    });
  }, [isNavbarVisible]);



    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    }

    useEffect(() => { 
        if(isAudioPlaying) {
            audioElementRef.current.play() ;
        } else{
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

  return (
    <div ref={navContainerRef} className="fixed
    inset-x-0 top-0 z-30 h-0 order-none transition-all duration-700 sm:inset-x-6">
        <header className="absolute top-1/2 w-full - translate-y-1/2 ">
        <nav className="flex size-full items-center justify-between p-4">
            <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="Logo" 
            className="w-10"/>
            <Button 
  id="project-button"
  title="Projects"
  containerClass="!bg-yellow-300 md:flex items-center gap-1"
  className=" !text-black  transition-colors duration-300"
/>
    
            </div>
            <div className="flex h-full items-center">
                <div className="hidden md:flex mr-12">
                    {NavItems.map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`}
                        className="nav-hover-btn">
                            {item}
                        </a>
                    ))}
                </div>
                <button
  onClick={toggleAudioIndicator}
  className="absolute top-5 right-6 z-50 flex items-end gap-[2px] h-5"
>
  <audio
    ref={audioElementRef}
    className="hidden"
    src="/audio/loop.mp3"
    loop
  />
  {[1, 2, 3, 4].map((bar) => (
    <div
      key={bar}
      className={`w-[3px] h-[15px] bg-yellow-300 transition-transform duration-500 ease-in-out ${
        isIndicatorActive ? 'animate-bounce-bar' : ''
      }`}
      style={{ animationDelay: `${bar * 0.1}s` }}
    />
  ))}
</button>

            </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar