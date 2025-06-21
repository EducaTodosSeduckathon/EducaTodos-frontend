import { useEffect } from "react";
import { 
  FaCalculator, FaBook, FaFlask, 
  FaCheck, FaClock, 
  FaCalendarDays, FaComments, 
  FaChartLine, FaUserCheck 
} from "react-icons/fa6";
import { useOutletContext } from "react-router";

export default function Home() {

  const { setHeaderOptions } = useOutletContext();

  useEffect(() => {
    setHeaderOptions({
      hide: true,
      back: false
    })
  }, [])

  return (
    <main className="flex-1 px-5 py-4 overflow-y-auto">
      {/* Informações do Aluno */}
      <section className="bg-white rounded-2xl shadow-sm p-4 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
            alt="Aluno"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-base font-semibold text-[#233366]">
              Maria Silva Santos
            </h3>
            <span className="text-xs text-[#6D7B97]">7º Ano</span>
          </div>
        </div>
        <div className="flex gap-2">
          <InfoCard label="Disciplinas" value="12" color="green" />
          <InfoCard label="Frequência" value="89%" color="blue" />
          <InfoCard label="Pendências" value="3" color="yellow" />
        </div>
      </section>

      {/* Notas por disciplina */}
      <section className="bg-white rounded-2xl shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-[#233366]">
            Atividades por Disciplina
          </h3>
        </div>
        <div className="space-y-3">
          <SubjectCard
            title="Matemática"
            icon={<FaCalculator className="text-[#30C185]" />}
            color="green"
            grade="5/5"
            date="15/06"
          />
          <SubjectCard
            title="Português"
            icon={<FaBook className="text-[#3653B4]" />}
            color="blue"
            grade="4/5"
            date="12/06"
          />
          <SubjectCard
            title="Ciências"
            icon={<FaFlask className="text-[#F6B800]" />}
            color="yellow"
            grade="3/5"
            date="10/06"
          />
        </div>
      </section>

      {/* Pendências por disciplina */}
      <section className="bg-white rounded-2xl shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-[#233366]">
            Pendências por Disciplina
          </h3>
        </div>
        <div className="space-y-3">
          <SubjectCard
            title="Matemática"
            icon={<FaCalculator className="text-[#30C185]" />}
            color="green"
            grade="3 questões"
          />
          <SubjectCard
            title="Português"
            icon={<FaBook className="text-[#3653B4]" />}
            color="blue"
            grade="2 questões"
          />
        </div>
      </section>

    </main>
  );
}

/* Subcomponentes auxiliares */
const InfoCard = ({ label, value, color }) => {
  const colors = {
    green: ["#E6F9F1", "#30C185", "#1D6150"],
    blue: ["#E4EDFB", "#3653B4", "#233366"],
    yellow: ["#FFF2CC", "#F6B800", "#987200"],
  };
  const [bg, txt, subt] = colors[color];

  return (
    <div className={`flex-1`} style={{ backgroundColor: bg }}>
      <div className="rounded-lg p-2 text-center">
        <div className="text-sm font-semibold" style={{ color: txt }}>
          {value}
        </div>
        <span className="text-xs" style={{ color: subt }}>
          {label}
        </span>
      </div>
    </div>
  );
};

const SubjectCard = ({ title, icon, color, grade, date }) => {
  const colors = {
    green: "#30C185",
    blue: "#3653B4",
    yellow: "#F6B800",
  };

  return (
    <div className="flex items-center justify-between p-3 bg-[#F6F8FB] rounded-lg">
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center`}
          style={{ backgroundColor: `${colors[color]}20` }}
        >
          {icon}
        </div>
        <div>
          <div className="text-sm font-medium text-[#233366]">{title}</div>
          {date && <span className="text-xs text-[#6D7B97]">Último questionário: {date}</span>}
        </div>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold" style={{ color: colors[color] }}>
          {grade}
        </div>
      </div>
    </div>
  );
};

const ActivityCard = ({ title, status, icon, color }) => {
  const colors = {
    green: "#30C185",
    blue: "#3653B4",
    yellow: "#F6B800",
  };
  return (
    <div className="flex items-start gap-3 p-3 bg-[#F6F8FB] rounded-lg">
      <div
        className={`w-2 h-2 rounded-full mt-2`}
        style={{ backgroundColor: colors[color] }}
      ></div>
      <div className="flex-1">
        <div className="text-sm font-medium text-[#233366]">{title}</div>
        <span className="text-xs text-[#6D7B97]">{status}</span>
      </div>
      {icon}
    </div>
  );
};

const ActionButton = ({ title, icon, bg, hover, color }) => {
  return (
    <button
      className={`${bg} ${hover} p-4 rounded-2xl flex flex-col items-center gap-2 transition`}
    >
      <div className={`${color} text-xl`}>{icon}</div>
      <span className={`text-sm font-medium ${color}`}>{title}</span>
    </button>
  );
};
