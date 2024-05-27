"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center py-8">
        <div className="hidden md:flex md:flex-col text-left w-1/2 justify-center">
          <h2 className="text-6xl font-bold">FAQ</h2>
          <span className="text-neutral-500">Preguntas Frecuentes</span>
        </div>
        <div className="md:w-1/2 w-full">
          <Accordion type="single" defaultValue="item-1" collapsible className="rounded-md border ">
            <AccordionItem value="item-1" className="px-4">
              <AccordionTrigger>¿Qué es Gestor?</AccordionTrigger>
              <AccordionContent>
                Gestor es una aplicación diseñada para ayudarte a organizar y gestionar tus tareas,
                proyectos y colaboraciones de manera eficiente y productiva. Con una interfaz
                intuitiva y herramientas poderosas, Gestor facilita la planificación y seguimiento
                de tus actividades diarias.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="px-4">
              <AccordionTrigger>¿Cómo puedo descargar Gestor?</AccordionTrigger>
              <AccordionContent>
                Puedes descargar Gestor desde la App Store o Google Play. Simplemente busca Gestor
                en tu tienda de aplicaciones preferida, selecciona la aplicación y sigue las
                instrucciones para la instalación.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="px-4">
              <AccordionTrigger>¿Necesito una cuenta para usar Gestor?</AccordionTrigger>
              <AccordionContent>
                Sí, necesitarás crear una cuenta para aprovechar todas las funcionalidades de
                Gestor. Registrarte es rápido y fácil, y te permitirá sincronizar tus tareas y
                proyectos en todos tus dispositivos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="px-4">
              <AccordionTrigger>¿Es seguro usar Gestor?</AccordionTrigger>
              <AccordionContent>
                La seguridad de tus datos es nuestra prioridad. Gestor utiliza encriptación de
                extremo a extremo para proteger tu información y garantizar que solo tú y las
                personas que autorices puedan acceder a tus datos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="px-4">
              <AccordionTrigger>¿Puedo usar Gestor en múltiples dispositivos?</AccordionTrigger>
              <AccordionContent>
                Sí, Gestor está diseñado para funcionar en múltiples dispositivos. Puedes acceder a
                tu cuenta desde tu smartphone, tablet o computadora, y toda tu información se
                sincronizará automáticamente entre ellos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
