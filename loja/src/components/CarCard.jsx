import React from "react";
import { motion } from "framer-motion";

export function CarCard({ car }) {
  return (
    <motion.div
      className="bg-gray-800 border border-red-600 rounded-xl p-4 shadow-[0_0_10px_rgba(255,0,0,0.3)] text-white w-64 h-80 mx-auto flex flex-col justify-between transition-transform duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col items-center flex-1">
        <div className="w-24 h-24 mb-3 rounded-lg overflow-hidden border border-red-500 shadow-[0_0_6px_rgba(255,0,0,0.4)]">
          <motion.img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <h2 className="text-lg font-bold text-red-400 text-center">{car.name}</h2>
        <p className="text-sm text-gray-300 text-center line-clamp-2">
          {car.description}
        </p>
      </div>

      {/* Preço e botões */}
      <div className="flex justify-between items-center mt-3 space-x-2">
        <span className="text-lg font-bold text-red-500">R${car.price}</span>
        <button className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-500 transition">
          Comprar
        </button>
        <button className="px-3 py-1 bg-gray-700 text-white text-sm font-bold rounded-lg hover:bg-gray-600 transition">
          Detalhe
        </button>
      </div>
    </motion.div>
  );
}
