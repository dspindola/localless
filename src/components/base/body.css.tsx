import { css, cx } from "@/styled-system/css";

const _dark = css({
  _dark: {
    bg: "primary",
    color: "white",
  },
});

const _light = css({
  _light: {
    bg: "white",
    color: "primary",
  },
});

// TODO: define this behavior using global styles
const any_$anchor = css({
  "& > a": {
    _hover: {
      color: "secondary",
    },
  },
});

export const bodyCss = cx(_dark, _light, any_$anchor);
