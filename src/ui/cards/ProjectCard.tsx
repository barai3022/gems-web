"use client";

import Image from "next/image";

type ProjectCardProps = {
  totalDay: number;
  dayPassed: number;
  dayLeft: number;
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
};

const ProjectCard = ({
  dayPassed,
  dayLeft,
  totalDay,
  title,
  description,
  imageUrl,
  tags = [],
}: ProjectCardProps) => {
  return (
    <div className="group relative w-96 h-180 overflow-hidden rounded-2xl shadow-lg outline-1">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />


      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div>
          <h3 className="text-3xl font-semibold text-black text-shadow-2xs text-shadow-gray-50">{title}</h3>
        </div>
        <div>
          <div className="flex flex-row">
            <p className="w-1/3 text-gray-100  text-shadow-2xs text-shadow-gray-900">Schduled Days </p>
            <p className="w-2/3 text-8xl text-right text-amber-400 font-semibold">{totalDay}</p>
          </div>

          <div className="flex flex-row">
            <p className="w-1/3 text-gray-100 text-shadow-2xs text-shadow-gray-900">Days Passed </p>
            <p className="w-2/3 text-8xl text-right text-lime-400 font-semibold">{dayPassed}</p>
          </div>
          <div className="w-full h-1 bg-gray-300"></div>
          <div className="flex flex-row">
            <p className="w-1/3 text-gray-100 text-shadow-2xs text-shadow-gray-900">Days Left </p>
            <p className="w-2/3 text-8xl text-right text-blue-500 font-bold"> {dayLeft} </p>
          </div>


        </div>
        <div>
          {/* <p className="mt-1 text-sm text-gray-200 line-clamp-2">
            {description}
          </p> */}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
