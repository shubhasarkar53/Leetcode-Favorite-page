import React from "react";

const ProgressBar = ({ easy, medium, hard, totalEasy, totalMedium, totalHard }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  // Calculate progress
  const easyProgress = (easy / totalEasy) * 100 || 0;
  const mediumProgress = (medium / totalMedium) * 100 || 0;
  const hardProgress = (hard / totalHard) * 100 || 0;

  // Convert percentages to stroke-dasharray values
  const easyOffset = circumference * (1 - easyProgress / 100);
  const mediumOffset = easyOffset - (circumference * mediumProgress) / 100;
  const hardOffset = mediumOffset - (circumference * hardProgress) / 100;

  return (
    <div className="flex flex-col items-center">
      <svg width="150" height="150" className="rotate-90">
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="transparent"
          stroke="gray"
          strokeWidth="10"
        />
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="transparent"
          stroke="cyan"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={easyOffset}
          strokeLinecap="round"
        />
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="transparent"
          stroke="yellow"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={mediumOffset}
          strokeLinecap="round"
        />
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="transparent"
          stroke="red"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={hardOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="mt-4 text-center">
        <p className="text-lg font-bold">100% Acceptance</p>
        <p className="text-sm">Easy: {easy}/{totalEasy}</p>
        <p className="text-sm">Medium: {medium}/{totalMedium}</p>
        <p className="text-sm">Hard: {hard}/{totalHard}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
