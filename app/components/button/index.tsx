interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function ButtonComponent({
  text = "",
  onClick = () => {},
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#4dad5b] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#45a052] transition-colors"
    >
      {text}
    </button>
  );
}
