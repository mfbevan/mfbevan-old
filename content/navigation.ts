export interface INavItem {
  label: string;
  subLabel?: string;
  children?: Array<INavItem>;
  href?: string;
}

export const navbarTitle = "Matthew Bevan";

export const socials = {
  twitter: "mfbevan",
  linkedIn: "mfbevan",
  github: "mfbevan",
};

export const navItems: Array<INavItem> = [
  {
    label: "Experience",
    children: [
      {
        label: "Experience",
        subLabel: "Professional, educational and personal experience",
        href: "resume",
      },
    ],
  },
  {
    label: "Blog",
    children: [
      {
        label: "Development Blog",
        subLabel: "Coming soon...",
        href: "#",
      },
    ],
  },
];
