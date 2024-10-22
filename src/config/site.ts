export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Piotr Otta portfolio",
    description: "3D game like portoflio",
    // TODO: remove this later
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Websites",
            href: "/websites",
        },
        {
            label: "Games",
            href: "/games",
        },
        {
            label: "About Me",
            href: "/about",
        },
        {
            label: "Contact",
            href: "/contact",
        },
    ],
    links: {
        github: "https://github.com/PiotrOtta",
        // TODO: add kofi link
        kofi: "",
    },
};
