import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

import Badge from "../../../components/ui/badge/Badge";
import { FaCog, FaEdit, FaUsers } from "react-icons/fa";
import { Link } from "react-router";

interface Disciplina {
  id: number;
  nome: string;
  periodo: string;
  alunos: number;
  status: "Ativa" | "Planejamento" | "Encerrada";
}

const disciplinas: Disciplina[] = [
  {
    id: 1,
    nome: "Matemática",
    periodo: "1º Semestre",
    alunos: 32,
    status: "Ativa",
  },
  {
    id: 2,
    nome: "Física",
    periodo: "2º Semestre",
    alunos: 28,
    status: "Ativa",
  },
  // {
  //   id: 3,
  //   nome: "Estruturas de Dados",
  //   periodo: "3º Semestre",
  //   alunos: 25,
  //   status: "Planejamento",
  // },
  // {
  //   id: 4,
  //   nome: "Banco de Dados",
  //   periodo: "4º Semestre",
  //   alunos: 30,
  //   status: "Encerrada",
  // },
];

export default function Disciplinas() {
  return (
    <>
      <PageBreadcrumb pageTitle="Disciplinas" />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  Disciplina
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  Período
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  Alunos
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  Status
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  Ações
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {disciplinas.map((disciplina) => (
                <TableRow key={disciplina.id}>
                  <TableCell className="px-5 py-4 text-start">
                    <Link to={'/admin/disciplinas/1'} className="font-medium text-gray-800 dark:text-white">
                      {disciplina.nome}
                    </Link>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500 dark:text-gray-400">
                    {disciplina.periodo}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500 dark:text-gray-400">
                    {disciplina.alunos}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start">
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
                        className="text-green-600 hover:text-green-800"
                        title="Alunos"
                      >
                        <FaUsers />
                      </button>
                      <button
                        className="text-gray-600 hover:text-gray-800"
                        title="Configurações"
                      >
                        <FaCog />
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
