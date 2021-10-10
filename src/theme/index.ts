const theme = {
  colors: {
    lightGray: '#EBEBEB',
    greenYellow: '#B5C401',
    white: '#FFF',
    silverWhite: '#868686',
    black: '#000000',
    gray: '#707070',
    backgroundGray: '#F7F7F7',
    borderGray: '#DDDDDD',
    smoothGray: '#9D9D9D',
    ghostGray: '#C1C1C1',
    almostGray: '#ADC0C4',
    blue: '#0000ff',
    red: '#ff0000',
  },
  fontSizes: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xg: 20,
    xl: 24,
    xxg: 28,
    xxl: 30,
    lxs: 34,
    hg: 40,
    hl: 44,
  },
  margins: {
    baseMargin: 10,
  },
  paddings: {
    basePadding: 10,
  },
};

export default function useTheme() {
  return theme;
}
