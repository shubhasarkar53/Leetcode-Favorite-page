import React from "react";

function ProgressCircle() {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 top-0 h-full w-full fill-transparent"
    >
      <defs>
        <clipPath id="bar-mask">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.3622 21.3622C5.54592 37.1784 5.54592 62.8216 21.3622 78.6378C21.9479 79.2236 21.9479 80.1734 21.3622 80.7591C20.7764 81.3449 19.8266 81.3449 19.2408 80.7591C2.25303 63.7713 2.25303 36.2287 19.2408 19.2409C36.2286 2.25305 63.7713 2.25305 80.7591 19.2409C97.7469 36.2287 97.7469 63.7713 80.7591 80.7591C80.1733 81.3449 79.2236 81.3449 78.6378 80.7591C78.052 80.1734 78.052 79.2236 78.6378 78.6378C94.454 62.8216 94.454 37.1784 78.6378 21.3622C62.8216 5.54594 37.1784 5.54594 21.3622 21.3622Z"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#bar-mask)">
        <g
          className="duration-400 origin-center translate-x-0 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)]"
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            className="fill-transparent qa_6R aH1ck duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-[#F0F0F0] dark:stroke-[#434343]"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            className="fill-transparent qa_6R aH1ck duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-sd-success"
          />
        </g>
        <g
          className="duration-400 origin-center translate-x-0 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)]"
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            className="fill-transparent qa_6R aH1ck duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-[#F0F0F0] dark:stroke-[#434343]"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            className="fill-transparent qa_6R aH1ck duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-sd-primary/20"
          />
        </g>
        <g
          className="duration-400 origin-center translate-x-0 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)]"
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            className="fill-transparent qa_6R duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-[#F0F0F0] dark:stroke-[#434343]"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            className="fill-transparent qa_6R duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-transparent"
          />
        </g>
      </g>
    </svg>
  );
}

export default ProgressCircle;
