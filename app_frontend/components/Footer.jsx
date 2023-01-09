import React from "react";

const Footer = () => {
  return (
    <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
      <div>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          className="h-12 w-12"
          alt="logo"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/5">
          <p className="text-gray-600 hidden lg:block mt-4 p-0 lg:pr-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nulla iste voluptas hic consequatur dolorem quam nisi molestias enim, iure accusantium voluptatibus autem sapiente in repellendus molestiae id, natus quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis laboriosam fugit quidem qui soluta hic ex. Ipsam, adipisci eveniet.
          </p>
        </div>

        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Team
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                About us
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Press
              </a>{" "}
            </li>
          </ul>
        </div>

        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
          <ul>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Blog
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Privacy Policy
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Terms & Conditions
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Documentation
              </a>{" "}
            </li>
          </ul>
        </div>

        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Team
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                About us
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Press
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
