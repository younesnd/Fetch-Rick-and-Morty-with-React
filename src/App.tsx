import './App.css'
import AnimalExample from './components/AnimalExampleWithApiStates'
import MortyComponent from './components/MortyComponents/MortyComponentList'
function App() {
return (
<div className="App mx-auto max-w-6xl text-center my-8">
<h1 className="font-semibold text-2xl"></h1>
<MortyComponent />
</div>
)
}
export default App