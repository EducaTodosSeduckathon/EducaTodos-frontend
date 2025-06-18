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
import Swiper from "swiper";
import { useFirstTouch } from "../../../hooks/useFirstTouch";
import useLongClick from "../../../hooks/useLongClick";


export default function Home() {
  const navigate = useNavigate();


  const materias = [
    {
      id: 'portugues',
      nome: 'Português',
      descricao: 'Leitura, gramática e redação',
      cor: '#2F80ED',
      icone: <FaBookOpen />,
      onClick: () => navigate('materias/portugues/conteudos')
    },
    {
      id: 'matematica',
      nome: 'Matemática',
      descricao: 'Números, operações e lógica',
      cor: '#FFB946',
      icone: <FaSquareRootVariable />,
      onClick: () => navigate('materias/portugues/conteudos')
    },
    {
      id: 'ciencias',
      nome: 'Ciências',
      descricao: 'Natureza, experiências e descobertas',
      cor: '#21C87A',
      icone: <FaFlaskVial />,
      onClick: () => navigate('materias/portugues/conteudos')
    },
    {
      id: 'historia',
      nome: 'História',
      descricao: 'Fatos, civilizações e culturas',
      cor: '#ED5555',
      icone: <FaLandmark />,
      onClick: () => navigate('materias/portugues/conteudos')
    },
    {
      id: 'geografia',
      nome: 'Geografia',
      descricao: 'Territórios, clima e mapas',
      cor: '#8B5CF6',
      icone: <FaEarthAmericas />,
      onClick: () => navigate('materias/portugues/conteudos')
    },
  ];

  const [materiaLibras, setMateriaLibras] = useState(null);

  const abrirLibras = (nome) => setMateriaLibras(nome);
  const fecharLibras = () => setMateriaLibras(null);

  const { setHeaderOptions } = useOutletContext();

  
  

  useEffect(() => {
    setHeaderOptions({
      custom: false,
      back: false,
      accessibility: 'Visual',
      accessibilityDescription: 'Gestos e Áudio',
    });

  }, []);

  useLongClick(() => {
    speak('Você está na página inicial vendo as disciplinas. Use gestos para navegar: troque de opção arrastando para cima ou para baixo, volte para a sessão anterior arrastando da esquerda para direita, pressione uma vez para ouvir a opção, duas vezes para entrar, e um clique longo para saber onde está.');
  }, { ms: 800 });

  useFirstTouch(() => {
    speak('Bem-vindo ao EducaTodos. Você está na área de matérias. Utilize gestos para se localizar.');

    // console.log("Usuário tocou na tela pela primeira vez!");
    // 🔥 Coloque aqui sua função: iniciar áudio, animação, etc.
  });

  const handleSwipe = (index) => {

    speak(materias[index].nome + '. ' + materias[index].descricao);

  }

  return (
    <div className="bg-[#F6F8FB] flex flex-col h-full w-full">
      <main className="flex-1 flex flex-col items-center px-3 pt-4 pb-3">

        <section className="w-full flex-1 flex flex-col">
          <div className="flex flex-row items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#233366]">Disciplinas</h3>
          </div>
          <div className="flex flex-col flex-1 w-full gap-3">
            <VerticalCarousel canGoBack={false} items={materias} onSwipe={handleSwipe}/>
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