// @ts-check
import React from 'react';
import { useWebSocket } from './useWebSocket';
import PriceCard from './PriceCard.jsx';
export default function App(){
  const { messages, status } = useWebSocket('ws://localhost:3000/ws');
  return (
    <main style={{maxWidth:640, margin:'40px auto', fontFamily:'system-ui'}}>
      <h1>Realtime Ticker <small style={{fontSize:14, fontWeight:'normal'}}>({status})</small></h1>
      {messages.slice(-20).reverse().map((m,i)=> <PriceCard key={i} sym={m.sym} price={m.price}/>) }
    </main>
  );
}
