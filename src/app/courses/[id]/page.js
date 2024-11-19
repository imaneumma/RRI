import Image from "next/image";
import InstructorCard from "@/components/InstructorCard";
import ListCard from "@/components/ListCard";
import AccordionCard from "@/components/AccordionCard";

export function generateStaticParams() {
  return [
    {
      id: "1",
      title: "Introduction to Web Development",
      desecription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu molestie lorem. Etiam leo arcu, imperdiet a consectetur non, varius id quam. Sed ac dolor eu nulla varius maximus. Ut vestibulum odio id pretium placerat. Ut quam dolor, lobortis at accumsan non, mollis sed eros. Aenean sodales velit ullamcorper, ultricies leo eget, volutpat felis. Donec eu augue a tellus ornare interdum. Mauris arcu leo, convallis ac finibus at, venenatis ac libero. Morbi sagittis dignissim ornare. Fusce mollis efficitur nunc, quis eleifend dolor congue volutpat. Sed tincidunt nec elit sed congue. Suspendisse dictum ac nisi vel commodo. Ut felis nunc, dictum id eleifend id, semper et purus. In eu pretium est. Vestibulum semper quam dui, vel maximus felis ultrices eget. Ut a faucibus orci, nec sodales metus. ",
    },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
  ];
}

export default async function Page({ params }) {
  const { id } = await params;

  const instructor = {
    name: "Jamal ud din",
    rating: {
      value: 4.2,
      count: 250,
    },
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu molestie lorem. Etiam leo arcu, imperdiet a consectetur non, varius id quam. Sed ac dolor eu nulla varius maximus. Ut vestibulum odio id pretium placerat. Ut quam dolor, lobortis at accumsan non, mollis sed eros. Aenean sodales velit ullamcorper, ultricies leo eget, volutpat felis.",
    experience: "6 years",
  };

  const course = {
    features: [
      "Learn effective strategies to tackle your exams with confidence",
      "Cover your core topics in great detail to build a solid conceptual foundation.",
      "Build a better foundation with in-depth concepts, illustrative examples, and practical questions.",
      "Navigate the subject with confidence by understanding the essential dos and donts.",
      "Explore the relevance of past papers and engage in detailed discussions of core topics.",
    ],
    content: {},
  };
  const user = {
    courses: [
      { title: "english", id: 1 },
      { title: "maths", id: 2 },
    ],
  };
  return (
    <div className="flex flex-row">
      <div className="about-instructor basis-1/4">
        <Image
          className="p-2 m-4"
          src="/bg-images/books-sm.jpg"
          alt="read right main page"
          height="50"
          width="250"
        ></Image>

        <InstructorCard instructor={instructor}></InstructorCard>
      </div>
      <div className="course-details basis-3/4">
        <ListCard list={course.features}></ListCard>

        <AccordionCard content={course.content}></AccordionCard>
      </div>
    </div>
  );
}
