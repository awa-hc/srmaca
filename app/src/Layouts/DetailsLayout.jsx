export default function DetailsLayout({ bgstart, title, children, textcolor }) {
  return (
    <main
      id={title}
      className={`flex flex-col bg-gradient-to-b ${bgstart} to-black h-max min-h-screen overflow-hidden justify-center items-center z-0  snap-center`} 
      style={{paddingTop: "4.5rem"}}
    >
      <main className="absolute z-10 -translate-x-[100px] xl:-translate-x-[600px]">
        {/* Titulo De Fondo */}
        <h1
          className={`select-none text-[50px] md:text-[110px] xl:text-[200px] font-extrabold  bg-clip-text text-transparent bg-gradient-to-b ${textcolor} to-[#111111]  uppercase `}
        >
          {title}
        </h1>
      </main>

      {children}
    </main>
  );
}
