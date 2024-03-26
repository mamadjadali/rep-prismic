import { Content } from "@prismicio/client";
import {PrismicRichText, PrismicText, SliceComponentProps} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import StarBackground from "@/slices/Integrations/StarBackground";
import Image from "next/image";
import background from "./background.jpg";
import React from "react";
import { SiWireguard, SiFortinet, SiMikrotik, SiDell, SiCisco, SiVmware } from "react-icons/si";

import StylizedLogoMark from "@/slices/Integrations/StylizedLogoMark";
import clsx from "clsx";
import AnimatedContent from "@/slices/Integrations/AnimatedContent";

/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
  return (
    <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="relative overflow-hidden"
    >
      <Image
          src={background}
          alt=""
          fill
          className="object-cover"
          quality={95}
      />
      <StarBackground/>
      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h2>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>
        <AnimatedContent slice={slice}/>
      </div>
    </Bounded>
  );
};

export default Integrations;
