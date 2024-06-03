"use client";
import React from "react";
// import A2BFlag2Flag from '@components/A2BFlag2Flag';
import Featured from "@/components/Featured";
import A2bBreadcrumb from "@/components/A2bBreadcrumbs";
import A2bStyle from "@/components/A2bStyle";
import Header from "@/components/Header_nonproject";
import A2bText from "@/components/A2bText";
import A2bExtraLinks from "@/components/A2bExtraLinks";
import FAQA2b from "@/components/FAQA2b";
import Footer from "@/components/Footer";
import A2bBox from "@/components/A2bBox";

const A2b = ({ langcodes, vord }) => {
  const vordCapitalized = vord.charAt(0).toUpperCase() + vord.slice(1);

  return (
    <>
      <Header />
      {/* <A2BFlag2Flag /> */}
      <h1 className="text-2xl sm:text-4xl font-extrabold mx-6 text-center mb-2">
        Translate {langcodes[0]} {vordCapitalized} to {langcodes[1]} Free
      </h1>
      <p className="mx-6 text-center mb-4 text-sm sm:text-base">
        Our {vord} translator can translate any {langcodes[0]} {vord} to{" "}
        {langcodes[1]} in one click!.
      </p>
      <button
        className="block mx-auto rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
        type="button"
        onClick={() => (window.location = "/login")}
      >
        Try for Free
      </button>
      <div className="py-1 m-8">
        <Featured />
      </div>

      <div className="text-center px-8">
        <div
          className="stars"
          style={{ "--rating": "4.98" }}
          role="img"
          aria-label="Rated 4.98/5 on There's An AI For That (TAAFT) - The #1 AI Aggregator"
          aria-labelledby="starsLabel"
        ></div>

        <div id="starsLabel" className="text-sm">
          Rated <b>4.98/5</b> on
          <a href="https://theresanaiforthat.com/ai/videodubber/#rw">
            There's An AI For That (TAAFT) - The #1 AI Aggregator
          </a>
        </div>
      </div>

      <A2bBreadcrumb vord="audio" langcodes={["Spanish", "English"]} />
      <A2bBox vord="audio" langcodes={["Spanish", "English"]} />
      {/* <AbBBox vord="audio" langcodes={["Spanish","English"]}/> */}
      <div className="mt-10 font-monospace px-8 text-base space-y-4">
        <A2bText vord="audio" langcodes={["Spanish", "English"]} />
      </div>
      {/* <ReviewsSnippet /> */}
      <A2bExtraLinks
        vord="audio"
        langcodes={["Spanish", "English"]}
        alllinks={[["dutch"], ["guj"]]}
      />
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8 pt-12">
        <h2 className="text-lg sm:text-2xl text-center bg-gradient-to-r from-pink-800 via-indigo-500 to-red-600 bg-clip-text font-extrabold text-transparent mb-8">
          Frequently Asked Questions
        </h2>

        <FAQA2b
          faqlist={[
            {
              q: "question1",
              a: "ans1",
            },
            {
              q: "ques2",
              a: "ans2",
            },
          ]}
        />
      </div>
      <Footer />
      <style jsx>{`
        li,
        ol,
        ul {
          list-style-type: none;
        }
        .stars {
          --percent: calc(var(--rating) / 5 * 91%);
          text-align: center;
        }
        .stars::before {
          content: "★★★★★";
          letter-spacing: 8px;
          background: linear-gradient(
            90deg,
            #f8c41c var(--percent),
            #fff var(--percent)
          );
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: #f8c41c 1px;
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </>
  );
};

export default A2b;
