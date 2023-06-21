/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      width: {
        90: "90%",
        45: "45%"
      },
      borderRadius: {
        DEFAULT: "4px" // Aplica a todos los elementos
      },
      fontSize: {
        "sm-90": "0.9rem" // Añade la nueva clase de tamaño de fuente
      },
      colors: {
        "dark-blue-button": "#217BCE",
        "cyan-text": "#217BCE",
        "yellow-label-text": "#FEBC14",
        "gray-paragraphs": "#4F4F4F",
        "yellow-button-weekly": "#FCBC11",
        "20%": "#6373F7",
        "60%": "#FCBC11",
        "80%": "#FEBD93",
        "100%": "#96DB76",
        "black-opaque-50%": "#00000080",
        inactive: "#FF6B6B"
      },
      height: {
        'max-content': 'max-content',
      },
    }
  },
  plugins: []
};
