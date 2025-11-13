function Daughter({ children }) {
  const style = {
    backgroundColor: 'lightblue',
    padding: '10px',
    margin: '10px 0',
  };

  return (
    <div style={style}>
      <h2>Daughter</h2>
      {children}
    </div>
  );
}

export default Daughter;