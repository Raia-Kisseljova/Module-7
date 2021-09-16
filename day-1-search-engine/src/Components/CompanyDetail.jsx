import React from "react";
import { Table } from "react-bootstrap";

export default function CompanyDetail(props) {
  const [company, setCompany] = React.useState([]);
  console.log(props);
  React.useEffect(() => {
    const response = fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${companyName}`
    )
      .then((response) => response.json())
      .then((data) => setCompany(data.data));
  }, []);

  const companyName = window.location.pathname.split("/")[2];
  return (
    <>
      <div className="mb-5">{company[0].company_name}</div>
      {company.map((c) => {
        return (
          <>
            <div>{c.company_name}</div>
            <div className="company-description">
              {c.description.replace(/<[^>]+>/g, "")}
            </div>
            <div>Found jobs : {company.length}</div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Salary</th>
                  <th>Category</th>
                  <th>Find out more</th>
                </tr>
              </thead>
              <tbody>
                {company.map((c) => {
                  return (
                    <tr>
                      <td>{c.title}</td>
                      <td>{c.salary}</td>
                      <td>{c.category}</td>
                      <td>{c.url}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
        );
      })}
    </>
  );
}
