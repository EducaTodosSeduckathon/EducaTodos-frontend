import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import {
  FaBookOpen,
  FaSquareRootVariable,
  FaFlaskVial,
  FaLandmark,
  FaEarthAmericas,
  FaBrain,
} from "react-icons/fa6";
import { useEffect, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router";
import VerticalCarousel from "../../../components/experiences/visual/VerticalCarousel";
import { speak } from "../../../services/utils";
import { AuthContext } from "../../../context/AuthProvider";
import useLongClick from "../../../hooks/useLongClick";

export default function Home() {
  const navigate = useNavigate();
  const { setHeaderOptions } = useOutletContext();
  const { themeOptions } = useContext(AuthContext);

  const materias = [
    {
      id: "portugues",
      nome: "Português",
      descricao: "Leitura, gramática e redação",
      cor: "#2F80ED",
      icone: <FaBookOpen aria-hidden="true" />,
      onClick: () => navigate("materias/portugues/conteudos"),
    },
    {
      id: "matematica",
      nome: "Matemática",
      descricao: "Números, operações e lógica",
      cor: "#FFB946",
      icone: <FaSquareRootVariable aria-hidden="true" />,
      onClick: () => navigate("materias/matematica/conteudos"),
    },
    {
      id: "ciencias",
      nome: "Ciências",
      descricao: "Natureza, experiências e descobertas",
      cor: "#21C87A",
      icone: <FaFlaskVial aria-hidden="true" />,
      onClick: () => navigate("materias/ciencias/conteudos"),
    },
    {
      id: "historia",
      nome: "História",
      descricao: "Fatos, civilizações e culturas",
      cor: "#ED5555",
      icone: <FaLandmark aria-hidden="true" />,
      onClick: () => navigate("materias/historia/conteudos"),
    },
    {
      id: "geografia",
      nome: "Geografia",
      descricao: "Territórios, clima e mapas",
      cor: "#8B5CF6",
      icone: <FaEarthAmericas aria-hidden="true" />,
      onClick: () => navigate("materias/geografia/conteudos"),
    },
  ];

  const getTextClass = () => {
    let classes = "";
    if (themeOptions?.fontSize === 1.2) classes += " text-lg";
    if (themeOptions?.fontSize === 1.4) classes += " text-xl";
    if (themeOptions?.simpleMode) classes += " uppercase";
    return classes;
  };

  useEffect(() => {
    setHeaderOptions({
      custom: false,
      back: false,
      accessibility: "Visual",
      accessibilityIcon: <FaBrain />,
      accessibilityDescription: "Gestos e Áudio",
    });
  }, []);

  useLongClick(
    () => {
      speak(
        "Bem-vindo ao EducaTodos. Você está na página inicial vendo as disciplinas. Use gestos para navegar: arraste para cima ou para baixo para trocar de opção, arraste da esquerda para direita para voltar, pressione uma vez para ouvir a opção, duas vezes para entrar, e pressione e segure para saber onde está."
      );
    },
    { ms: 800 }
  );

  const handleSwipe = (index: number) => {
    speak(materias[index].nome + ". " + materias[index].descricao);
  };

  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-black">
      <main className="flex-1 flex flex-col items-center px-3 pt-4 pb-3">
        <h1 className="sr-only">Página inicial das disciplinas</h1>

        <section className="w-full flex-1 flex flex-col">
          <div className="flex flex-row items-center justify-between mb-4">
            <h2
              className={`text-base font-bold text-[#233366] dark:text-amber-300 ${getTextClass()}`}
            >
              Disciplinas
            </h2>
          </div>

          <VerticalCarousel
            canGoBack={false}
            items={materias}
            onSwipe={handleSwipe}
            aria-label="Lista de disciplinas. Use gestos ou setas para navegar."
          />
        </section>
      </main>

    </div>
  );
}
