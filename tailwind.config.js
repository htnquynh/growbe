module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        orange: "#F25822",
        "orange-100": "#F08922",
      },
      width: {
        570: "570px",
      },
      zIndex: {
        "-1": "-1",
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.1) 0px 10px 50px",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      60: ".6",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      175: "1.75",
      190: "1.90",
      200: "2",
    },
  },
  plugins: [],
};
