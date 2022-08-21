/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            black: "000000",
            white: "#ffffff",
            gray: "#E1E1E1",
            pink: "#EC3B83",
        },
    },
    plugins: [],
};
