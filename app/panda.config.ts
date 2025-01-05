import { defineConfig } from '@pandacss/dev';

const tokens = {
    colors: {
        primary: { value: '#1F1F1F' },
        secondary: { value: '#5F5DFD' },
        white: { value: '#FFFFFF' },
        contrast: { value: '#36343D' },
    },
    fonts: {
        body: { value: 'system-ui, sans-serif' },
    },
};

export default defineConfig({
    conditions: {
        extend: {
            dark: '.dark &, [data-theme="dark"] &, [data-color-mode=dark] &',
            light: '.light &, [data-theme="light"] &, [data-color-mode=light] &',
        },
    },
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: { tokens },
    },

    // The output directory for your css system
    outdir: 'styled-system',
});
