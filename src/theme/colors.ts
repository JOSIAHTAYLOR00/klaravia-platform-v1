interface ColorLayer {
  light: string;
  dark: string;
}

interface ThemeColors {
  base: ColorLayer;
  layer5: ColorLayer;
  layer10: ColorLayer;
  layer20: ColorLayer;
  layer30: ColorLayer;
  layer40: ColorLayer;
  layer50: ColorLayer;
  layer60: ColorLayer;
  layer70: ColorLayer;
  layer80: ColorLayer;
  layer90: ColorLayer;
  layer95: ColorLayer;
}

export const colors: ThemeColors = {
  base: {
    light: '#f0f3ff',
    dark: '#121212'
  },
  layer5: {
    light: 'rgba(0, 0, 0, 0.05)',
    dark: 'rgba(255, 255, 255, 0.05)'
  },
  layer10: {
    light: 'rgba(0, 0, 0, 0.1)',
    dark: 'rgba(255, 255, 255, 0.1)'
  },
  layer20: {
    light: 'rgba(0, 0, 0, 0.2)',
    dark: 'rgba(255, 255, 255, 0.2)'
  },
  layer30: {
    light: 'rgba(0, 0, 0, 0.3)',
    dark: 'rgba(255, 255, 255, 0.3)'
  },
  layer40: {
    light: 'rgba(0, 0, 0, 0.4)',
    dark: 'rgba(255, 255, 255, 0.4)'
  },
  layer50: {
    light: 'rgba(0, 0, 0, 0.5)',
    dark: 'rgba(255, 255, 255, 0.5)'
  },
  layer60: {
    light: 'rgba(0, 0, 0, 0.6)',
    dark: 'rgba(255, 255, 255, 0.6)'
  },
  layer70: {
    light: 'rgba(0, 0, 0, 0.7)',
    dark: 'rgba(255, 255, 255, 0.7)'
  },
  layer80: {
    light: 'rgba(0, 0, 0, 0.8)',
    dark: 'rgba(255, 255, 255, 0.8)'
  },
  layer90: {
    light: 'rgba(0, 0, 0, 0.9)',
    dark: 'rgba(255, 255, 255, 0.9)'
  },
  layer95: {
    light: 'rgba(0, 0, 0, 0.95)',
    dark: 'rgba(255, 255, 255, 0.95)'
  }
}