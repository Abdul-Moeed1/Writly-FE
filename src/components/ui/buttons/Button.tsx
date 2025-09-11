export const Button = ({label , onClick}: {label: string, onClick: () => void}) => {
  return <button className="" onClick={onClick}>{label}</button>;
};
