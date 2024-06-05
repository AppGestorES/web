"use client";

import FeatureCard from "./featureCard";

const card = [
  {
    image: "undraw_cms_re_asu0.svg",
    title: "Organiza tus Tareas",
    text: "Gestiona tus pendientes de manera simple y efectiva.",
    direction: false,
  },
  {
    image: "undraw_file_manager_re_ms29.svg",
    title: "Colabora con tu Equipo",
    text: "Comparte proyectos y tareas con tu equipo fácilmente.",
    direction: true,
  },
  {
    image: "undraw_manage_chats_re_0yoj.svg",
    title: "Interfaz Intuitiva",
    text: "Diseño simple y navegación intuitiva.",
    direction: false,
  },
];

const Features = () => {
  return (
    <div className="w-1/2 h-full py-8" id="features">
      <h2 className="md:text-[60px] text-4xl text-center font-semibold flex flex-col gap-1 md:gap-8 py-8">
        <span>Conéctate, Organiza y</span>
        <span>Optimiza.</span>
        <span className="hidden md:block">Todo en un Solo Lugar</span>
      </h2>
      <FeatureCard card={card} />
    </div>
  );
};

export default Features;
