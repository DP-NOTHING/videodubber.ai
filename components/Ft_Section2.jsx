import { useRouter } from 'next/navigation';

const ServiceCard = ({ href, svgPath, title, description }) => {
  const router = useRouter();
  return (
    <div
      className="block rounded-xl border border-gray-100 hover:border-gray-200 p-8 shadow-xl transition hover:border-indigo-700/10 hover:shadow-indigo-700/10"
      onClick={() => router.push(href)}
    >
      <svg
        xmlns="https://www.w3.org/2000/svg"
        className="h-10 w-10 text-indigo-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d={svgPath}></path>
      </svg>

      <h2 className="mt-4 text-xl font-bold">{title}</h2>

      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  );
};

const Ft_Section2 = () => {
  const services = [
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
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Grow faster with VideoDubber!</h2>
        <p className="mt-4 text-gray-600">Get the VideoDubber Advantage over your competitors!</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            href={service.href}
            svgPath={service.svgPath}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Ft_Section2;
