import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";
import { FaSave } from "react-icons/fa";
import Input from "../../../../components/form/input/InputField";
import Label from "../../../../components/form/Label";
import Button from "../../../../components/ui/button/Button";

export default function CadastrarAluno() {
  const navigate = useNavigate();

  const [aluno, setAluno] = useState({
    nome: "",
    email: "",
    ra: "",
    nascimento: "",
  });

  const [responsavel, setResponsavel] = useState({
    nome: "",
    email: "",
    telefone: "",
    parentesco: "",
    nascimento: "",
  });

  const handleAlunoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const handleResponsavelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResponsavel({ ...responsavel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dados = {
      aluno,
      responsavel,
    };

    console.log(dados);
    // Aqui você envia os dados para o backend futuramente

    navigate("/admin/alunos");
  };

  return (
    <>
      <PageBreadcrumb pageTitle="Cadastrar Aluno" />

      <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/[0.05] dark:bg-white/[0.03] max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
          Dados do Aluno
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Dados do Aluno */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Nome</Label>
              <Input
                type="text"
                name="nome"
                value={aluno.nome}
                onChange={handleAlunoChange}
                required
              />
            </div>

            <div>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={aluno.email}
                onChange={handleAlunoChange}
              />
            </div>

            <div>
              <Label>RA</Label>
              <Input
                type="text"
                name="ra"
                value={aluno.ra}
                onChange={handleAlunoChange}
                required
              />
            </div>

            <div>
              <Label>Data de Nascimento</Label>
              <Input
                type="date"
                name="nascimento"
                value={aluno.nascimento}
                onChange={handleAlunoChange}
                required
              />
            </div>
          </div>

          <hr className="my-6 border-gray-300 dark:border-white/10" />

          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Dados do Responsável
          </h2>

          {/* Dados do Responsável */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Nome</Label>
              <Input
                type="text"
                name="nome"
                value={responsavel.nome}
                onChange={handleResponsavelChange}
                required
              />
            </div>

            <div>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={responsavel.email}
                onChange={handleResponsavelChange}
              />
            </div>

            <div>
              <Label>Telefone</Label>
              <Input
                type="text"
                name="telefone"
                placeholder="(99) 99999-9999"
                value={responsavel.telefone}
                onChange={handleResponsavelChange}
              />
            </div>

            <div>
              <Label>Parentesco</Label>
              <Input
                type="text"
                name="parentesco"
                placeholder="Pai, Mãe, Tio, etc."
                value={responsavel.parentesco}
                onChange={handleResponsavelChange}
                required
              />
            </div>

            <div>
              <Label>Data de Nascimento</Label>
              <Input
                type="date"
                name="nascimento"
                value={responsavel.nascimento}
                onChange={handleResponsavelChange}
                required
              />
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <Button type="submit" className="flex items-center gap-2">
              <FaSave /> Salvar
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
