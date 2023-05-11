import classes from "./app.module.scss"
import Footer from "./components/Footer/footer"
import TeamGrid from "./components/grid/TeamGrid.jsx"
import Header from "./components/header/header.jsx"


function App() {
  return (
    <>
      <Header></Header>
      <TeamGrid></TeamGrid>
      <Footer></Footer>
      {/* NEXT THINGS TO WORK ON:
          - setting up react dom
          - fetching data from each team's players
          - what kind of stats I want to retreive
          - links for each team*/}
    </>

  )
}

export default App
