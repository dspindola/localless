import { css, cx } from "@/styled-system/css";

const bodyClass_dark = css({
  _dark: {
    bg: "primary",
    color: "white",
  },
});

const bodyClass_light = css({
  _light: {
    bg: "white",
    color: "primary",
  },
});

const bodyClass_anchors = css({
  "& > a": {
    _hover: {
      color: "secondary",
    },
  },
});

export const bodyCss = cx(bodyClass_dark, bodyClass_light, bodyClass_anchors);
