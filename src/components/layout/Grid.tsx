import { Orientation, Justify, PX, Gap } from '../enum';
import { LgSize, MdSize, XlSize } from '../enum/reponsive-sizes';

interface GridProps {
  children: React.ReactNode;
  justify?: Justify;
  px?: PX;
  orientation?: Orientation;
  gap: Gap;
}

export default function Grid(props: GridProps) {
  return <div className={`flex h-full w-full max-md:flex-col ${props.justify} ${props.px} ${props.orientation} ${props.gap} `}>{props.children}</div>;
}

interface GridChildProps {
  children?: React.ReactNode;
  mdSize?: MdSize;
  lgSize?: LgSize;
  xlSize?: XlSize;
  justify?: Justify;
  orientation?: Orientation;
  gap: Gap;
}

export function GridChild(props: GridChildProps) {
  return <div className={`flex w-full ${props.justify} ${props.mdSize} ${props.orientation} ${props.gap} max-md:flex-col max-md:text-center`}>{props.children}</div>;
}
