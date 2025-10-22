import React from "react";
import { motion } from "framer-motion";

export function VipCard({ vip, onDetail }) {
  return (
    <motion.div
      className="bg-gray-800 border border-red-600 rounded-xl p-4 shadow-[0_0_10px_rgba(255,0,0,0.3)] text-white w-64 h-96 mx-auto flex flex-col justify-between transition-transform duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col items-center flex-1">
        {/* Imagem */}
        <div className="w-24 h-24 mb-3 rounded-lg overflow-hidden border border-red-500 shadow-[0_0_6px_rgba(255,0,0,0.4)] bg-gray-900 flex items-center justify-center">
          <motion.img
            src={vip.image || "https://via.placeholder.com/150/ff0000/ffffff?text=VIP"} 
            alt={vip.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Nome e descrição */}
        <h2 className="text-lg font-bold mb-1 text-red-400 text-center">{vip.name}</h2>
        <p className="text-sm mb-2 text-gray-300 text-center line-clamp-2">{vip.description}</p>

        {/* Benefícios */}
        {vip.benefits && vip.benefits.length > 0 && (
          <ul className="mb-2 list-disc list-inside text-gray-300 text-sm text-left max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-red-700">
            {vip.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Preço e botões */}
      <div className="flex justify-between items-center mt-2 space-x-2">
        <span className="text-lg font-bold text-red-500">R${vip.price}</span>
        <button
          className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-500 transition"
          onClick={() => onDetail && onDetail(vip)}
        >
          Comprar
        </button>
        <button
          className="px-3 py-1 bg-gray-700 text-white text-sm font-bold rounded-lg hover:bg-gray-600 transition"
          onClick={() => onDetail && onDetail(vip)}
        >
          Detalhe
        </button>
      </div>
    </motion.div>
  );
}
