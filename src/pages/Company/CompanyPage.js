import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import companyData from "../../assets/data";
import Card from "@mui/material/Card";

function CompanyPage() {
  // use state const to store the company data
  const [company, setCompany] = useState(companyData);

  // use params to get the company name from the url
  const params = useParams();

  const companyName = params.companyname;

  const capitalizeCompanyName =
    companyName.charAt(0).toUpperCase() + companyName.slice(1);

  // use effect to get the company data from the companyData array

  useEffect(() => {
    // function to filter the company data based on the company name

    const filteredCompany = companyData.filter((company) => {
      return company.company.includes(capitalizeCompanyName);
    });

    setCompany(filteredCompany);
  }, [capitalizeCompanyName]);

  return (
    <div>
      {company.map((company) => {
        return (
          <>
            <div key={company.id} className='company_section'>
              <Card className='company_header'>
                <div
                  style={{
                    backgroundColor: company.logoBackground,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "25px",
                  }}>
                  <img
                    className='company_'
                    src={company.logo}
                    alt={company.company}
                  />
                </div>
                <div className='company_header_name'>
                  <div className='company_info_left'>
                    <h3>{company.company}</h3>
                    <h6 className='span'>{company.website}</h6>
                  </div>
                  <div>
                    {" "}
                    <Card className='company_website_card'>
                      <a href={company.website}>Company Website</a>
                    </Card>
                  </div>
                </div>
              </Card>

              <Card className='job_info_wrapper'>
                <div className='job_info'>
                  <div>
                    {" "}
                    <h6 className='span'>
                      {company.postedAt} <span className='dot'></span>{" "}
                      {company.contract}
                    </h6>
                    <h4>{company.position}</h4>
                    <h5 className='location'>{company.location}</h5>
                  </div>

                  <button className='apply_btn'>
                    <a href={company.apply}>Apply Now</a>
                  </button>
                </div>

                <h6 className='span'>{company.description}</h6>
                <h4>Requirements</h4>
                <h6 className='span'>{company.requirements.content}</h6>

                {company.requirements.items.map((item, index) => {
                  return (
                    <li className='span' key={index}>
                      {item}
                    </li>
                  );
                })}

                <h4>What You Will Do</h4>
                <h6 className='span'>{company.role.content}</h6>

                {company.role.items.map((item, index) => {
                  return (
                    <li className='span' key={index}>
                      {item}
                    </li>
                  );
                })}
              </Card>
            </div>
            <Card>
              <div className='footer_content'>
                <div>
                  <h4>{company.position}</h4>
                  <h6 className='span'>{company.company}</h6>
                </div>

                <button className='apply_btn'>
                  <a href={company.apply}>Apply Now</a>
                </button>
              </div>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default CompanyPage;
