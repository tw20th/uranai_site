/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // 新しいApp Routerに対応
    './src/components/**/*.{js,ts,jsx,tsx}', // 共通コンポーネント用
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
