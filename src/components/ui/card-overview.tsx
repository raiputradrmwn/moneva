import Image from "next/image";

interface OverviewCardProps {
  title: string;
  value: string;
  icon: string;
}

const OverviewCard = ({ title, value, icon }: OverviewCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-2">
      <Image src={icon} alt={title} width={40} height={40} />
      <p className="text-sm font-medium text-black">{title}</p>
      <p className="text-lg font-bold text-black">{value}</p>
    </div>
  );
};

export default OverviewCard;
