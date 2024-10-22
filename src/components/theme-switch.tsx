import { FC, useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import clsx from "clsx";

import { EThemes } from "@/hooks/use-theme";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

interface ThemeSwitchProps {
    className?: string;
    classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<
    ThemeSwitchProps & { theme: EThemes; toggleTheme: () => void }
> = ({ className, classNames, theme, toggleTheme }) => {
    const [isMounted, setIsMounted] = useState(false);

    const onChange = toggleTheme;

    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch({
        isSelected: theme.toString() === "light",
        onChange,
    });

    useEffect(() => {
        setIsMounted(true);
    }, [isMounted]);

    // Prevent Hydration Mismatch
    if (!isMounted) return <div className="h-6 w-6" />;

    return (
        <Component
            aria-label={isSelected ? "Enable dark theme" : "Enable light theme"}
            {...getBaseProps({
                className: clsx(
                    "px-px transition-opacity hover:opacity-80 cursor-pointer",
                    className,
                    classNames?.base,
                ),
            })}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <div
                {...getWrapperProps()}
                className={slots.wrapper({
                    class: clsx(
                        [
                            "h-auto w-auto",
                            "bg-transparent",
                            "rounded-lg",
                            "flex items-center justify-center",
                            "group-data-[selected=true]:bg-transparent",
                            "!text-default-500",
                            "pt-px",
                            "px-0",
                            "mx-0",
                        ],
                        classNames?.wrapper,
                    ),
                })}
            >
                {isSelected ? (
                    <MoonFilledIcon size={28} />
                ) : (
                    <SunFilledIcon size={28} />
                )}
            </div>
        </Component>
    );
};
