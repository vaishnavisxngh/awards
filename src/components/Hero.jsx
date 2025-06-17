import { useState, useRef } from 'react';
import React from 'react';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(0);

    const totalVideos = 3;
    const nextVideoRef = useRef(null);
    const handleVideoLoad = () => {
        setLoadedVideo((prev) => prev + 1) ;
    }
    // 0 % 4 = 0 + 1 => 1
    // 1 % 4 = 1 + 1 => 2
    // 2 % 4 = 2 + 1 => 3
    // 3 % 4 = 0 + 1 => 1 
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-centre scale-150 object-cover object-center"
                                onLoadedData={handleVideoLoad}
                            />
                      </div>
                </div>
                   <video
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex)}
                    loop
                    muted 
                    id="next-video"
                    className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                    />
                  <video
                  src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                  />
            </div>
        </div>
    </div>
    )
}

export default Hero;