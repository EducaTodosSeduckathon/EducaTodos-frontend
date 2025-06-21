import { useState } from "react";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";
import { useNavigate, useParams } from "react-router";
import { FaSave, FaArrowLeft } from "react-icons/fa";

const professores = [
  { id: 1, nome: "Carlos Silva" },
  { id: 2, nome: "Ana Souza" },
  { id: 3, nome: "João Pereira" },
];

export default function EditDisciplina() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [professorId, setProfessorId] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !professorId) {
      alert("Preencha todos os campos!");
      return;
    }

    const disciplina = {
      nome,
      professorId,
    };

    console.log("Dados da disciplina:", disciplina);

    // Aqui você pode fazer a chamada da API para salvar

    navigate("/admin/disciplinas"); // Redireciona após salvar
  };

  return (
    <>
      <PageBreadcrumb pageTitle="Cadastrar Disciplina" />

      <div className="max-w-xl mx-auto rounded-xl border border-gray-200 bg-white p-6 dark:border-white/[0.05] dark:bg-white/[0.03]">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campo Nome */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Nome da Disciplina
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent dark:border-gray-600"
              placeholder="Digite o nome da disciplina"
            />
          </div>

          {/* Campo Professor */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Professor Responsável
            </label>
            <select
              value={professorId}
              onChange={(e) => setProfessorId(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent dark:border-gray-600"
            >
              <option value="">Selecione um professor</option>
              {professores.map((prof) => (
                <option key={prof.id} value={prof.id}>
                  {prof.nome}
                </option>
              ))}
            </select>
          </div>

          {/* Botões */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/disciplinas")}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300"
            >
              <FaArrowLeft />
              Cancelar
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              <FaSave />
              Salvar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
