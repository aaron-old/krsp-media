const midnightBlack = "#001717";
const darkChicken = "#BA8B49";
const lightChicken = "#EDD88F";
const ghostWhite = "#FAF8FD";

const theme = {
  colors: {
    midnightBlack,
    darkChicken,
    lightChicken,
    ghostWhite
  },
  fonts: {
    default: "1rem"
  },
  boxShadows: {
    level2: `0 3px 6px ${lightChicken}, 0 3px 6px ${midnightBlack}`,
    level3: `0 10px 20px ${lightChicken}, 0 6px 6px ${midnightBlack}`
  }
};

export default theme;
