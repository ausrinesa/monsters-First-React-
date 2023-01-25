import './card-style.css';

const Card = ({monster})=> {
        const{id, name, email} = monster;
            return(
            <div className='card-container' key={id}>
                <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`}  />
                <h2>{name}</h2>
                <p>{email}</p>
        </div>
            )
        }

// the alt in the img is for accesibility. The props passes into the card list.

export default Card;