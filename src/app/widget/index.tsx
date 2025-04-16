"use client";

import "@stakekit/widget/style.css";
import { SKApp, darkTheme } from "@stakekit/widget";
import { config } from "../../config";

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      theme={{
        ...darkTheme,
        font: {
          body: "var(--sk-font-soehne)",
        },
        borderRadius: {
          baseContract: {
            primaryButton: "6px",
            secondaryButton: "6px",
          },
        },
        color: {
          ...darkTheme.color,
          background: "#1A1A1A",
          modalBodyBackground: "#121415",
          selectValidatorMultiDefaultBackground: "#121415",
          positionsSectionBackgroundColor: "#121415",
          positionsSectionBorderColor: "#121415",

          connectKit: {
            ...darkTheme.color.connectKit,
            modalBackground: "#121415",
            profileForeground: "#121415",
          },

          primaryButtonBackground: "#1647DB",
          primaryButtonOutline: "#1647DB",
          primaryButtonHoverBackground: "#2155f2",
          primaryButtonHoverOutline: "#2155f2",
          primaryButtonActiveBackground: "#2155f2",
          primaryButtonActiveOutline: "#2155f2",
          primaryButtonActiveColor: "#FFFFFF",
          primaryButtonColor: "#FFFFFF",
          primaryButtonHoverColor: "#FFFFFF",

          disabledButtonBackground: "rgba(18, 18, 18, 1)",
          disabledButtonOutline: "rgba(18, 18, 18,1)",
          disabledButtonColor: "#FFFFFF",

          tabBorder: "#6de8ad",

          secondaryButtonBackground: "#FFFFFF0D",
          secondaryButtonOutline: "#FFFFFF0D",

          secondaryButtonActiveBackground: "#ffffff1a",
          secondaryButtonActiveOutline: "#ffffff1a",
          secondaryButtonActiveColor: "#EEF0F2",

          secondaryButtonHoverBackground: "#ffffff1a",
          secondaryButtonHoverOutline: "#ffffff1a",
          secondaryButtonHoverColor: "#EEF0F2",

          stakeSectionBackground: "#FFFFFF0D",
          backgroundMuted: "#FFFFFF0D",
          tokenSelectBackground: "#FFFFFF0D",
          positionsSectionDividerColor: "#FFFFFF0D",
          tokenSelectHoverBackground: "#ffffff1a",

          skeletonLoaderBase: "#FFFFFF0D",
          skeletonLoaderHighlight: "#2B2B2B",
          dropdownBackground: "#121415",
          warningBoxBackground: "#FFFFFF0D",
        },
      }}
    />
  );
};
