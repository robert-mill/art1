import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  ref?:React.Reference;
  children: React.ReactNode;
};

export default function Bounded({ as: Comp = "section", ref, className, children, ...restProps}: BoundedProps) {
  return (
    <Comp
      ref={ref}
      className={clsx(
        "px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
}
