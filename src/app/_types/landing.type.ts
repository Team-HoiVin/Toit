export interface LandingFeature extends React.LiHTMLAttributes<HTMLLIElement> {
  image: {
    src: string;
    alt: string;
  };
  icon: {
    src: string;
    alt: string;
  };
  description: string;
  reverse?: boolean;
  imageBottom?: boolean;
}
