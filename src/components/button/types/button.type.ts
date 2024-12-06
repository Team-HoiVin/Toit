export type ButtonThemeType =
  | 'container-primary'
  | 'container-danger'
  | 'outline-primary'
  | 'ghost-primary'
  | 'ghost-default';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'small';
  shape?: 'square' | 'round';
  theme?: ButtonThemeType;
  startIcon?: string;
  endIcon?: string;
  isLoading?: boolean;
}
