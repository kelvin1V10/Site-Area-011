import React, { useEffect, useState } from "react";
import { VipCard } from "../components/VipCard";
import { CarCard } from "../components/CarCard";
import { motion } from "framer-motion";
import videoFundo from "../assets/videoplayback.mp4"; // vídeo que tu baixou

export function Home() {
  const [vips, setVips] = useState([]);
  const [cars, setCars] = useState([]);
  const [activeTab, setActiveTab] = useState("vips");

  useEffect(() => {
    setVips([
      { id: 1, name: "VIP Bronze", description: "VIP Bronze vem com perks e carro", benefits: ["Carro exclusivo", "Acesso VIP"], price: 10 },
      { id: 2, name: "VIP Prata", description: "VIP Prata vem com mais vantagens", benefits: ["Carro + Skin", "Acesso VIP + Loja"], price: 25 },
      { id: 3, name: "VIP Ouro", description: "VIP Ouro vem com tudo liberado", benefits: ["Todos carros", "Skin exclusiva", "Boost XP"], price: 50 }
    ]);

    setCars([
      { id: 1, name: "Comet SR", description: "Super esportivo rápido", price: 20 },
      { id: 2, name: "Elegy RH8", description: "Esportivo clássico", price: 15 },
      { id: 3, name: "Infernus", description: "O carro mais rápido da cidade", price: 50 }
    ]);
  }, []);

  return (
    <div className="relative min-h-screen text-white p-8">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoFundo} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Cabeçalho */}
        <section className="text-center mb-12">
          <motion.h1
            className="text-5xl font-extrabold mb-3 text-red-500 drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Bem-vindo à Loja VIP 🔥
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Explore nossos VIPs e carros exclusivos da Área 011
          </motion.p>
        </section>

        {/* Toggle estiloso */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            className={`px-6 py-2 rounded-full font-bold transition ${
              activeTab === "vips"
                ? "bg-red-700 text-white shadow-[0_0_20px_rgba(255,0,0,0.7)]"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("vips")}
          >
            VIPs 🔥
          </button>
          <button
            className={`px-6 py-2 rounded-full font-bold transition ${
              activeTab === "cars"
                ? "bg-blue-700 text-white shadow-[0_0_20px_rgba(0,0,255,0.7)]"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("cars")}
          >
            Carros 🚗
          </button>
        </div>

        {/* Seções */}
        {activeTab === "vips" && (
          <section id="vips">
            <h2 className="text-4xl font-bold mb-6 text-red-400 drop-shadow-lg text-center">
              VIPs Disponíveis 🔥
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vips.map((vip, index) => (
                <motion.div
                  key={vip.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <VipCard vip={vip} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "cars" && (
          <section id="cars">
            <h2 className="text-4xl font-bold mb-6 text-blue-400 drop-shadow-lg text-center">
              Carros Disponíveis 🚗
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
