import { describe, it, expect } from 'vitest'
import { add, multiply } from '../src/math'

describe('math functions', () => {
    it('adds two numbers', () => {
        expect(add(2, 3)).toBe(5)
    })

    it('multiplies two numbers', () => {
        expect(multiply(4, 5)).toBe(20)
    })
})
