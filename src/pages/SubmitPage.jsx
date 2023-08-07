import {useState} from 'react'

const Submit = () => {
    console.log('Submit Page')
  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        console.log(event.target[2].value)
        console.log(event.target[3].value)
        console.log(event.target[4].value)

        
        const createFloof = async () => {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    name: event.target[0].value,
                    breed: event.target[1].value,
                    status: event.target[2].value,
                    ImageUrl: event.target[3].value,
                    Team: event.target[4].value,
    
                })
            };
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft/players`, requestOptions);
            const data = await response.json();
            console.log(data)
        }
        createFloof();
      };


    return(
        <>
        <h1>Submit New Contestant</h1>
        <form onSubmit={handleSubmit}>
            <label>Name: <input type="text" required></input ></label><br/>
            <label>Breed: <input type="text" required></input></label><br/>
            <label>Status 
                <select name="cars" id="cars">
                    <option value="field">Field</option>
                    <option value="bench">Bench</option>
                </select>
            </label><br/>
            <label>ImageUrl: <input type="url" required></input></label><br/>
            <label>Team: <input  type="text" required></input></label><br/>
            <label><input type="submit" value="Submit Contestant" required></input></label><br/>
        </form>
        </>
    )
};
Submit()

export default Submit