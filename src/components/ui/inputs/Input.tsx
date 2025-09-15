export const Input = ({
  value,
  label,
  error,
  onChange,
  type = "text",
  onBlur,
  touched,
  placeholder,
}: {
  value: string;
  label: string;
  error: string | undefined;
  onChange: (e: any) => void;
  type: string;
  onBlur?: any;
  touched?: boolean;
  placeholder?: string;
}) => {
  return (
    <div className="flex flex-col w-full gap-2 justify-start">
      <label className="text-sm font-normal ">{label}</label>
      <input
        type={type}
        name="namee"
        value={value}
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
        className={` h-9  rounded-[5px] px-4 ring-0 py-2 outline-0 !bg-gray-100 ${
          error && touched
            ? "border-red-500 focus:outline-0 border"
            : "focus:border-black focus:border"
        }`}
        placeholder={placeholder}
      ></input>
      {touched && error && <div className="text-red-500 text-xs">{error}</div>}
    </div>
  );
};
