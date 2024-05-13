import Biography from "../components/Biography"
import Header from "../components/Header"

const About = () => {
  return (
    <>
    <Header title={"Learn more About Health Care Hospital🏥"} imageUrl={'../../public/about.png'} />
    <Biography  imageUrl={'../../public/whoweare.png'} />
    </>
  )
}

export default About