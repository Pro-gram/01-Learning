// vite.config.js
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  // Add the following favicon option
  // Change the path to match the location of your custom favicon.svg
  // Set to false to disable favicon handling completely
  // https://vitejs.dev/config/#build-assetsinclude
  build: {
    assetsInclude: "favicon.svg",
  },
};