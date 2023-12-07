import { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import QouteListSkeleton from "../../components/LoadingSkeleton/QouteListSkeleton";
import QuoteList from "../../components/QuoteList/QuoteList";
import postContext from "../../context/postContext";
const Quotes = () => {
  const context = useContext(postContext);
  // eslint-disable-next-line no-unused-vars
  const { post, getPost, likePost , makeComment } = context;

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <main className="m-3 mt-8 mb-auto">
      <h1 className="text-center text-5xl font-Comfortaa max-lg:text-4xl">
        Quotes for you.
      </h1> 
      <InfiniteScroll
        dataLength={post.length}
         
        hasMore={post.length !== post}
        loader={<QouteListSkeleton /> }
      >
        <div
          className="
      grid grid-cols-3 gap-10 mb-4 mt-5 max-lg:grid-cols-1
        max-sm:flex-col max-sm:gap-3 "
        > 

          {post.toReversed().map((data) => {
            return (
              <QuoteList
                key={data._id}
                data={data}
                likePost={likePost}
                makeComment={makeComment}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </main>
  );
};

export default Quotes;
