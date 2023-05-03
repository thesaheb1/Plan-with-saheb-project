import React, { useState } from "react";
import HeadTitle from "./Components/headtitle";
import Cards from "./Components/cards";
import data from "./data";

const App = () => {
  const [Data, SetData] = useState(data);
  function RemoveTour(id) {
    const NewData = Data.filter((d) => d.id !== id);

    SetData(NewData);
  }
  if (Data.length === 0) {
    return (
      <div className="empty-tour-container">
        <h2 className="no-tour">No Tourist Left</h2>
        <button className="refresh-btn" onClick={() => {SetData(data)}}>Refresh</button>
      </div>
    );
  }
  return (
    <>
      <HeadTitle></HeadTitle>
      <div className="container">
        <Cards Data={Data} RemoveTour={RemoveTour}></Cards>
      </div>
    </>
  );
};

export default App;
