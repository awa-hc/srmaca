import Button from "./Button";
export default function AddText({
  fontsize,
  title,
  buttontitle1,
  buttonbg1,
  buttontc1,
  buttongo1,
  buttontitle2,
  buttonbg2,
  buttontc2,
  buttongo2,
}) {
  return (
    <section className="z-20 py-10 m-5 md:mb-0 md:py-5 md:w-4/6 xl:w-1/3 text-center">
      <p className="text-white text-xl backdrop-blur-2xl p-4 rounded-2xl border border-white">
        {title}
      </p>
      <nav className="flex gap-10 items-center justify-center font-bold m-10 sm:m-0  xl:my-10 md:mt-8">
        <Button
          fontsize={fontsize}
          title={buttontitle1}
          bgcolor={buttonbg1}
          textcolor={buttontc1}
          navigate={buttongo1}
        />
        <Button
          fontsize={fontsize}
          title={buttontitle2}
          bgcolor={buttonbg2}
          textcolor={buttontc2}
          navigate={buttongo2}
        />
      </nav>
    </section>
  );
}
