"use client"
import ContactUsSnippet from '@/components/ContactUsSnippet';
import React from 'react'
import Footer from '@/components/Footer';
import Header from '@/components/Header_nonproject';
export default function page() {
    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("header_").classList.add("shadow-md");
        } else {
          document.getElementById("header_").classList.remove("shadow-md");
        }
      };
      const areCookiesEnabled = () => {
        // Set a test cookie
        document.cookie = "testcookie=1";
    
        // Check if the cookie was set
        var cookieEnabled = document.cookie.indexOf("testcookie") != -1;
    
        // Delete the test cookie
        document.cookie = "testcookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
        return cookieEnabled;
      }
    
      const sendCookieStatusToServer = (cookieEnabled) => {
        fetch('/receive-cookie-status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cookiesEnabled: cookieEnabled }),
        })
        .then(response => {
            if (response.ok) {
                console.log('Cookie status sent successfully');
            } else {
                console.error('Failed to send cookie status');
            }
        })
        .catch(error => {
            console.error('Error sending cookie status:', error);
        });
      }
    
      React.useEffect(() => {
        window.onscroll = scrollFunction;
        const cookiesEnabled = areCookiesEnabled();
        sendCookieStatusToServer(cookiesEnabled);
      }, []);
    const data={
        footer_data: {
            heading: "VideoDubber.",
            descrption:
              "VideoDubber is a leading AI-first service made for Youtubers, Businesses and Content Creators in general by AI Scientists",
            sections: [
              {
                tile: "Products",
                links: [
                  {
                    title: "Video Translation",
                    link: "/translate-video/",
                  },
                  {
                    title: "Subtitles Translation",
                    link: "/translate-subtitles/",
                  },
                  {
                    title: "Audio Translation",
                    link: "/translate-audio/",
                  },
                  {
                    title: "Automatic Peer Review",
                    link: "/autoreview",
                  },
                ],
              },
              {
                tile: "Company",
                links: [
                  {
                    title: "About Us",
                    link: "/about/",
                  },
                  {
                    title: "Spanish to English",
                    link: "/translate-spanish-video-to-english/",
                  },
                  {
                    title: "English to Hindi",
                    link: "/translate-english-video-to-hindi/",
                  },
                ],
              },
              {
                tile: "Helpful Links",
                links: [
                  {
                    title: "Support",
                    link: "/support/",
                  },
                  {
                    title: "Contact",
                    link: "/contact/",
                  },
                  {
                    title: "FAQ",
                    link: "/faq/",
                  },
                ],
              },
              {
                tile: "Miscellaneous",
                links: [
                  {
                    title: "Terms of Service",
                    link: "/terms-of-service/",
                  },
                  {
                    title: "Privacy Policy",
                    link: "/privacy-policy/",
                  },
                  {
                    title: "Blogs",
                    link: "/blogs/",
                  },
                ],
              },
            ],
          },
          header_data: {
            title: "VideoDubber. ",
            logo: {
              src: "https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/autodubber-logo-1.svg",
              alt: "videodubber-logo",
            },
            links: [
              {
                title: "Home",
                url: "/",
              },
              {
                title: "Pricing",
                url: "/pricing/",
              },
              {
                title: "Blogs",
                url: "/blogs/",
              },
              {
                title: "About",
                url: "/about/",
              },
            ],
            buttons: [
              {
                title: "Try Free",
                url: "/login",
                type: "button",
              },
              {
                title: "Log In",
                url: "/login",
                type: "button",
              },
            ],
          },
    }
  return (
    <>
        <Header data={data.header_data}/>
        <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8 pt-12">
            <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
                <ContactUsSnippet/>

        </div>
        <Footer data={data.footer_data}/>
    </>
  )
}
