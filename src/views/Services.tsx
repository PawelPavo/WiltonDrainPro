import React from 'react';
import ServiceCard from '../components/ServiceCard'

const ServicesArray = [
  {
    id: 1,
    name: "Underground Drain Repair",
    description: "We pride ourselves on our quality of work and the materials that we choose to use. Our technicians are highly skilled with plenty of knowledge in the field, and of course, always up to date with the latest Florida Building Codes.",
  },
  {
    id: 2,
    name: "Drain Cleaning",
    description: "Plumbing stoppages are one of those facts of life that most of us prefer to ignore. However, it is important to know when the plumbing problem is out of your control and that you should call your plumber to prevent it.",
  },
  {
    id: 3,
    name: "Sewer Jetting",
    description: "This concept of high-pressure cleaning is a proven solution for removing up to 100% of the grease, roots, and debris built up in the sewer lines. Hydro jetting cleans your sewer lines like no other process can.",
  },
  {
    id: 4,
    name: "Video Camera Inspections",
    description: "We offer video inspections of sewer lines to find the issue before making a costly repair. Our camera will give us the exact location and depth of your broken pipe to eliminate unnecessary costs and get straight to the heart of the problem.",
  },
  {
    id: 5,
    name: "Hot Water Heater Maintanace",
    description: " We work with both tank-type and tankless heaters as well as gas and electric. Don't wait until your HWH catastrophically failes before shopping around for a replacement.",
  },
  {
    id: 6,
    name: "and More",
    description: "From brand new, ground-up construction projects to complete building remodels, we are experienced in all aspects of the plumbing industry.",
  },
];

function Services() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-3">
          <div className="font-weight-light display-4">Services</div>
        </div>
        <div className="row justify-content-center">
          {ServicesArray.map(service => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
