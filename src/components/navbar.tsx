import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, KoFiIcon } from "@/components/icons";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";
import { ImageComp } from "./imageComp";

export const Navbar = () => {
    const [isAnimating, setAnimation] = useState(false);
    const { theme, toggleTheme } = useTheme();
    let isLightTheme = theme.toString() === "light";

    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand className="max-w-fit gap-3">
                    <Link
                        className="flex items-center justify-start gap-1"
                        color="foreground"
                        href="/"
                    >
                        <ImageComp
                            src="/android-chrome-512x512.png"
                            alt=""
                            width={20}
                        />
                        <p className="font-bold text-inherit">Piotr Otta</p>
                    </Link>
                </NavbarBrand>
                <div className="ml-2 hidden justify-start gap-4 lg:flex">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <Link
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:font-medium data-[active=true]:text-primary",
                                    "rounded-lg",
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                </div>
            </NavbarContent>

            <NavbarContent
                className="hidden basis-1/5 sm:flex sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden gap-2 sm:flex">
                    <Link
                        isExternal
                        className="rounded-lg"
                        href={siteConfig.links.github}
                        title="GitHub"
                    >
                        <GithubIcon className="text-default-500" />
                    </Link>
                    <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Button
                        isExternal
                        as={Link}
                        onMouseEnter={() => setAnimation(true)}
                        onAnimationEnd={() => setAnimation(false)}
                        className={
                            (isAnimating ? "btnShine " : "") +
                            "text-sm font-normal text-default-600"
                        }
                        href={siteConfig.links.kofi}
                        endContent={
                            <KoFiIcon
                                fill={isLightTheme ? "#db2955" : "white"}
                                className="text-danger"
                            />
                        }
                        variant="bordered"
                    >
                        <span>
                            Support me on&nbsp;
                            <span
                                className={
                                    "font-bold " +
                                    (isLightTheme
                                        ? "text-primary"
                                        : "text-white")
                                }
                            >
                                Ko-fi
                            </span>
                        </span>
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
                <Link isExternal href={siteConfig.links.github}>
                    <GithubIcon className="text-default-500" />
                </Link>
                <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
                <Button
                    isExternal
                    as={Link}
                    isIconOnly
                    className="text-sm font-normal text-default-600"
                    href={siteConfig.links.kofi}
                    endContent={
                        <KoFiIcon
                            fill={isLightTheme ? "#db2955" : "white"}
                            className="text-danger"
                        />
                    }
                    variant="bordered"
                />
            </NavbarContent>
        </NextUINavbar>
    );
};
