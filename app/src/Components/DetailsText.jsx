export default function DetailsText({
  title,
  description,
  howworks,
  howuse,
  href,
  principal,
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center text-white z-30 w-full">
      {/* Imagen de Producto en Details */}
      <img
        src={principal}
        className="w-2/3 md:w-1/2 xl:w-1/3 h-auto mt-12 mb-2 md:mt-0"
      />
      <div className="flex flex-col items-stretch text-center md:text-left my-5 w-screen md:w-full bg-white/10 backdrop-blur-sm md:rounded-l-3xl border-t-[0.5px] border-l-[0.5px] border-b-[0.5px] border-r-[0.5px] md:border-r-0 border-white drop-shadow-lg p-5 md:p-10">
        <div className="flex-grow basis-0">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-md italic">{description}</p>
          <h2 className="text-xl font-bold">Como funciona</h2>
          <p className="text-md italic">{howworks}</p>
          <h2 className="text-xl font-bold">Como usar</h2>
          <p className="text-md italic">{howuse}</p>
        </div>
        <div className="flex justify-center">
        <a
          href={"/#" + href}
          className="text-white w-max flex px-2 py-1 border border-white rounded-lg  mt-5 hover:bg-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-back"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
          </svg>
          Atras
        </a>
        </div>
      </div>
      <section className="text-center text-white sm:mt-0 mb-4 md:mb-0">
        <a
          href={"/buy/" + href}
          className="text-white px-4 py-2 bg-[#2B9D6D] rounded-lg"
        >
          Compra ahora!
        </a>
      </section>
    </section>
  );
}
