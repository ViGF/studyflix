/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
            'main': "url(./public/background.png)"
        },
        fontFamily: {
            bebas: ['Bebas Neue', 'cursive'],
            info: ['Open Sans', 'sans-serife'],
        },
        dropShadow: {
            'text': '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }
      },
    },
    plugins: [],
}