import { globalStyle } from "@vanilla-extract/css";
import { maxMediaQuery } from "./tokens/breakpoints";

globalStyle("[data-rk='stakekit']", {
  "@media": {
    [maxMediaQuery("tablet")]: {
      padding: "0 8px",
    },
  },
});
