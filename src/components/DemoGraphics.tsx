import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const DemoGraphics = (): JSX.Element => {
  const [survey, setSurvey] = React.useState(new Model({}));
  const navigate = useNavigate();
  const [sessionCookies] = useCookies(["sessionId"]);

  survey.onComplete.add((sender) => {
    axios({
      url: import.meta.env.VITE_API_URL + "/survey/save/demographics",
      method: "post",
      data: sender.data,
      headers: {
        "session-id": sessionCookies.sessionId,
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
    });
    navigate("/thank-you");
  });

  React.useEffect(() => {
    axios({
      method: "get",
      url: import.meta.env.VITE_API_URL + "/survey/demographics",
      headers: {
        "session-id": sessionCookies.sessionId,
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      setSurvey(new Model(res.data));
    });
  }, []);

  return <Survey model={survey} />;
};

export default DemoGraphics;
