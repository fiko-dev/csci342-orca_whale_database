import './Card.css';
function Card() {
  
    return (
        <div className="card">
            <img src="./src/assets/coast-background.jpg" />
            <div className='card-content'>
                <div className='text'>
                    <h1 >Reported Sightings!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <button className="button">See Posts</button>
                </div>
                <img src="./src/assets/card.jpg"/>
            </div>
        </div>
    )
  }
  
  export default Card