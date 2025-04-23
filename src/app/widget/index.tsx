"use client";

import "@stakekit/widget/style.css";
import { SKApp, lightTheme } from "@stakekit/widget";
import { config } from "../../config";
import { colors } from "@/styles/tokens/colors";

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      theme={{
        ...lightTheme,
        font: {
          body: "var(--sk-font-soehne)",
        },
        borderRadius: {
          baseContract: {
            primaryButton: "6px",
            secondaryButton: "6px",
          },
        },
        fontWeight: {
          modalHeading: "500",
        },
        color: {
          ...lightTheme.color,
          connectKit: {
            modalText: colors.modalText,
          },
          text: colors.text,
          textMuted: colors.textMuted,
          stakeSectionBackground: colors.stakeSectionBackground,
        },
      }}
    />
  );
};
