import Faq from "@/components/ui/index/faq";
import Features from "@/components/ui/index/features";
import Hero from "@/components/ui/index/hero";
import TryItNow from "@/components/ui/index/tryItNow";
import Image from "next/image";

export default function SobreNosotros() {
  return (
    <>
      <main className="px-[19px] md:px-[112px] flex flex-col justify-center items-center">
        <section className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 mt-8">
          <h1 className="text-3xl font-bold text-center text-gray-900">Sobre Nosotros</h1>
          
          <p className="text-gray-700 leading-relaxed">
            Somos una empresa dedicada a mejorar la trazabilidad y la eficiencia en la producción de pienso mediante soluciones tecnológicas innovadoras.
            Nuestro objetivo es proporcionar herramientas que permitan un control exhaustivo de los procesos de producción, desde la recepción de materias
            primas hasta la entrega del producto final.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Nuestra aplicación de gestión de trazabilidad está diseñada para adaptarse a las necesidades específicas de cada cliente, mejorando la calidad del
            producto y optimizando los recursos de la fábrica. Con un equipo de profesionales dedicados y el uso de tecnologías modernas como Next.js,
            Express.js y MariaDB, nos esforzamos por ofrecer un producto de alta calidad y fácil de usar.
          </p>
        </section>
      </main>
    </>
  );
}
