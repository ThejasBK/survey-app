import { createBrowserRouter } from "react-router-dom";
import Survey from "../components/Survey";
import SurveyCore from "../components/SurveyCore";
import DemoGraphics from "../components/DemoGraphics";
import Welcome from "../components/Welcome";
import Landing from "../components/Landing";
import ThankYou from "../components/ThankYou";

const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/info",
    element: <DemoGraphics />,
  },
  {
    path: "/survey",
    element: <Survey />,
  },
  {
    path: "surveycore",
    element: <SurveyCore />,
  },
  {
    path: "thank-you",
    element: <ThankYou />,
  },
]);

export default router;
