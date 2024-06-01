"use client"
import React, { useState, useRef } from 'react';

function NewShowcase() {
  const [isPlaying, setIsPlaying] = useState({1: false, 2: false});
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const data={
      video1:{
        poster: "https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/english.webp",
        src: "https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/english2.mp4",
        caption: "English (1.2 Billion speakers!)",
        track:{
          src: "/static/english.srt",
          srclang: "en",
          label: "English Captions"
        },
        alt: "Introduction video in English"
      },
      video2:{
        poster: "https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/spanish.webp",
        src: "https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/spanish2.mp4",
        caption: "Spanish (900 million speakers!)",
        track:{
          src: "/static/spanish.srt",
          srclang: "es",
          label: "Spanish Captions"
        },
        alt: "Introduction video in Spanish"
      },
      error: "Your browser does not support HTML video."
    }
  
  const playPause = (id) => {
    let videoRef = id === 1 ? videoRef1 : videoRef2;
    setIsPlaying(prevState => ({...prevState, [id]: !prevState[id]}));
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="grid sm:grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 px-8 place-items-center px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <div className="max-h-64 rounded-lg mt-0 col-span-2 video-wrapper">
        <p className="text-indigo-600 p-1 hidden">{data.video1.caption}</p>
        <video ref={videoRef1} id="1" preload="none" style={{height: '289px'}} poster={data.video1.poster} alt={data.video1.alt}>
          <source src={data.video1.src} type="video/mp4" height="289" />
          {data.error}
          <track src={data.video1.track.src} kind="captions" srclang={data.video1.track.srclang} label={data.video1.track.label} />
        </video>
        <svg id="svg1" className="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video" onClick={() => playPause(1)} style={{opacity: isPlaying[1] ? 0 : 1}}>
          <polygon points="70, 55 70, 145 145, 100" fill="#fff" />
        </svg>
      </div>
      <div className="max-h-64 rounded-lg mt-0 col-span-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </div>
      <div className="max-h-64 rounded-lg mt-0 col-span-2 video-wrapper">
        <p className="text-indigo-600 p-1 hidden">{data.video2.caption}</p>
        <video ref={videoRef2} id="2" preload="none" style={{height: '289px'}} poster={data.video2.poster} alt={data.video2.alt}>
          <source src={data.video2.src} type="video/mp4" style={{height:'100%', width:'100%', fontFamily: 'Times, Bangla901, sans-serif'}} />
          {data.error}
          <track src={data.video2.track.src} kind="captions" srclang={data.video2.track.srclang} label={data.video2.track.label} />
        </video>
        <svg id="svg2" className="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video" onClick={() => playPause(2)} style={{opacity: isPlaying[2] ? 0 : 1}}>
          <polygon points="70, 55 70, 145 145, 100" fill="#fff" />
        </svg>
      </div>
      <style jsx>{`
        .video-wrapper {
    position: relative;
}

.video-wrapper > video {
    width: 100%;
    vertical-align: middle;
}

.video-wrapper > video.has-media-controls-hidden::-webkit-media-controls {
    display: none;
}

.video-overlay-play-button {
    box-sizing: border-box;
    width: 100%;
    height: 289px;
    padding: 10px calc(50% - 50px);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    opacity: 0.8;
    cursor: pointer;
    
    transition: opacity 150ms;
}

.video-overlay-play-button:hover {
    opacity: 1;
}

.video-overlay-play-button.is-hidden {
    display: none;
}
    
        video::-webkit-media-controls-timeline {
            display: none;
        }
        `} </style>
    </div>
  );
}

export default NewShowcase;