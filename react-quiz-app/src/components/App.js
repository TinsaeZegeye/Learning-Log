import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const SEC_PER_QUESTION = 10;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
      };

    case "userAnswer":
      const currentQuestion = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index++, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        highScore: state.highScore,
        status: "ready",
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining--,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Unknown Action!");
  }
}

export default function App() {
  const [
    { questions, status, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0,
  );

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:9000/questions");

        if (!res.ok) throw new Error("Error while Fetching");

        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);
  return (
    <div className="App">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              points={points}
              numQuestions={numQuestions}
              maxPossiblePoint={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions.at(index)}
              dispatch={dispatch}
              answer={answer}
            />

            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />

              <NextButton
                answer={answer}
                dispatch={dispatch}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <FinishScreen
            maxPossiblePoints={maxPossiblePoints}
            points={points}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
