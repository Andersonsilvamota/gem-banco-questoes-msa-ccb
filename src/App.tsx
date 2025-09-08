import { useState } from "react";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

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


  return (
    <div className="min-h-screen ">
      <div className=" p-8 bg-blue-200 mb-6">
        <h1 className="text-3xl font-extrabold text-white text-center drop-shadow-lg">
          GEM - Banco de Questões
        </h1>
        </div>
     
    </div>
  );
}
