import "styles/global.css";
import "styles/main.css";

interface Quiz {
  quiz: string;
  buttonTexts: [string, string, string, string];
}

const QUIZZES: Quiz[] = [
  {
    quiz: "Choose the correct response to the troll’s question. <br />Troll: I don’t like __________ because it is hot.",
    buttonTexts: ["Winter", "Summer", "Spring", "Fall"],
  },
  {
    quiz: "Choose the correct response to the troll’s question. <br />Troll: 나는 가을을 좋아해. 왜냐하면 시원하거든.",
    buttonTexts: [
      "I like fall because it is warm",
      "I like autumn because it is cool",
      "I like fall because we can chill out.",
      "I like spring because it is cool",
    ],
  },
  {
    quiz: "Choose the correct response to the troll’s question. <br />Troll: Do you like winter? Why?",
    buttonTexts: [
      "I like winter because it is hot.",
      "I don’t like winter because I can’t go skiing.",
      "I like winter because I can go snowboarding",
      "I don’t like winter because it is too hot.",
    ],
  },
  {
    quiz: "How would you ask the troll to get the following response.<br/>Q. __________________________<br/>A. I like winter because I can go snowboarding",
    buttonTexts: [
      "That season do you like?",
      "Witch season do you like?",
      "When season do you like?",
      "Which season do you like?",
    ],
  },
  {
    quiz: "Choose the correct word to the following blank.<br/>I (a)_____  fall (b) ________ of the cool weather.",
    buttonTexts: [
      "(a) swimming (b) because",
      "(a) because (b) like",
      "(a) like (b) because",
      "(a) don’t like (b) due to",
    ],
  },
];

const ANSWERS: string[] = ["1", "2", "3", "4", "5"];

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
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 1: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 2: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 3: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 4: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(
          correctAnswer,
          `<div class="result-backdrop"><p class="text">You Got ${correctAnswerCount}/5 Correct!</p></div>`
        );
      }, 2000);
      setTimeout(() => closeWidget(), 4000);
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
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 1: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 2: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 3: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 4: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(
          correctAnswer,
          `<div class="result-backdrop"><p class="text">You Got ${correctAnswerCount}/5 Correct!</p></div>`
        );
      }, 2000);
      setTimeout(() => closeWidget(), 4000);
      break;
    }
  }
});

buttonThree?.addEventListener("click", () => {
  removeText();
  switch (step) {
    case 0: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 1: {
      correct();
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 2: {
      correct();
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 3: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 4: {
      correct();
      setTimeout(() => {
        setInnerHTML(
          correctAnswer,
          `<div class="result-backdrop"><p class="text">You Got ${correctAnswerCount}/5 Correct!</p></div>`
        );
      }, 2000);
      setTimeout(() => closeWidget(), 4000);
      break;
    }
  }
});

buttonFour?.addEventListener("click", () => {
  removeText();
  switch (step) {
    case 0: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 1: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 2: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 3: {
      correct();
      setTimeout(() => {
        setInnerHTML(mainQuestion, QUIZZES[step + 1].quiz);
        setQuestionMode(QUIZZES[step + 1].buttonTexts);
      }, 2000);
      break;
    }
    case 4: {
      incorrect(ANSWERS[step]);
      setTimeout(() => {
        setTimeout(() => {
          setInnerHTML(
            correctAnswer,
            `<div class="result-backdrop"><p class="text">You Got ${correctAnswerCount}/5 Correct!</p></div>`
          );
        }, 2000);
      }, 2000);
      setTimeout(() => closeWidget(), 4000);
      break;
    }
  }
});

function closeWidget() {
  window.parent.postMessage(
    {
      type: "close",
    },
    "*"
  );
}
