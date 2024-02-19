import Pills from "../Components/Pills";
import BackgroundLayout from "../Layouts/BackgroundLayout";
import { data } from "../data/data";

export default function HomePage() {
  return (
    <main className="snap-y snap-mandatory h-screen relative w-full overflow-auto max-h-screen">
      {data.map((item) => {
        return (
          <BackgroundLayout
            key={item.id}
            imagebg={item.imagebg}
            title={item.title}
            bgstart={item.bgstart}
            bgend={item.bgend}
            textcolor={item.textcolor}
          >
            <Pills
              principal={item.principal}
              pils1={item.pils1}
              pils2={item.pils2}
            />
          </BackgroundLayout>
        );
      })}
    </main>
  );
}
