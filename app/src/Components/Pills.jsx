export default function Pills({ principal, pils1, pils2 }) {
  return (
    <section className="absolute max-h-screen">
      {/* <img
        src={principal}
        className="relative z-20 pl-9 md:w-[400px] md:h-auto xl:w-full"
        alt="tarro"
      /> */}
      <img
        src={pils1}
        alt="pills"
        className="absolute z-10 translate-x-[2px] translate-y-[240px] md:translate-x-72 md:-translate-y-[550px] xl:translate-x-[500px] blur-sm"
      />
      <img
        src={pils2}
        alt="pills"
        className="absolute z-10 -translate-y-[500px] md:-translate-x-3 md:-translate-y-[550px] blur-sm"
      />
      <img
        src={pils2}
        alt="pills"
        className="absolute z-10 -translate-y-[400px] -translate-x-11 rotate-90 md:-translate-y-[550px]"
      />
      <img
        src={pils1}
        alt="pills"
        className="absolute z-10 translate-x -translate-y-[500px] md:translate-x-50 rotate-90 md:-translate-y-[250px] blur-md"
      />
      <img
        src={pils2}
        alt="pills"
        className="absolute z-10 hidden md:block md:translate-x-56 rotate-45 md:-translate-y-full"
      />
      <img
        alt="pills"
        src={pils1}
        className="absolute z-10 hidden md:block md:-translate-x-56 rotate-45 md:-translate-y-full blur-md"
      />

      <img
        src={pils2}
        alt="pills"
        className="absolute z-10 md:translate-x-44 rotate-45 md:-translate-y-[380px] blur-sm"
      />
    </section>
  );
}
