import { PX, Gap } from '../enum';

interface ContainerProps {
  children: React.ReactNode;
  px: PX;
  gap: Gap;
}

export default function Container(props: ContainerProps) {
  return <section className={`relative flex flex-col pt-20 ${props.px} ${props.gap}`}>{props.children}</section>;
}
