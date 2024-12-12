export interface LandingFeature {
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
  isFirst?: boolean;
}
