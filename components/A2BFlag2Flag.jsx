import Image from 'next/image';
import { useState, useEffect } from 'react';

const A2BFlag2Flag = ({ langcodes,flags }) => {
  const flagdict = {
    "spanish": "es",
    "english": "us",
    "french": "fr",
    "hindi": "in",
    "japanese": "jp",
    "dutch": "nl",
  };
  return (
    <div className="flex mx-auto justify-center mb-4">
      <div className="my-auto">
        <span
          style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
            maxWidth: '100%',
          }}
        >
          {flags.includes(flagdict[langcodes[0].toLowerCase()]) ? (
            <>
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  maxWidth: '100%',
                }}
              >
                
                <img
                  style={{
                    display: 'block',
                    maxWidth: '100%',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                  }}
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2733%27/%3e"
                />
             
               </span>
               <Image
                alt={`Image of ${langcodes[0]} Flag`}
                // src={`/static/svgs/${langcodes[0].toLowerCase()}.svg`}
                src={`https://flagcdn.com/h120/${flagdict[langcodes[0].toLowerCase()]}.png`}
                decoding="async"
                data-nimg="intrinsic"
                className="h-full w-full rounded-md object-cover"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: 'border-box',
                  padding: 0,
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: 0,
                  height: 0,
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                }}
                srcSet={`/static/svgs/${langcodes[0].toLowerCase()}.svg 1x, /static/svgs/${langcodes[0].toLowerCase()}.svg 2x`}
                width={180} // or 240
                height={120}
              />
            </>
          ) : (
            <>
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  maxWidth: '100%',
                }}
              >
                <img
                  style={{
                    display: 'block',
                    maxWidth: '100%',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                  }}
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2733%27/%3e"
                />
              </span>
              <Image
                alt="Image of Earth Flag"
                src="/static/svgs/earth.svg"
                decoding="async"
                data-nimg="intrinsic"
                className="h-full w-full rounded-md object-cover"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: 'border-box',
                  padding: 0,
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: 0,
                  height: 0,
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                }}
                srcSet="/static/svgs/earth.svg 1x, /static/svgs/earth.svg 2x"
              />
              
            </>
          )}
          <noscript />
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="48"
        fill="currentColor"
        className="bi bi-arrow-right-short"
        viewBox="0 1 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
        />
      </svg>

      <div className="my-auto">
        <span
          style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
            maxWidth: '100%',
          }}
        >
          {flags.includes(flagdict[langcodes[1].toLowerCase()]) ? (
            <>
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  maxWidth: '100%',
                }}
              >
                <img
                  style={{
                    display: 'block',
                    maxWidth: '100%',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                  }}
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2733%27/%3e"
                />
              </span>
              <Image
                alt={`Image of ${langcodes[1]} Flag`}
                // src={`/static/svgs/${langcodes[1].toLowerCase()}.svg`}
                src={`https://flagcdn.com/h120/${flagdict[langcodes[1].toLowerCase()]}.png`}
                decoding="async"
                data-nimg="intrinsic"
                className="h-full w-full rounded-md object-cover"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: 'border-box',
                  padding: 0,
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: 0,
                  height: 0,
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                }}
                srcSet={`/static/svgs/${langcodes[1].toLowerCase()}.svg 1x, /static/svgs/${langcodes[1].toLowerCase()}.svg 2x`}
                width={180} // or 240
                height={120}
              />
            </>
          ) : (
            <>
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  maxWidth: '100%',
                }}
              >
                <img
                  style={{
                    display: 'block',
                    maxWidth: '100%',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                  }}
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2733%27/%3e"
                />
              </span>
              <Image
                alt="Image of Earth Flag"
                src="/static/svgs/earth.svg"
                decoding="async"
                data-nimg="intrinsic"
                className="h-full w-full rounded-md object-cover"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: 'border-box',
                  padding: 0,
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: 0,
                  height: 0,
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                }}
                srcSet="/static/svgs/earth.svg 1x, /static/svgs/earth.svg 2x"
              />
            </>
          )}
          <noscript />
        </span>
      </div>
    </div>
  );
};

export default A2BFlag2Flag;
