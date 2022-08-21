export interface INavItem {
  label: string;
  subLabel?: string;
  children?: Array<INavItem>;
  href?: string;
}

export const navbarTitle = "Matthew Bevan";
export const rainbowMeLink = "https://rainbow.me/mfbevan.eth";
export const twitterLink = "https://twitter.com/mfbevan";
export const githubLink = "https://github.com/mfbevan";
export const linkedInLink = "https://www.linkedin.com/in/mfbevan/"

export const navItems: Array<INavItem> = [
  {
    label: "Experience",
    children: [
      {
        label: "Bio & Employment History",
        subLabel: "Professional & Educational Background",
        href: "/experience",
      },
      {
        label: "Skills",
        subLabel: "Programming & Management Skills",
        href: "/skills",
      },
    ],
  },
  {
    label: "Projects",
    children: [
      {
        label: "Personal Projects",
        subLabel: "Making and breaking things",
        href: "/projects",
      },
    ],
  },
  {
    label: "Blog",
    children: [
      {
        label: "Development Blog",
        subLabel: "Sharing thoughts & things",
        href: "/blog"
      },
    ],
  },
];
