import { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import {
  FaHandSparkles,
  FaXmark,
  FaFileLines,
} from "react-icons/fa6";
import Footer from "../../../components/common/Footer";
import { AuthContext } from "../../../context/AuthProvider";
import { useTheme } from "../../../context/ThemeContext";

const materias = [
  {
    nome: 'Resumo: Capítulo 2 – Comunicação Oral e Escrita',
    descricao:
      'Neste capítulo, você aprenderá sobre as diferenças entre a comunicação oral e escrita, como se expressar melhor em diferentes situações e a importância do contexto na linguagem. A comunicação oral envolve conversas, debates e apresentações, enquanto a escrita está presente em redações, bilhetes e textos formais.',
  },
];

export default function Resume({ icone = <FaFileLines />, cor = '#2F80ED' }) {
  const [materiaLibras, setMateriaLibras] = useState<string | null>(null);

  const abrirLibras = (nome: string) => setMateriaLibras(nome);
  const fecharLibras = () => setMateriaLibras(null);

  const { setHeaderOptions } = useOutletContext();
  const { themeOptions } = useContext(AuthContext);
  const { theme } = useTheme();

  useEffect(() => {
    setHeaderOptions({
      custom: true,
      color: cor,
      icon: icone,
      title: 'Resumo',
      desc: 'Comunicação Oral',
    });
  }, []);

  const getTextClass = () => {
    let classes = '';
    if (themeOptions?.fontSize === 1.2) classes += ' text-lg';
    if (themeOptions?.fontSize === 1.4) classes += ' text-xl';
    if (themeOptions?.simpleMode) classes += ' uppercase';
    return classes;
  };

  const bgClass = theme === 'dark' ? 'bg-black text-white' : 'bg-[#F6F8FB] text-[#222]';
  const cardBgClass = theme === 'dark' ? 'bg-gray-900 border-2' : 'bg-white';
  const descriptionColor = theme === 'dark' ? 'text-white' : 'text-[#53575a]';

  return (
    <div className={`${bgClass} flex flex-col justify-between transition`}>
      <main className={`flex-1 flex flex-col items-center px-5 pt-4 pb-2 ${getTextClass()}`}>
        <section className="w-full max-w-xs flex flex-col">
          <div className="flex flex-col gap-3">
            {materias.map(({ nome, descricao }) => (
              <div
                key={nome}
                className={`${cardBgClass} rounded-2xl p-4 shadow-sm flex items-center gap-3`}
              >
                <div className="flex flex-col flex-1">
                  <div className="flex items-start">
                    <span
                      className={`font-semibold text-[#253858] ${theme === 'dark' ? 'text-white' : ''} text-base ${getTextClass()}`}
                    >
                      {nome}
                    </span>
                  </div>
                  <span className={`text-sm mt-3 ${descriptionColor}`}>
                    {descricao}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}
