const DogInfo = ({ dog }) => {
  return (
    <>
      <b>{ dog.breeds[0].name }</b> <br />
      weight in metrics { dog.breeds[0].weight.metric } <br />
      height in metrics { dog.breeds[0].height.metric } <br />
      live for { dog.breeds[0].life_span }
    </>
  )
}

export default DogInfo