"use client"
import Link from 'next/link';
import DropdownButtons from './DropdownButtons';

function Header() {
  const data={
    "title": "VideoDubber",
    "logo":{
      "src": "https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/autodubber-logo-1.svg",
      "alt": "videodubber-logo",
    },
    "links": [
      {
        "title": "Home",
        "url": "/"
      },
      {
        "title": "Pricing",
        "url": "/pricing/"
      },
      {
        "title": "Blogs",
        "url": "/blogs/"
      },
      {
        "title": "About",
        "url": "/about/"
      }
    ],
    "buttons": [
      {
        "title": "Try Free",
        "url": "/login",
        "type": "button"
      },
      {
        "title": "Log In",
        "url": "/login",
        "type": "button"
      }
    ]
  }
  return (
    <header id="header_" className="sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-center sm:text-left">
            <div className="ml-3 sm:ml-0 bg-gradient-to-r from-blue-600 via-red-500 to-red-600 bg-clip-text text-lg font-extrabold text-transparent sm:text-3xl justify-center">
              <Link href="/" className="cursor-pointer">
                  {data.title}
                  <picture>
                    <source media="(max-width: 639px)" srcSet={data.logo.src} alt={data.logo.alt} width="42" height="24"/>
                    <source media="(min-width: 640px)" srcSet={data.logo.src} alt={data.logo.alt} width="62" height="36"/>
                    <img className="inline-flex h-8 sm:h-16" src={data.logo.src} alt={data.logo.alt}/>
                  </picture>
              </Link>
            </div>
          </div>
          <div className="mt-4 hidden lg:flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            {data.links.map((link, index) => ( 
              <Link key={index} href={link.url} className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-gray-500 transition focus:outline-none"><span className="text-sm font-medium"> {link.title} </span></Link>
            ))}
            

            <button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring" type="button" onClick={() => window.location.href=data.buttons[0].url}><span className="text-sm font-medium"> {data.buttons[0].title} </span></button>
            <button className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring" type="button" onClick={() => window.location.href=data.buttons[1].url}>{data.buttons[1].title}</button>
          </div>
          <DropdownButtons />
        </div>
      </div>
      <style jsx>{`
        button{
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </header>
  );
}

export default Header;