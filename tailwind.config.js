/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            black: "000000",
            white: "#ffffff",
            gray: "#CCCCCC",
            pink: "#EC3B83",
        },
    },
    plugins: [],
};
