// import { useEffect, useState } from "react";

"use client";

import { useEffect, useState } from "react";
import { getCourses } from "../services/api";

import Stories from "react-insta-stories";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import RadialSeparators from "@/components/RadialSeperator";
import "react-circular-progressbar/dist/styles.css";
import Greeting from "@/components/Greeting";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  const user = {
    courses: [
      { title: "english", id: 1 },
      { title: "maths", id: 2 },
    ],
  };

  const stories = [
    {
      url: "https://picsum.photos/100/100",
      //type:	"image",
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://picsum.photos/100/100",
      },
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
    },
  ];
  return (
    <div>
      <div className="container mx-auto mt-10">
        <Greeting></Greeting>

        <div>
          <h1>Courses from db </h1>
          <ul>
            {courses.map((course) => (
              <li key={course.id}>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="enrolled-courses">
          {user ? (
            <div>
              <h2 className="text-2xl font-semibold">Welcome, {user.name}</h2>
              <h3 className="text-xl mt-4">Enrolled Courses:</h3>
              <ul className="list-disc list-inside">
                {user.courses.map((course) => (
                  <li key={course.id}>{course.title}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="feed-wrapper">
          <p>here is the feed card area</p>

          <div className="feed-overview">
            <div className="max-w-24 max-h-24">
              <CircularProgressbarWithChildren
                value={80}
                text={`${80}%`}
                strokeWidth={10}
                styles={buildStyles({
                  strokeLinecap: "butt",
                })}
              >
                <RadialSeparators
                  count={12}
                  style={{
                    background: "#fff",
                    width: "2px",
                    // This needs to be equal to props.strokeWidth
                    height: `${10}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
            </div>
            <div className="max-w-24 max-h-24">
              <CircularProgressbarWithChildren value={66}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img
                  style={{ width: 40, marginTop: -5 }}
                  src="https://i.imgur.com/b9NyUGm.png"
                  alt="doge"
                />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>66%</strong> mate
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>

        <div>
          <Stories
            stories={stories}
            defaultInterval={1500}
            width={432}
            height={768}
          />
        </div>
      </div>
    </div>
  );
}
