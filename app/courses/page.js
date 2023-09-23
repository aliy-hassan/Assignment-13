import "./coursesStyle.css"
// import '@/styles/pages/course.css'
import Header from '../(components)/header/header'
import TextCard from './(components)/textCard'
import ImageCard from './(components)/imageCard'

import client from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const fetchCourses = async ()=>{
  const courses = await client.fetch('*[_type == "courses"]', {},
  {
    cache: 'no-cache',
  });
  return courses;
}

const fetchBestCourses = async ()=>{
  const bCourses = await client.fetch('*[_type == "bestCourses"]', {},
  {
    cache: 'no-cache',
  });
  return bCourses; 
}

async function Courses() {
  const courses = await fetchCourses();
  const bestCourses = await fetchBestCourses();
  return (
    <>
      <Header title="OUR COURSES" />

      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row rowC">
          {
            courses.map((course)=>{
              return (
              <TextCard title={course.title} desc={course.description} />
              )
            })
          }
        </div>
      </section>



      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row rowC">
          {
            bestCourses.map((course)=>{
              const imgRef = course.photo.asset._ref;
              return (
                <ImageCard source={urlFor(imgRef).url()} title={course.title} desc={course.description} />
              )
            })
          }
        </div>
      </section>

      <div>

      </div>

    </>
  )
}
export default Courses