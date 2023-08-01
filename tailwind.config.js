/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#079211",
        white: "#fff",
        "light-gray": "#d1d5db",
        grey: "808080",
        "deep-gray": "#0a0a0f",
        "light-dark": "#313131",
        dark: "#101017",
        "deep-dark": "#050507",
      },
    },
  },
  plugins: [],
};
