import PetCard from '../src/components/PetCard.jsx'

function App (){
  return(
    <div>
      <PetCard
      nome="Bob"
      especie="Pug"
      />
      <PetCard
      nome="heroi"
      especie="Maltês"
      />
      <PetCard
      nome="burnys"
      especie="Doberman"
      />

    </div>
  )
}
export default App;