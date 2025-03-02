function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  if (index < numbQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
}

export default NextButton;
