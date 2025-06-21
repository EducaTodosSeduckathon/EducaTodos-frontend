import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";
import Button from "../../../../components/ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

// Dias da semana
const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

interface Horario {
  id: number;
  disciplina: string;
  horario: string;
  dia: string;
}

interface Aviso {
  id: number;
  titulo: string;
  descricao: string;
}

export default function AvisosHorarios() {
  const [horarios, setHorarios] = useState<Horario[]>([]);
  const [avisos, setAvisos] = useState<Aviso[]>([]);

  const [novoHorario, setNovoHorario] = useState({
    disciplina: "",
    horario: "",
    dia: diasSemana[0],
  });

  const [novoAviso, setNovoAviso] = useState({
    titulo: "",
    descricao: "",
  });

  const adicionarHorario = () => {
    if (novoHorario.disciplina.trim() === "" || novoHorario.horario.trim() === "")
      return;
    setHorarios([
      ...horarios,
      { id: Date.now(), ...novoHorario },
    ]);
    setNovoHorario({ disciplina: "", horario: "", dia: diasSemana[0] });
  };

  const removerHorario = (id: number) => {
    setHorarios(horarios.filter((h) => h.id !== id));
  };

  const adicionarAviso = () => {
    if (novoAviso.titulo.trim() === "") return;
    setAvisos([
      ...avisos,
      { id: Date.now(), ...novoAviso },
    ]);
    setNovoAviso({ titulo: "", descricao: "" });
  };

  const removerAviso = (id: number) => {
    setAvisos(avisos.filter((a) => a.id !== id));
  };

  return (
    <>
      <PageBreadcrumb pageTitle="Avisos e Horários" />

      {/* Seção de Avisos */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 mb-8 dark:border-white/[0.05] dark:bg-white/[0.03]">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Avisos Importantes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <input
            type="text"
            className="border rounded-md px-3 py-2"
            placeholder="Título do Aviso"
            value={novoAviso.titulo}
            onChange={(e) => setNovoAviso({ ...novoAviso, titulo: e.target.value })}
          />
          <input
            type="text"
            className="border rounded-md px-3 py-2"
            placeholder="Descrição"
            value={novoAviso.descricao}
            onChange={(e) => setNovoAviso({ ...novoAviso, descricao: e.target.value })}
          />
          <Button onClick={adicionarAviso}>
            <FaPlus /> Adicionar Aviso
          </Button>
        </div>

        <div className="space-y-3">
          {avisos.length === 0 && (
            <p className="text-sm text-gray-500">Nenhum aviso cadastrado.</p>
          )}
          {avisos.map((aviso) => (
            <div
              key={aviso.id}
              className="flex items-start justify-between bg-gray-50 dark:bg-white/5 rounded-md px-4 py-3"
            >
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  {aviso.titulo}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {aviso.descricao}
                </p>
              </div>
              <button
                onClick={() => removerAviso(aviso.id)}
                className="text-red-600 hover:text-red-800"
                title="Remover"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Horários */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/[0.05] dark:bg-white/[0.03]">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Grade de Horários
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          <input
            type="text"
            className="border rounded-md px-3 py-2"
            placeholder="Disciplina"
            value={novoHorario.disciplina}
            onChange={(e) => setNovoHorario({ ...novoHorario, disciplina: e.target.value })}
          />
          <input
            type="text"
            className="border rounded-md px-3 py-2"
            placeholder="Horário (ex.: 08:00 - 09:40)"
            value={novoHorario.horario}
            onChange={(e) => setNovoHorario({ ...novoHorario, horario: e.target.value })}
          />
          <select
            className="border rounded-md px-3 py-2"
            value={novoHorario.dia}
            onChange={(e) => setNovoHorario({ ...novoHorario, dia: e.target.value })}
          >
            {diasSemana.map((dia) => (
              <option key={dia} value={dia}>
                {dia}
              </option>
            ))}
          </select>
          <Button onClick={adicionarHorario}>
            <FaPlus /> Adicionar Horário
          </Button>
        </div>

        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell isHeader>Horário</TableCell>
                {diasSemana.map((dia) => (
                  <TableCell isHeader key={dia} className="text-center">
                    {dia}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {Array.from(new Set(horarios.map((h) => h.horario))).map(
                (horario) => (
                  <TableRow key={horario}>
                    <TableCell className="font-medium">{horario}</TableCell>
                    {diasSemana.map((dia) => {
                      const aulas = horarios.filter(
                        (h) => h.horario === horario && h.dia === dia
                      );
                      return (
                        <TableCell key={dia} className="align-top">
                          <div className="flex flex-col gap-2">
                            {aulas.map((a) => (
                              <div
                                key={a.id}
                                className="flex items-center justify-between rounded-md bg-gray-100 px-2 py-1"
                              >
                                <span className="text-sm">{a.disciplina}</span>
                                <button
                                  onClick={() => removerHorario(a.id)}
                                  className="text-red-600 hover:text-red-800"
                                  title="Remover"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            ))}
                          </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
