import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.config.js'

export default defineConfig(async () => {
  const optionalPlugins = [];
  const loadPlugin = async (moduleName) => {
    try {
      const mod = await import(moduleName);
      return mod.default ?? mod;
    } catch {
      console.warn(`[vite] Optional Tailwind plugin "${moduleName}" not found. Skipping.`);
      return null;
    }
  };

  const formsPlugin = await loadPlugin('@tailwindcss/forms');
  if (formsPlugin) optionalPlugins.push(formsPlugin);

  const containerPlugin = await loadPlugin('@tailwindcss/container-queries');
  if (containerPlugin) optionalPlugins.push(containerPlugin);

  const enhancedTailwindConfig = {
    ...tailwindConfig,
    plugins: [...(tailwindConfig.plugins ?? []), ...optionalPlugins],
  };

  return {
    plugins: [
      react(),
    ],
    css: {
      postcss: {
        plugins: [
          tailwindcss({ config: enhancedTailwindConfig }),
          autoprefixer(),
        ],
      },
    },
    define: {
      'process.env_VITE_backend': JSON.stringify(process.env.VITE_backend),
      'process.env_VITE_frontend': JSON.stringify(process.env.VITE_frontend),
    }
  };
})
