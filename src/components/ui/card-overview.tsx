import Image from "next/image";

interface OverviewCardProps {
  title: string;
  value: string;
  icon: string;
}

const OverviewCard = ({ title, value, icon }: OverviewCardProps) => {
  return (
    <div className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-sm mx-auto rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
      {/* Ikon */}
      <Image src={icon} alt={title} width={50} height={50} className="w-12 h-12 sm:w-16 sm:h-16" />

      {/* Teks */}
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-800">{title}</p>
        <p className="text-2xl font-bold text-black">{value}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
