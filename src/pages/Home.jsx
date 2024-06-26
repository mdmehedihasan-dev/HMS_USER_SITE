import Biography from "../components/Biography"
import Department from "../components/Department"
import Header from "../components/Header"
import MessagesForm from "../components/MessagesForm"

const Home = () => {
  return (
    <div>
        <Header title={"Welcome to Health Care Hospital || Your Trusted Healthcare Hospital 🏥"} imageUrl={'/hero.png'} />
        <Biography imageUrl={'/about.png'}   />
        <Department/>
        <MessagesForm/>
    </div>
  )
}

export default Home
