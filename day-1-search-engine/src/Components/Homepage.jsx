import React from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";

export default function Homepage() {
  const searchRef = React.useRef();
  const [jobs, setJobs] = React.useState([]);

  const fetchJob = async () => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=${searchRef.current.value}&limit=12`
    );
    const data = await response.json();
    setJobs(data.data);
    console.log(jobs);
    console.log(searchRef.current.value);
  };

  // const redirect = (e) => {
  //   window.location.replace(
  //     `http://localhost:3000/company_detail/${e.target.outerText}`
  //   );
  // };
  return (
    <>
      <div className="center-input">
        <InputGroup className="mb-3">
          <FormControl
            ref={searchRef}
            placeholder="Job title"
            aria-label=""
            aria-describedby=""
            onChange={(e) => fetchJob()}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={fetchJob}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>

      <div>
        <h4 className="text-center my-4">Found jobs {jobs.length}</h4>

        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Salary</th>
                <th>Favourite</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => {
                return (
                  <tr>
                    <td>{job.title}</td>

                    <td onClick={(e) => redirect(e)}>{job.company_name}</td>

                    <td>{job.salary}</td>
                    <td>
                      <button className="fav-btn">🤍</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}
