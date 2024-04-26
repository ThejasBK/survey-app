export const surveyJson = {
  title: "Survery App",
  logoPosition: "left",
  focusFirstQuestionAutomatic: false,
  pages: [
    {
      name: "page1",
      maxImageWidth: 200,
      maxImageHeight: 133,
      elements: [
        {
          type: "imagepicker",
          name: "animals",
          title: "Which animals would you like to see in real life?",
          description: "Please select all that apply.",
          isRequired: true,
          choices: [
            {
              name: "basic_0.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_0.jpg",
              value: "basic_0.jpg",
            },
            {
              name: "basic_1.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_1.jpg",
              value: "basic_1.jpg",
            },
            {
              name: "basic_10.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_10.jpg",
              value: "basic_10.jpg",
            },
            {
              name: "basic_100.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_100.jpg",
              value: "basic_100.jpg",
            },
            {
              name: "basic_11.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_11.jpg",
              value: "basic_11.jpg",
            },
            {
              name: "basic_12.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_12.jpg",
              value: "basic_12.jpg",
            },
            {
              name: "basic_13.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_13.jpg",
              value: "basic_13.jpg",
            },
            {
              name: "basic_14.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_14.jpg",
              value: "basic_14.jpg",
            },
            {
              name: "basic_15.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_15.jpg",
              value: "basic_15.jpg",
            },
            {
              name: "basic_16.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_16.jpg",
              value: "basic_16.jpg",
            },
            {
              name: "basic_17.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_17.jpg",
              value: "basic_17.jpg",
            },
            {
              name: "basic_18.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_18.jpg",
              value: "basic_18.jpg",
            },
            {
              name: "basic_19.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_19.jpg",
              value: "basic_19.jpg",
            },
            {
              name: "basic_2.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_2.jpg",
              value: "basic_2.jpg",
            },
            {
              name: "basic_20.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_20.jpg",
              value: "basic_20.jpg",
            },
            {
              name: "basic_21.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_21.jpg",
              value: "basic_21.jpg",
            },
            {
              name: "basic_22.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_22.jpg",
              value: "basic_22.jpg",
            },
            {
              name: "basic_23.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_23.jpg",
              value: "basic_23.jpg",
            },
            {
              name: "basic_24.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_24.jpg",
              value: "basic_24.jpg",
            },
            {
              name: "basic_25.jpg",
              imageLink:
                "https://image-set-lq.s3.amazonaws.com/survey-photos/antonyms/basic/basic_25.jpg",
              value: "basic_25.jpg",
            },
          ],
          showLabel: true,
          multiSelect: true,
          fullWidth: true,
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "rating",
          name: "nps-score",
          title: {
            default: "How was your experience with UI today?",
          },
          rateCount: 11,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: {
            default: "Very unlikely",
          },
          maxRateDescription: {
            default: "Very likely",
          },
        },
      ],
    },
  ],
  showQuestionNumbers: "off",
};
