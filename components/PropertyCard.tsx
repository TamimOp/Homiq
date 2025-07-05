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
      <div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="relative h-[180px] w-full flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-[15px] font-semibold line-clamp-2 min-h-[2.5rem]">{title}</h3>
          <p className="text-xs text-gray-500 line-clamp-2 min-h-[2rem] mt-1">{description}</p>

          {/* Fixed tags container with consistent height */}
          <div className="mt-3 mb-3 min-h-[2.5rem] flex flex-col justify-start">
            {/* First row - 3 tags */}
            <div className="flex gap-2 mb-1">
              {tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-black text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Second row - remaining tags or +count */}
            {tags.length > 3 && (
              <div className="flex gap-2">
                {tags.slice(3, 6).map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-black text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                  >
                    {tag}
                  </span>
                ))}
                {tags.length > 6 && (
                  <span className="bg-gray-200 text-gray-600 text-[10px] px-2 py-1 rounded-full flex-shrink-0">
                    +{tags.length - 6}
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="mt-auto flex justify-between items-center text-xs">
            <span className="text-[#4262FF] font-semibold">{price}</span>
            <span className="text-gray-400">for 1 night</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
