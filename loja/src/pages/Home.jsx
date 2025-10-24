import React, { useEffect, useState } from "react";
import { VipCard } from "../components/VipCard";
import { motion } from "framer-motion";
import videoFundo from "../assets/videoplayback.mp4";

// imagens VIP
import vipClassic from "../assets/vipClassic.jpg";
import vipBronze from "../assets/vipBronze.jpg";
import vipDiamante from "../assets/vipDiamante.jpg";
import vipSupremo from "../assets/vipSupremo.jpg";
import vipLendario from "../assets/vipLendario.jpg";
import vipChefe from "../assets/vipChefe.jpg";

// imagens carros
import r1200gs from "../assets/r1200gs.png";
import saveiro from "../assets/saveiroG9ex2.png";
import r34 from "../assets/R34BLUEDRAGON.png";
import m3g80 from "../assets/m3g80.png";
import drift from "../assets/GODzDRIFTCAT.png";
import ram from "../assets/GODzRAMTRX6x6.png";
import eclipse from "../assets/GODz95GSX.png";
import m2 from "../assets/DLM2.png";
import demonhawkk from "../assets/demonhawkk.png";
import ferrarigtb from "../assets/ferrarigtb.png";

// outros
import casaPraia from "../assets/casaPraia.jpg";
import spotify from "../assets/spotify.jpg";

