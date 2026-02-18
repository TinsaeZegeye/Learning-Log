export default function Status({ bmi }) {
  return (
    <div className="result">
      {bmi ? (
        <div>
          <p>Your BMI: {bmi}</p>
          <p>
            Status:{" "}
            {bmi < 18.5
              ? "Underweight"
              : bmi < 24.9
                ? "Healthy Weight"
                : bmi < 29.9
                  ? " Overweight"
                  : "Obese"}
          </p>
        </div>
      ) : (
        <p>Your BMI goes here</p>
      )}
    </div>
  );
}
