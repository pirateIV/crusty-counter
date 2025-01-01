/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ["class"],
   content: [
      "./app/**/*.{jsx,tsx,mdx}",
      "./pages/**/*.{jsx,tsx,mdx}",
      "./partials/**/*.{jsx,tsx,mdx}",
      "./components/**/*.{jsx,tsx,mdx}",
   ],
   theme: {
      extend: {},
   },
   plugins: [],
};
