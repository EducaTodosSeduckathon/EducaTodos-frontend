import { useParams } from "react-router-dom";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import Badge from "../../../components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

import { FaEdit, FaTrash } from "react-icons/fa";

// Simula dados da disciplina e dos conteúdos
const disciplina = {
  id: 1,
  nome: "Matemática",
  periodo: "1º Semestre",
  alunos: 32,
  status: "Ativa" as "Ativa" | "Encerrada" | "Planejamento",
};

const conteudos = [
  {
    id: 1,
    titulo: "Introdução aos Números Reais",
    descricao: "Apresentação dos conceitos básicos de números reais.",
    dataTermino: "2025-07-15",
  },
  {
    id: 2,
    titulo: "Equações de 1º Grau",
    descricao: "Resolução de problemas usando equações de primeiro grau.",
    dataTermino: "2025-07-30",
  },
  {
    id: 3,
    titulo: "Funções",
    descricao: "Conceitos e aplicações de funções no cotidiano.",
    dataTermino: "2025-08-10",
  },
];

export default function DisciplinaDetails() {
  const { disciplinaId } = useParams(); // Para capturar o ID da disciplina se usar rotas dinâmicas

  return (
    <>
      <PageBreadcrumb pageTitle={`Disciplina: ${disciplina.nome}`} />

      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5 dark:border-white/[0.05] dark:bg-white/[0.03]">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          Informações da Disciplina
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <span className="text-gray-500 text-sm">Período</span>
            <div className="font-medium">{disciplina.periodo}</div>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Alunos</span>
            <div className="font-medium">{disciplina.alunos}</div>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Status</span>
            <div>
              <Badge
                size="sm"
                color={
                  disciplina.status === "Ativa"
                    ? "success"
                    : disciplina.status === "Planejamento"
                    ? "warning"
                    : "error"
                }
              >
                {disciplina.status}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Conteúdos da Disciplina
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
            + Novo Conteúdo
          </button>
        </div>

        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell isHeader className="text-start">
                  Título
                </TableCell>
                <TableCell isHeader className="text-start">
                  Descrição
                </TableCell>
                <TableCell isHeader className="text-start">
                  Data de Término
                </TableCell>
                <TableCell isHeader className="text-start">
                  Ações
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {conteudos.map((conteudo) => (
                <TableRow key={conteudo.id}>
                  <TableCell className="px-5 py-4 text-start font-medium">
                    {conteudo.titulo}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500">
                    {conteudo.descricao}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500">
                    {new Date(conteudo.dataTermino).toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <div className="flex gap-3">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        title="Editar"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        title="Excluir"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
