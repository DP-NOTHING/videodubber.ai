import React from 'react';

export default function Featured() {
  return (
    <div>
    <div className="py-1 m-8">
    <div className="mx-auto justify-between max-w-screen-xl px-4 py-1 sm:px-6 sm:py-1 lg:px-8 flex">
      <a className="px-2 hidden md:block" style={{margin:'auto'}} href="https://theresanaiforthat.com/ai/videodubber/?via=souvic&amp;ref=featured&amp;v=413845" target="_blank" rel="noreferrer">
        <img alt="Theresanaiforthat featured logo" width="200" height="50" src="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/taaft.webp" loading="lazy" />
      </a>

      <a className="px-4" style={{margin:'auto'}} href="https://www.microsoft.com/startups" target="_blank" rel="noreferrer">
        <img alt="Microsoft for StartUps" width="100" height="30" src="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/Microsoft-for-Startups.webp" loading="lazy" />
      </a>

      <a className="px-2" style={{margin:'auto'}} href="https://startup.google.com/" target="_blank" rel="noreferrer">
        <img alt="Google for StartUps" width="320" height="80" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Google_for_Startups_logo.svg" loading="lazy" />
      </a>

      <a className="px-2 hidden lg:block" style={{margin:'auto'}} href="https://aitoolsupdate.com/product/videodubber" target="_blank" rel="noreferrer">
        <img alt="VideoDubber Featured on AIToolsUpdate" width="180" height="50" src="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/aitoolsupdate.webp" loading="lazy" />
      </a>

      <a className="px-2" style={{margin:'auto'}} href="https://aws.amazon.com/startups" target="_blank" rel="noreferrer">
        <img alt="AWS for StartUps" width="160" height="40" src="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/aws.webp" loading="lazy" />
      </a>

      <a className="px-2 hidden lg:block" style={{margin:'auto'}} href="https://www.thataicollection.com/application/videodubber-ai?utm_source=videodubber-ai_embed" target="_blank" rel="noreferrer">
        <img alt="VideoDubber AI | Featured on AI Collection" width="160" height="40" src="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/aicollection.webp" loading="lazy" />
      </a>
    
    </div>
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
    Rated <b>4.98/5</b> on&nbsp;
    <a href="https://theresanaiforthat.com/ai/videodubber/#rw">
      There's An AI For That (TAAFT) - The #1 AI Aggregator
    </a>
  </div>
</div>
<style jsx>{`
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

    </div>
  );
}