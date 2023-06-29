import'./Contact.css'

export const Contact = () => {

    return(
        <div className='contact'>
            <div className='ime'>
           <h3>Ime</h3>
           <input></input>
           </div>

           <div className='prezime'>
           <h3>Prezime</h3>
           <input></input>
           </div>

           <div className='tel'>
           <h3>Telefon</h3>
           <input></input>
           </div>

           <div className='poruka'>
           <h3>Poruka</h3>
           <input></input>
           </div>

           <button className='send'>Send</button>
        </div>
    )
}