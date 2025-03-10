// Define as async function to use await
const defineConfig = async () => {
  let userConfig = undefined
  try {
    userConfig = await import('./v0-user-next.config')
  } catch (e) {
    // ignore error
  }
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export', // Enables static export
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
    experimental: {
      webpackBuildWorker: true,
      parallelServerBuildTraces: true,
      parallelServerCompiles: true,
    },
    // GitHub Pages specific configurations
// In your existing config, add these lines:
basePath: '/lusso-toyz-landing', // Your actual repo name
assetPrefix: '/lusso-toyz-landing/', // Your actual repo name with trailing slash
  }

  function mergeConfig(nextConfig, userConfig) {
    if (!userConfig) {
      return nextConfig
    }
    
    for (const key in userConfig) {
      if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
        nextConfig[key] = {
          ...nextConfig[key],
          ...userConfig[key],
        }
      } else {
        nextConfig[key] = userConfig[key]
      }
    }
    return nextConfig
  }

  return mergeConfig(nextConfig, userConfig?.default || userConfig)
}

// Export the config
export default defineConfig()