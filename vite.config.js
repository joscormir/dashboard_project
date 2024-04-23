import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import configDotenv from './configDotenv'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    'process.env': JSON.stringify(configDotenv),
  },
})
