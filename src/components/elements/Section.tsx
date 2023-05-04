import { PX, PY, Gap } from "../enum/";

interface SectionProps {
  children: React.ReactNode;
  px?: PX;
  py?: PY;
  gap?: Gap;
}

export default function Section(props: SectionProps) {
  return (
    <section
      className={`flex flex-col pt-20 max-md:gap-24 ${props.px} ${props.py} ${props.gap}`}
    >
      {props.children}
    </section>
  );
}
