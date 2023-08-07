import {useState} from 'react'

const HomePage = () => {
    const [firstFloof, setFirstFloof] =useState('');
    console.log("Home Page");


    useState( () => {
        try{
            const GetFirstFloof = async () => {
            const getdata = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft/players`);
            const response = await getdata.json();
            const firstFloof = response.data.players
            setFirstFloof(firstFloof[0])
            console.log(firstFloof[0].name)
            console.log(firstFloof[0].breed)
        }
            GetFirstFloof();

        } catch (error) {
        console.log(error)
        }
    }, [])

    console.log(firstFloof)
    return(
        <>
        <h1>Floof of the day</h1>
        <h3>{firstFloof.name}</h3>
        <img id="floofHighlight" src={firstFloof.imageUrl} />
        <p>Breed: {firstFloof.breed}</p>
        <p>Team: {firstFloof.teamId}</p>
        </>
    )
};

export default HomePage