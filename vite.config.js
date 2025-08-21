
// vite.config.js - Enhanced configuration for Tailwind 4 + SEO
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // Custom plugin to generate sitemap during build
    {
      name: 'generate-sitemap',
      closeBundle() {
        // Import and run sitemap generator
        import('./sitemap-generator.js');
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        // Add any additional entry points if needed
      },
      output: {
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    // Enable source maps for better debugging (disable in production)
    sourcemap: false,
    // Optimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  // Define global constants
  define: {
    __SITE_URL__: JSON.stringify('https://suhtech.top'),
    __COMPANY_NAME__: JSON.stringify('SUH TECH'),
  },
  // Server configuration for development
  server: {
    port: 3000,
    host: true,
    open: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async'
    ]
  }
})
