/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import QuoteList from "../../components/QuoteList/QuoteList.jsx";
const GetRequestedQuotes = (props) => {
  // server url
  const serverUrl = import.meta.env.VITE_BACKEND_URL;
  const title = props.title;
  const category = props.category;
  const postsInitial = [];
  const [data, setData] = useState(postsInitial);
  useEffect(() => {
    requestedQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestedQuotes = async () => {
    const response = await fetch(
      `${serverUrl}/api/post/fetchallposts?tag=${category}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setData(json);
  };
  return (
    <main className="m-3 mt-8 mb-auto">
      <h1 className="text-center text-5xl font-Comfortaa">{title}</h1>
      <div
        className="
      grid grid-cols-3 gap-10 mb-4 mt-5 max-lg:grid-cols-1
        max-sm:flex-col max-sm:gap-3 "
      >
        {data.map((data) => {
          return <QuoteList key={data._id} data={data} />;
        })}
      </div>
    </main>
  );
};

export default GetRequestedQuotes;
