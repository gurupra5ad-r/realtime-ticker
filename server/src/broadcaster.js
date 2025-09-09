// @ts-check
import { WebSocketServer } from 'ws';
import { nextPrice } from './prices.js';

export function startWSS(server){
  const wss = new WebSocketServer({ noServer: true });
  const symbols = ['AAPL','GOOG','MSFT','TSLA'];
  const state = Object.fromEntries(symbols.map(s=>[s, 100 + Math.random()*50]));

  function tick(){
    for(const s of symbols) state[s] = nextPrice(state[s]);
    const msg = JSON.stringify(Object.entries(state).map(([sym, price])=>({sym, price}))[(Math.random()*symbols.length)|0]);
    for(const client of wss.clients){ if(client.readyState===1){ try{ client.send(msg); } catch{} } }
    setTimeout(tick, 250);
  }
  tick();

  server.on('upgrade', (req, socket, head)=>{
    if(req.url !== '/ws') return socket.destroy();
    wss.handleUpgrade(req, socket, head, (ws)=>{ wss.emit('connection', ws, req); });
  });
}
