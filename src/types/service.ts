export interface ServiceItem {
  label: string;
  description: string;
  pricing?: string;
  duration?: string;
  link?: {
    href: string;
    label: string;
  };
}

