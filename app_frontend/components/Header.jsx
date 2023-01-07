import { useState } from "react";
import Link from "next/link";
import {MagnifyingGlassIcon, PlusIcon} from '@heroicons/react/24/solid';
import { useRouter } from "next/router";
import { useStateContext } from "../pages/context/NoteContext";

const Header = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const {setSearchString}  = useStateContext();

  const handleSearch = () => {
    router.push('/');
    setSearchString(input)
    setInput('');
  }
  return (
    <div className="flex justify-between items-center sm:w-full lg:w-[95%] shadow lg:mx-auto px-3 py-4 rounded">
        <Link href="/" className='flex items-center gap-2'>
      <h4 className="text-2xl font-bold text-primary">NotesApp</h4>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3025/3025547.png"
            className="w-10 h-10 opacity-85 hover:opacity-90 transition cursor-pointer"
          />
        </Link>

      <div>

        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           
           <MagnifyingGlassIcon
              className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
          </div>
          <input
            type="search"
            id="default-search"
            className={`block w-[40vw] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search In Todos..."
          />
          <button
            type="submit"
            className="text-primary bg-gray-100 absolute right-2.5 bottom-2.5  hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
      </div>
      <span className='bg-indigo-500 hover:bg-indigo-600 rounded-xl hover:rounded-2xl transiton p-4  cursor-pointer' onClick={() => router.push("/create")}>
      <PlusIcon className='w-6 h-6 text-white' />
      </span>

    </div>
  );
};

export default Header;
