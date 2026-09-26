import React, { useEffect, useRef, useState } from 'react';
import { useEnVista } from '../../hooks/useEnVista';
import { usePrefiereMenosMovimiento } from '../../hooks/usePrefiereMenosMovimiento';

interface ContadorAnimadoProps {
  valor: number;
  decimales?: number;
  duracion?: number;
  retraso?: number;
  prefijo?: string;
  sufijo?: string;
  className?: string;
}

const formatear = (numero: number, decimales: number) =>
  decimales > 0 ? numero.toFixed(decimales) : Math.round(numero).toLocaleString('es-CO');

const suavizarSalida = (t: number) => 1 - Math.pow(1 - t, 3);

export const ContadorAnimado: React.FC<ContadorAnimadoProps> = ({
  valor,
  decimales = 0,
  duracion = 1.6,
  retraso = 0,
  prefijo = '',
  sufijo = '',
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const enVista = useEnVista(ref, { umbral: 0.6, unaVez: true });
  const menosMovimiento = usePrefiereMenosMovimiento();
  const [actual, setActual] = useState(0);

  useEffect(() => {
    if (!enVista) return;
    if (menosMovimiento) {
      setActual(valor);
      return;
    }

    let cuadro = 0;
    const inicio = performance.now() + retraso * 1000;
    const avanzar = (ahora: number) => {
      const t = Math.min(Math.max((ahora - inicio) / (duracion * 1000), 0), 1);
      setActual(valor * suavizarSalida(t));
      if (t < 1) cuadro = requestAnimationFrame(avanzar);
    };
    cuadro = requestAnimationFrame(avanzar);
    return () => cancelAnimationFrame(cuadro);
  }, [enVista, menosMovimiento, valor, duracion, retraso]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span className="sr-only">{`${prefijo}${formatear(valor, decimales)}${sufijo}`}</span>
      <span aria-hidden="true">{`${prefijo}${formatear(actual, decimales)}${sufijo}`}</span>
    </span>
  );
};
