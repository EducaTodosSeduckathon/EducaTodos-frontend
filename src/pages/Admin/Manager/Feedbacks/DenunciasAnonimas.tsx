import { useState } from "react";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

import { FaTrash, FaEye } from "react-icons/fa";
import {Modal} from "../../../../components/ui/modal";

interface DenunciaAnonima {
  id: number;
  descricao: string;
  data: string;
}

const denuncias: DenunciaAnonima[] = [
  {
    id: 1,
    descricao: "O conteúdo da disciplina contém informações ofensivas.",
    data: "20/06/2025",
  },
  {
    id: 2,
    descricao:
      "Não há materiais acessíveis para alunos com deficiência visual.",
    data: "18/06/2025",
  },
];

export default function DenunciasAnonimas() {
  const [isOpen, setIsOpen] = useState(false);
  const [denunciaSelecionada, setDenunciaSelecionada] = useState<DenunciaAnonima | null>(null);

  const openModal = (denuncia: DenunciaAnonima) => {
    setDenunciaSelecionada(denuncia);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setDenunciaSelecionada(null);
  };

  return (
    <>
      <PageBreadcrumb pageTitle="Denúncias Anônimas" />

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  Descrição
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  Data
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start">
                  Ações
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {denuncias.map((den) => (
                <TableRow key={den.id}>
                  <TableCell className="px-5 py-4 text-start text-gray-500 dark:text-gray-400">
                    {den.descricao.length > 60
                      ? den.descricao.substring(0, 60) + "..."
                      : den.descricao}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500 dark:text-gray-400">
                    {den.data}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <div className="flex gap-3">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        title="Visualizar"
                        onClick={() => openModal(den)}
                      >
                        <FaEye />
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

      {/* Modal de Visualização */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-8">
          <div className="px-2 pr-10">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Denúncia Anônima
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Data: {denunciaSelecionada?.data}
            </p>
            <div className="bg-gray-100 dark:bg-white/[0.05] rounded-lg p-4 text-gray-700 dark:text-gray-300">
              {denunciaSelecionada?.descricao}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 px-2 mt-6">
            <button
              onClick={closeModal}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300"
            >
              Fechar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
