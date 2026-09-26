import { RefObject, useEffect, useState } from 'react';

interface OpcionesEnVista {
  umbral?: number;
  unaVez?: boolean;
}

export const useEnVista = (
  ref: RefObject<Element | null>,
  { umbral = 0.35, unaVez = false }: OpcionesEnVista = {}
) => {
  const [enVista, setEnVista] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        setEnVista(entrada.isIntersecting);
        if (entrada.isIntersecting && unaVez) observador.disconnect();
      },
      { threshold: umbral }
    );
    observador.observe(elemento);
    return () => observador.disconnect();
  }, [ref, umbral, unaVez]);

  return enVista;
};
