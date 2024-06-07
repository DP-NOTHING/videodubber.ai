import Footer from "@/components/Footer";
import Header from "@/components/Header_nonproject";
import PricingNew from "@/components/PricingNew";
import React from "react";

export default function Page() {
  const data = {
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
    plans: [
      {
        name: "Free Plan",
        price: "0$",
        period: "/month",
        features: [
          { feature: "Video Translation", value: "5 Mins/mo" },
          { feature: "Premium Voice", value: "0 Mins/mo" },
          { feature: "Subtitles", value: "Unlimited" },
          { feature: "Export", value: false },
          { feature: "Storage", value: "100 MB" },
          { feature: "Max File Upload Length", value: "5 Mins" },
          { feature: "Max File Upload Size", value: "100 MB" },
          { feature: "Users", value: "Unlimited" },
          { feature: "Export Quality", value: false },
          { feature: "Download Subtitles", value: "SRT, VTT" },
          { feature: "No Watermark", value: false },
          { feature: "No. of Folders", value: "1" },
        ],
      },
      {
        name: "pro Plan",
        price: "0$",
        period: "/month",
        features: [
          { feature: "Video Translation", value: "5 Mins/mo" },
          { feature: "Premium Voice", value: "0 Mins/mo" },
          { feature: "Subtitles", value: "Unlimited" },
          { feature: "Export", value: false },
          { feature: "Storage", value: "100 MB" },
          { feature: "Max File Upload Length", value: "5 Mins" },
          { feature: "Max File Upload Size", value: "100 MB" },
          { feature: "Users", value: "Unlimited" },
          { feature: "Export Quality", value: true },
          { feature: "Download Subtitles", value: "SRT, VTT" },
          { feature: "No Watermark", value: false },
          { feature: "No. of Folders", value: "1" },
        ],
      },
      {
        name: "plus Plan",
        price: "12$",
        period: "/month",
        features: [
          { feature: "Video Translation", value: "5 Mins/mo" },
          { feature: "Premium Voice", value: "0 Mins/mo" },
          { feature: "Subtitles", value: "Unlimited" },
          { feature: "Export", value: false },
          { feature: "Storage", value: "100 MB" },
          { feature: "Max File Upload Length", value: "5 Mins" },
          { feature: "Max File Upload Size", value: "100 MB" },
          { feature: "Users", value: "Unlimited" },
          { feature: "Export Quality", value: false },
          { feature: "Download Subtitles", value: "SRT, VTT" },
          { feature: "No Watermark", value: false },
          { feature: "No. of Folders", value: "1" },
        ],
      },
    ],
  };
  return (
    <div>
      <Header data={data.header_data} />

      <PricingNew plans={data.plans} />
      <Footer data={data.footer_data} />
    </div>
  );
}
