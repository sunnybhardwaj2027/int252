import useToggle from "./useToggle";

export function ToggleButton() {
  const [isOn, toggle] = useToggle(false);

  return (
    <button onClick={toggle} style={styles.btn}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

const styles = {
  btn: {
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  }
};
