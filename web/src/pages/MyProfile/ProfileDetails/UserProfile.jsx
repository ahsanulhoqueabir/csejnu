import React, { useEffect, useState } from "react";
import Banner from "../../../components/Banner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PersonalInfo from "../ProfileInfo/PersonalInfo";
import LoadingPage from "../../Shared/LoadingPage";
import AcademicInfo from "../ProfileInfo/AcademicInfo";
import Miscellaneous from "../ProfileInfo/Miscellaneous";
import useAuth from "../../../hooks/useAuth";
import PageNotFound from "../../Shared/PageNotFound";
import usePrivateFetch from "../../../hooks/fetch/usePrivateFetch";

const UserProfile = () => {
  const { user } = useAuth();
  const [loader, setLoader] = useState(true);
  const [info, setInfo] = useState([]);
  const { loading, data, error } = usePrivateFetch(
    `/students/queryData?email=${user?.email}`
  );
  useEffect(() => {
    if (!loading) {
      setInfo(data.data);
      setLoader(false);
    }
  }, [loading]);

  if (loading || loader) {
    return <LoadingPage />;
  }
  if (error) {
    return <PageNotFound />;
  }
  return (
    <div className="min-h-screen">
      <Banner>My Profile</Banner>
      <Tabs className="py-10 px-3 lg:px-20">
        <TabList>
          <Tab>Personal Information</Tab>
          <Tab>Academic Information</Tab>
          <Tab>Miscellaneous Information</Tab>
        </TabList>
        <TabPanel>
          <PersonalInfo info={info} />
        </TabPanel>
        <TabPanel>
          <AcademicInfo info={info} />
        </TabPanel>
        <TabPanel>
          <Miscellaneous info={info} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default UserProfile;
