const Ft_Section3 = ({data}) => {
  
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt={data.image.alt}
              src={data.image.src}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">{data.title}</h2>

            <p className="mt-4 text-gray-600">
              Let your content resonate worldwide as VideoDubber effortlessly translates and connects, fostering a global community through the universal language of captivating videos, at the cheapest price possible. Clone your voice, modify your content, all in a few clicks! <br />
              <strong>10x your audience</strong> with the power of AI<em>!</em>
            </p>

            <button
              onClick={()=>{window.location=data.button.url}}
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {data.button.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ft_Section3;
