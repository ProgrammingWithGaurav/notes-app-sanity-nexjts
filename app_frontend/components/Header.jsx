import { useState } from "react";
import Link from "next/link";
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

const Header = () => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    console.log(input)
  }
  return (
    <div className="flex justify-between sm:w-full lg:w-[95%] shadow lg:mx-auto px-3 py-4 rounded">
        <Link href="/" className='flex items-center gap-2'>
      <h4 className="text-2xl font-bold text-primary">TodoApp</h4>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2387/2387679.png"
            className="w-10 h-10 rounded-full opacity-85 hover:opacity-90 transition cursor-pointer"
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
            disabled={input.trim() === ''}
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
