import Loader from "../loader";

interface Props {
  url?: string;
  name: string;
  onClick: () => void;
}

export default function CardInfo({ url = "", name = "", onClick }: Props) {
  return (
    <div onClick={onClick} className="cursor-pointer bg-white shadow-lg rounded-xl p-4 flex flex-col items-center hover:scale-105 transition-transform">
      {url === "" ? (
        <div className="w-20 h-20 relative"><Loader /></div>
      ) : (
        <img src={url} alt={name} className="w-20 h-20 mb-2" />
      )}
      <p className="capitalize font-semibold text-gray-800">{name}</p>
    </div>
  );
}
