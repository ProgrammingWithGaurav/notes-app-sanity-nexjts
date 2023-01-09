import { ArrowRightIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from "next/router";
import { client } from "../client";
import { useStateContext } from "../pages/context/NoteContext";
import {
  BookmarkIcon as ActiveBookMarkIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export default function Note({
  title,
  description,
  _id,
  category,
  image: {
    asset: { url },
  },
  bookmark,
}) {
  const router = useRouter();
  const { notes, setNotes ,loading, setLoading} = useStateContext();
  const [postHovered, setPostHovered] = useState(false);
  const [isBookmark, setIsBookmark] = useState(bookmark);

  
  const deleteNote = () => {
    client.delete(_id).then(() => {
      window.location.reload();
    }).catch(e => console.log(e));
  };

  const bookmarkNote = () => {
    setLoading(true);
      client
        .patch(_id) // Document ID to patch
        .set({ bookmark: !bookmark }) // Shallow merge
        .commit() // Perform the patch and return a promise
        .then((updatedNote) => {
          window.location.reload();
        })
        .catch((err) => {
          console.error("Oh no, the update failed: ", err.message);
        });
  };

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
        className={`items-center mx-2 p-1 justify-between absolute flex top-0 left-0 text-sm bg-indigo-600 opacity-0 transition rounded-2xl text-white w-full ${
          postHovered && "opacity-80"
        }`}
      >
        <span>{category}</span>
      </div>

      <div
        className={`absolute flex items-center justify-center opacity-0 text-white top-0 transition-all duration-250 w-full z-[100] ${
          postHovered && "opacity-100 -top-10"
        }`}
        onClick={() => router.push(`/note/${_id}`)}
        style={{ height: "100%" }}
      >
        <ArrowRightIcon className="w-12 h-12" />
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

        <div className="flex items-center justify-between">
          {isBookmark ? (
            <ActiveBookMarkIcon
              className="w-6 h-6 text-gray-600"
              onClick={bookmarkNote}
            />
          ) : (
            <BookmarkIcon className="w-6 h-6" onClick={bookmarkNote} />
          )}
          <TrashIcon
            className="w-6 h-6 text-red-400 hover:opacity-80"
            onClick={deleteNote}
          />
        </div>
      </div>
    </div>
  );
}
