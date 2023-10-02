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
        testimonials: resolve(root, 'testimonials.html'),
        cusco_all_tours: resolve(root, 'cusco_all_tours.html'),
        destinations: resolve(root, 'destinations.html'),
        '2': resolve(root, '2.html'),
        tour_detail: resolve(root, 'tour_detail.html'),
        terms_and_conditions: resolve(root, 'terms_and_conditions.html'),
        privacy_policy: resolve(root, 'privacy_policy.html'),
        cookies_policy: resolve(root, 'cookies_policy.html'),
        covid_19_travel_protocol: resolve(root, 'covid_19_travel_protocol.html'),
        blog_post: resolve(root, 'blog_post.html'),
        esnna: resolve(root, 'esnna.html'),
        claims_book: resolve(root, 'claims_book.html'),
      }
    }
  }
})
