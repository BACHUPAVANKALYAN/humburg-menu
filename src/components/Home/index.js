// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="home-mobile-img"
        alt="Home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-desktop-img"
        alt="Home"
      />
    </div>
  </div>
)
export default Home
