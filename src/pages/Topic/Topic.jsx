import { Link } from "react-router-dom";
import { TopicsData } from "../../Data/Data";
import { useEffect, useState } from "react";
import TopicSkeleton from "../../components/LoadingSkeleton/TopicSkeleton";

const Topic = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <main className="m-3 mt-8 mb-auto">
      <h1 className="text-center text-5xl font-Comfortaa">Topics</h1>
      {loading ? (
        <TopicSkeleton />
      ) : (
        <div
          className="
      grid grid-cols-5 gap-10 mb-4 mt-5 max-lg:grid-cols-1
        max-sm:flex-col max-sm:gap-3 "
        >
          {TopicsData.map((data) => {
            return (
              <div key={data.id}>
                <Link to={data.sendLink}>
                  <div className="transition-all bg-slate-900 py-8   p-6 rounded-xl  text-gray-100 text-center font-Comfortaa font-semibold text-2xl hover:scale-95 shadow-lg border-l-4 border-yellow-400 flex">
                    <h1>{data.icon} </h1>
                    {data.title}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Topic;
