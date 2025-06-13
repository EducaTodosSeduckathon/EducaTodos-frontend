import { useEffect, useState } from "react";
import { FaChevronRight, FaHandSparkles } from "react-icons/fa6";
import { useSwipeable } from "react-swipeable";

export default function VerticalCarousel({ items, onSwipe }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "UP") {
      setActiveIndex((prev) => (prev + 1) % items.length);
    } else if (direction === "DOWN") {
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  useEffect(() => {
    if(onSwipe) onSwipe(activeIndex)
  }, [activeIndex]);

  const handlers = useSwipeable({
    onSwipedUp: () => handleSwipe("UP"),
    onSwipedDown: () => handleSwipe("DOWN"),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div className="w-full h-full overflow-hidden relative border rounded">
      <div
        {...handlers}
        className="transition-transform duration-500 h-full"
        style={{
          transform: `translateY(-${activeIndex * 100}%)`,
        }}
      >
        {items.map(({ id, nome, descricao, cor, icone }, index) => (
          <div onClick={() => navigate('/materias/portugues/conteudos')} key={id} className="bg-white rounded-2xl p-4 h-full shadow-sm flex flex-col justify-center items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full text-xl shrink-0" style={{ backgroundColor: `${cor}1A`, color: cor }}>
              {icone}
            </div>
            <div className="flex flex-col">
              <span className="text-center font-semibold text-[#253858] text-2xl">{nome}</span>
              <span className="text-center text-lg text-[#7B8794]">{descricao}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}