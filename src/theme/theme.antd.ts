import { ThemeConfig } from "antd";

type PageModeValueType = "DARK" | "LIGHT";

const PAGE_MODE_NAME = "ThemeMode";
export const constGetThemeMode = () => {
  return localStorage.getItem(PAGE_MODE_NAME);
};
export const constSetThemeMode = (mode: PageModeValueType) => {
  localStorage.setItem(PAGE_MODE_NAME, mode);
};
export const CommonTheme: ThemeConfig = {
  token: {
    fontFamily: "Noto Sans KR, sans- serif",
  },
};
export function CustomTheme(): ThemeConfig {
  const pageMode = constGetThemeMode() || "LIGHT";
  if (pageMode === "DARK") {
    return {
      ...CommonTheme,
      token: {
        ...CommonTheme.token,
        colorPrimary: "#FCBB12",
        colorSuccess: "#0ECB81",
        colorSuccessBg: "#DFFFE4",
        colorError: "#FF2541",
        colorErrorBg: "#FFE5E6",
        colorBgBase: "#ffffff",
        colorTextDescription: "#747474",
        colorText: "#FFFFFF",
        colorSplit: "#D9D9D9",
      },
      components: {
        ...CommonTheme.components,
      },
    };
  } else {
    return {
      ...CommonTheme,
      token: {
        ...CommonTheme.token,
        colorPrimary: "#FCBB12",
        colorSuccess: "#0ECB81",
        colorSuccessBg: "#DFFFE4",
        colorError: "#FF2541",
        colorErrorBg: "#FFE5E6",
        colorBgBase: "#ffffff",
        colorTextDescription: "#747474",
        colorText: "#FFFFFF",
        colorSplit: "#D9D9D9",
      },
      components: {
        ...CommonTheme.components,
      },
    };
  }
}
