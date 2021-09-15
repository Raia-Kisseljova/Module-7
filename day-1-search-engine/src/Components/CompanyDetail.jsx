import React from "react";

export default function CompanyDetail({ props }) {
  const [company, setCompany] = React.useState([]);
  console.log(props);
  React.useEffect(() => {
    const response = fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=nordcloud`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div>hello</div>;
}
