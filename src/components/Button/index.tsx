import React, { ReactNode } from 'react';

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  text: string;
  icon?: ReactNode;
};

export default function Button({
  text,
  className,
  onClick,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className ?? ""} px-8 py-2 cursor-pointer flex items-center justify-center gap-2`}
    >
      {icon}
      {text}
    </button>
  );
}