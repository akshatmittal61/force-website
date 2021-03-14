export default function Hero() {
  return (
    <section class="text-gray-700 body-font">
      <div class="container px-8 py-24 mx-auto lg:px-4">
        <div class="flex flex-col w-full mb-12 text-left lg:text-center">
          <h2 class="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font">
            a great header right here
          </h2>
          <h1 class="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font">
            A centered
            <br class="md:hidden" />
            medium lenght display headline.
          </h1>
          <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">
            You're about to launch soon and must be 100% focused on your
            product. Don't loose precious days designing, coding the landing
            page and testing a site. Instead, integrate one with your favourite
            framework..
          </p>
        </div>
        <div class="flex lg:justify-center">
          <button class="inline-flex px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            Button
          </button>
          <button class="inline-flex items-center px-6 py-2 ml-4 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}
