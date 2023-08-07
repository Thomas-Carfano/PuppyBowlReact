import {useEffect, useState} from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../App.css"
import Search from '../components/Search'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Roster = () => {
    const [allFloofs, setAllFloofs] =useState([]);
    const [moreDetails, setMoreDetails] =useState([]);
    console.log("Roster Page");
    console.log(moreDetails)

useEffect( () => {
    try{
        const GetAllFloofs = async () => {
        const getdata = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft/players`);
        const response = await getdata.json();
        const a = response.data.players
        const allFloofs = a.map((player) => {return (player)})
        setAllFloofs(allFloofs)
        console.log(allFloofs)
    }
    GetAllFloofs();

    } catch (error) {
    console.log(error)
    }
}, [])
      const deleteHandler = async (e) => {
        console.log('delete')
        console.log(e)
        try {
          const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${e}`,
            {
              method: 'DELETE',
            }
          );
          const result = await response.json();
          console.log(result);
        } catch (err) {
          console.error(err);
        }
      }

    const handler = (a) => {
        const getRoot = document.getElementById('root');
        console.log(a.target.id)
        const moreDetails = a.target.id
        setMoreDetails(moreDetails)
        getRoot.innerHTML = ``
    
        const GetDeets = async () => {
              const getDeet = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft/players/${moreDetails}`)
              const a = await getDeet.json();
              const data = a.data.player
              console.log(data.name)
              console.log("test2")
              getRoot.innerHTML = `
              <h1>Name: ${data.name} <h1>
              <h3>Status: ${data.status}</h3>
              <h3>Breed: ${data.breed}</h3>
              <h3>Team: ${data.teamId}</h3>
             <a><img id="floofHighlight" src="${data.imageUrl}"/></a>
             <br/>
             <button onClick="window.location.reload()">Go Back</button>
          `
        }
          GetDeets()
    };

return (
    <>
    <h1>Puppy Bowl Roster</h1>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {allFloofs.map((index) => (
          <Grid item xs={2} sm={4} md={4} key={index.length}>
            <a href="#" onClick={handler}>
                <Item id={index.id}>
                    <b>{index.name}</b>
                    <br/>
                    Status: {index.status}
                    <br/>
                    <button onClick={() => deleteHandler(index.id)}>Delete</button>
                </Item>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Search allFloofs={allFloofs} setAllFLoofs={setAllFloofs}/>
    </>
)

};

export default Roster