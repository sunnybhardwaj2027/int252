function Car({ carInfo, years }) {
  return (
    <div>
      
      <p>
        My favorite car is {carInfo.name} {carInfo.model}
      </p>

      <p>
        {`Manufacturing years are: ${years[0]}, ${years[1]} and ${years[2]}`}
      </p>
    </div>
  )
};

export default Car;