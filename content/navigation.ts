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
        label: "Bio & Employment History",
        subLabel: "Professional and Educational Background",
        href: "experience",
      },
      {
        label: "Skills",
        subLabel: "Programming & management skills",
        href: "skills",
      },
    ],
  },
  {
    label: "Projects",
    children: [
      {
        label: "Personal Projects",
        subLabel: "Coming soon...",
        href: "#",
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
