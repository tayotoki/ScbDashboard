import { FC, HTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/lib';
import { ValueOf } from 'next/dist/shared/lib/constants';
import { Additional, Mode } from '@/shared/lib/classNames/classNames';

type HeaderType = 'h1' | 'h2' | 'h3';
type Variant = 'primary' | 'error';
type Size = 's' | 'm' | 'l' | 'xl';

const variantMap: Record<Variant, string> = {
  error: 'text-theme-cancel',
  primary: 'text-theme-text',
};

const sizeMap: Record<Size, string> = {
  s: 'text-s',
  m: 'text-m',
  l: 'text-l',
  xl: 'text-xl',
};

interface TextProps extends HTMLAttributes<ValueOf<HTMLHeadingElement & HTMLParagraphElement>> {
  className?: string;
  as?: HeaderType;
  title?: string;
  text?: string;
  variant?: Variant;
  bold?: boolean;
  size?: Size;
}

export const Text: FC<TextProps> = memo((props) => {
  const { className, as: Tag = 'h1', title, text, variant = 'primary', bold, size = 'm' } = props;

  const currVariant = variantMap[variant];
  const currSize = sizeMap[size];

  const additional: Additional = [className, currSize, currVariant];
  const mode: Mode = {
    'font-bold': bold,
  };

  if (title) {
    return <Tag className={classNames('font-roboto', additional, mode)}>{title}</Tag>;
  }

  return <p className={classNames('', additional, mode)}>{text}</p>;
});
