import Head from 'next/head';

const SeoAbout = () => (
  <Head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Us - VideoDubber</title>
    <meta name="description" content="Learn more about VideoDubber, our mission and team behind AI-powered video translation, dubbing, voice cloning, and text-to-speech services." />

    {/* Open Graph tags for social sharing */}
    <meta property="og:title" content="About Us - VideoDubber" />
    <meta property="og:description" content="Learn more about VideoDubber, our mission and team behind AI-powered video translation, dubbing, voice cloning, and text-to-speech services." />
    <meta property="og:url" content="https://videodubber.ai/about/" />
    <meta property="og:image" content="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/logox.webp" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="VideoDubber" />

    {/* Twitter Card tags for Twitter sharing */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="About Us - VideoDubber" />
    <meta name="twitter:description" content="Learn more about VideoDubber, our mission and team behind AI-powered video translation, dubbing, voice cloning, and text-to-speech services." />
    <meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/logox.webp" />
    <meta name="twitter:site" content="@VideoDubber_AI" />
    <meta name="twitter:creator" content="@VideoDubber_AI" />

    {/* Meta keywords (consider using them sparingly) */}
    <meta name="keywords" content="about us, our mission, our team, AI video translation, dubbing, voice cloning, text-to-speech" />

    {/* Canonical URL to prevent duplicate content */}
    <link rel="canonical" href="https://videodubber.ai/about/" />

    {/* Robots meta tag */}
    <meta name="robots" content="index, follow" />

    {/* Structured data markup (Schema.org) for rich snippets */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us - VideoDubber",
        "description": "Learn more about VideoDubber, our mission and team behind AI-powered video translation, dubbing, voice cloning, and text-to-speech services.",
        "url": "https://videodubber.ai/about/"
      })}
    </script>
  </Head>
);

export default SeoAbout;