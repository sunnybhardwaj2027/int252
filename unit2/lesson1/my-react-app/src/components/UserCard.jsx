export default function UserCard({ name, age, course }){
    return (
        <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Age: {course}</p>
        </div>
    )
}