type Mode = Record<string, string | boolean | undefined>;
type Additional = Array<string | undefined>;

type classNameType = (className: string, additional: Additional, mode: Mode) => string;

export const classNames: classNameType = (className, additional, mods) => {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
