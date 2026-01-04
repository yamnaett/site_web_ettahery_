/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0066CC',
                secondary: '#F9F9F9',
                accent: '#47A3F3', // lighter blue
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
