export default function DetailsPils({ pils1, pils2 }) {
  return (
    <section class="absolute max-h-screen max-w-screen overflow-hidden">
      <img
        alt=""
        src={pils1}
        class="absolute z-10 translate-x-[2px] translate-y-[10px] md:translate-x-[500px] md:-translate-y-[500px] xl:-translate-y-[700px] xl:translate-x-[1000px] blur-sm"
      />
      <img
        alt=""
        src={pils2}
        class="absolute z-10 -translate-y-[500px] md:-translate-x-3 md:-translate-y-[550px] blur-sm"
      />
      <img
        alt=""
        src={pils2}
        class="absolute z-10 -translate-y-[400px] -translate-x-11 rotate-90 md:-translate-y-[550px]"
      />
      <img
        alt=""
        src={pils1}
        class="absolute z-10 translate-x -translate-y-[500px] md:translate-x-50 rotate-90 md:-translate-y-[250px] blur-md"
      />
      <img
        alt=""
        src={pils2}
        class="absolute z-10 hidden md:block md:translate-x-56 rotate-45 md:-translate-y-[180px]"
      />
      <img
        alt=""
        src={pils1}
        class="absolute z-10 hidden md:block md:-translate-x-56 rotate-45 md:-translate-y-full blur-md"
      />

      <img
        alt=""
        src={pils2}
        class="absolute z-10 md:translate-x-44 rotate-45 md:-translate-y-[380px] blur-sm"
      />
    </section>
  );
}
