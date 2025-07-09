import "./Marquee.css"

const Marquee = ({ text = "JK-MOBILE • WEB DEVELOPMENT • MOBILE APPS • UI/UX DESIGN • INNOVATION • " }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  )
}

export default Marquee
