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

export default function Homepage(props) {
  const searchRef = React.useRef();
  const [jobs, setJobs] = React.useState([]);

  const fetchJob = async () => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=${searchRef.current.value}&limit=12`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjOWFjYmIzNTgxNzAwMTVjMjI3ZDQiLCJpYXQiOjE2MzE3MTYyODIsImV4cCI6MTYzMjkyNTg4Mn0.rXOP9bM9x8yTlOwr9mAadN5guitB8-cmEhXErTsy310",
        },
      }
    );
    const data = await response.json();
    setJobs(data.data);
    console.log(jobs);
    console.log(searchRef.current.value);
  };

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
                    <Link to="/company_detail">
                      <td>{job.company_name}</td>
                    </Link>
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
