import { describe, it, expect } from 'vitest';
import { nextPrice } from '../prices.js';

describe('prices', ()=>{
  it('should move but stay positive', ()=>{
    const n = nextPrice(100);
    expect(n).toBeGreaterThan(0);
  })
});
