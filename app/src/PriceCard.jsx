// @ts-check
import React from 'react';
export default function PriceCard({ sym, price }) {
  return (
    <div style={{border:'1px solid #ddd', padding:12, borderRadius:8, marginBottom:8}}>
      <strong>{sym}</strong> — ${price.toFixed(2)}
    </div>
  );
}
