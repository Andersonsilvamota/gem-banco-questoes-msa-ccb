import { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

type QuestionType = "ME" | "MR" | "AB";

interface Question {
  id: number;
  nivel: string;
  modulo: string;
  assunto: string;
  tipo: QuestionType;
  enunciado: string;
  alternativas?: string[];
  resposta?: string;
}

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filtros, setFiltros] = useState({ nivel: "", modulo: "", assunto: "", tipo: "" });

  // 🔍 Filtrar
  const filtered = questions.filter(
    (q) =>
      (!filtros.nivel || q.nivel === filtros.nivel) &&
      (!filtros.modulo || q.modulo === filtros.modulo) &&
      (!filtros.assunto || q.assunto === filtros.assunto) &&
      (!filtros.tipo || q.tipo === filtros.tipo)
  );

  return (
    <div className="min-h-screen ">
      <div className=" p-8 bg-blue-200 mb-6">
        <h1 className="text-3xl font-extrabold text-white text-center drop-shadow-lg">
          GEM - Banco de Questões
        </h1>
      </div>

      {/* Filtro */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-4 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      
        {/* Input de busca */}
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar pelo enunciado"
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          
          />
        </div>

        {/* Botão Nova Questão */}
        <button
          
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition cursor-pointer"
        >
          <FiPlus size={30} />
          Nova Questão
        </button>

      </div>
        {/* Container de filtros */}
        <div className="mt-6 md:mt-6 flex-1 border-2 border-dashed border-gray-300 rounded-xl p-4 text-center text-gray-500 cursor-pointer">
          Aplicar filtros
        </div>
    </div>
    

    {/* Listar questões */}

    {/* Gerar questões PDF/DOCX */}
     
    </div>
  );
}
