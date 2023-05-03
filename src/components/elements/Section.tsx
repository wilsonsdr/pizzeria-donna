interface SectionProps {
  children: React.ReactNode;
}

export default function Section(props: SectionProps) {
  return (
    <section className="flex flex-col gap-36 max-md:gap-24">
      {props.children}
    </section>
  );
}
