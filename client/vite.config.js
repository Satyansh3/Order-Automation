import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/findToken': {
        target: 'https://your_business_account.eversign.com/oauth/token',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/findToken/, ''),
      },
    }
  },
  plugins:[EnvironmentPlugin('all', { prefix: 'VITE_' }),, react()],
})
