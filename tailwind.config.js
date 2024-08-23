/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "neutral-light": {
                    100: "#FEFEFE",
                    200: "#F5F6F8",
                    300: "#E1E0E5",
                    400: "#666666",
                    500: "#C8C7CB",
                    600: "#AFAEB2",
                    700: "#7D7D7F",
                    800: "#646466",
                    900: "#323233"
                },
                "base": {
                    100: "#2C7EF8",
                    200: "#075CD9"
                },
                "status": {
                    0: "#E63946",
                    1: "#90F677"
                }
            },
            fontFamily: {
                "YekanBakhSemibold": "YekanBakh Semibold",
                "YekanBakhBold": "YekanBakh Bold",
                "YekanBakhMedium": "YekanBakh Medium",
                "YekanBakhRegular": "YekanBakh Regular",

                "AbarBold": "Abar Bold"
            }
        },
    },
    plugins: [],
}

