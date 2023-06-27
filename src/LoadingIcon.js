import styles from "./logo.module.css";

export const SimpleLoadingIcon = ({
	color = "currentColor",
	thickness = 2
}) => (
  <svg
    className={styles.svg}
    viewBox="0 0 24 24"
    xmlns="<http://www.w3.org/2000/svg>"
  >
    <circle
      className={styles.path}
      cx="12"
      cy="12"
      r="8"
      strokeLinecap="round"
      strokeWidth={thickness}
      stroke={color}
      fill="none"
    />
  </svg>
);