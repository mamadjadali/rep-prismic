import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import AnimatedContent from "@/slices/Hero/AnimatedContent";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
    <AnimatedContent slice={slice}/>
    </Bounded>
  );
};

export default Hero;
