import React, { useEffect, useRef, useState } from 'react';
import { usePrefiereMenosMovimiento } from '../../hooks/usePrefiereMenosMovimiento';

interface LineaCotaProgresoProps {
  totalPasos: number;
  pasoActivo: number;
}

/* La línea empieza a trazarse cuando el borde superior entra al 90 % del
   alto de la ventana y se completa al llegar al 35 %. */
const INICIO_VENTANA = 0.9;
const FIN_VENTANA = 0.35;

export const LineaCotaProgreso: React.FC<LineaCotaProgresoProps> = ({ totalPasos, pasoActivo }) => {
  const ref = useRef<HTMLDivElement>(null);
  const menosMovimiento = usePrefiereMenosMovimiento();
  const [marcasAlcanzadas, setMarcasAlcanzadas] = useState(menosMovimiento ? totalPasos : 0);

  useEffect(() => {
    const contenedor = ref.current;
    if (!contenedor) return;

    if (menosMovimiento) {
      contenedor.style.setProperty('--progreso', '1');
      setMarcasAlcanzadas(totalPasos);
      return;
    }

    let cuadro = 0;
    const medir = () => {
      cuadro = 0;
      const alto = window.innerHeight;
      const { top } = contenedor.getBoundingClientRect();
      const progreso = Math.min(
        Math.max((INICIO_VENTANA * alto - top) / ((INICIO_VENTANA - FIN_VENTANA) * alto), 0),
        1
      );
      contenedor.style.setProperty('--progreso', progreso.toFixed(4));
      const tramos = Math.max(totalPasos - 1, 1);
      setMarcasAlcanzadas(Math.floor(progreso * tramos + 0.001) + (progreso > 0 ? 1 : 0));
    };
    const programar = () => {
      if (!cuadro) cuadro = requestAnimationFrame(medir);
    };

    medir();
    window.addEventListener('scroll', programar, { passive: true });
    window.addEventListener('resize', programar);
    return () => {
      window.removeEventListener('scroll', programar);
      window.removeEventListener('resize', programar);
      cancelAnimationFrame(cuadro);
    };
  }, [menosMovimiento, totalPasos]);

  const extremo = `${50 / totalPasos}%`;

  return (
    <div ref={ref} className="relative hidden sm:block h-6 mb-2" aria-hidden="true">
      <div className="absolute top-1/2 -translate-y-1/2 h-px bg-[#CBD5E1]" style={{ left: extremo, right: extremo }} />
      <div
        className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#D9381E] origin-left transition-transform duration-150 ease-out"
        style={{ left: extremo, right: extremo, transform: 'scaleX(var(--progreso, 0))' }}
      />
      <span className="absolute top-1/2 -translate-y-1/2 w-px h-3 bg-[#0C2340]" style={{ left: extremo }} />
      <span className="absolute top-1/2 -translate-y-1/2 w-px h-3 bg-[#0C2340]" style={{ right: extremo }} />

      <div
        className="relative grid gap-2 h-full items-center"
        style={{ gridTemplateColumns: `repeat(${totalPasos}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: totalPasos }, (_, idx) => {
          const alcanzada = idx < marcasAlcanzadas;
          return (
            <div key={idx} className="flex justify-center">
              <span
                className={`block w-3 h-3 rotate-45 border-2 border-white transition-all duration-300 ${
                  alcanzada ? 'bg-[#D9381E] scale-110' : 'bg-[#CBD5E1] scale-90'
                } ${idx === pasoActivo ? 'ring-2 ring-[#0C2340] ring-offset-1' : ''}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
