import { PaletteColorOptions, ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  interface Palette {
    neutral?: PaletteColor & { darker?: string };
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions & { darker?: string };
  }

  interface SImplePaletteColorOptions {
    darker?: string;
  }
  interface PaletteColor {
    darker?: string;
  }
}
