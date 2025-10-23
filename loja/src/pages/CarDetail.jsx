import { useParams } from "react-router-dom";

export function CarDetail() {
  const { id } = useParams();

  const car = {
    id,
    name: `Carro ${id}`,
    description: "Descrição detalhada do carro com informações gerais e diferenciais.",
    price: 20,
    details: [
      "Motor V8 turbo",
      "Velocidade máxima: 320 km/h",
      "Aceleração 0–100 em 3.2s",
      "Interior de couro premium",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-6 text-blue-400">{car.name}</h1>
      <p className="text-gray-300 mb-6">{car.description}</p>

      <ul className="list-disc list-inside space-y-2 text-gray-200">
        {car.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

      <p className="mt-8 text-3xl font-extrabold text-blue-400">
        💰 R${car.price}
      </p>
    </div>
  );
}
