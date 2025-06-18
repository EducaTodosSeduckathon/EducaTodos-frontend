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
  FaEyeSlash,
  FaFile
} from 'react-icons/fa6';
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import VerticalCarousel from "../../../components/experiences/visual/VerticalCarousel";
import { speak } from "../../../services/utils";
import useLongClick from "../../../hooks/useLongClick";



export default function Materia() {

  const [materiaLibras, setMateriaLibras] = useState(null);

  const abrirLibras = (nome) => setMateriaLibras(nome);
  const fecharLibras = () => setMateriaLibras(null);

  const navigate = useNavigate();

  const materias = [
  {
    id: 'portugues',
    nome: 'Ortografia e acentuação',
    descricao: 'Aprenda as regras de ortografia e o uso correto dos acentos gráficos.',
    onClick: () => navigate('/materias/portugues/conteudos/ortografia')
  },
  {
    id: 'matematica',
    nome: 'Interpretação de texto',
    descricao: 'Dicas para compreender e analisar textos de diferentes gêneros.',
    onClick: () => navigate('/materias/portugues/conteudos/ortografia')
  },
];

  const { setHeaderOptions } = useOutletContext();

  useEffect(() => {
    setHeaderOptions({
      custom: true,
      icon: <FaFile/>,
      color: '#465fff',
      title: 'Conteúdos',
      desc: 'Português'
    });
  }, [])

  const handleSwipe = (index) => {
    speak(materias[index].nome + '. ' + materias[index].descricao);
  }

  useLongClick(() => {
    speak('Você está vendo conteúdos de português');
    // console.log("Clique longo detectado!");
  }, { ms: 800 });

  return (
    <div className="bg-[#F6F8FB] flex flex-col h-full w-full">
      <main className="flex-1 flex flex-col items-center px-3 pt-4 pb-3">

        <section className="w-full flex-1 flex flex-col">
          <div className="flex flex-row items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#233366]">Conteúdos</h3>
          </div>
          <div className="flex flex-col w-full flex-1 gap-3">
            <VerticalCarousel canGoBack={true} items={materias} onSwipe={handleSwipe}/>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
