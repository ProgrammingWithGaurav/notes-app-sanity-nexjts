import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import ScrollToTop from "react-scroll-to-top";
import { todos } from "../index";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Footer from "../../components/Footer";
import Head from "next/head";
import Spinner from '../../components/Spinner';

const NoteDetail = () => {
  const [noteId, setNoteId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) router.push("/login");
  }, []);
  const {
    query: { NoteDetail: note_id },
  } = useRouter();
  const [noteDetail, setNoteDetail] = useState(null);
  const [comment, setComment] = useState("");
  const [addingComment, setAddingComment] = useState(false);

  const fetchNoteDetails = () => {
    const detail = todos.filter((todo) => todo._id === noteId)[0];
    setNoteDetail(detail);
  };

  useEffect(() => {
    setNoteId(note_id);
    fetchNoteDetails();
  }, [note_id]);

  return (
    <div className="max-w-screen-lg mx-auto">
      <Head>
        <title>Note | {noteDetail?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />


      {noteDetail === null &&  <Spinner message="Loading" />}
          <main className="mt-10">
            <div className="mb-4 md:mb-0 w-full mx-auto relative">
              <div className="px-4 lg:px-0">
                <h2 className="flex items-center gap-2 text-4xl font-semibold text-gray-800 leading-tight">
                  <ArrowRightIcon className="w-6 h-6 font" />
                  {noteDetail?.title}
                </h2>
                <a
                  href="#"
                  className="py-2 text-green-700 inline-flex items-center justify-center mb-2 font-semibold"
                >
                  {noteDetail?.type}
                </a>
              </div>

              <img
                src={noteDetail?.noteImage}
                className="w-full object-cover lg:rounded"
                style={{ height: "28em" }}
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                <p className="pb-6">{noteDetail?.description}</p>
              </div>

              <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                <div className="p-4 border-t border-b md:border md:rounded">
                  <div className="flex py-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-700 text-sm">
                        {" "}
                        Mike Sullivan{" "}
                      </p>
                      <p className="font-semibold text-gray-600 text-xs">
                        {" "}
                        Editor{" "}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 py-3">
                    Mike writes about technology Yourself required no at
                    thoughts delicate landlord it be. Branched dashwood do is
                    whatever it.
                  </p>
                  <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                    Follow
                    <i className="bx bx-user-plus ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </main>
      <Footer />

      <ScrollToTop smooth />
    </div>
  );
};

export default NoteDetail;