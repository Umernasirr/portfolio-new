import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values

export const Colors = {
  brand: {
    100: "#f7fafc",
    200: "#cfe7ff",
    400: "#5c82bf",
    600: "#146eb4",
    800: "#00205b",
    900: "#1a202c",
  },
  secondary: {
    100: "#f7fafc",
    200: "#3be8b0",
    400: "#56c1ab",
    600: "#01cd74",
    800: "#114611",
    900: "#1a202c",
  },
};

export const chakraTheme = extendTheme({
  colors: Colors,

  fonts: {
    heading: "Lato",
    body: "Lato",
  },
});
