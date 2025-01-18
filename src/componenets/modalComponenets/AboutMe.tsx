// Types for the props of Experience and Education components
interface ExperienceProps {
  jobTitle: string;
  company: string;
  period: string;
  details: string[];
}

interface EducationProps {
  school: string;
  degree: string;
  period: string;
  description?: string;
}

// Section component to reuse content blocks
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="font-[500] mb-5 text-neutral tracking-widest">{title}</h2>
      {children}
    </div>
  );
}

// Experience component
function Experience({ jobTitle, company, period, details }: ExperienceProps) {
  return (
    <div className="mb-4">
      <h3 className="font-[500]">{jobTitle}</h3>
      <p className="italic text-zinc-500">
        {company} - {period}
      </p>
      <ul className="list-disc pl-5">
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Education component
function Education({ school, degree, period, description }: EducationProps) {
  return (
    <div className="mb-4">
      <h3 className="font-[500]">{school}</h3>
      <p className="italic">{period}</p>
      <p>{degree}</p>
      {description && <p>{description}</p>}
    </div>
  );
}

// Main AboutMe component with array data
const AboutMe = () => {
  // Data arrays for sections
  const story: string[] = [
    "Born and raised in Morocco, I discovered my passion for web development by exploring the innovative websites and designs created by others.",
    "As a junior front-end developer, I am honing my skills in HTML, CSS, JavaScript, and React to build engaging and interactive user interfaces.",
    "Currently freelancing, I founded 'Re-fragment' to showcase my dedication to blending creativity with cutting-edge technology.",
    "My journey into the world of web development reflects my commitment to constantly improving and innovating in design and animation.",
  ];

  const experiences: ExperienceProps[] = [
    {
      jobTitle: "Full-stack & DevOps Engineer (Internship)",
      company: "Valhko (Remote)",
      period: "November 2024 to January 2025 (3 months)",
      details: [
        "Designed and implemented user interfaces for AI model interaction using Next.js.",
        "Developed backend infrastructure and core platform features using Django, including REST API integration.",
        "Managed and monitored server infrastructure on Azure.",
        "Collaborated with the AI research team and DevOps engineers to streamline workflows and deployment pipelines.",
      ],
    },
    {
      jobTitle: "Freelancer",
      company: "LinkedIn - TikTok - Re-fragment",
      period: "Started February 2024",
      details: [
        "Founded Re-fragment to help people create interactive UI/UX components by providing both free and paid component code.",
        "Creating portfolios and digital content for LinkedIn users to enhance their modern online presence.",
        "Developing a wallpaper website for a TikTok content creator and anime MVC editor.",
      ],
    },
    {
      jobTitle: "Web Development Intern",
      company: "METAVERS (Remote)",
      period: "October to December 2023 (3 months)",
      details: [
        "Collaborated with a team of 5 interns to develop a full React.js front-end app.",
        "Automated tasks for deploying apps to AWS using GitHub Actions, CodePipeline, CodeCommit, ECR, and EKS.",
        "Participated in workshops on S3, Lambda, CodePipeline, EC2, CloudFormation, Cognito, Amplify, and CloudFront.",
      ],
    },
    {
      jobTitle: "Virtual Web Development Intern",
      company: "RadicalX (Remote)",
      period: "November 2022 to February 2023 (4 months)",
      details: [
        "Developed internship pages for the RadicalX platform using ReactJS and Figma files.",
        "Built product web pages using ReactJS and TailwindCSS.",
      ],
    },
  ];

  const education: EducationProps[] = [
    {
      school: "IT Learning Campus - FST Settat",
      degree:
        "Professional University Degree in Design and Development Engineering of Applications",
      period: "2022-2023",
    },
    {
      school: "ISTA NTIC Beni Mellal",
      degree:
        "Diploma of Specialized Technician: In Computer Network Techniques",
      period: "Year not specified",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 overflow-y-auto h-full">
      {/* My Story Section */}
      <Section title="My Story">
        {story.map((paragraph, index) => (
          <p className="font-[400]" key={index}>
            {paragraph}
          </p>
        ))}
      </Section>

      {/* Experience Section */}
      <Section title="Experience">
        {experiences.map((experience, index) => (
          <Experience
            key={index}
            jobTitle={experience.jobTitle}
            company={experience.company}
            period={experience.period}
            details={experience.details}
          />
        ))}
      </Section>

      {/* Education Section */}
      <Section title="Education">
        {education.map((edu, index) => (
          <Education
            key={index}
            school={edu.school}
            degree={edu.degree}
            period={edu.period}
            description={edu.description}
          />
        ))}
      </Section>
    </div>
  );
};

export default AboutMe;
