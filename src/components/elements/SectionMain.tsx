import { PX, Gap } from '../enum';

interface SectionMainProps {
  children: React.ReactNode;
  px: PX;
  gap: Gap;
}

export default function SectionMain(props: SectionMainProps) {
  return <section className={`relative flex flex-col pt-20 ${props.px} ${props.gap}`}>{props.children}</section>;
}
