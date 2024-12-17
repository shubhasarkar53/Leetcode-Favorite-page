import React from "react";

const RoundedProgressBar = ({
  progress = 0, // Progress percentage (0 to 100)
  size = 100, // Size of the circle
  strokeWidth = 10, // Thickness of the progress bar
  color = "#4CAF50", // Progress color
  backgroundColor = "#E0E0E0", // Background circle color
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {/* Percentage Text */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.2,
          fontWeight: "bold",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default RoundedProgressBar;
