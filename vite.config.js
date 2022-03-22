import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginMd2Vue from "vite-plugin-md2vue";
import path from 'path';


import serverConfig from './build/server.config.js'
import previewConfig from './build/preview.config.js'
import buildConfig from './build/build.config.js'

const srcPath = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  server: serverConfig,
  preview: previewConfig,
  build: buildConfig,
  base: './',
  plugins: [vue(), vitePluginMd2Vue()],
  resolve: {
    alias: [
      { find: '@', replacement: srcPath },
    ],
  }
})
