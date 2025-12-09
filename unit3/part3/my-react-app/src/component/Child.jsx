function Child({ handler }) {
    return (
        <button
            onClick={handler}
            style={{
                backgroundColor: "red",
                padding: 10,
                borderRadius: 10,
            }}
        >
            This is child component
        </button>
    );
}

export default Child;
