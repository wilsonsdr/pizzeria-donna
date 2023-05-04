import { PX, PY } from "../enum/padding";

interface SectionProps {
  children: React.ReactNode;
  px?: PX;
  py?: PY;
}

export default function Section(props: SectionProps) {
  return (
    <section
      className={`flex flex-col gap-36 pt-20 max-md:gap-24 ${props.px} ${props.py}`}
    >
      {props.children}
    </section>
  );
}
