/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        sunny: "url('assets/images/sunny.jpg')",
      },
    },
  },
  plugins: [],
};
