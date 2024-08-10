export default function AboutMe() {
  return (
    <div className="max-w-5xl mx-auto p-4 overflow-y-auto h-full ">
      <h2 className="font-[500] mb-5 text-neutral tracking-widest">My Story</h2>
      <p className="font-[400]">
        Born and raised in Morocco, I discovered my passion for web development
        by exploring the innovative websites and designs created by others. As a
        junior front-end developer, I am honing my skills in HTML, CSS,
        JavaScript, and React to build engaging and interactive user interfaces.
        Currently freelancing, I founded "Re-fragment" to showcase my dedication
        to blending creativity with cutting-edge technology. My journey into the
        world of web development reflects my commitment to constantly improving
        and innovating in design and animation.
      </p>
      <br />

      <h2 className="font-[500] mb-5 text-neutral tracking-widest">
        Experience
      </h2>
      <div className="mb-4">
        <h3 className="font-[500]">Freelancer</h3>
        <p className="italic text-zinc-500 ">
          {" "}
          LinkedIn - TikTok - Re-fragment (currently)
        </p>
        <ul className="list-disc pl-5">
          <li>
            Founded Re-fragment to help people create interactive UI/UX
            components by providing both free and paid component code.
          </li>
          <li>
            Creating portfolios and digital content for LinkedIn users to
            enhance their modern online presence.
          </li>
          <li>
            Developing a wallpaper website for a TikTok content creator and
            anime MVC editor.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-[500]">Web Development Intern</h3>
        <p className="italic text-zinc-500">
          METAVERS (Remote) - October to December 2023 (3 months)
        </p>
        <ul className="list-disc pl-5">
          <li>
            Collaborated with a team of 5 interns to develop a full React.js
            front-end app.
          </li>
          <li>
            Automated tasks for deploying apps to AWS using GitHub Actions,
            CodePipeline, CodeCommit, ECR, and EKS.
          </li>
          <li>
            Participated in workshops on S3, Lambda, CodePipeline, EC2,
            CloudFormation, Cognito, Amplify, and CloudFront.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-[500]">Virtual Web Development Intern</h3>
        <p className="italic text-zinc-500">
          RadicalX (Remote) - November 2022 to February 2023 (4 months)
        </p>
        <ul className="list-disc pl-5">
          <li>
            Developed internship pages for the RadicalX platform using ReactJS
            and Figma files.
          </li>
          <li>Built product web pages using ReactJS and TailwindCSS.</li>
        </ul>
      </div>

      <h2 className="font-[500] mb-5 text-neutral tracking-widest">
        Education
      </h2>
      <div className="mb-4">
        <h3 className="font-[500]">IT Learning Campus - FST Settat</h3>
        <p className="italic">2022-2023</p>
        <p>
          Professional University Degree in Design and Development Engineering
          of Applications.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-[500]">ISTA NTIC Beni Mellal</h3>
        <p className="italic">
          Diploma of Specialized Technician: In Computer Network Techniques
        </p>
      </div>
    </div>
  );
}
