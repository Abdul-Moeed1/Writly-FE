export const Input = ({
  value,
  label,
  error,
  onChange,
  type = "text",
  placeholder,
}: {
  value: string;
  label: string;
  error: string;
  onChange: (e: any) => void;
  type: string;
  placeholder?: string;
}) => {
  return (
    <div className="flex flex-col w-full gap-2 justify-start">
      <label className="text-sm font-normal ">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={` h-9  rounded-[5px] px-4 ring-0 py-2 outline-0 !bg-gray-100 ${
          error
            ? "border-red-500 focus:outline-0 border"
            : "focus:border-black focus:border"
        }`}
        placeholder={placeholder}
      ></input>
      {error && <div className="text-red-500 text-xs">{error}</div>}
    </div>
  );
};
