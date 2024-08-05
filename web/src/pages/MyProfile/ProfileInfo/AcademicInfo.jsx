import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EduTimeline from "../../../Portfolio/EduTimeline"; // Corrected file name casing
import StudentIDCard from "../../StudentID/StudentIDCard";
import Headline from "../../../components/Headline";
import Result from "./Result";

const AcademicInfo = ({ info }) => {
  return (
    <div>
      <Headline>Academic Info</Headline>
      <Tabs>
        <TabList>
          <Tab>ID Card</Tab>
          <Tab>Timeline</Tab>
          <Tab>Result</Tab>
        </TabList>
        <TabPanel>
          <div className="flex justify-center">
            <StudentIDCard item={info}></StudentIDCard>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lg:w-1/2 mx-auto">
            <EduTimeline academics={info.education}></EduTimeline>
          </div>{" "}
        </TabPanel>
        <TabPanel>
          <div className="flex">
            <Result results={info.results} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AcademicInfo;
