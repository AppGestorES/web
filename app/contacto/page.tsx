"use client";

import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <main className="px-[19px] md:px-[112px] flex flex-col justify-center items-center h-[70vh]">
        <section className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 my-8">
          <h1 className="text-3xl font-bold text-center text-gray-900">Contacto</h1>

          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos a través
            del siguiente formulario.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
