import AddText from "../Components/AddText";
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
            tarro={item.pilsData.principal}
          >
            <Pills
              principal={item.pilsData.principal}
              pils1={item.pilsData.pils1}
              pils2={item.pilsData.pils2}
            />
            <AddText
              fontsize={item.addTextData.fontsize}
              title={item.addTextData.title}
              buttonbg1={item.addTextData.buttonbg1}
              buttonbg2={item.addTextData.buttonbg2}
              buttontc1={item.addTextData.buttontc1}
              buttontc2={item.addTextData.buttontc2}
              buttongo1={item.addTextData.buttongo1}
              buttongo2={item.addTextData.buttongo2}
              buttontitle1={item.addTextData.buttontitle1}
              buttontitle2={item.addTextData.buttontitle2}
            />
          </BackgroundLayout>
        );
      })}
    </main>
  );
}
