import myImage from "/myImage.jpg";

function Aboutme() {
  return (
    <div className="grid gap-3 md:grid-cols-[250px,1fr] grid-cols-[150px,1fr] ">
      <MyImage />
      <AboutShort />
    </div>
  );
}

const MyImage = () => {
  return (
    <div className="  h-[250px] overflow-hidden rounded-3xl flex justify-center items-center">
      <img src={myImage} alt="" style={{ objectFit: "cover" }} />
    </div>
  );
};
const AboutShort = () => {
  return (
    <div className=" bg-seconday border border-zinc-800 rounded-3xl md:p-10 p-5 overflow-y-scroll h-[250px] no-scrollbar">
      <h1 className=" text-xl font-[700] mb-3">hello, I'm Khalid Ismail.</h1>
      <p className="text-neutral">
        I am a full-stack developer,based in Morocco 🇲🇦, currently I'm a
        freelancer passionate about animating and making interactive UI
        components , founder of&nbsp;
        <a href="re-fragment.com" className="underline">
          Re-fragment
        </a>
      </p>
    </div>
  );
};
export default Aboutme;
