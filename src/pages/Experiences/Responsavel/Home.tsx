import { 
  FaCalculator, FaBook, FaFlask, 
  FaCheck, FaClock, 
  FaCalendarDays, FaComments, 
  FaChartLine, FaUserCheck 
} from "react-icons/fa6";

export default function Content() {
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
            <span className="text-xs text-[#6D7B97]">7º Ano - Turma A</span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-[#30C185]">8.5</div>
            <span className="text-xs text-[#6D7B97]">Média Geral</span>
          </div>
        </div>
        <div className="flex gap-2">
          <InfoCard label="Disciplinas" value="12" color="green" />
          <InfoCard label="Frequência" value="89%" color="blue" />
          <InfoCard label="Pendências" value="3" color="yellow" />
        </div>
      </section>

      {/* Gráfico Simples */}
      <section className="bg-white rounded-2xl shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-[#233366]">
            Evolução das Notas
          </h3>
          <select className="text-xs bg-[#F6F8FB] border border-[#E8EBF0] rounded-lg px-2 py-1">
            <option>Último Bimestre</option>
            <option>Último Trimestre</option>
            <option>Ano Letivo</option>
          </select>
        </div>
        <div className="h-32 bg-[#F6F8FB] rounded-lg flex items-end justify-between px-4 py-2 gap-2">
          {["Mar", "Abr", "Mai", "Jun"].map((month, i) => (
            <div key={month} className="flex flex-col items-center gap-1">
              <div
                className={`w-6 rounded-t ${
                  ["bg-[#30C185]", "bg-[#3653B4]", "bg-[#F6B800]", "bg-[#30C185]"][i]
                }`}
                style={{ height: ["60%", "75%", "50%", "85%"][i] }}
              ></div>
              <span className="text-xs text-[#6D7B97]">{month}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Notas por disciplina */}
      <section className="bg-white rounded-2xl shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-[#233366]">
            Notas por Disciplina
          </h3>
          <button className="text-xs text-[#3653B4] underline">Ver todas</button>
        </div>
        <div className="space-y-3">
          <SubjectCard
            title="Matemática"
            icon={<FaCalculator className="text-[#30C185]" />}
            color="green"
            grade="9.2"
            date="15/06"
          />
          <SubjectCard
            title="Português"
            icon={<FaBook className="text-[#3653B4]" />}
            color="blue"
            grade="8.7"
            date="12/06"
          />
          <SubjectCard
            title="Ciências"
            icon={<FaFlask className="text-[#F6B800]" />}
            color="yellow"
            grade="7.5"
            date="10/06"
          />
        </div>
      </section>

      {/* Atividades recentes */}
      <section className="bg-white rounded-2xl shadow-sm p-4 mb-4">
        <h3 className="text-base font-semibold text-[#233366] mb-3">
          Atividades Recentes
        </h3>
        <div className="space-y-3">
          <ActivityCard
            title="Prova de Matemática"
            status="Nota: 9.2 • 15 de junho"
            icon={<FaCheck className="text-[#30C185]" />}
            color="green"
          />
          <ActivityCard
            title="Trabalho de História"
            status="Pendente • Entrega: 20 de junho"
            icon={<FaClock className="text-[#F6B800]" />}
            color="yellow"
          />
          <ActivityCard
            title="Redação Português"
            status="Nota: 8.7 • 12 de junho"
            icon={<FaCheckCircle className="text-[#3653B4]" />}
            color="blue"
          />
        </div>
      </section>

      {/* Ações */}
      <section className="grid grid-cols-2 gap-3 mb-6">
        <ActionButton
          title="Calendário"
          icon={<FaCalendarDays />}
          bg="bg-[#E4EDFB]"
          hover="hover:bg-[#d9e6fb]"
          color="text-[#3653B4]"
        />
        <ActionButton
          title="Relatórios"
          icon={<FaChartLine />}
          bg="bg-[#E6F9F1]"
          hover="hover:bg-[#d2f6e7]"
          color="text-[#1D6150]"
        />
        <ActionButton
          title="Mensagens"
          icon={<FaComments />}
          bg="bg-[#FFF2CC]"
          hover="hover:bg-[#ffe5a4]"
          color="text-[#987200]"
        />
        <ActionButton
          title="Frequência"
          icon={<FaUserCheck />}
          bg="bg-[#FFE6ED]"
          hover="hover:bg-[#ffd0de]"
          color="text-[#8F2A47]"
        />
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
          <span className="text-xs text-[#6D7B97]">Última avaliação: {date}</span>
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
