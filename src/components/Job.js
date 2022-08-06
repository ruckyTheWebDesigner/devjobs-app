import { Card } from "@mui/material";
import React from "react";

function Job({ logo, logobg, title, company, timeposted, contract, location }) {
  return (
    <a href={`/company/${company}`} className='jobs_container'>
      <div className='jobs_card_icon' style={{ backgroundColor: logobg }}>
        <img src={logo} alt='' />
      </div>
      <Card className='jobs_card'>
        <div className='jobs_card_content'>
          <h6 className='span'>
            {timeposted} . {contract}
          </h6>
          <h4>{title}</h4>
          <h6 className='span'>{company}</h6>
        </div>
        <h5 className='location'>{location}</h5>
      </Card>
    </a>
  );
}

export default Job;
