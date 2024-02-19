export default function BackgroundLayout({
  title,
  imagebg,
  bgstart,
  bgend,
  textcolor,
  children,
  tarro,
}) {
  return (
    <main
      id={title}
      className={`flex flex-col  bg-gradient-to-b ${bgstart} ${bgend} h-screen min-h-screen items-center justify-center  z-0  snap-center`}
    >
      <img
        src={imagebg}
        className="absolute z-0 h-full w-full md:w-full md:h-full object-fit "
        alt="every screen srmaca app"
      />
      <img
        src={tarro}
        className="absolute z-20 h-1/4 w-auto md:w-auto md:h-3/6 object-fill "
        alt="every screen srmaca app"
      />
      <main className="absolute z-10">
        <h1
          className={`select-none text-[50px] md:text-[120px] xl:text-[200px] text-center font-bold  bg-clip-text text-transparent bg-gradient-to-b ${textcolor} to-[#111111ff]  uppercase opacity-75`}
        >
          {title}
        </h1>
      </main>
      <span className="flex-grow"></span>
      {children}
    </main>
  );
}
