import "styles/global.css";
import "styles/main.css";

const doc =
  typeof window !== undefined && typeof document !== "undefined"
    ? document
    : null;

const trueButton = doc?.querySelector("#true-button");
const falseButton = doc?.querySelector("#false-button");

const removeText = () => {
  const mainQuestion = doc?.querySelector("#main-question");
  const trueButtonText = doc?.querySelector("#true-button-text");
  const falseButtonText = doc?.querySelector("#false-button-text");

  if (mainQuestion) {
    mainQuestion.innerHTML = "";
  }
  if (trueButtonText) {
    trueButtonText.innerHTML = "";
  }
  if (falseButtonText) {
    falseButtonText.innerHTML = "";
  }
};

trueButton?.addEventListener("click", () => {
  removeText();
  const correctAnswer = doc?.querySelector("#correct-answer");
  if (correctAnswer) {
    correctAnswer.innerHTML = `
    <div class="result-backdrop">
      <div class="correct-circle" />
    </div>`;
  }
});

falseButton?.addEventListener("click", () => {
  removeText();
  const incorrectAnswer = doc?.querySelector("#incorrect-answer");
  if (incorrectAnswer) {
    incorrectAnswer.innerHTML = `
    <div class="result-backdrop">
      <p class="incorrect">Incorrect!</p>
      <p class="text">David likes summer because he can go swimming</p>
    </div>`;
  }
});
