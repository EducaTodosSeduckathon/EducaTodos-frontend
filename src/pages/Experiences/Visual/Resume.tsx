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
  FaFileLines,
  FaFolderOpen,
  FaQuestion
} from 'react-icons/fa6';
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { speak } from "../../../services/utils";
import useLongClick from "../../../hooks/useLongClick";
import { useSpeech } from "../../../hooks/useSpeech";
import { useSwipeable } from "react-swipeable";

const data = {
  nome: 'Resumo: Capítulo 2 – Comunicação Oral e Escrita',
  descricao: 'Neste capítulo, você aprenderá sobre as diferenças entre a comunicação oral e escrita, como se expressar melhor em diferentes situações e a importância do contexto na linguagem. A comunicação oral envolve conversas, debates e apresentações, enquanto a escrita está presente em redações, bilhetes e textos formais. Você está na sessão de resumo do conteúdo, toque na tela para pausar ou continuar a leitura. Toque duas vezes para começar a leitura do início.Você está na sessão de resumo do conteúdo, toque na tela para pausar ou continuar a leitura. Toque duas vezes para começar a leitura do início.Você está na sessão de resumo do conteúdo, toque na tela para pausar ou continuar a leitura. Toque duas vezes para começar a leitura do início.Você está na sessão de resumo do conteúdo, toque na tela para pausar ou continuar a leitura. Toque duas vezes para começar a leitura do início.Você está na sessão de resumo do conteúdo, toque na tela para pausar ou continuar a leitura. Toque duas vezes para começar a leitura do início.Você está na sessão de resumo do conteúdo, toque na tela para pausar ou continuar a leitura. Toque duas vezes para começar a leitura do início.Você está na sessão de resumo do conteúdo, toque na tela para pausar ou continuar a leitura. Toque duas vezes para começar a leitura do início.Você está na sessão de resumo do conteúdo, toque na tela para pausar ou continuar a leitura. Toque duas vezes para começar a leitura do início.Você está na sessão de resumo do conteúdo, toque na tela para pausar ou continuar a leitura. Toque duas vezes para começar a leitura do início.',
}

export default function Resume({ icone = <FaFileLines />, cor = '#2F80ED'}) {

  const [materiaLibras, setMateriaLibras] = useState(null);

  const abrirLibras = (nome) => setMateriaLibras(nome);
  const fecharLibras = () => setMateriaLibras(null);

  const { setHeaderOptions } = useOutletContext();

  const speech = useSpeech();

  useEffect(() => {
    setHeaderOptions({
      custom: true,
      color: cor,
      icon: icone,
      title: 'Resumo',
      desc: 'Comunicação Oral'
    });

    speak('Você está na sessão de resumo do conteúdo, toque na tela para pausar ou continuar a leitura. Toque duas vezes para começar a leitura do início.')
  }, []);

  
  const handleClick = () => {
    if(speech.isPaused){
      speech.resume()
    }else{
      speech.pause()
    }

    if(!speech.isSpeaking){
      speech.speak(data.descricao);
    }
  }

  const navigate = useNavigate();
  
  const handlers = useSwipeable({
    onSwipedRight: () => navigate(-1),
    preventScrollOnSwipe: false,
    trackTouch: true,
    trackMouse: true,
    
  });

  return (
    <div className="bg-[#F6F8FB] flex flex-col h-full w-full">
      <main className="flex-1 flex flex-col items-center px-3 pt-4 pb-3">

        <section className="select-none w-full flex-1 flex flex-col">
          <div {...handlers} onClick={handleClick} onDoubleClick={() => (speech.cancel(), handleClick())} className="bg-white rounded-2xl h-full p-4 overflow-y-auto shadow-sm gap-3">
            <h2 className="font-semibold text-[#253858] text-lg">{data.nome}</h2>
            <p className="text-sm text-[#53575a]">{data.descricao}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

