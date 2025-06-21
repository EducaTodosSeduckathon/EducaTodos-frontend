import { FaPlus } from "react-icons/fa6";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

import { FaCog, FaEdit, FaUsers } from "react-icons/fa";
import { Link } from "react-router";

interface Professor {
  id: number;
  nome: string;
  email: string;
}

const professores: Professor[] = [
  {
    id: 1,
    nome: "Carlos Silva",
    email: "carlos.silva@escola.com",
  },
  {
    id: 2,
    nome: "Ana Souza",
    email: "ana.souza@escola.com",
  },
  {
    id: 3,
    nome: "João Pereira",
    email: "joao.pereira@escola.com",
  },
];

export default function Professores() {
  return (
    <>
      <PageBreadcrumb pageTitle="Professores" />

      <div className="flex justify-end mb-4">
        <Link
          to="/admin/professores/cadastrar"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
        >
          <FaPlus className="text-sm" />
          Cadastrar Professor
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  Nome
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  E-mail
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  Ações
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {professores.map((professor) => (
                <TableRow key={professor.id}>
                  <TableCell className="px-5 py-4 text-start">
                    <Link
                      to={`/admin/professores/${professor.id}`}
                      className="font-medium text-gray-800 dark:text-white"
                    >
                      {professor.nome}
                    </Link>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500 dark:text-gray-400">
                    {professor.email}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <div className="flex gap-3">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        title="Editar"
                      >
                        <FaEdit />
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
