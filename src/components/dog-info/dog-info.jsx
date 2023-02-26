import './dog-info.css'

const DogInfo = ({ dog }) => {

  const dogInfo = dog.breedDetails

  return (
    <div>
      <p><b>{ dog.name }</b></p>
      <p><b>weight:</b> {dogInfo.weight.min}-{dogInfo.weight.max} kg</p>
      <p><b>height:</b> {dogInfo.height.min}-{dogInfo.height.max} cm</p>
      <p><b>live for</b> {dogInfo.lifeSpan.min}-{dogInfo.lifeSpan.max} years</p>
      { dogInfo.bredFor ? <p><b>bred for</b> { dogInfo.bredFor }</p> : null }
      { dogInfo.breedGroup ? <p><b>breed group</b> { dogInfo.breedGroup }</p> : null }
      { dogInfo.temperament ? <p><b>temperament</b> { dogInfo.temperament }</p> : null }
      { dogInfo.origin ? <p><b>origin</b> { dogInfo.origin }</p> : null }
    </div>
  )
}

export default DogInfo