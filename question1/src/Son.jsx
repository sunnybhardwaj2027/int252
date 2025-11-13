function Son({ children }) {
  const style = {
    backgroundColor: 'red',
    padding: '10px',
    margin: '10px 0',
  };

  return (
    <div style={style}>
      <h2>Son</h2>
      {children}
    </div>
  );
}

export default Son;