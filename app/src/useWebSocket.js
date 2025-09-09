// @ts-check
import { useEffect, useRef, useState } from 'react';
export function useWebSocket(url) {
  const wsRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('connecting');
  useEffect(() => {
    let retry = 500;
    function connect() {
      const ws = new WebSocket(url);
      wsRef.current = ws;
      ws.onopen = () => setStatus('open');
      ws.onmessage = (e) => setMessages((m) => [...m.slice(-99), JSON.parse(e.data)]);
      ws.onclose = () => { setStatus('closed'); setTimeout(connect, Math.min(retry *= 1.5, 4000)); };
      ws.onerror = () => ws.close();
    }
    connect();
    return () => wsRef.current?.close();
  }, [url]);
  return { messages, status };
}
