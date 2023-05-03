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
    </>
  )
}

export default App
