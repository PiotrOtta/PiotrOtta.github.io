import { useEffect, useState } from "react";

export enum EThemes {
    LIGHT = "light",
    DARK = "dark",
}

export const useTheme = (defaultTheme?: EThemes) => {
    const [theme, setTheme] = useState<EThemes>(() => {
        const storedTheme = localStorage.getItem("theme") as EThemes | null;

        return storedTheme || (defaultTheme ?? EThemes.LIGHT);
    });

    const _setTheme = (theme: EThemes) => {
        localStorage.setItem("theme", theme.toString());
        document.documentElement.classList.remove(
            EThemes.LIGHT.toString(),
            EThemes.DARK.toString(),
        );
        document.documentElement.classList.add(theme.toString());
        setTheme(theme);
    };

    const setLightTheme = () => _setTheme(EThemes.LIGHT);
    const setDarkTheme = () => _setTheme(EThemes.DARK);

    const toggleTheme = () => {
        console.log(theme);
        theme === EThemes.DARK ? setLightTheme() : setDarkTheme();
    };

    useEffect(() => {
        _setTheme(theme);
    });

    return { theme, setLightTheme, setDarkTheme, toggleTheme };
};
