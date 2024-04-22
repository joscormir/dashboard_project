import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import configDotenv from './configDotenv';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': JSON.stringify(configDotenv)
  }
});

