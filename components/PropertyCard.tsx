import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  tags: string[];
}

export default function PropertyCard({
  id,
  title,
  description,
  image,
  price,
  tags,
}: PropertyCardProps) {
  return (
    <Link href={`/property/${id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
        <div className="relative h-[180px] w-full">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <h3 className="text-[15px] font-semibold">{title}</h3>
          <p className="text-xs text-gray-500">{description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-black text-white text-[10px] px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-3 flex justify-between items-center text-xs">
            <span className="text-[#4262FF] font-semibold">{price}</span>
            <span className="text-gray-400">for 1 night</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
