export default function Button({
  navigate,
  title,
  bgcolor,
  textcolor,
  fontsize,
}) {
  return (
    <a
      href={navigate}
      style={{ backgroundColor: bgcolor }}
      className={`px-5 py-2 rounded-3xl text-${textcolor} ${fontsize} uppercase text-center z-20`}
    >
      {title}
    </a>
  );
}
