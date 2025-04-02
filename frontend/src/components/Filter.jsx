import React from "react";
import { Link } from "react-router-dom";

export default function Filter() {
  return (
    <div className="filters flex md:flex-row flex-col md:justify-between px-20 max-sm:flex-wrap gap-3">
      <div className="hidden lg:flex flex gap-4 max-sm:flex-wrap">
        <button
          type="button"
          className="bg-white text-black font-bold h-14 px-10 active:border-[#1FA4E4] active:text-[#1FA4E4] rounded border border-[#D2D2D2] hover:bg-blue-50 hover:border-[#1FA4E4] hover:text-[#1FA4E4]"
        >
          Todos
        </button>

        <button
          type="button"
          className="bg-white text-black font-bold h-14 px-12 active:border-[#1FA4E4] active:text-[#1FA4E4] rounded border border-[#D2D2D2] hover:bg-blue-50 hover:border-[#1FA4E4] hover:text-[#1FA4E4]"
        >
          Recentes
        </button>

        <button
          type="button"
          className="bg-white text-black font-bold h-14 px-12 rounded active:border-[#1FA4E4] active:text-[#1FA4E4] border border-[#D2D2D2] hover:bg-blue-50 hover:border-[#1FA4E4] hover:text-[#1FA4E4]"
        >
          Antigos
        </button>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          className="bg-white flex items-center gap-6 text-black font-bold h-14 px-12 active:border-[#1FA4E4] active:text-[#1FA4E4] rounded border border-[#D2D2D2] hover:bg-blue-50 hover:border-[#1FA4E4]"
        >
          Filtros{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
            >
              <path
                d="M7.83333 13.5H12.1667V11.3333H7.83333V13.5ZM0.25 0.5V2.66667H19.75V0.5H0.25ZM3.5 8.08333H16.5V5.91667H3.5V8.08333Z"
                fill="black"
              />
            </svg>
          </span>
        </button>
        <Link to="/criar-pedido">
          <button
            type="button"
            className="text-white font-bold bg-[#1FA4E4] h-14 px-12 rounded hover:bg-blue-600 cursor-pointer"
          >
            Criar pedido
          </button>
        </Link>
      </div>
    </div>
  );
};
