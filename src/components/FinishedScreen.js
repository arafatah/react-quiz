function FinishedScreen(points, maxPossiblePoints) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div className="result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(percentage)})
    </div>
  );
}

export default FinishedScreen;
