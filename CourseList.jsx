import Course from './Course';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import { useEffect, useState } from 'react';
import useFetch from './useFetch.jsx';

function CourseList() {

  // const [courses, setCourses] = useState(null);

  const [courses, dummy, error] = useFetch('http://localhost:3000/courses');

  // const [courses, setCourses] = useState([]);
  // const [dummy, setDummy] = useState(true);
  // const [error, setError] = useState(null);

  if(!courses){
    return(
      <>
      {!error && <p>Loading...</p>}
      {error && <p>{error}</p>}
        </>
    )
  }

  // FETCH FROM JSON-SERVER
  

  function handleDelete(id) {
    const newCourses = courses.filter(course => course.id !== id);
    setCourses(newCourses);
  }

  // SORT safely
  // const sortedCourses = [...courses].sort((a, b) => a.price - b.price);

  // VALUE FOR MONEY COURSES
  // const vfmCourses = sortedCourses.filter(course => course.price < 500);


  
  const coursesList = courses.map(course =>
    <Course
      key={course.id}
      id={course.id}
      name={course.name}
      price={course.price}
      img={course.img}
      rating={course.rating}
      delete={handleDelete}
    />
  );

  return (
    <>
      {coursesList}
      <button onClick={() => setDummy(false)}>Dummy</button>
    </>
  );
}

export default CourseList;
