import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    digital: {
      100: "#E60032",
      200: "#1E50B5",
      300: "#11AC51",
    },
    logo: {
      twitter: "#1DA1F2",
      youtube: "#FF0000",
      gitlab: "#000000",
      github: "#24292f",
    },
  },
  sizes: {
    "9xl": "100rem",
    container: {
      "2xl": "1600px",
    },
  },
});
export default theme;
