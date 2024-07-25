import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/findToken': {
        target: 'https://satyanshsharma.eversign.com/oauth/token',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/findToken/, ''),
      }
    }
  },
  plugins: [react()],
})