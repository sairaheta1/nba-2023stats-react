import classes from "./app.module.scss"
import Footer from "./components/Footer/footer"
import ScoreboardGrid from "./components/grid/ScoreboardGrid"
import Header from "./components/header/header.jsx"
import Scoreboard from "./components/scoreBoard/scoreboard"

function App() {
  return (
    <>
      <Header></Header>
      <Scoreboard></Scoreboard>
      <Footer></Footer>
    </>
  )
}

export default App
