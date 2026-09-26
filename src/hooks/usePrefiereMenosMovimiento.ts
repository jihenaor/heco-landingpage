import { useEffect, useState } from 'react';

const CONSULTA = '(prefers-reduced-motion: reduce)';

export const usePrefiereMenosMovimiento = () => {
  const [prefiere, setPrefiere] = useState(() => window.matchMedia(CONSULTA).matches);

  useEffect(() => {
    const medios = window.matchMedia(CONSULTA);
    const actualizar = () => setPrefiere(medios.matches);
    medios.addEventListener('change', actualizar);
    return () => medios.removeEventListener('change', actualizar);
  }, []);

  return prefiere;
};
