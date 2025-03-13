import Image from "next/image";

interface OverviewCardProps {
  title: string;
  value: string;
  icon: string;
}

const OverviewCard = ({ title, value, icon }: OverviewCardProps) => {
  return (
    <div className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-sm mx-auto rounded-lg shadow-md p-6 flex flex-col lg:flex-row items-center md:justify-between gap-4">
      <Image src={icon} alt={title} width={60} height={60} />
      <div className="text-center lg:text-left">
        <p className="text-lg font-medium text-black">{title}</p>
        <p className="text-xl font-bold text-black">{value}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
