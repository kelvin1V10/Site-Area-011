import React from "react";
import { useParams } from "react-router-dom";

export function VipDetail() {
  const { id } = useParams();

  // Aqui você buscaria do backend o VIP pelo id
  // Por enquanto mock
  const vip = {
    id,
    name: `VIP ${id}`,
    description: "Descrição detalhada do VIP",
    benefits: ["Carro exclusivo", "Skin especial", "Acesso VIP"],
    price: 25
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-4 text-yellow-400">{vip.name}</h1>
      <p className="mb-4">{vip.description}</p>
      <ul className="mb-4 list-disc list-inside">
        {vip.benefits.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <span className="text-3xl font-extrabold">R${vip.price}</span>
    </div>
  );
}
