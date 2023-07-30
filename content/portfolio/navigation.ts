export interface INavItem {
  label: string;
  subLabel?: string;
  children?: Array<INavItem>;
  href?: string;
}

export const navbarTitle = "Matthew Bevan";
export const rainbowMeLink = "https://rainbow.me/mfbevan.eth";
export const twitterLink = "https://twitter.com/0xmfbevan";
export const githubLink = "https://github.com/mfbevan";
export const linkedInLink = "https://www.linkedin.com/in/mfbevan/";

export const navItems: Array<INavItem> = [
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Development Blog",
    href: "/blog",
  },
];
