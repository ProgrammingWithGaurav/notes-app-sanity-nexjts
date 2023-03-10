import React, { useEffect, useState } from "react";
import { CloudArrowDownIcon, TrashIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import Spinner from "../components/Spinner";
import { client } from "../client";
import { userQuery } from "../utils/queries";
import Header from "../components/Header";

const categories = [
  {
    name: "Coding & Programming & Tech",
  },
  {
    name: "Nature & World & Fact",
  },
  {
    name: "Food Items",
  },
  {
    name: "Country",
  },
  {
    name: "Others",
  },
];

const Create = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageAsset, setImageAsset] = useState();
  const [loading, setLoading] = useState(false);
  const [wrongImageType, setWrongImageType] = useState(false);
  const [category, setCategory] = useState();
  const [fields, setFields] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [user, setUser] = useState(null);

  // Fetching user data
  useEffect(() => {
    const redirect = () => {
      localStorage.clear();
      router.push("/login");
    };
    localStorage.getItem("user") !== "undefined"
      ? setUserInfo(JSON.parse(localStorage.getItem("user")))
      : redirect();
  }, []);

  useEffect(() => {
    const query = userQuery(userInfo?.uid);

    client.fetch(query).then((data) => {
      setUser(data[0]);
      console.log(data);
      console.log(userInfo);
    });
  }, [userInfo, user]);

  //

  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    // uploading asset to sanity
    if (
      selectedFile.type === "image/png" ||
      selectedFile.type === "image/svg" ||
      selectedFile.type === "image/jpeg" ||
      selectedFile.type === "image/gif" ||
      selectedFile.type === "image/tiff"
    ) {
      setWrongImageType(false);
      setLoading(true);
      client.assets
        .upload("image", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Upload failed:", error.message);
        });
      setLoading(false);
    } else {
      setLoading(false);
      setWrongImageType(true);
    }
  };

  const saveNote = () => {
    if (title && description && imageAsset?._id && category) {
      const doc = {
        _type: "note",
        title,
        description,
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAsset?._id,
          },
        },
        userId: userInfo.uid,
        postedBy: {
          _type: "user",
          _ref: userInfo.uid,
        },
        category,
      };
      client.create(doc).then(() => {
        setLoading(false);
        setTitle("");
        setDescription("");
        setCategory("");
        setImageAsset(null);
        router.push("/");
      });
    } else {
      setFields(true);
      setTimeout(() => {
        setFields(false);
      }, 2000);
    }
  };
  return (
    <div>
      <Head>
        <title>Create Note</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      {fields && (
        <p className="text-red-500 texst-sm text-center">
          *Please add all filelds
        </p>
      )}
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="input"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="input"
          rows={8}
          spellcheck="false"
          placeholder="Describe everything about this post here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div>
          <p className="mb-2 font-semibold text:lg sm:text-xl">
            Choose Pin Category
          </p>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
          >
            <option value="others" className="sm:text-bg bg-white">
              Select Category
            </option>
            {categories.map((item) => (
              <option
                key={item}
                className="text-base border-0 outline-none capitalize bg-white text-black "
                value={item.name}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className=" flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 ">
          <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
            <div className=" flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
              {loading && <Spinner />}
              {wrongImageType && <p>It&apos;s wrong file type.</p>}
              {!imageAsset ? (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label>
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-2xl">
                        <CloudArrowDownIcon className="w-8 h-8 text-primary" />
                      </p>
                      <p className="text-lg">Click to upload</p>
                    </div>

                    <p className="mt-32 text-gray-400">
                      Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF
                      or TIFF less than 20MB
                    </p>
                  </div>
                  <input
                    type="file"
                    name="upload-image"
                    onChange={uploadImage}
                    className="w-0 h-0"
                  />
                </label>
              ) : (
                <div className="relative h-full">
                  <img
                    src={imageAsset?.url}
                    alt="uploaded-pic"
                    className="h-full w-full"
                  />
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                    onClick={() => setImageAsset(null)}
                  >
                    <TrashIcon className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">
            {description.length}/300
          </div>
        </div>

        <div className="buttons flex">
          <div
            className="btn border hover:bg-gray-100  rounded-lg text-xl py-1 border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={() => router.push("/")}
          >
            Cancel
          </div>
          <div
            onClick={saveNote}
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-xl py-1"
          >
            {loading ? "saving..." : "Post"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
