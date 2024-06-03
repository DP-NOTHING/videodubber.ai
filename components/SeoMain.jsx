import Head from 'next/head';

const SeoMain = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>VideoDubber: AI Video Translation, Text-to-Speech - Try Free</title>
      <meta name="description" content="Free AI-powered video translation, dubbing, voice cloning and text-to-speech services. Scale with us to 150+ languages to 10x your audience size effortlessly!" />

      {/* Open Graph tags for social sharing */}
      <meta property="og:title" content="VideoDubber: AI Video Translation, Text-to-Speech - Try Free" />
      <meta property="og:description" content="Free AI-powered video translation, dubbing, voice cloning and text-to-speech services. Scale with us to 150+ languages to 10x your audience size effortlessly!" />
      <meta property="og:url" content="https://videodubber.ai" />
      <meta property="og:image" content="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/twitter_share_videodubber.webp" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="VideoDubber" />

      {/* Twitter Card tags for Twitter sharing */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="VideoDubber: AI Video Translation, Text-to-Speech - Try Free" />
      <meta name="twitter:description" content="Free AI-powered video translation, dubbing, voice cloning and text-to-speech services. Scale with us to 150+ languages to 10x your audience size effortlessly!" />
      <meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/twitter_share_videodubber.webp" />
      <meta name="twitter:site" content="@VideoDubber_AI" />
      <meta name="twitter:creator" content="@VideoDubber_AI" />

      {/* Meta keywords (consider using them sparingly) */}
      <meta name="keywords" content="video dubbing, AI translation, voice cloning, text-to-speech, english to hindi, spanish to english, japanese to chinese" />

      {/* Canonical URL to prevent duplicate content */}
      <link rel="canonical" href="https://videodubber.ai/" />
      <link rel="alternate" hreflang="en" href="https://videodubber.ai/" />
      <link rel="alternate" hreflang="es" href="https://videodubber.ai/es/" />
      <link rel="alternate" hreflang="x-default" href="https://videodubber.ai/" />

      {/* Robots meta tag */}
      <meta name="robots" content="index, follow" />

      {/* Structured data markup (Schema.org) for rich snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["WebApplication", "MobileApplication"],
        "applicationCategory": "Video Translator, AI",
        "name": "VideoDubber: AI Video Translation, Text-to-Speech - Try Free",
        "description": "Free AI-powered video translation, dubbing, voice cloning and text-to-speech services. Scale with us to 150+ languages to 10x your audience size effortlessly!",
        "image": "https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/twitter_share_videodubber.webp",
        "offers": [
          {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2029-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Free Plan - VideoDubber.ai",
              "description": "Free AI video translation, dubbing, voice cloning, and text-to-speech services for 150+ languages/accents."
            }
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.98",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "10949"
        },
        "mainEntity": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What languages are supported?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "VideoDubber supports translation and services in over 150+ languages/accents."
              }
            },
            {
              "@type": "Question",
              "name": "Is the service free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, VideoDubber offers free AI video translation, dubbing, voice cloning, and text-to-speech services."
              }
            },
            // Replace with dynamically generated FAQ entries
            ...faqlist.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            })),
            {
              "@type": "Question",
              "name": "How accurate is the translation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The translation provided by VideoDubber's AI is highly accurate, but results may vary based on content complexity."
              }
            }
          ]
        }
      })}} />
    </Head>
  );
};

export default SeoMain;
