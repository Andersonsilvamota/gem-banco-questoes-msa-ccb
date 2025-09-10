import { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import perguntasData from "./perguntas.json";

type QuestionType = "ME" | "MR" | "AB";

interface Question {
  id: number;
  nivel: string;
  modulo: string;
  assunto: string;
  fase: string;
  tipo: QuestionType;
  enunciado: string;
  alternativas?: string[];
  resposta?: string;
}



export default function App() {
   const [questions, setQuestions] = useState<Question[]>(perguntasData);
  const [filtros, setFiltros] = useState({ nivel: "", modulo: "", assunto: "", tipo: "" });

    // 📥 Importar JSON
  const importJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string);
        setQuestions(data);
      } catch {
        alert("Arquivo inválido");
      }
    };
    reader.readAsText(file);
  };


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
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      
        {/* Input de busca */}
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar pelo enunciado"
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            onChange={(e) => setFiltros({ ...filtros, assunto: e.target.value })}
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
    
      {/* 📝 Lista de Questões */}
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {filtered.map((q) => (
          <div key={q.id} className="bg-white shadow-md rounded-xl p-4">
            <h3 className="font-bold mb-2">
              {q.tipo} | ID: {q.id}
            </h3>
            <p className="mb-3">{q.enunciado}</p>

            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                
                <span className="rounded-2xl bg-green-200 px-3 py-1">{q.assunto}</span>
                
                
              </div>
              <div className="flex gap-2">
                <button className="text-sm bg-blue-100 px-3 py-1 rounded-lg hover:bg-blue-200">
                  Adicionar
                </button>
                <button className="text-sm bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
                  Visualizar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    {/* Gerar questões PDF/DOCX */}
    {/* 📤 Exportar / Importar */}
        <div className="bg-secondary text-black p-4 rounded-2xl shadow-lg mt-4">
          <h2 className="text-xl font-bold mb-2">📤 Exportar / 📥 Importar</h2>
          <div className="flex flex-col gap-2">
            <button className="bg-primary text-white py-2 rounded-lg" >
              Exportar PDF
            </button>
            <button className="bg-success text-white py-2 rounded-lg" >
              Exportar Word
            </button>
            <button className="bg-primary text-white py-2 rounded-lg" >
              Exportar JSON
            </button>
            <input type="file" accept=".json" onChange={importJSON} />
          </div>
        </div>
      </div>

  );
}
