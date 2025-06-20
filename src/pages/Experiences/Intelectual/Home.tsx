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
  FaBrain
} from 'react-icons/fa6';
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

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

  useEffect(() => {
    setHeaderOptions({
      custom: false,
      back: false,
      accessibility: 'Intelectual',
      accessibilityIcon: <FaBrain />,
      accessibilityDescription: 'Apoio'
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div className="bg-[#F6F8FB] flex flex-col justify-between">
      <main className="flex-1 flex flex-col items-center px-5 pt-4 pb-2">

        <section className="w-full max-w-xs flex flex-col">
          <div className="flex flex-row items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#233366]">Matérias</h3>
          </div>
          <div className="flex flex-col gap-3">
          {materias.map(({ id, nome, descricao, cor, icone }) => (
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
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center mt-4">
          <span className="text-xs text-[#4F5B69] mb-1 text-center">
            Toque no botão
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#21C87A]/10 rounded-md text-[#21C87A] font-bold ml-1">
              <FaHandSparkles /> Libras
            </span>
            para assistir à explicação em Língua Brasileira de Sinais.
          </span>
        </section>
      </main>

      <Footer />

      {materiaLibras && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" onClick={fecharLibras}>
          <div className="bg-white rounded-2xl p-6 w-[90vw] max-w-xs flex flex-col items-center shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-[#A0AEC0] text-xl hover:text-[#ED5555] transition" onClick={fecharLibras}>
              <FaXmark />
            </button>
            <div className="flex flex-col items-center mb-3">
              <FaHandSparkles className="text-3xl text-[#21C87A] mb-2" />
              <span className="font-semibold text-[#253858] text-lg mb-1">Explicação em Libras</span>
              <span className="text-xs text-[#7B8794] mb-2">{materiaLibras}</span>
            </div>
            <div className="w-full h-44 rounded-xl bg-[#EAF1FB] flex items-center justify-center overflow-hidden mb-2">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/31a4c7ee91-deb763179a2770866fa5.png"
                alt="pessoa gesticulando em libras"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-xs text-[#4F5B69] text-center">
              Assista à explicação desse conteúdo em Libras para melhor compreensão.
            </span>
          </div>
        </div>
      )}
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
