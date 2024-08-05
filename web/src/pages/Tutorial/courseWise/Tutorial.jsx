import Banner from "../../../components/Banner";
import useTutorial from "../../../hooks/fetch/useTutorial";
import LoadingPage from "../../Shared/LoadingPage";
import Playlist from "./Playlist";

const Tutorial = () => {
  const { Alltutorials, loading } = useTutorial();
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <Banner>Tutorial</Banner>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-5 lg:px-24 py-10">
        {Alltutorials.map((course, index) => (
          <Playlist course={course} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Tutorial;
