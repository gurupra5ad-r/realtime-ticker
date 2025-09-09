// @ts-check
/** Return a random walk price */
export function nextPrice(prev){
  const drift = (Math.random()-0.5) * 0.8; // jitter
  return Math.max(1, prev + drift);
}
