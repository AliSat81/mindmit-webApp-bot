import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import packageJson from './package.json';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    APP_HOMEPAGE: JSON.stringify(packageJson.homepage),
  },
})
