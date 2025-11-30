/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // 偵測 src 資料夾 (標準結構)
    "./src/**/*.{js,ts,jsx,tsx}",
    // 以防你的檔案直接放在根目錄，多加這一行保險
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}