import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {useRouter} from 'next/router';

export default function Note({ title, description, _id, image: {asset: {url}} }) {
  const router = useRouter();
  const [postHovered, setPostHovered] = useState(false);

  return (
    <div
      className="max-w-sm relative bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer"
      onMouseEnter={() => setPostHovered(true)}
      onMouseLeave={() => setPostHovered(false)}
    >
      <a href="#" className="relative">
        <img
          className={`${
            postHovered && "opacity-70"
          } rounded-t-lg group transition`}
          src={url}
          alt="todo photo"
        />
      </a>
      <div
        className={`absolute flex items-center justify-center opacity-0 text-white top-0 transition-all duration-250 w-full z-[100] ${
          postHovered && "opacity-100 -top-10"
        }`}
        onClick={() => router.push(`/note/${_id}`)}

        style={{ height: "100%" }}
      >
        <ArrowRightIcon className="w-12 h-12" 
          />
      </div>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description.length > 20
            ? `${description.slice(0, 20)}...`
            : description}
        </p>
      </div>
    </div>
  );
}
