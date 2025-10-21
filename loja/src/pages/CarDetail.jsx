import { useParams } from "react-router-dom";

export function CarDetail() {
  const { id } = useParams();

  const car = {
    id,
    name: `Carro ${id}`,
    description: "Descrição detalhada do carro",
    price: 20
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-4 text-blue-400">{car.name}</h1>
      <p className="mb-4">{car.description}</p>
      <span className="text-3xl font-extrabold">R${car.price}</span>
    </div>
  );
}
