"use client";
import React from "react";
import A2BFlag2Flag from "@/components/A2BFlag2Flag";
import Featured from "@/components/Featured";
import A2bBreadcrumb from "@/components/A2bBreadcrumbs";
import A2bStyle from "@/components/A2bStyle";
import Header from "@/components/Header_nonproject";
import A2bText from "@/components/A2bText";
import A2bExtraLinks from "@/components/A2bExtraLinks";
import FAQA2b from "@/components/FAQA2b";
import Footer from "@/components/Footer";
import A2bBox from "@/components/A2bBox";
import { TitleText } from "@/components/TitleText";
import ReviewsSnippet from "@/components/ReviewSnippet";

const A2b = ({ langcodes, vord }) => {
  vord = "audio";
  langcodes = ["Spanish", "English"];
  const flags = ["es", "us", "fr", "in", "jp"];
  const vordCapitalized = vord.charAt(0).toUpperCase() + vord.slice(1);
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

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
    title_text_data: {
      heading: `Translate ${langcodes[0]} ${vordCapitalized} to ${langcodes[1]} Free`,
      subheading: `Our ${vord} translator can translate any ${langcodes[0]} ${vord} to ${langcodes[1]} in one click!.`,
      button: "Try for Free",
    },

    breadcrums_data: {
      button1: "Home",
      button2: `Translate ${vord.charAt(0).toUpperCase() + vord.slice(1)}`,
      button3: `Translate ${langcodes[0]} ${
        vord.charAt(0).toUpperCase() + vord.slice(1)
      } ${langcodes[1] && `to ${langcodes[1]} `}`,
    },
    a2bbox_data: {
      heading: `How to Translate ${langcodes[0]} ${capitalize(vord)} to ${
        langcodes[1]
      }?`,
      steps: [
        {
          title: `Upload Your ${capitalize(vord)}`,
          description: `Utilize our uploader to import your ${vord} from various sources like your laptop, Google Drive, YouTube, or Dropbox. Enjoy the first 1 minute free with no file limits.`,
        },
        {
          title: `Select Source Language "${langcodes[0]}"`,
          description: `We currently support translations from English, Spanish, French, German, Mandarin, Dutch, Portuguese, Russian, Italian, Japanese, and many other languages. Don't forget to select the gender, source and target languages.`,
        },
        {
          title: `Modify "Transcription" or "Subtitles"`,
          description: `You can modify your ${vord} translation by modifying the generated "Subtitles" for later ${vord} integration or even upload your own subtitles. This helps us by adopting your vocabulary and correcting AI-generated translation to the highest accuracy.`,
        },
        {
          title: `Choose Target Language "${langcodes[1]}"`,
          description: `With our intuitive UI, you can select any number of languages to translate to at one go! You don't have to wait for one translation to finish and upload the ${vord} again, choose the settings again. Choosing the target language is as simple as ticking a box!`,
        },
        {
          title: `Choose Instant Voice Cloning - "Original Voice" or "Custom Voice"`,
          description: `The creator's natural voice adds a genuine touch to the content, enhancing credibility. Voice Cloning is now essential for content creators and VideoDubber users can use instant voice cloning either in their original voice or new custom voices in minutes, not weeks.`,
        },
        {
          title: `Modify the Translated Subtitles (Optional)`,
          description: `Our automatic transcription software swiftly converts your ${vord} to text and translates the subtitles/transcripts ${
            langcodes[0] && `from ${langcodes[0]}`
          } ${
            langcodes[1] && `to ${langcodes[1]}`
          }. You may choose to check the translated subtitles for accuracy if you want. There is little need though as our subtitles translator is state-of-the-art and translates subtitles ${
            langcodes[0] && `from ${langcodes[0]}`
          } ${
            langcodes[1] && `to ${langcodes[1]}`
          } efficiently with 97% accuracy.`,
        },
        {
          title: `Watch your "Translated ${vord}"${
            langcodes[1] && ` in "${langcodes[1]}"`
          }`,
          description: `Our ${vord} translator promptly generates the ${
            langcodes[1] && langcodes[1]
          } translation of your ${vord}.`,
        },
        {
          title: `Click "Export" and Choose Your Preferred File Format`,
          description: `Translate a ${langcodes[0] && langcodes[0]} ${vord} ${
            langcodes[1] && `to ${langcodes[1]}`
          } effortlessly by clicking "Submit" and voila, your translated ${vord} will be ready in minutes keeping emotions and tonality as preserved as possible using AI. Now, you can download the ${vord} or associated subtitles or translated subtitles directly by clicking the "download" buttons on the results page.`,
        },
      ],
    },
    a2bbox_flags: [
      "italian",
      "japanese",
      "english",
      "french",
      "spanish",
      "german",
      "mandarin",
    ],

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

    extra_links_data: {
      alllinks: [["dutch"], ["guj"]],
      heading1: `Want to translate ${langcodes[0]} ${
        vord === "subtitles" ? vord : vord + "s"
      } to other languages instead?`,
      heading2: `Want to translate ${
        vord === "subtitles" ? vord : vord + "s"
      } to ${langcodes[1]} from other languages instead?`,
      button1: `Translate ${langcodes[0]} ${vordCapitalized}`,
      button2: `Translate ${vordCapitalized} to ${langcodes[1]}`,
      linktext: `Translate ${langcodes[0]} ${vordCapitalized} to `,
      linktext2: `${vordCapitalized} to ${langcodes[1]}`,
    },
    faqdata: {
      heading: "Frequency Asked Questions",
      faqlist: [
        {
          q: "question1",
          a: "ans1",
        },
        {
          q: "ques2",
          a: "ans2",
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
  };

  return (
    <>
      <Header data={data.header_data} />
      <A2BFlag2Flag langcodes={langcodes} flags={flags} />
      <TitleText
        data={data.title_text_data}
        langcodes={langcodes}
        vord={vord}
      />
      <Featured />
      <A2bBreadcrumb
        data={data.breadcrums_data}
        vord={vord}
        langcodes={langcodes}
      />
      <A2bBox
        vord={vord}
        langcodes={langcodes}
        flags={data.a2bbox_flags}
        data={data.a2bbox_data}
      />
      <A2bText vord={vord} langcodes={langcodes} />
      <ReviewsSnippet reviews={data.reviews} />
      <A2bExtraLinks
        vord={vord}
        langcodes={langcodes}
        alllinks={data.extra_links_data.alllinks}
        data={data.extra_links_data}
      />
      <FAQA2b data={data.faqdata} faqlist={data.faqdata.faqlist} />
      <Footer data={data.footer_data} />
    </>
  );
};

export default A2b;
