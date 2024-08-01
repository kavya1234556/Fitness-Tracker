const SleepSquare = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.7em"
    height="2.7em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path
        stroke="#25054d"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"
      />
      <path fill="#25054d" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        stroke="#25054d"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2m10 10c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"
      />
      <path
        stroke="#25054d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 4 3.464-2L19 7.464l3.464-2m-8.416.036 1.732 1-2.732.732 1.732 1"
      />
    </g>
  </svg>
);
export default SleepSquare;
