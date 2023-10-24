import React from "react";

function Station(props) {
  const fetchStationHandler = async () => {
    const response = await fetch(
      "https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds=10865,G005"
    );
    const data = await response.json();
    console.log(data);
  };

  return <button onClick={fetchStationHandler}>Click Me</button>;
}

export default Station;
