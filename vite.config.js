// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: "dist", // Se till att byggmappen är korrekt
//   },
//   server: {
//     fs: {
//       strict: false, // Se till att filsystemet är tillåtet att nå din kod
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Bygg i dist-mappen
  },
});
