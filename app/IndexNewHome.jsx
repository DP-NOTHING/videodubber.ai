"use client"
import Announcement from '@/components/Announcements';
import ClarityTracking from '@/components/ClarityTracking';
import FAQSnippet from '@/components/FAQSnippet';
import Featured from '@/components/Featured';
import FlagMarquee from '@/components/Flags2';
import Footer from '@/components/Footer';
import Ft_Counter from '@/components/Ft_Counter';
import Ft_Horizaontal from '@/components/Ft_Horizaontal';
import Ft_Section2 from '@/components/Ft_Section2';
import Ft_Section3 from '@/components/Ft_Section3';
import Ft_section4 from '@/components/Ft_Section4';
import Header from '@/components/Header_nonproject';
import Langs from '@/components/Langs';
import PricingSection from '@/components/PricingFrontPage';
import ReviewsSnippet from '@/components/ReviewSnippet';
import Testimonials from '@/components/Testimonals';
import VideoSection from '@/components/VideoSection';
import React from 'react';


export default function IndexNewHome() {
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

  return (
    <div>
      
        <Announcement />
        {/* <Announcements /> */}
        <Header/>
        <VideoSection />
        <h2 className="text-xl font-medium sm:text-2xl text-center px-4 sm:px-6 lg:px-8 py-4">
          Best Video Translation & Voice Cloning Tool 
          <span className="text-blue-900"><em> powered by</em></span> Generative AI
        </h2>
        <Featured />
        {/* <FlagMarquee /> */}
        {/* <Langs /> */}
        <section className="pt-3 mx-5">
          <div className="overflow-hidden">
            {/* include 'snippets/ytubers.html' */}
          </div>
        </section>
        <Ft_Section2 />
        {/* <GridClip /> */}
        <Ft_Counter />
        <Ft_Horizaontal />
        <Ft_section4 />
        <Ft_Section3 />
        <PricingSection />
        <Testimonials />
        {/* <ReviewsSnippet /> */}
        <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8 pt-12">
          <h2 className="text-center bg-gradient-to-r from-pink-800 via-indigo-500 to-red-600 bg-clip-text text-3xl sm:text-4xl font-extrabold text-transparent mb-8">
            Frequently Asked Questions
          </h2>
          {/* <FAQSnippet /> */}
        </div>
        <Footer />
        {/* <ClarityTracking /> */}
       
    </div>
  );
}