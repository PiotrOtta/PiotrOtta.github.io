import { FC } from "react";
import { Image } from "@nextui-org/image";

export const ImageComp: FC<{ src: string; width?: number; alt?: string }> = ({
    src,
    width,
    alt,
}) => {
    return (
        <Image
            width={width ?? 200}
            alt={
                alt ??
                "Image without alternative text. Let me know that I forgot to fill it."
            }
            src={src}
        />
    );
};
