import React from "react";
import { Container, Table, Row, Col } from "react-bootstrap";

export default function CompanyDetail(props) {
  const [company, setCompany] = React.useState([]);
  console.log(props);
  React.useEffect(() => {
    const response = fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${companyNameURL}`
    )
      .then((response) => response.json())
      .then((data) => setCompany(data.data));
  }, []);

  const companyNameURL = window.location.pathname.split("/")[2];

  return (
    <>
      <Container>
        <Row>
          <Col md={10}>
            {company.map((c) => {
              return (
                <>
                  <div className="my-3 text-center">{c.company_name}</div>
                  <div className="company-description">
                    <p className="text-center">About company</p>
                    {c.description.replace(/<[^>]+>/g, "")}
                  </div>
                  <div className="my-3 text-center">
                    Found jobs : {company.length}
                  </div>
                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Salary</th>
                        <th>Category</th>
                        <th>Apply here</th>
                      </tr>
                    </thead>
                    <tbody>
                      {company.map((c) => {
                        return (
                          <tr>
                            <td>{c.title}</td>
                            <td>{c.salary}</td>
                            <td>{c.category}</td>
                            <td>
                              <a href={c.url}>{c.url}</a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}
