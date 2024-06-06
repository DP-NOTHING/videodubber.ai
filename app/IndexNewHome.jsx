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


  const data={
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
    "videosection_data":{
      title: "Reach a Billion Viewers!",
      subtitle: "Translate Your Video with AI!",
      description: "Mandarin, Spanish, Hindi viewers make 5 Billion viewers of Internet alone!",
      button1:{
        text : "Get Started Free",
        url : "/login"
      },
      button2:{
        text : "Learn How",
        url : "/login"
      }
    },
    "flags":['in','au','us','in','au','us','in','au','us','in','au','us','in','au','us','in','au','us','in','au','us','in','au','us','in','au','us','in','au','us','in','au','us','in','au','us','in','au','us','in','au','us','in','au','us'],
    "flagalts":['India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States','India','Australia','United States'],
    "langs":"Tamil (India),Malayalam (India),Italian (Italy),Vietnamese (Vietnam),Dutch (Netherlands),Gujarati (India),German (Germany),Japanese (Japan),Portuguese (Portugal),English (India),English (Australia),Chinese (Hong Kong),Bengali (India),Afrikaans (South Africa),Hindi (India),French (Canada),Indonesian (Indonesia),Spanish (Spain),Arabic,Marathi (India),French (France),Russian (Russia),Turkish (Turkey),Mandarin Chinese,Dutch (Belgium),English (UK),Kannada (India),Portuguese (Brazil),Polish (Poland),Korean (South Korea),Thai (Thailand),Punjabi (India),Spanish (US),English (US)".split(","),
    "ft_section2_data":[
      {
        href: '/login?services=digital-campaigns',
        svgPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
        title: 'Digital Campaigns',
        description:
          'Make your Digital Campaigns available in multiple languages to target customers in their own language increasing conversion.',
      },
      {
        href: '/login?services=youtube_tutorials',
        svgPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
        title: 'Youtube Tutorials',
        description:
          'Captivate global audiences and enhance engagement by delivering content in their preferred language, amplifying your impact and boosting viewer engagement like never before!',
      },
      {
        href: '/login?services=education-content',
        svgPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
        title: 'Educational Content',
        description:
          'Empower learners worldwide to access your content in their native language, elevating comprehension and knowledge retention for unparalleled educational success!',
      },
      {
        href: '/login?services=car-reviews',
        svgPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
        title: 'Car Reviews',
        description:
          'Connect with automotive enthusiasts around the world in their preferred language, elevating their car browsing experience and turbocharging your viewer base for maximum engagement and influence!',
      },
      {
        href: '/login?services=documentaries',
        svgPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
        title: 'Documentaries',
        description:
          'Break down language barriers and share your narratives with a worldwide audience, ensuring your thought-provoking content resonates on a global scale and leaves an indelible mark on viewers everywhere!',
      },
      {
        href: '/login?services=wildlife-travel-gaming',
        svgPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
        title: 'Wildlife/Travel/Others',
        description:
          'Whether you\'re sharing Cooking Tutorials, Fashion Insights, Travel Vlogs, Wildlife Visuals or DIY How-tos, captivate a diverse audience in their native language, making your content universally engaging across linguistic boundaries like never before!',
      },
    ],
    "counter_data":{
      title : "Trusted by Growth Hackers",
      text : "We will make your video available in languages 99.86% of the globe understands!",
      counter : [
        {
          title : "Total Videos made",
          count : "10k+"
        },
        {
          title : "Number of Voices",
          count : "100+"
        },
        {
          title : "Native Language Coverage",
          count : "99.86%"
        }
      ]
    },
    "ft_horizontal_data":{
      card : [
        {
          heading : "Sub like a Pro",
          text : "Get your auto-generated video subtitles for any language, edit on the go with your own dictionary and download with VideoDubber! Proven way to 2x your video reach!",
          url : "/translate-spanish-video-to-english/",
          label : "Learn how",
        },
        {
          heading : "Dub like a Pro",
          text : "Get advantage over your competitors making your video speak languages your subscribers understand but you don't, with VideoDubber! Proven way to 10x your subscriber count!",
          url : "/translate-spanish-video-to-english/",
          label : "Learn how"
        },
        {
          heading : "Translate like a Pro",
          text : "Get rid of language barriers, translating your video to reach people from other countries and multiply your revenue with VideoDubber! Proven way to 3x your revenue count!",
          url : "/translate-spanish-video-to-english/",
          label : "Learn how"
        }
      ]
    },
    "ft_section4_data":{
      "title":"Use your Original Voice!",
      "description":"VideoDubber.ai is the first and only AI to offer Voice Cloning! Use VideoDubber.ai to clone your voice in seconds with a single click!",
      "image":"https://cdn.jsdelivr.net/gh/souvic/autodubber@latest/assets/ai-voice-cloning-free.webp",
      "alt":"AI Voice Cloning Free",
      "points_heading":"Why is Voice Cloning essential for content creators?",
      "points":[
        "Authenticity: The creator's natural voice adds a genuine touch to the content, enhancing credibility",
        "Unique Identity: The creator's voice is distinctive making their content instantly recognizable.",
        "Emotional Expression: The creator's voice carries their emotions and intentions which are important for audience.",
        "Personal Branding: The creator's voice becomes an integral part of their personal brand, reinforcing their image and message.",
        "Trust and Engagement: Hearing the creator's actual voice fosters trust and deeper engagement as viewers feel a personal connection to the content."
      ],
      "button":{
        "text":"Dub in Your Own Voice",
        "link":"/login"
      }
    },
    "ft_section3_data":{
      image:{
        src:"https://cdn.jsdelivr.net/gh/souvic/autodubber@latest/assets/Organic-Youtube-Growth-1.webp",
        alt:"How to grow your audience?"
      },
      title:"Get the VideoDubber Advantage",
      description:"Let your content resonate worldwide as VideoDubber effortlessly translates and connects, fostering a global community through the universal language of captivating videos, at the cheapest price possible. Clone your voice, modify your content, all in a few clicks!",
      button:{
        text:"Get Started Free",
        url:"/login",
      }
    },
    "pricing_data":{
      heading:"3x Cheaper for quick-testing new tech!",
      subHeading:"Get the VideoDubber Advantage before your competitors!",
    },
    "testimonals":{
      heading : "Don't just believe us.. Hear from the Moguls directly!",
      testimonials: [
        {
          name: "Griffin Johnsen",
          country: "United States",
          image: "https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/griffin.jpeg",
          designation: "Founder, Armchair Historian LLC",
          rating: 5,
          countyimage: "https://flagcdn.com/h20/us.png",
          review: "VideoDubber helped us make historical content more accessible. The platform, the UI was so smooth to use. Multi-person support is not something many platforms provide which we got here."
        },
        {
          name: "Becky Evans",
          country: "Great Britain",
          image: "https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/becky.jpeg",
          designation: "Youtuber, Multipreneur",
          rating: 5,
          review: "Being an Youtuber, VideoDubber was a natural choice for me. No Youtuber should be miserly investing in their growth story and I did not. Being able to make my English videos accessible to billions is a timed opportunity which few can afford to miss!"
        },
        {
          name: "Bishakh Ghosh",
          country: "India",
          image: "https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/bishakh.webp",
          designation: "CEO, EasyAuth.io",
          rating: 5,
          review: "We used VideoDubber to translate multiple videos across languages, mainly to advertise our services around the globe. I am so glad to witness the tool work smoothly for all our needs catapulting our Q-o-Q growth!"
        }
      ]
    },
    reviews: [
      "Better than Elevenlabs..",
      "The best VideoDubbing app, much better than elevenlabs or any other alternative!",
      "Jessica Turner",
      "",
      "Commendable Customer Service!",
      "Very nice product and superb customer service. 24K",
      "Steve, CEO@24K",
      "",
      "Too Perfect!",
      "Videodubber.ai makes video dubbing sound so real – can't even tell it's done by a machine.",
      "KRAB OFFICIAL",
      "",
      "Easy to Use and Light on Pocket!",
      "I've used many other video dubber but this one is very easy to use and light on pocket. Using it for a week, results are promising.",
      "Pranay Goswami",
      "Must have for content creators!!",
      "VideoDubber is a game-changer for content creators, effortlessly translating and dubbing videos to reach a global audience, making it a must-have tool for anyone looking to expand their reach.",
      "Nischay Parekh",
      "Smooth Localization..",
      "Works like a charm. Now I am able to post the same content on YouTube but localised into different languages.",
      "Bishakh Ghosh",
    ],
    "faqlist2" : [
      {
        q: " What are VideoDubber Credits?",
        a: "To access the platform's services, we apply credit charges: 4 credits for one minute of voice over in video, 1 credit for one minute of translation, 1 credit for one minute of text-to-speech, and 1 credit for one minute of subtitling. In the subscription page, you are said that you will get x minutes of dubbing which actually translates to x*(4+1+1)=6x credits since one minute of dubbing means one minute of subtitling+one minute of translation+one minute of voicing over."
      },
      {
        q: "What happens once my trial gets over?",
        a: "You have the choice to access our product for free through our freemium plan, which comes with limitations on certain features and speakers. Alternatively, you can opt for a pro subscription to unlock and continue enjoying the full range of pro features."
      },
    ],
    "faqlist": [
      {
        q: "Is Google Translate 100% right?",
        a: "Google Translate is fast but not always 100% accurate. For precise translations, platforms like Videodubber.ai offer more reliable results."
      },
      {
        q: "Can I translate live audio?",
        a: "Live audio translation is possible with certain tools like Videodubber.ai's live translation feature, providing real-time audio translations.",
      }
    ],
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
  }

  return (
    <div>
        <Announcement />
        <Header data={data.header_data}/>
        <VideoSection data={data.videosection_data}/>
        <Featured />
        <FlagMarquee flags={data.flags} flagalts={data.flagalts}/>
        <Langs langs={data.langs}/>
        {/* <section className="pt-3 mx-5">
          <div className="overflow-hidden">
            include 'snippets/ytubers.html'
          </div>
        </section> */}
        <Ft_Section2 services={data.ft_section2_data}/>
        {/* <GridClip /> */}
        <Ft_Counter data={data.counter_data} />
        <Ft_Horizaontal data={data.ft_horizontal_data}/>
        <Ft_section4 data={data.ft_section4_data} />
        <Ft_Section3 data={data.ft_section3_data}/>
        <PricingSection data={data.pricing_data}/>
        <Testimonials data={data.testimonals}/>
        <ReviewsSnippet reviews={data.reviews} />
        
          <FAQSnippet faqlist={data.faqlist} faqlist2={data.faqlist2}/>
        
          <Footer data={data.footer_data} />
        {/* <ClarityTracking /> */}
        
    </div>
  );
}