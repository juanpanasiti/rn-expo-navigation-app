/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './presentation/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                primary: '#49129C',
                secondary: {
                    DEFAULT: '#B40086',
                    100: '#F5D9F1',
                    200: '#E9B3D9',
                    300: '#DC8DBF',
                    400: '#CF66A6',
                    500: '#C3408D',
                    600: '#B40086',
                    700: '#9E0060',
                    800: '#7A0040',
                    900: '#560020',
                },
                tertiary: {
                    DEFAULT: '#FFD700',
                    100: '#FFF6D1',
                    200: '#FFEDA3',
                    300: '#FFE475',
                    400: '#FFDB47',
                    500: '#FFD700',
                    600: '#CCB600',
                    700: '#998500',
                    800: '#665400',
                    900: '#332A00',
                },
            },
            fontFamily: {
                'work-black': ['WorkSans-Black', 'sans-serif'],
                'work-light': ['WorkSans-Light', 'sans-serif'],
                'work-medium': ['WorkSans-Medium', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
