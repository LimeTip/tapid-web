type SectionHeadingProps = {
  title: string;
  children: React.ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
};

export default function SectionHeading({ title, children, align = "left", inverse = false }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className={`text-4xl font-semibold leading-[1.06] tracking-[-0.05em] sm:text-5xl md:text-6xl ${inverse ? "text-white" : "text-white"}`}>
        {title}
      </h2>
      <div className={`mt-7 text-lg leading-relaxed sm:text-xl ${inverse ? "text-neutral-300" : "text-neutral-300"}`}>{children}</div>
    </div>
  );
}
