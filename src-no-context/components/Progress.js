function Progress({ index, numbQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numbQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numbQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
