// import { useEffect, useState } from "react";

export default function Dashboard() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/api/user")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);

  const user = {
    courses: [
      { title: "english", id: 1 },
      { title: "maths", id: 2 },
    ],
  };
  return (
    <div>
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-8">Hello Danny! </h1>
        <p>
          Good to see you again. Lets aim some thing big for today. Where do we
          start?
        </p>
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
    </div>
  );
}
