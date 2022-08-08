import { useState, useEffect } from "react";
import {
  DesktopFilterComponent,
  MobileFilterComponent,
} from "../../components/FilterComponent";
import Jobs from "../../components/JobsComponent";

import jobsData from "../../assets/data";

const jobsPerPage = 9;

function HomePage() {
  const [jobsToShow, setJobsToShow] = useState(jobsData.slice(0, jobsPerPage));
  const [next, setNext] = useState(jobsPerPage);
  const [resolution, setResolution] = useState(window.innerWidth);

  // useEffect runs once when the component is mounted and again when the window is resized

  useEffect(() => {
    // add event listener to check for window resize
    window.addEventListener("resize", (event) => {
      setResolution(event.target.innerWidth);
    });
  }, []);

  const handleShowMorePosts = (e) => {
    e.preventDefault();
    setNext(next + 3);
    setJobsToShow(jobsData.slice(0, next));
  };

  // handle filter form input

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target.filter_title.value;
    let location = e.target.filter_location.value;
    let checked = e.target.filter_checkbox.checked;

    const capitalizedTitle =
      title.substring(0, 4).charAt(0).toUpperCase() + title.slice(1);
    const capitalizedLocation =
      location.substring(0, 4).charAt(0).toUpperCase() + location.slice(1);

    const filteredJobs = jobsData.filter((job) => {
      if (title.indexOf(" ") >= 0 || location.indexOf(" ") >= 0) {
        title = title.split(" ")[0];
        return job.position.includes(title);
      }

      if (title.length > 0) {
        if (title && location && checked) {
          return (
            job.position.includes(capitalizedTitle) &&
            job.location.includes(capitalizedLocation) &&
            job.contract === "Full Time"
          );
        }
      }

      if (location) {
        return job.location.includes(capitalizedLocation);
      } else if (title) {
        return job.position.includes(capitalizedTitle);
      }

      if (checked) {
        return job.contract === "Full Time";
      }
    });

    title = "";
    location = "";
    checked = false;

    setJobsToShow(filteredJobs);
  };

  const handleChange = (e) => {
    e.preventDefault();
    let title = e.target.filter_title.value;

    const capitalizedTitle =
      title.substring(0, 4).charAt(0).toUpperCase() + title.slice(1);

    const filteredJobs = jobsData.filter((job) => {
      return job.position.includes(capitalizedTitle);
    });

    setJobsToShow(filteredJobs);
  };

  return (
    <div className='homepage_body'>
      <div>
        {resolution > 600 ? (
          <DesktopFilterComponent onSubmit={handleSubmit} />
        ) : (
          <MobileFilterComponent onSubmit={handleChange} />
        )}
      </div>
      {jobsToShow.length > 0 ? (
        <>
          <Jobs jobsToRender={jobsToShow} />
          <div className='loadmore_section'>
            <button className='btn_loadmore' onClick={handleShowMorePosts}>
              Show More
            </button>
          </div>
        </>
      ) : (
        <div className='no_jobs_found'>
          <h1>No job found</h1>
          <button onClick={handleShowMorePosts} className='btn_loadmore'>
            Show all jobs
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
