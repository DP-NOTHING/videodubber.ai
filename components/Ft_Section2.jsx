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

const Ft_Section2 = ({services}) => {
  
  return (
    <section className='mx-auto max-w-screen-xl px-4  sm:px-6  lg:px-8'>
    <div className='container overflow-hidden mx-auto'>
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
    </div>
    </section>
  );
};

export default Ft_Section2;
