import Image from "next/image";

export default function Home() {

  const TESTIMONIALS_VIDEO_PAGE = [
    {
      video: "https://www.youtube.com/embed/gpwLhpWX7qo?si=fSN9JjHTACpX4VdU",
      titulo: "Titulo",
      story: "Story",
      nombre: "Nombre",
      dato: "Dato",
    },
    {
      video: "https://www.youtube.com/embed/mwGd2Y_eGkI?si=QhawwXunJFPTWOJC",
      titulo: "Titulo",
      story: "Story",
      nombre: "Nombre",
      dato: "Dato",
    },
  ];

  return (
    <div className="relative overflow-clip pt-12">
      <img
        src="/images/Sombra.webp"
        alt="Sombra"
        className="w-[700px] absolute right-0 top-0 -z-50 hidden md:block"
      />
      <img
        src="/images/Sombra.webp"
        alt="Sombra"
        className="w-[700px] absolute left-0 top-0 scale-x-[-1] -z-50 hidden md:block"
      />
      <div className="bg-[var(--primary)]/80 size-[600px] rounded-full left-1/2 transform hidden md:block -translate-x-1/2 absolute -z-50  blur-[800px] -top-[400px]"></div>

      {/* <img src="/images/logo.png" className="h-[25px] object-contain mx-auto" alt="Logo" /> */}
      <header className="bg-linear-0 from-[#0E0E0E] to-[#1C1B1B] max-w-[85%] w-[500px] rounded-full mx-auto border border-[var(--primary)]/30 z-50">
        <div className="cf-container">
          <h3 className="text-center uppercase text-[var(--text-primary)]/80 tracking-widest text-[12px] py-3 leading-[130%]">
            <span>Buscamos setters y closers con experiencia</span>
          </h3>
        </div>
      </header>

      {/* Sección VSL (siempre visible) */}
      <section className="mt-6 pb-[60px] md:pb-[100px] relative overflow-clip">
        <div className="cf-container">
          <h1 className="text-center text-[22px] md:text-[38px] font-bold uppercase leading-[140%] md:px-4">
            <span>
              Dejá de perseguir leads fríos. Sumate a un sistema con oportunidades reales
            </span>
          </h1>
          {/* <p className="text-[var(--primary)] text-center mt-2">
            En este video te explico paso a paso cómo funciona el sistema y si realmente es para vos.
          </p> */}
          <section className="relative">
            <div className="bg-[#131313] p-1 pt-0 border-1 border-[var(--primary)] overflow-clip rounded-[12px] md:rounded-[16px] border-[var(--primary)] mt-6 max-w-[900px] mx-auto">
              <div className="p-2 text-center text-[12px] uppercase text-[var(--text-primary)] tracking-widest bg-[#131313]">
                Mirá este video completo
              </div>
              <div className="bg-[#131313] aspect-video rounded-[8px] md:rounded-[12px] overflow-clip">
                <iframe
                  className="w-full aspect-video"
                  id={``}
                  src={`https://fast.wistia.net/embed/iframe/8gnk7rwlex?web_component=true&seo=true`}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                ></iframe>
              </div>
            </div>
          </section>

          <div className="mt-8 md:mt-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:w-[880px] mx-auto">
              <button
                className="cf-btn --sm"
                style={{ margin: 0 }}
              >
                ¡POSTULARME PARA SETTER!
              </button>
              <button
                className="cf-btn --sm"
                style={{ margin: 0 }}
              >
                ¡POSTULARME PARA CLOSER!
              </button>
            </div>
            <div className="h-[1px] relative overflow-clip max-w-[212px] mx-auto mt-4">
              <div className="bg-radial from-white to-black/0 size-[200px]"></div>
            </div>
            <p className="text-center mt-4 leading-[90%] text-white/40 mx-auto max-w-[350px] text-[14px] flex items-center justify-center gap-2">
              +500 Llamadas Diarias
              <img src="/images/Estrella.svg" alt="Estrellas" />
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[var(--primary)]/80 size-[800px] rounded-full left-[-400px] absolute -z-50  blur-[500px] top-[700px]"></div>
      <div className="bg-[var(--primary)]/80 size-[800px] rounded-full right-[-400px] absolute -z-50  blur-[500px] top-[700px]"></div>

      <section className="py-[100px] relative z-20">
        <div className="cf-container">
          <h2 className="text-[36px] md:text-[44px] font-bold text-white text-center max-w-[500px] leading-[130%] mx-auto">
            Un Poco Más Sobre Nosotros...
          </h2>
          <div className="my-8 md:my-12 max-w-[900px] mx-auto space-y-6">
            {TESTIMONIALS_VIDEO_PAGE.map((testimonial) => {
              return (
                <div
                  className="shadow-[0_4px_90px_0_#FF3B0070] rounded-[25px]"
                  key={testimonial.video}
                >
                  <div>
                    <div
                      key={testimonial.video}
                      className="p-1 md:p-2 rounded-[24px] relative overflow-clip z-50 bg-[var(--background)]"
                    >
                      <div className="h-[2px] absolute top-0 overflow-clip w-full">
                        <div className="bg-white size-[80px] md:size-[300px] -top-[40px] md:top-[-150px] blur-[20px] md:blur-[100px] opacity-[100%] rounded-full absolute left-[calc(50%-40px)] md:left-[calc(50%-150px)] -z-50"></div>
                      </div>
                      <div className="bg-[var(--primary)] size-[900px] top-[-450px] blur-[150px] opacity-[70%] rounded-full absolute -right-[450px] -z-40"></div>
                      <div className="bg-[var(--primary)] size-[900px] bottom-[-450px] blur-[150px] opacity-[70%] rounded-full absolute -left-[450px] -z-40"></div>
                      <div className="relative bg-[#171717] z-50 p-4 md:p-[50px] rounded-[20px] flex md:flex-row flex-col gap-4 md:gap-8">
                        <div className="w-full max-w-[400px] aspect-video rounded-[10px] overflow-hidden">
                          <iframe
                            className="w-full h-full border border-white/20 rounded-[10px]"
                            src={testimonial.video}
                            title={testimonial.titulo}
                            allow="autoplay; fullscreen"
                          ></iframe>
                        </div>
                        <div className="py-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-[24px] leading-[120%] font-bold">
                              {testimonial.titulo}
                            </h3>
                            <p className="text-white/80 mt-4">
                              {testimonial.story}
                            </p>
                          </div>
                          <div className="mt-4">
                            <p>{testimonial.nombre}</p>
                            <p className="text-white/80 mt-2 text-[14px]">
                              {testimonial.dato}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <p className="text-white/80 text-center py-6 text-[14px]">© Vicente Calderon 2026. Todos los derechos reservados.</p>
    </div>
  );
}
