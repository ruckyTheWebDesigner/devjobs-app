import Job from "./Job";
import Logo from "../assets/desktop/logo.svg";

function JobsComponent({ jobsToRender }) {
  return (
    <div className='jobs_section'>
      {jobsToRender.map((job) => {
        return (
          <Job
            key={job.id}
            logo={job.logo}
            logobg={job.logoBackground}
            timeposted={job.postedAt}
            contract={job.contract}
            title={job.position}
            company={job.company}
            location={job.location}
          />
        );
      })}
    </div>
  );
}

export default JobsComponent;
