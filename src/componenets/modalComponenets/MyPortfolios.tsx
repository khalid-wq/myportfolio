import { useState } from "react";
import { Data, portfoliosData } from "../../tools/data";

function MyPortfolios() {
  return (
    <div className="max-w-5xl mx-auto p-4 overflow-y-auto h-full ">
      <h2 className="font-[500] mb-5 text-neutral tracking-widest">
        Freelancing Templates
      </h2>
      <div>
        <Freelancing />
      </div>
      <br />
    </div>
  );
}
const Freelancing = () => {
  return (
    <div className=" pb-[100px]">
      <p>
        Here, you can choose any template as an example for your project. If you
        have any other idea or design, we can work on it together. You can also
        search for examples on Dribbble or Awwwards.
      </p>
      <div className=" mt-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-4 justify-items-center">
        {portfoliosData.map((portfolio) => (
          <Card key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </div>
  );
};
const Card = ({ title, url, tools, image }: Data) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className=" bg-primary rounded-xl p-2 border border-zinc-800 ">
      <div className="">
        {!loading && (
          <div className="  h-[200px] w-[300px]   rounded-3xl bg-seconday border-zinc-800 border flex justify-center items-center">
            Loading...
          </div>
        )}
        <img
          src={image}
          alt={title}
          className="rounded-xl"
          onLoad={() => setLoading(true)}
        />
      </div>
      <div className="p-2">
        <h2 className=" font-bold">{title}</h2>
        <span className=" italic">
          tools: <span className=" text-neutral">{tools}</span>
        </span>
        <div className=" mt-4 ">
          <a
            href={url}
            target="_blank"
            className="bg-seconday p-2 rounded-xl border border-zinc-800 "
          >
            view demo
          </a>
        </div>
      </div>
    </div>
  );
};
export default MyPortfolios;
