/* eslint-disable react/prop-types */

const Header = ({title,imageUrl}) => {
  return (
   <>
    <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum commodi officiis iste illum eius doloremque architecto, cupiditate eos praesentium perferendis molestias quasi porro delectus saepe odit cum ducimus fugiat fuga nobis consectetur recusandae numquam nisi. Aut repellat veniam temporibus id omnis praesentium vel, animi ab beatae quidem asperiores quae voluptate.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            {/* <img src="/Vector.png" alt="vector" />  */}
          </span>
        </div>
      </div>
   
   </>
  )
}

export default Header
