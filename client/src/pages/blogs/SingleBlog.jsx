import React, { useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import PopularBlog from "./PopularBlog";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../../redux/features/singleBlog/blogSlice";

const SingleBlog = () => {
  const { id } = useParams();
  // console.log(id)

  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
);

const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchBlog(id));
  window.scrollTo(0, 0);
}, [dispatch, id]);

console.log(blog)

const {title,image, content, author, authorPic, category } = blog || {};

  return (
    <article className="mt-8">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            {title}
          </h2>
          <a
            href="#"
            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            {category}
          </a>
        </div>

        <img
          src={image}
          className="w-full object-cover lg:rounded"
          style={{ height: "28em" }}
          alt="Blog Cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-8 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          {/* ... Existing code ... */}
          {content}
          <br /> <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            blanditiis tempora perferendis optio eveniet a fuga cum ipsam,
            aperiam vitae quasi nisi corporis adipisci molestiae facere qui,
            culpa distinctio quisquam voluptatum illum veniam, voluptate fugit
            unde voluptas? Fugiat quidem maxime neque fugit ea! Rem soluta optio
            eos vel? Perferendis maxime, iure molestias totam, autem voluptatum
            nulla ad provident quam labore sint earum rem unde quis aspernatur
            possimus pariatur assumenda magnam eligendi quos, consectetur facere
            consequatur tempora aut. Architecto beatae unde repellat accusantium
            velit optio earum pariatur porro. Impedit molestiae officia ex nemo
            officiis aut, facilis, nesciunt recusandae repudiandae repellendus
            corrupti sequi mollitia. Eaque corporis nisi repudiandae voluptas
            eius soluta repellat consequatur praesentium vero, ad nulla, aliquid
            vel illum sint facere quibusdam necessitatibus laudantium voluptate
            architecto fuga omnis. Doloremque vero adipisci maiores,
            consequuntur, eveniet dignissimos reiciendis ad totam nemo iste
            tempora aliquam itaque quo beatae numquam doloribus recusandae iusto
            modi perferendis ipsum a fugiat quam harum dicta. Et atque pariatur,
            error quam fuga earum adipisci. Sequi quo voluptatem amet ullam
            optio? Quam, dignissimos quidem? Culpa necessitatibus, hic a cumque,
            molestias dicta nisi autem consequatur beatae tenetur laudantium
            eveniet quas consequuntur, repudiandae incidunt atque amet assumenda
            aut. Quae magnam tempore optio temporibus!
          </p>
        </div>

        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img
                src={authorPic}
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="Author"
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm">
                 {author}
                </p>
                <p className="font-semibold text-gray-600 text-xs"> Editor </p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
              Mike writes about technology Yourself required no at thoughts
              delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Follow
              <AiOutlineHeart className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 md:w-2/3">
        <div className="flex items-center space-x-2">
          <BiCommentDetail className="text-gray-600" />
          <span className="text-gray-600">15 comments</span>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineHeart className="text-red-500" />
          <span className="text-gray-600">120 likes</span>
        </div>
        <div className="flex items-center space-x-2 mt-8"> 
        <a
          href="/"
          className="text-green-700 inline-flex items-center justify-center"
        >
          Back to Blogs
          <AiOutlineArrowRight className="ml-2" />
        </a>
        </div>
      </div>

      <PopularBlog currentVideoId={id} tags={category} />
    </article>
  );
};

export default SingleBlog;
