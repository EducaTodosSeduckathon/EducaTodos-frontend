import { useState } from "react";
import { Modal } from "../ui/modal";
import { toast } from "react-toastify";

export default function ModalSugestoes({ isOpen, onClose }) {
  const [etapa, setEtapa] = useState<"tipo" | "texto">("tipo");
  const [tipoSelecionado, setTipoSelecionado] = useState<null | string>(null);
  const [texto, setTexto] = useState("");

  const resetar = () => {
    setEtapa("tipo");
    setTipoSelecionado(null);
    setTexto("");
  };

  const handleClose = () => {
    resetar();
    onClose();
  };

  const handleSelecionarTipo = (tipo: string) => {
    setTipoSelecionado(tipo);
    setEtapa("texto");
  };

  const handleEnviar = () => {
    console.log({
      tipo: tipoSelecionado,
      texto,
    });

    toast(`Enviado: ${tipoSelecionado}`, {type: 'success'});
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-8">
        {etapa === "tipo" && (
          <>
            <h4 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Sugestões e Denúncias
            </h4>
            <div className="flex flex-col gap-4">
              {["Sugestão", "Denúncia", "Denúncia Anônima"].map((tipo) => (
                <button
                  key={tipo}
                  onClick={() => handleSelecionarTipo(tipo)}
                  className="w-full rounded-xl bg-blue-100 hover:bg-blue-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] px-4 py-3 text-center font-semibold text-blue-900 dark:text-white transition"
                >
                  {tipo}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={handleClose}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300"
              >
                Fechar
              </button>
            </div>
          </>
        )}

        {etapa === "texto" && (
          <>
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              {tipoSelecionado}
            </h4>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Escreva abaixo sua {tipoSelecionado?.toLowerCase()}.
            </p>
            <textarea
              rows={6}
              className="w-full rounded-xl border border-gray-300 bg-gray-100 p-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-white/[0.05] dark:text-gray-200"
              placeholder="Digite aqui..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />

            <div className="flex items-center justify-between gap-3 mt-6">
              <button
                onClick={() => setEtapa("tipo")}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300"
              >
                Voltar
              </button>
              <button
                onClick={handleEnviar}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                disabled={!texto.trim()}
              >
                Enviar
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
