import Banner from "../../../components/Banner";
import Class from "./Class";
import useThisCourse from "../../../hooks/fetch/useThisCourse";
import ClassLoadingSkeleton from "../../../Skeleton/ClassLoadingSkeleton";

const Classes = () => {
  const { classes, loading } = useThisCourse();
  if (loading) {
    return <ClassLoadingSkeleton />;
  }
  return (
    <div>
      <Banner className={"text-xs lg:text-lg font-semibold"}>
        {classes.course.CourseTitle} Classes
      </Banner>
      {classes.classes.length && (
        <section className="px-5 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {classes.classes.map((classItem, index) => (
            <Class key={index} item={classItem} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Classes;
