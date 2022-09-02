import "styles/global.css";
import "styles/main.css";

interface Quiz {
  quiz: string;
  buttonTexts: [string, string, string, string];
}

const QUIZZES: Quiz[] = [
  {
    quiz: "Troll: I don’t like __________ because it is hot.",
    buttonTexts: ["Winter", "Summer", "Spring", "Fall"],
  },
  {
    quiz: "Troll: 나는 가을을 좋아해. 왜냐하면 시원하거든.",
    buttonTexts: [
      "I like fall because it is warm",
      "I like autumn because it is cool",
      "I like fall because we can chill out.",
      "I like spring because it is cool",
    ],
  },
  {
    quiz: "Q. __________________________<br/> A.I like winter because I can go snowboarding",
    buttonTexts: [
      "That season do you like?",
      "Witch season do you like?",
      "When season do you like?",
      "Which season do you like? ",
    ],
  },
];

let step = 0;
let correctAnswerCount = 0;

const doc =
  typeof window !== "undefined" && typeof document !== "undefined"
    ? document
    : null;

const mainQuestion = doc?.querySelector("#main-question");
const mainBoolQuestion = doc?.querySelector("#main-bool-question");
const correctAnswer = doc?.querySelector("#correct-answer");
const incorrectAnswer = doc?.querySelector("#incorrect-answer");
const buttonOne = doc?.querySelector("#button-one");
const buttonTwo = doc?.querySelector("#button-two");
const buttonThree = doc?.querySelector("#button-three");
const buttonFour = doc?.querySelector("#button-four");

const buttonOneText = doc?.querySelector("#button-one-text");
const buttonTwoText = doc?.querySelector("#button-two-text");
const buttonThreeText = doc?.querySelector("#button-three-text");
const buttonFourText = doc?.querySelector("#button-four-text");

const setInnerHTML = (element: Element | null | undefined, text: string) => {
  if (element) {
    element.innerHTML = text;
  }
};

const removeText = () => {
  setInnerHTML(mainQuestion, "");
  setInnerHTML(mainBoolQuestion, "");
  setInnerHTML(buttonOneText, "");
  setInnerHTML(buttonTwoText, "");
  setInnerHTML(buttonThreeText, "");
  setInnerHTML(buttonFourText, "");
};

const setQuestionMode = (buttonTexts: [string, string, string, string]) => {
  step += 1;
  setInnerHTML(buttonOneText, buttonTexts[0]);
  setInnerHTML(buttonTwoText, buttonTexts[1]);
  setInnerHTML(buttonThreeText, buttonTexts[2]);
  setInnerHTML(buttonFourText, buttonTexts[3]);

  setInnerHTML(mainBoolQuestion, "True? Or False?");
  setInnerHTML(correctAnswer, "");
  setInnerHTML(incorrectAnswer, "");
};

const correct = () => {
  setInnerHTML(
    correctAnswer,
    '<div class="result-backdrop"><div class="correct-circle" /></div>'
  );
  correctAnswerCount += 1;
};

const incorrect = (text: string) => {
  setInnerHTML(
    incorrectAnswer,
    `<div class="result-backdrop"><p class="incorrect">Incorrect!</p><p class="text">${text}</p></div>`
  );
};

buttonOne?.addEventListener("click", () => {
  removeText();
  switch (step) {
    case 0: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[1].buttonTexts);
        setInnerHTML(mainQuestion, "Amelia likes summer because it is warm");
      }, 2000);
      break;
    }
    case 1: {
      incorrect("David likes summer because he can go swimming");
      setTimeout(() => {
        setQuestionMode(QUIZZES[2].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "David don’t like winter because it is cold"
        );
      }, 2000);
      break;
    }
    case 2: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "Amelia likes winter because she can go skiing"
        );
      }, 2000);
      break;
    }
    case 3: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "Amelia suggests to book ski passes in the winter"
        );
      }, 2000);
      break;
    }
    case 4: {
      incorrect(
        "Amelia suggests to book ski passes in the fall not in the winter"
      );
      setTimeout(() => {
        setInnerHTML(
          incorrectAnswer,
          `<div class="result-backdrop"><p class="text">You Got ${correctAnswerCount}/5 Correct!</p></div>`
        );
      }, 2000);
      setTimeout(closeWidget, 4000);
      break;
    }
  }
});

