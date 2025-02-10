import { useState, useEffect } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";

export default function TurnoContador() {
  const [turno, setTurno] = useState(0);
  const [nuevoTurno] = useState(0);
  const [imagenes] = useState([
    "/Banner-1.jpg",
    "/Banner-2.jpg",
    "/Banner-5.jpg",
  ]);
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   fetch("http://localhost:8000/turno/1") //  TODO: implementar FastAPI
  //     .then((res) => res.json())
  //     .then((data) => setTurno(data.numero))
  //     .catch((err) => console.error("Error al obtener el turno", err));
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [imagenes.length]);

  const incrementarTurno = async () => {
    const nuevoNumero = turno + 1;
    setTurno(nuevoNumero);
    // await fetch("http://localhost:8000/turno/1", {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ numero: nuevoNumero }),
    // });
  };

  const establecerTurno = async () => {
    setTurno(nuevoTurno);
    // await fetch("http://localhost:8000/turno/1", {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ numero: nuevoTurno }),
    // });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 bg-gray-100 min-h-screen w-full text-center">
      <div className="w-130 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800">Turno Actual: {turno}</h2>
      </div>

      <div className="w-180 max-w-2xl text-center">
        <h3 className="text-lg font-semibold text-gray-700">Síguenos en redes sociales</h3>
        <div className="relative w-full h-36 mt-4 overflow-hidden rounded-lg shadow-md">
          {imagenes.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt="Banner" 
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl">
        <video autoPlay loop muted className="w-full rounded-lg shadow-md">
          <source src="sample_video.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <button
          onClick={incrementarTurno}
          className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
        >
          <FaPlus />
        </button>
        <button
          onClick={establecerTurno}
          className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );
}
