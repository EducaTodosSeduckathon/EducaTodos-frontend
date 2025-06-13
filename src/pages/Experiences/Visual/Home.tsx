// src/pages/auditiva/HomePage.tsx
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

import {
  FaGraduationCap,
  FaUniversalAccess,
  FaUserGraduate,
  FaPenToSquare,
  FaBookOpen,
  FaSquareRootVariable,
  FaFlaskVial,
  FaLandmark,
  FaEarthAmericas,
  FaHandSparkles,
  FaChevronRight,
  FaXmark,
  FaRegCopyright,
  FaEyeSlash
} from 'react-icons/fa6';
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import Carousel from "../../../components/experiences/visual/VerticalCarousel";
import VerticalCarousel from "../../../components/experiences/visual/VerticalCarousel";
import { speak } from "../../../services/utils";
import { useSpeech } from "react-text-to-speech";

const materias = [
  {
    id: 'portugues',
    nome: 'Português',
    descricao: 'Leitura, gramática e redação',
    cor: '#2F80ED',
    icone: <FaBookOpen />,
  },
  {
    id: 'matematica',
    nome: 'Matemática',
    descricao: 'Números, operações e lógica',
    cor: '#FFB946',
    icone: <FaSquareRootVariable />,
  },
  {
    id: 'ciencias',
    nome: 'Ciências',
    descricao: 'Natureza, experiências e descobertas',
    cor: '#21C87A',
    icone: <FaFlaskVial />,
  },
  {
    id: 'historia',
    nome: 'História',
    descricao: 'Fatos, civilizações e culturas',
    cor: '#ED5555',
    icone: <FaLandmark />,
  },
  {
    id: 'geografia',
    nome: 'Geografia',
    descricao: 'Territórios, clima e mapas',
    cor: '#8B5CF6',
    icone: <FaEarthAmericas />,
  },
];

export default function Home() {

  const [materiaLibras, setMateriaLibras] = useState(null);

  const abrirLibras = (nome) => setMateriaLibras(nome);
  const fecharLibras = () => setMateriaLibras(null);

  const { setHeaderOptions } = useOutletContext();

  
  const {
    Text, // Component that returns the modified text property
    speechStatus, // String that stores current speech status
    isInQueue, // Boolean that stores whether a speech utterance is either being spoken or present in queue
    start, // Function to start the speech or put it in queue
    pause, // Function to pause the speech
    stop, // Function to stop the speech or remove it from queue
  } = useSpeech({ text: "This library is awesome!" });

  useEffect(() => {
    setHeaderOptions({
      custom: false,
    });

    start();
    // speak('Bem-vindo ao EducaTodos. Você está na área de matérias. Utilize gestos para se localizar.');
  }, []);

  

  const handleSwipe = (index) => {

    speak(materias[index].nome + '. ' + materias[index].descricao);

  }

  const navigate = useNavigate();
  return (
    <div className="bg-[#F6F8FB] flex flex-col h-full">
      <main className="flex-1 flex flex-col items-center px-5 pt-4 pb-2">

        <section className="w-full max-w-xs flex-1 flex flex-col">
          <div className="flex flex-row items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#233366]">Matérias</h3>
          </div>
          <div className="flex flex-col flex-1 w-full gap-3">
            <VerticalCarousel items={materias} onSwipe={handleSwipe}/>
          {/* {materias.map(({ id, nome, descricao, cor, icone }) => (
              <div onClick={() => navigate('/materias/portugues/conteudos')} key={id} className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full text-xl shrink-0" style={{ backgroundColor: `${cor}1A`, color: cor }}>
                  {icone}
                </div>
                <div className="flex flex-col flex-1">
                  <span className="font-semibold text-[#253858] text-base">{nome}</span>
                  <span className="text-xs text-[#7B8794]">{descricao}</span>
                </div>
                <button
                  className="ml-3 flex items-center gap-1 px-2 py-1 rounded-md text-[#21C87A] bg-[#21C87A]/10 text-xs font-semibold active:bg-[#21C87A]/20"
                  onClick={() => abrirLibras(nome)}
                >
                  <FaHandSparkles /> Libras
                </button>
                <button className="ml-2 text-[#A0AEC0] text-lg active:scale-90 transition">
                  <FaChevronRight />
                </button>
              </div>
            ))} */}
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

function SubjectButton({ icon, bgColor, title, subtitle, chevronColor }: any) {
  return (
    <button
      className={`flex items-center gap-3 ${bgColor} rounded-xl py-3 px-4 focus:ring-2 transition cursor-pointer w-full`}
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">{icon}</div>
      <div className="flex flex-col flex-1 items-start">
        <span className="text-base font-semibold text-[#233366]">{title}</span>
        <span className="text-xs text-[#6D7B97]">{subtitle}</span>
      </div>
      <FaChevronRight className={`text-[${chevronColor}]`} />
    </button>
  );
}

function LoginOption({ icon, label, bg }: any) {
  return (
    <button
      className={`flex-1 flex flex-col items-center gap-1 py-3 px-2 ${bg} rounded-xl focus:ring-2 transition cursor-pointer`}
    >
      <div className="text-lg">{icon}</div>
      <span className="text-xs font-medium text-[#233366]">{label}</span>
    </button>
  );
}
