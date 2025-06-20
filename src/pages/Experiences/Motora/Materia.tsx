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
import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import VoiceFooter from "../../../components/experiences/motora/VoiceFooter";

const materias = [
  {
    id: 'portugues',
    nome: 'Ortografia e acentuação',
    descricao: 'Aprenda as regras de ortografia e o uso correto dos acentos gráficos.',
  },
  {
    id: 'matematica',
    nome: 'Interpretação de texto',
    descricao: 'Dicas para compreender e analisar textos de diferentes gêneros.',
  },
];

export default function Materia() {

  const [materiaLibras, setMateriaLibras] = useState(null);

  const abrirLibras = (nome) => setMateriaLibras(nome);
  const fecharLibras = () => setMateriaLibras(null);

  const navigate = useNavigate();

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

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentFocus, setCurrentFocus] = useState<number>(-1);
  
  const focusItem = (index: number) => {
  const el = itemRefs.current[index];
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setCurrentFocus(index);
    }
  };

  const focusNext = () => {
    const next = Math.min(currentFocus + 1, materias.length - 1);
    focusItem(next);
  };

  const focusPrev = () => {
    const prev = Math.max(currentFocus - 1, 0);
    focusItem(prev);
  };

  return (
    <div className="bg-[#F6F8FB] flex flex-1 flex-col justify-between">

      <main className="flex-1 flex flex-col items-center px-5 pt-4 pb-2">

        <section className="w-full max-w-xs flex flex-col">
          <div className="flex flex-row items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#233366]">Conteúdos</h3>
          </div>
          <div className="flex flex-col gap-3">
          {materias.map(({ id, nome, descricao }, index) => (
              <div ref={el => itemRefs.current[index] = el} tabIndex={0} onClick={() => navigate('/materias/portugues/conteudos/ortografia')} key={id} className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 focus:ring-2 focus:ring-blue-500">
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
            ))}
          </div>
        </section>
      </main>

      <VoiceFooter onScrollUp={focusPrev} onScrollDown={focusNext} />

    </div>
  );
}

