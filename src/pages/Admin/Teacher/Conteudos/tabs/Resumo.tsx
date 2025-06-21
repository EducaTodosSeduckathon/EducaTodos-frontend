import { useParams } from "react-router-dom";
import { useState } from "react";
import DropzoneComponent from "../../../../../components/form/form-elements/DropZone";
import RichTextEditor from "../../../../../components/form/form-elements/RichTextEditor";
import { Descendant } from "slate";

const categoriasAcessibilidade = ["Visual", "Auditiva", "Motora", "Intelectual"] as const;

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'Digite seu conteúdo aqui...' }],
  },
];

export default function Resumo() {
  const { id } = useParams();
  const isEditando = Boolean(id);

  const [abaAtiva, setAbaAtiva] = useState<(typeof categoriasAcessibilidade)[number]>("Visual");

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataFinalizacao, setDataFinalizacao] = useState("");

  const [resumoGeral, setResumoGeral] = useState(""); // HTML
  const [resumoAcessibilidade, setResumoAcessibilidade] = useState<Record<string, string>>({
    Visual: "",
    Auditiva: "",
    Motora: "",
    Intelectual: "",
  });

  return (
    <div className={`flex ${isEditando ? "flex-col lg:flex-row gap-6" : "flex-col gap-6"}`}>
      {/* Sidebar */}
      {isEditando && (
        <div className="lg:w-1/4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Acessibilidade</h3>
            <div className="space-y-2">
              {categoriasAcessibilidade.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setAbaAtiva(cat)}
                  className={`w-full text-start px-3 py-2 rounded-md ${
                    abaAtiva === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-white/5 hover:bg-blue-100 dark:hover:bg-blue-600 hover:text-blue-700 dark:hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <div className="flex-1 space-y-6">

        

        {/* Formulário */}
        <div className="border rounded-xl p-4 space-y-4">
          {/* Título */}
          <div>
            <label className="block text-sm font-medium mb-1">Título</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Digite o título do conteúdo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium mb-1">Descrição</label>
            <textarea
              className="w-full border rounded-md p-2"
              rows={3}
              placeholder="Descrição breve do conteúdo..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          {/* Data de finalização */}
          <div>
            <label className="block text-sm font-medium mb-1">Data de Finalização</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              value={dataFinalizacao}
              onChange={(e) => setDataFinalizacao(e.target.value)}
            />
          </div>

          {/* Editor de Resumo Geral */}
          
        </div>

        {/* Resumo Acessibilidade */}
        {isEditando && (
          <div className="border rounded-xl p-4 space-y-2">
            <h3 className="font-medium">
              Resumo para <span className="text-blue-600">{abaAtiva}</span>
            </h3>
            <textarea
              className="w-full border rounded-md p-3"
              rows={6}
              placeholder={`Digite o resumo adaptado para ${abaAtiva}`}
              value={resumoAcessibilidade[abaAtiva]}
              onChange={(e) =>
                setResumoAcessibilidade({
                  ...resumoAcessibilidade,
                  [abaAtiva]: e.target.value,
                })
              }
            />
          </div>
        )}

        {/* Dropzone (somente na criação) */}
        {!isEditando && (
          <div className="border rounded-xl p-4">
            <h3 className="font-medium mb-2">Upload do Resumo (.pdf ou .docx)</h3>
            <small>Será gerando uma versão do seu resumo adaptado para cada tipo de acessibilidade!</small>
            <DropzoneComponent />

            <div>
              <label className="block text-sm font-medium mb-1">
                Resumo
              </label>
              <RichTextEditor
                value={resumoGeral}
                onChange={(html) => setResumoGeral(html)}
              />
            </div>
          </div>
        )}

        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          {isEditando ? "Salvar Alterações" : "Salvar Resumo"}
        </button>
      </div>
    </div>
  );
}
