import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data"; //
import DetailsPils from "../../Components/DetailsPils";
import DetailsLayout from "../../Layouts/DetailsLayout";
import Detailstext from "../../Components/DetailsText";

export default function ProductPage() {
  let { title } = useParams();
  const info = data.find((item) => item.title === title);

  if (!info) {
    return (
      <div className="flex justify-center items-center bg-black text-white">
        Producto no encontrado
      </div>
    );
  }

  return (
    <DetailsLayout
      transitiontext={info.transitionname}
      title={info.title}
      bgstart={info.bgstart}
      textcolor={info.textcolor}
    >
      <DetailsPils
        transitionname={info.pilsData.transitionname}
        principal={info.pilsData.principal}
        pils1={info.pilsData.pils1}
        pils2={info.pilsData.pils2}
        transitionpils1={info.pilsData.transitionpils1}
        transitionpils2={info.pilsData.transitionpils2}
      />
      <Detailstext
        href={info.title}
        title={info.detailstitle}
        description={info.description}
        howworks={info.howworks}
        howuse={info.howuse}
        principal={info.pilsData.principal}
      />
    </DetailsLayout>
  );
}
