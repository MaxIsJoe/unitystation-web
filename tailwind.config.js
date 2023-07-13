/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
        "./pages/**/*.tsx",
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./components/**/*.tsx"
    ],
    important: true, // Active dark mode on class basis
    darkMode: "class", i18n: {
        locales: ["en-US"], defaultLocale: "en-US",
    },
    theme: {
        extend: {
            container: {
                center: true,
            },
            backgroundImage: {
                "layer1" : "url('../public/background/layer1.png')",
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"], borderColor: ["checked"], inset: ["checked"], zIndex: ["hover", "active"],
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
    future: {
        purgeLayersByDefault: true,
    },
};

