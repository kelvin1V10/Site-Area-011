import React from "react";

export function Checkout() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-6 text-red-500 drop-shadow-lg">Checkout</h1>
      <p className="text-lg mb-4">Aqui você integraria o pagamento real</p>
      <button className="py-3 px-6 bg-red-700 rounded-lg hover:bg-red-400 transition font-bold">
        Finalizar Compra
      </button>
    </div>
  );
}
