import "styles/global.css";
import "styles/main.css";

let step = 0;
let correctAnswerCount = 0;

const doc =
  typeof window !== "undefined" && typeof document !== "undefined"
    ? document
    : null;

const trueButton = doc?.querySelector("#true-button");
const falseButton = doc?.querySelector("#false-button");
const mainQuestion = doc?.querySelector("#main-question");
const mainBoolQuestion = doc?.querySelector("#main-bool-question");
const trueButtonText = doc?.querySelector("#true-button-text");
const falseButtonText = doc?.querySelector("#false-button-text");
const correctAnswer = doc?.querySelector("#correct-answer");
const incorrectAnswer = doc?.querySelector("#incorrect-answer");

const setInnerHTML = (element: Element | null | undefined, text: string) => {
  if (element) {
    element.innerHTML = text;
  }
};

const removeText = () => {
  setInnerHTML(mainQuestion, "");
  setInnerHTML(mainBoolQuestion, "");
  setInnerHTML(trueButtonText, "");
  setInnerHTML(falseButtonText, "");
};

const setQuestionMode = () => {
  step += 1;
  setInnerHTML(trueButtonText, "True");
  setInnerHTML(falseButtonText, "False");
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

trueButton?.addEventListener("click", () => {
  removeText();
  switch (step) {
    case 0: {
      correct();
      setTimeout(() => {
        setQuestionMode();
        setInnerHTML(mainQuestion, "Amelia likes summer because it is warm");
      }, 2000);
      break;
    }
    case 1: {
      incorrect("David likes summer because he can go swimming");
      setTimeout(() => {
        setQuestionMode();
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
        setQuestionMode();
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
        setQuestionMode();
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
          `<div class="result-backdrop"><p class="incorrect">총 ${correctAnswerCount}문제 맞췄습니다!</p></div>`
        );
      }, 2000);
      break;
    }
  }
});

falseButton?.addEventListener("click", () => {
  removeText();
  switch (step) {
    case 0: {
      incorrect("David likes summer because he can go swimming");
      setTimeout(() => {
        setQuestionMode();
        setInnerHTML(mainQuestion, "Amelia likes summer because it is warm");
      }, 2000);
      break;
    }
    case 1: {
      correct();
      setTimeout(() => {
        setQuestionMode();
        setInnerHTML(
          mainQuestion,
          "David don’t like winter because it is cold"
        );
      }, 2000);
      break;
    }
    case 2: {
      incorrect("David don’t like winter because it is cold");
      setTimeout(() => {
        setQuestionMode();
        setInnerHTML(
          mainQuestion,
          "Amelia likes winter because she can go skiing"
        );
      }, 2000);
      break;
    }
    case 3: {
      incorrect("Amelia likes winter because she can go skiing");
      setTimeout(() => {
        setQuestionMode();
        setInnerHTML(
          mainQuestion,
          "Amelia suggests to book ski passes in the winter"
        );
      }, 2000);
      break;
    }
    case 4: {
      correct();
      setTimeout(() => {
        setInnerHTML(
          correctAnswer,
          `<div class="result-backdrop"><p class="incorrect">총 ${correctAnswerCount}문제 맞췄습니다!</p></div>`
        );
      }, 2000);
      break;
    }
  }
});
