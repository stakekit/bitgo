import { globalStyle } from "@vanilla-extract/css";
import { maxMediaQuery } from "./tokens/breakpoints";
import { colors } from "./tokens/colors";
import { spaces } from "./tokens/space";

globalStyle("html, body", {
  margin: 0,
});

globalStyle("html", {
  background: colors.background,
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("[data-rk='widget-container']", {
  borderRadius: "20px",
  overflow: "visible",
  position: "relative",
  zIndex: "1",
});

globalStyle("[data-rk='stakekit']", {
  "@media": {
    [maxMediaQuery("tablet")]: {
      padding: "0 8px",
    },
  },
});

globalStyle("div[data-rk='stake-token-section']", {
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colors.border,
});

globalStyle(
  "div[data-rk='stake-token-section'] > div:first-child > div > button",
  {
    background: colors.buttonGray,
  }
);

globalStyle(
  "div[data-rk='stake-token-section'] > div:first-child > div > button p",
  {
    fontWeight: "500",
  }
);

globalStyle("button[data-rk='stake-token-section-max-button']", {
  background: colors.buttonGray,
});

globalStyle("button[data-rk='stake-token-section-max-button'] p", {
  fontWeight: "500",
});

globalStyle("div[data-rk='stake-yield-section']", {
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colors.border,
});

globalStyle(
  "div[data-rk='stake-yield-section'] > div:first-child > div > button",
  {
    background: colors.buttonGray,
  }
);

globalStyle("div[data-rk='widget-container'] > *", {
  zIndex: 1,
});

globalStyle("div[data-rk='chain-modal-container']", {
  borderRadius: "6px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colors.border,
  background: colors.stakeSectionBackground,
});

globalStyle("div[data-rk='account-modal-container']", {
  borderRadius: "6px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colors.border,
  background: colors.stakeSectionBackground,
});

globalStyle("div[data-rk='tabs-section'] + div", {
  display: "none",
});

globalStyle("div[data-rk='tabs-section'] div > div:nth-child(1)", {
  paddingTop: "5px",
  paddingBottom: "5px",
});

globalStyle(
  "div[data-rk='tabs-section'] div > div:nth-child(1) > p[data-state='selected']",
  {
    color: colors.black,
  }
);

globalStyle("div[data-rk='tabs-section'] div > div:nth-child(2)", {
  display: "none",
});

globalStyle("div:has(> div[data-rk='tabs-section'])", {
  backgroundColor: colors.buttonGray,
  marginLeft: spaces["4"],
  marginRight: spaces["4"],
  borderRadius: "8px",
  marginTop: "10px",
});
