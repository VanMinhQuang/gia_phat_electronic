import { ColorValue } from "react-native";

const Colors = {
  primary: '#1976d2',
  primaryDark: '#004ba0',
  accent: '#ffb300',
  background: '#f5f5f5',
  surface: '#ffffff',
  text: '#212121',
  textSecondary: '#757575',
  error: '#d32f2f',
  success: '#388e3c',
  warning: '#fbc02d',
  white: '#ffffff',
  translucent: 'rgba(255, 255, 255, 0.8)',
};

const ColorGradient: {
  primary: [ColorValue, ColorValue];
  accent: [ColorValue, ColorValue];
  success: [ColorValue, ColorValue];
} = {
  primary: ['#ffffff', '#1976d2'],
  accent: ['#ffb300', '#ffa000'],
  success: ['#66bb6a', '#388e3c'],
};

export { Colors, ColorGradient };