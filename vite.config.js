import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const publicDir = resolve(__dirname, './public')
const outDir = resolve(__dirname, './dist')

export default defineConfig({
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        blog: resolve(root, 'blog.html'),
        contactUs: resolve(root, 'contact_us.html'),
        aboutUs: resolve(root, 'about_us.html'),
        socialProject: resolve(root, 'social_project.html'),
        testimonials: resolve(root, 'testimonials.html')
      }
    }
  }
})
