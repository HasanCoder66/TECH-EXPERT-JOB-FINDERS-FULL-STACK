import React from "react";
import ToolTipRedBox from "../../components/Dashboard/ToolTipRedBox";
import ToolsCard from "../../components/Dashboard/ToolsCard";

const DashTools = () => {
  return (
    <div className="wrapper py-[6rem] px-[4rem]">
      <div className="redBoxContainer">
        <ToolTipRedBox />
      </div>
      <div className="cardContainer flex items-center flex-wrap justify-between gap-5">
        <ToolsCard
          heading={"Web-page to PDF"}
          para={
            "Convert the webpage to PDF with one click! Copy and paste the webpage URL and click the Covert button.!"
          }
          links={"/app/tools/web-to-pdf"}
        />
        <ToolsCard
          heading={"Web-page to Image"}
          para={
            "Convert the webpage to jpg with one click! Copy and paste the webpage URL and click the Covert button.!"
          }
          links={"/app/tools/web-to-image"}
        />
        <ToolsCard
          heading={"Website Screenshots"}
          para={
            "Website screenshots with just one click! Copy and paste the URL of the page you want to snapshot and click the Convert button."
          }
          links={"/app/tools/website-screenshots"}
        />
      </div>
    </div>
  );
};

export default DashTools;
