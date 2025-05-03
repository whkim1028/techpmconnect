module.exports = {
  theme: {
    extend: {
      keyframes: {
        move1: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-40px)" },
        },
        move2: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(40px)" },
        },
        move3: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(60px)" },
        },
        move4: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-40px)" },
        },
      },
      animation: {
        move1: "move1 8s ease-in-out infinite",
        move2: "move2 10s ease-in-out infinite",
        move3: "move3 12s ease-in-out infinite",
        move4: "move4 9s ease-in-out infinite",
      },
    },
  },
};
