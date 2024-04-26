import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyJson } from "../utils/model/survey";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function SurveyCore() {
  const [survey, setSurvey] = React.useState(new Model(surveyJson));
  const [pageNo, setPageNo] = React.useState(survey.currentPageNo);
  // const [, setIsRunning] = React.useState(true);
  const [sessionCookies] = useCookies(["sessionId"]);
  const apiCalled = React.useRef(false);

  survey.onCurrentPageChanged.add((_, options) => {
    setPageNo(options.newCurrentPage.visibleIndex);
  });

  // survey.onStarted.add(() => {
  //   setIsRunning(true);
  // });

  // survey.onComplete.add(() => {
  //   setIsRunning(false);
  // });
  const navigate = useNavigate();

  survey.onComplete.add((sender) => {
    if (!apiCalled.current) {
      axios({
        method: "post",
        url: import.meta.env.VITE_API_URL + "/save-response",
        data: {
          response: { response: sender.data, questionDetails: sender.toJSON() },
        },
        headers: {
          "session-id": sessionCookies.sessionId,
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*",
        },
      }).then((res) => {
        if (res.status === 200) {
          // alert("Response saved successfully");
          console.log("Response saved successfully");
        } else {
          console.log("Response not saved successfully");
        }
      });

      apiCalled.current = true;
    }
    navigate("/info");

  });

  // survey.addNavigationItem({
  //   id: "sv-nav-clear-page",
  //   title: "Clear Page",
  //   action: () => {
  //     survey.currentPage.questions.forEach((question: { value: undefined }) => {
  //       question.value = undefined;
  //     });
  //   },
  //   css: "nav-button",
  //   innerCss: "sd-btn nav-input",
  // });

  // survey.css = {
  // question: {
  //   title: "sv-title sv-question__title my-title",
  // },
  // navigation: {
  // complete: "sv-btn sv-footer__complete-btn",
  // prev: "sv-btn sv-footer__prev-btn",
  // next: "sv-btn sv-footer__next-btn my-button sv-nav-next",
  // start: "sv-btn sv-footer__start-btn",
  // preview: "sv-btn sv-footer__preview-btn",
  // edit: "sv-btn sv-footer__edit-btn",
  // },
  // };
  // const decrementPageNo = () => {
  //   setPageNo(pageNo - 1);
  // };
  // const incrementPageNo = () => {
  //   setPageNo(pageNo + 1);
  // };
  // const endSurvey = () => {
  //   survey.completeLastPage();
  // };

  // const getPageSelectorOptions = () => {
  //   const content = [];
  //   for (let i = 0; i < survey.visiblePages.length; i++) {
  //     content.push(
  //       <option key={i} value={i}>
  //         Page {i + 1}
  //       </option>
  //     );
  //   }
  //   return content;
  // };
  // const PageSelector = (
  //   <select
  //     className="navigation-page-selector sd-input sd-dropdown"
  //     value={pageNo}
  //     onChange={(evt) => {
  //       setPageNo(JSON.parse(evt.target.value));
  //     }}
  //   >
  //     {getPageSelectorOptions()}
  //   </select>
  // );
  // const renderButton = (text, func, canRender) => {
  //   if (!canRender) return undefined;
  //   return (
  //     <button className="navigation-button" onClick={func}>
  //       {text}
  //     </button>
  //   );
  // };
  // const renderExternalNavigation = () => {
  //   if (!isRunning) return undefined;
  //   const progressText =
  //     "Page " + (pageNo + 1) + " of " + survey.visiblePages.length;
  //   const progressSpan = (
  //     <span className="navigation-text">{progressText}</span>
  //   );
  //   return (
  //     <div className="navigation-block">
  //       {PageSelector}
  //       <div className="navigation-progress-container">
  //         <div className="navigation-buttons-container">
  //           {renderButton("Previous Page", decrementPageNo, pageNo !== 0)}
  //           {renderButton(
  //             "Next Page",
  //             incrementPageNo,
  //             pageNo !== survey.visiblePages.length - 1
  //           )}
  //           {renderButton(
  //             "Complete",
  //             endSurvey,
  //             pageNo === survey.visiblePages.length - 1
  //           )}
  //         </div>
  //         <div className="navigation-text-container">{progressSpan}</div>
  //       </div>
  //     </div>
  //   );
  // };

  React.useEffect(() => {
    axios({
      method: "get",
      url:
        import.meta.env.VITE_API_URL +
        "/images/getImages?count=20&pageCount=25",
      headers: {
        "session-id": sessionCookies.sessionId,
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      setSurvey(new Model(res.data));
    });

  }, []);



  return (
    <div>
      <Survey currentPageNo={pageNo} model={survey} />
    </div>
  );
}

export default SurveyCore;
