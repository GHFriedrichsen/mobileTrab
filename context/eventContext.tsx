import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Event } from '../types/event';
import { DADOS_EVENTOS } from '../mocks/event';


export type ItemCompra = Event & { instanceId: number };

interface EventosContextData {
    eventos: Event[]; 
    carrinho: ItemCompra[]; 
    bilhetes: ItemCompra[]; 
    adicionarAoCarrinho: (evento: Event) => void;
    removerDoCarrinho: (instanceId: number) => void;
    finalizarCompra: () => void;
}

const EventosContext = createContext<EventosContextData>({} as EventosContextData);

export function EventosProvider({ children }: { children: ReactNode }) {
    const [eventos] = useState<Event[]>(DADOS_EVENTOS);
    const [carrinho, setCarrinho] = useState<ItemCompra[]>([]);
    const [bilhetes, setBilhetes] = useState<ItemCompra[]>([]);

  
    function adicionarAoCarrinho(evento: Event) {
        const novoItem: ItemCompra = {
            ...evento,
            instanceId: Date.now() + Math.random(), 
        };
        setCarrinho([...carrinho, novoItem]);
    }

    function removerDoCarrinho(instanceId: number) {
        setCarrinho(carrinho.filter(item => item.instanceId !== instanceId));
    }
    //dif
    function finalizarCompra() {
        setBilhetes([...bilhetes, ...carrinho]);
        setCarrinho([]);
    }

    return (
        <EventosContext.Provider value={{ eventos, carrinho, bilhetes, adicionarAoCarrinho, removerDoCarrinho, finalizarCompra }}>
            {children}
        </EventosContext.Provider>
    );
}

export function useEventos() {
    return useContext(EventosContext);
}