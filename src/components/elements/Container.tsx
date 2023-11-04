import { Orientation, Justify, PX, Align, Gap } from '../enum';
import { LgSize, MdSize, XlSize } from '../enum/reponsive-sizes';

interface ContainerProps {
  children: React.ReactNode;
  align?: Align;
  justify?: Justify;
  px?: PX;
  orientation?: Orientation;
  gap: Gap;
}

export default function Container(props: ContainerProps) {
  return <div className={`flex h-full w-full max-md:flex-col ${props.justify} ${props.align} ${props.px} ${props.orientation} ${props.gap} `}>{props.children}</div>;
}

interface ContainerChildProps {
  children?: React.ReactNode;
  mdSize?: MdSize;
  lgSize?: LgSize;
  xlSize?: XlSize;
  justify?: Justify;
  orientation?: Orientation;
  gap: Gap;
}

export function ContainerChild(props: ContainerChildProps) {
  return <div className={`flex w-full items-center ${props.justify} ${props.mdSize} ${props.orientation} ${props.gap} max-md:flex-col max-md:text-center`}>{props.children}</div>;
}
