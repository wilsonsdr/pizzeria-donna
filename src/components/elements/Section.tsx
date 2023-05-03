import { JustifyFlex, Orientation, Gap } from "../enum";
import { LgSize, MdSize, XlSize } from "../enum/reponsive-sizes";

interface SectionProps {
  children?: React.ReactNode;
  mdSize?: MdSize;
  lgSize?: LgSize;
  xlSize?: XlSize;
  justifyFlex?: JustifyFlex;
  orientation?: Orientation;
  gap?: Gap;
}

export function SectionMain({ children, ...props }: SectionProps) {
  return (
    <section
      className={`w-full flex flex-col justify-center items-center py-20 px-6 gap-4 ${props.orientation} ${props.gap}`}
    >
      {children}
    </section>
  );
}
