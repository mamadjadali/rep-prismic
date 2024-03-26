// src/components/ButtonLink.tsx

import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({
                                       className,
                                       ...restProps
                                   }: PrismicNextLinkProps) {
    return (
        <PrismicNextLink
            className={clsx(
                "relative inline-flex h-fit w-fit rounded-full border border-gray-100/20 bg-gray-200/10 px-4 py-2 text-wihte outline-none ring-red-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-red-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-red-200/40 hover:text-red-300 after:hover:bg-opacity-15 focus:ring-2",
                className,
            )}
            {...restProps}
        />
    );
}
