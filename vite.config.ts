import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite"; // <-- Import loadEnv
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // <-- Wrap export in a function to access mode
  // Load env file based on the mode (development, production)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // <-- Return the config object
    plugins: [react()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 3000,
      proxy: {
        // Proxy requests starting with /api/v1
        "/api/v1": {
          target: "https://api.api-ninjas.com", // *** CHANGED: API Ninjas base URL ***
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""), // Removes /api, keeps /v1/*
          configure: (proxy, options) => {
            // *** ADDED: Add the API key header from .env ***
            proxy.on("proxyReq", (proxyReq, req, res) => {
              proxyReq.setHeader("X-Api-Key", env.VITE_API_NINJAS_KEY);
              console.log(
                "Proxying request to:",
                options.target + proxyReq.path
              ); // Optional: for debugging
              console.log(
                "With API Key:",
                env.VITE_API_NINJAS_KEY ? "Yes" : "No (Check .env)"
              ); // Optional: for debugging
            });
            // Optional: Log errors during proxying
            proxy.on("error", (err, req, res) => {
              console.error("Proxy error:", err);
              if (!res.headersSent) {
                // Ensure headers aren't already sent
                res.writeHead(500, { "Content-Type": "text/plain" });
              }
              res.end("Proxy Error: " + err.message);
            });
          },
        },
      },
    },
    build: {
      outDir: "dist",
      sourcemap: true,
    },
  };
});
