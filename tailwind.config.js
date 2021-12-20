module.exports = {
    purge: {
        content: ['./components/**/*'],
    },
    theme: {
        extend: {},
        fontSize: {
          xs: ".75rem",
          sm: ".875rem",
          base: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": "2.25rem",
          "5xl": "3rem",
          "6xl": "3.75rem",
        },
        fontFamily: {
          sans: ["Raleway", "Helvetica", "Arial", "Verdana", "sans-serif"],
        },
        fontWeight: {
          normal: 400,
          medium: 500,
          semibold:600,
          bold: 700,
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',
            blue: {
            50:  "#B4DCFF",
            100: "#96CDFF",
            200: "#59B0FF",
            300: "#1B93FF",
            400: "#0074DD",
            500: "#0054A0",
          },
          lightblue: {
            50:  "#FFFFFF",
            100: "#FBFCFD",
            200: "#EDEFF7",
            300: "#DFE3F1",
            400: "#D1D6EA",
            500: "#C3CAE4",
          },
          gold: {
            50:  "#FCF3E1",
            100: "#F9E9CA",
            200: "#F4D69C",
            300: "#EFC46E",
            400: "#EAB140",
            500: "#DE9C19",
          },
          gray: {
            50:  "#EDEDED",
            100: "#DDDDDD",
            200: "#BBBBBB",
            300: "#9A9A9A",
            400: "#797979",
            500: "#585858",
          },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
            },
        },
    },
    variants: {
        translate: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [],
};
