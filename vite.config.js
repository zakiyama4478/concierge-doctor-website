import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 独自ドメイン(concierge-doctor.jp)でルート配信するため base は "/"
export default defineConfig({
  base: "/",
  plugins: [react()],
});
