/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,       // describe, it, expect をグローバルに使えるように
    environment: 'node', // または 'jsdom'（ブラウザをエミュレートする場合）
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