export function Home() {
  const [vips, setVips] = useState([]);
  const [cars, setCars] = useState([]);
  const [others, setOthers] = useState([]);
  const [activeTab, setActiveTab] = useState("vips");
  const [detailItem, setDetailItem] = useState(null);
  const [checkoutItem, setCheckoutItem] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    setVips([
      { id: 1, name: "VIP Classic", description: "VIP básico", benefits: ["Carro + Skin", "Acesso VIP + Loja"], price: 25, image: vipClassic },
      { id: 2, name: "VIP Bronze", description: "VIP Slot de carro", benefits: ["Slot de carro", "2 mil reais"], price: 50, image: vipBronze },
      { id: 3, name: "VIP Diamante", description: "VIP top", benefits: ["Todos carros", "Skin exclusiva", "Boost XP", "Acesso a eventos"], price: 100, image: vipDiamante },
      { id: 4, name: "VIP Supremo", description: "VIP ultimate", benefits: ["Tudo liberado", "Itens raros", "Acesso total"], price: 200, image: vipSupremo },
      { id: 5, name: "VIP Lendário", description: "VIP épico", benefits: ["Itens épicos", "Carro exclusivo", "Boost XP máximo"], price: 500, image: vipLendario },
      { id: 6, name: "VIP Chefão", description: "VIP Dinheiro a toda hora", benefits: ["Carro exclusivo", "Boost XP máximo"], price: 500, image: vipChefe },
    ]);

    setCars([
      { id: 1, name: "R1", description: "Moto esportiva", price: 30, image: r1200gs },
      { id: 2, name: "ageraRS", description: "Esportivo clássico", price: 70, image: ferrarigtb },
      { id: 3, name: "Lamborghini", description: "Velocidade e estilo", price: 40, image: saveiro },
      { id: 4, name: "R34", description: "Velocidade pura", price: 90, image: r34 },
      { id: 5, name: "Cyberrrrrr", description: "Carro do Elon Musk", price: 60, image: m3g80 },
      { id: 6, name: "Cyber", description: "Carro do Elon Musk", price: 60, image: ram },
      { id: 7, name: "Cyber", description: "Carro do Elon Musk", price: 60, image: drift },
      { id: 8, name: "Cyber", description: "Carro do Elon Musk", price: 60, image: eclipse },
      { id: 9, name: "Cyber", description: "Carro do Elon Musk", price: 60, image: m2 },
      { id: 10, name: "Cyber", description: "Carro do Elon Musk", price: 60, image: demonhawkk },
    ]);

    setOthers([
      { id: 1, name: "Casa de Praia", description: "Um imóvel top na beira-mar", benefits: [], price: 100, image: casaPraia },
      { id: 2, name: "Spotify", description: "Tocar música no jogo", benefits: [], price: 100, image: spotify },
    ]);
  }, []);

  useEffect(() => {
    const hide = Boolean(detailItem || checkoutItem || paymentSuccess);
    document.body.style.overflow = hide ? "hidden" : "auto";
  }, [detailItem, checkoutItem, paymentSuccess]);

  const closeModal = () => setDetailItem(null);
  const closeCheckout = () => setCheckoutItem(null);

  const handleComprar = (item) => {
    setCheckoutItem(item);
    setDetailItem(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.dataset.overlay === "true") {
      closeModal();
      closeCheckout();
      setPaymentSuccess(false);
    }
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
        closeCheckout();
        setPaymentSuccess(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const simulatePayment = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      closeCheckout();
    }, 2500);
  };

  return (
    <div className="relative min-h-screen text-white p-8">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={videoFundo} type="video/mp4" />
      </video>

      <div className="relative z-10">
        <section className="text-center mb-12">
          <motion.h1 className="text-5xl font-extrabold mb-3 text-red-500 drop-shadow-lg" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            Bem-vindo à Loja VIP 🔥
          </motion.h1>
          <motion.p className="text-lg text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Explore nossos VIPs, carros e muito mais da Área 011
          </motion.p>
        </section>

        {/* Abas */}
        <div className="flex justify-center gap-4 mb-12">
          {["vips", "cars", "others"].map((tab) => {
            
            let activeClasses = "";
            if (tab === "vips") {
              activeClasses = "bg-red-700 text-white shadow-[0_0_20px_rgba(255,0,0,0.7)]"; // Fundo VERMELHO sólido e sombra vermelha
            } else if (tab === "cars") {
              activeClasses = "bg-blue-700 text-white shadow-[0_0_20px_rgba(0,0,255,0.7)]"; // Fundo AZUL sólido e sombra azul
            } else {
              activeClasses = "bg-green-700 text-white shadow-[0_0_20px_rgba(0,255,0,0.7)]"; // Fundo VERDE sólido e sombra verde
            }

            return (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full font-bold transition ${
                  activeTab === tab ? activeClasses : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "vips" ? "VIPs 🔥" : tab === "cars" ? "Carros 🚗" : "Outros ⚙️"}
              </button>
            );
          })}
        </div>

        {/* Seções */}
        {activeTab === "vips" && (
          <section>
            <h2 className="text-4xl font-bold mb-6 text-red-400 drop-shadow-lg text-center">VIPs Disponíveis 🔥</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vips.map((vip, i) => (
                <motion.div key={vip.id} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}>
                  <VipCard vip={vip} onDetail={setDetailItem} onBuy={handleComprar} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "cars" && (
          <section>
            <h2 className="text-4xl font-bold mb-6 text-blue-400 drop-shadow-lg text-center">Carros Disponíveis 🚗</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cars.map((car, i) => (
                <motion.div key={car.id} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}>
                  <VipCard vip={car} onDetail={setDetailItem} onBuy={handleComprar} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "others" && (
          <section>
            <h2 className="text-4xl font-bold mb-6 text-green-400 drop-shadow-lg text-center">Outros Itens ⚙️</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {others.map((item, i) => (
                <motion.div key={item.id} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}>
                  <VipCard vip={item} onDetail={setDetailItem} onBuy={handleComprar} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Modal detalhe */}
      {detailItem && (
        <motion.div data-overlay="true" onClick={handleOverlayClick} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="bg-gray-800 p-6 rounded-xl w-full max-w-md relative shadow-lg" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.18 }}>
            <button className="absolute top-3 right-3 text-red-500 font-bold text-xl hover:scale-110 transition-transform" onClick={closeModal}>×</button>
            <h2 className="text-2xl font-bold mb-2 text-red-400">{detailItem.name}</h2>
            <p className="mb-4 text-gray-300">{detailItem.description}</p>
            {detailItem.benefits && detailItem.benefits.length > 0 && (
              <ul className="list-disc list-inside text-gray-300 max-h-40 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-red-700">
                {detailItem.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
            <p className="mt-6 text-lg font-bold text-red-500">💰 Preço: R${detailItem.price}</p>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-lg transition" onClick={() => handleComprar(detailItem)}>Comprar</button>
              <button className="px-4 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium py-2 rounded-lg transition" onClick={closeModal}>Fechar</button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Checkout */}
      {checkoutItem && !paymentSuccess && (
        <motion.div data-overlay="true" onClick={handleOverlayClick} className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md text-center relative" initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.18 }}>
            <button className="absolute top-4 right-4 text-red-500 font-bold text-2xl hover:scale-110 transition-transform" onClick={closeCheckout}>×</button>

            <h2 className="text-3xl font-bold text-green-400 mb-2">{checkoutItem.name}</h2>
            <p className="text-gray-300 mb-4 text-lg">💰 Valor: R${checkoutItem.price}</p>

            <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-lg">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PIX_FAKE_${checkoutItem.id}_${checkoutItem.price}`} alt="QR Code Pix Fake" className="w-40 h-40" />
            </div>

            <p className="text-gray-300 mb-4">Escaneie o QR Code com seu app de Pix ou copie o código abaixo:</p>
            <p className="bg-gray-800 text-green-400 p-2 rounded mb-6 select-all font-mono">PIX_FAKE_{checkoutItem.id}_{checkoutItem.price}</p>

            <div className="flex gap-3 justify-center">
              <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-lg transition" onClick={closeCheckout}>Voltar à Loja</button>
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg transition flex items-center justify-center gap-2" onClick={simulatePayment}>Simular Pagamento</button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Modal Sucesso */}
      {paymentSuccess && (
        <motion.div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
          <motion.div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center flex flex-col items-center gap-4" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
            <motion.div initial={{ rotate: -45, y: 10, scale: 0 }} animate={{ rotate: 0, y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" strokeWidth="8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <motion.h2 className="text-2xl font-bold text-green-400" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
              Pagamento efetuado com sucesso!
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}