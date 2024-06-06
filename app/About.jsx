"use client";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header_nonproject";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("header_").classList.add("shadow-md");
      } else {
        document.getElementById("header_").classList.remove("shadow-md");
      }
    };

    window.onscroll = scrollFunction;
    return () => {
      window.onscroll = null;
    };
  }, []);

  const data = {
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

    aboutus_data: {
      heading: "About Us",
      description:
        "At VideoDubber.ai, we pride ourselves on being a trailblazer in the world of automated voiceover and dubbing technology. Our journey began with a simple yet powerful idea: to make high-quality voiceovers and dubbing accessible to everyone, anywhere in the world. Today, we're proud to say that we've turned that vision into a reality.",
      points: [
        {
          heading: "Our Story",
          description:
            "Founded in 2023, VideoDubber.ai has rapidly evolved into a cutting-edge platform, revolutionizing the way audio localization is done in the global media industry. We recognized the need for efficient, cost-effective, and high-quality voiceovers and dubbing services for multimedia content and set out to create a solution that met those demands.",
        },
        {
          heading: "What We Do",
          description:
            "VideoDubber.ai provides an innovative and user-friendly platform that automates the voiceover and dubbing process. With our advanced AI-driven technology, we can transform your content into multiple languages, allowing you to reach a global audience without the need for lengthy and costly post-production processes. Whether you're a filmmaker, content creator, e-learning provider, or business looking to expand into new markets, we've got you covered.",
        },
        {
          heading: "Our Mission",
          description:
            "Our mission is simple: to break down language barriers and make multimedia content accessible to people all around the world. We believe that every story deserves to be heard, regardless of the language spoken. By providing automated dubbing and voiceover services, we empower creators to share their stories on a global scale, fostering greater understanding and connection among diverse audiences.",
        },
      ],
      heading2: "Why Choose VideoDubber.ai?",
      points2: [
        "Quality: We are committed to delivering top-notch voiceovers and dubbing that sound natural and professional.",
        "Efficiency: Our AI technology allows us to deliver results quickly, saving you time and money.",
        "Global Reach: With support for over 15+ top languages and 180+ voices to choose from, we help you reach a worldwide audience.",
        "User-Friendly: Our platform is designed to be intuitive and easy to use, even if you're not tech-savvy.",
        "Customization: We offer flexibility, allowing you to fine-tune the dubbing to match your project's specific needs.",
        "24/7 Support: Our customer support team is always ready to assist you, ensuring a smooth experience.",
      ],
      heading3: "Join the VideoDubber.ai Community",
      description3:
        "We're more than just a technology platform; we're a community of creators, innovators, and storytellers. Join us in our mission to bridge cultures and languages through multimedia content. Whether you're an individual creator or a large corporation, VideoDubber.ai is here to support your global aspirations.",
      heading4: "Contact Us",
      description4: {
        line1:
          "Ready to explore the world of automated voiceovers and dubbing with VideoDubber.ai?",
        line2:
          "today to learn more about our services and how we can help you achieve your multimedia localization goals. We look forward to being part of your journey!",
        line3:
          "Thank you for choosing VideoDubber.ai – where language is no barrier to storytelling!",
      },
    },
  };
  return (
    <div>
      <Header data={data.header_data} />
      <AboutUs data={data.aboutus_data} />
      <Footer data={data.footer_data} />
    </div>
  );
};

export default About;
