export const Button = ({
  label,
  onClick,
  className,
  type = "button",
}: {
  label: string;
  onClick: () => void;
  className?: string;
  type?: "submit" | "button";
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-full bg-gray-900 hover:bg-gray-950 text-white cursor-pointer ${className}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};
