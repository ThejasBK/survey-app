// create Survey component with return type JSX.Element

import { useCookies } from "react-cookie";
import SurveyCore from "./SurveyCore";
import React from "react";
import { useNavigate } from "react-router-dom";

const Survey = () => {
  const [sessionCookies] = useCookies(["sessionId"]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!sessionCookies?.sessionId) {
      navigate("/welcome");
    }
  });
  return <SurveyCore />;
};

export default Survey;
