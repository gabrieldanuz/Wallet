import { useTheme } from "styled-components";

const { COLORS } = useTheme();


interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
  icon: {
    color: string;
  };
};

export interface ButtonVariant {
  enabled: ButtonStyle;
  disable: ButtonStyle
};

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: COLORS.PRIMARY,
    },
    title: {
      color: COLORS.WHITE,
    },
    icon: {
      color: COLORS.WHITE,
    },
  },
  disable: {
    button: {
      backgroundColor: COLORS.PRIMARY,
    },
    title: {
      color: COLORS.WHITE,
    },
    icon: {
      color: COLORS.WHITE,
    },
  },
}
