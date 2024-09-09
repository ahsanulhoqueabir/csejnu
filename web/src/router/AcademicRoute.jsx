import Notes from "../pages/Notes";
import QuestionBank from "../pages/QuestionBank";
import ClassRoutine from "../pages/Routine/ClassRoutine";
import AddTutorial from "../pages/Tutorial/AddTutorial";
import Tutorial from "../pages/Tutorial/Tutorial";
import TutorialNew from "../pages/Tutorial/TutorialNew";
import TutorialX from "../pages/Tutorial/TutorialX";
import PrivateRoute from "./PrivateRoute";
import TutorialOnline from "../pages/Tutorial/courseWise/Tutorial";
import Classes from "../pages/Tutorial/courseWise/Classes";
import ClassDetails from "../pages/Tutorial/courseWise/details/ClassDetails";
import ExamCalender from "../pages/ExamCalender/ExamCalender";

const routes = [
  {
    path: "routine",
    element: <ClassRoutine />,
  },
  {
    path: "exam-calender",
    element: <ExamCalender />,
  },
  {
    path: "notes",
    element: (
      <PrivateRoute>
        <Notes />
      </PrivateRoute>
    ),
  },
  {
    path: "tutorialX",
    element: (
      <PrivateRoute>
        <Tutorial />
      </PrivateRoute>
    ),
  },
  {
    path: "tutorial",
    element: (
      <PrivateRoute>
        <TutorialX />
      </PrivateRoute>
    ),
  },
  {
    path: "TutorialNew",
    element: <TutorialNew />,
  },
  {
    path: "addtutorial",
    element: (
      <PrivateRoute>
        <AddTutorial />
      </PrivateRoute>
    ),
  },
  {
    path: "question-bank",
    element: (
      <PrivateRoute>
        <QuestionBank />
      </PrivateRoute>
    ),
  },
  {
    path: "tutorial-online",
    element: (
      <PrivateRoute>
        <TutorialOnline />
      </PrivateRoute>
    ),
  },
  {
    path: "tutorial-online/:name",
    element: (
      <PrivateRoute>
        <Classes />
      </PrivateRoute>
    ),
  },
  {
    path: "tutorial-details/:id",
    element: <ClassDetails />,
  },
];

const AcademicRoute = () => {
  return routes;
};
// export { routes };
export default routes;
