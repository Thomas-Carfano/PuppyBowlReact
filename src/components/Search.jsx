import {useState} from 'react'
import "../App.css"
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const getRoot = document.getElementById('root');

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Search = ({allFloofs}) => {
    console.log('Search Test')
    const [storeUserInput, setStoreUserInput] = useState([]);

const searchHandler = (e) => {
    let arr = [];
    e.preventDefault();
console.log(allFloofs)
console.log(e.target[0].value)
const userInput = e.target[0].value

const compare = () => {
    for(let i = 0; i < userInput.length; i++) {
        storeUserInput.push(userInput[i])
        setStoreUserInput(storeUserInput)
    
    
    for(let j = 0; j < allFloofs.length; j++){
        console.log(allFloofs[j].name)
        let loopNames = allFloofs[j].name
        let floofs = allFloofs[j]

        for(let k = 0; k < loopNames.length; k++){
            console.log(loopNames[k])

            if(userInput[i] === loopNames[k]){
                console.log("yay")
                console.log(loopNames)
                arr.push(floofs)
                continue;
            }
        }
    }}

    console.log(arr)
    getRoot.innerHTML = ""
    return getRoot.innerHTML = (
        `<h1>Test</h1>`
    // <>
    // <h1>Puppy Bowl Roster</h1>
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    //     {arr.map((index) => (
    //       <Grid item xs={2} sm={4} md={4} key={index.length}>
    //         <a href="#" >
    //             <Item id={index.id}>
    //                 <b>{index.name}</b>
    //                 <br/>
    //                 Status: {index.status}
    //             </Item>
    //         </a>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
    // </>
    )
}
compare()

}

return (
    <>
    <div>
    <h1>Search Floofs</h1>
    <form onSubmit={searchHandler}>
    <label>Search:<input type="text"></input></label>
    <br/>
    <label><input type="submit"></input></label>
    </form>
    </div>
    </>
)
}; 

export default Search