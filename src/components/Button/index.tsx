type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  text: string;
};

export default function Button({
  text,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className ?? ""} px-8 py-2 cursor-pointer`}
    >
      {text}
    </button>
  );
}