buttonTwo?.addEventListener("click", () => {
  removeText();
  switch (step) {
    case 0: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(mainQuestion, "Amelia likes summer because it is warm");
      }, 2000);
      break;
    }
    case 1: {
      incorrect("David likes summer because he can go swimming");
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "David don’t like winter because it is cold"
        );
      }, 2000);
      break;
    }
    case 2: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "Amelia likes winter because she can go skiing"
        );
      }, 2000);
      break;
    }
    case 3: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "Amelia suggests to book ski passes in the winter"
        );
      }, 2000);
      break;
    }
    case 4: {
      incorrect(
        "Amelia suggests to book ski passes in the fall not in the winter"
      );
      setTimeout(() => {
        setInnerHTML(
          incorrectAnswer,
          `<div class="result-backdrop"><p class="text">You Got ${correctAnswerCount}/5 Correct!</p></div>`
        );
      }, 2000);
      setTimeout(closeWidget, 4000);
      break;
    }
  }
});

buttonThree?.addEventListener("click", () => {
  removeText();
  switch (step) {
    case 0: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(mainQuestion, "Amelia likes summer because it is warm");
      }, 2000);
      break;
    }
    case 1: {
      incorrect("David likes summer because he can go swimming");
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "David don’t like winter because it is cold"
        );
      }, 2000);
      break;
    }
    case 2: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "Amelia likes winter because she can go skiing"
        );
      }, 2000);
      break;
    }
    case 3: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "Amelia suggests to book ski passes in the winter"
        );
      }, 2000);
      break;
    }
    case 4: {
      incorrect(
        "Amelia suggests to book ski passes in the fall not in the winter"
      );
      setTimeout(() => {
        setInnerHTML(
          incorrectAnswer,
          `<div class="result-backdrop"><p class="text">You Got ${correctAnswerCount}/5 Correct!</p></div>`
        );
      }, 2000);
      setTimeout(closeWidget, 4000);
      break;
    }
  }
});

buttonFour?.addEventListener("click", () => {
  removeText();
  switch (step) {
    case 0: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(mainQuestion, "Amelia likes summer because it is warm");
      }, 2000);
      break;
    }
    case 1: {
      incorrect("David likes summer because he can go swimming");
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "David don’t like winter because it is cold"
        );
      }, 2000);
      break;
    }
    case 2: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "Amelia likes winter because she can go skiing"
        );
      }, 2000);
      break;
    }
    case 3: {
      correct();
      setTimeout(() => {
        setQuestionMode(QUIZZES[0].buttonTexts);
        setInnerHTML(
          mainQuestion,
          "Amelia suggests to book ski passes in the winter"
        );
      }, 2000);
      break;
    }
    case 4: {
      incorrect(
        "Amelia suggests to book ski passes in the fall not in the winter"
      );
      setTimeout(() => {
        setInnerHTML(
          incorrectAnswer,
          `<div class="result-backdrop"><p class="text">You Got ${correctAnswerCount}/5 Correct!</p></div>`
        );
      }, 2000);
      setTimeout(closeWidget, 4000);
      break;
    }
  }
});

// falseButton?.addEventListener("click", () => {
//   removeText();
//   switch (step) {
//     case 0: {
//       incorrect("David likes summer because he can go swimming");
//       setTimeout(() => {
//          setQuestionMode(QUIZZES[0].buttonTexts);
//         setInnerHTML(mainQuestion, "Amelia likes summer because it is warm");
//       }, 2000);
//       break;
//     }
//     case 1: {
//       correct();
//       setTimeout(() => {
//          setQuestionMode(QUIZZES[0].buttonTexts);
//         setInnerHTML(
//           mainQuestion,
//           "David don’t like winter because it is cold"
//         );
//       }, 2000);
//       break;
//     }
//     case 2: {
//       incorrect("David don’t like winter because it is cold");
//       setTimeout(() => {
//          setQuestionMode(QUIZZES[0].buttonTexts);
//         setInnerHTML(
//           mainQuestion,
//           "Amelia likes winter because she can go skiing"
//         );
//       }, 2000);
//       break;
//     }
//     case 3: {
//       incorrect("Amelia likes winter because she can go skiing");
//       setTimeout(() => {
//          setQuestionMode(QUIZZES[0].buttonTexts);
//         setInnerHTML(
//           mainQuestion,
//           "Amelia suggests to book ski passes in the winter"
//         );
//       }, 2000);
//       break;
//     }
//     case 4: {
//       correct();
//       setTimeout(() => {
//         setInnerHTML(
//           correctAnswer,
//           `<div class="result-backdrop"><p class="text">You Got ${correctAnswerCount}/5 Correct!</p></div>`
//         );
//       }, 2000);
//       setTimeout(closeWidget, 4000);
//       break;
//     }
//   }
// });

function closeWidget() {
  window.parent.postMessage(
    {
      type: "close",
    },
    "*"
  );
}
