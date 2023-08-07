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

const Search = ({allFloofs, setAllFLoofs}) => {
    console.log('Search Test')
    const [storeUserInput, setStoreUserInput] = useState([]);

const searchHandler = (e) => {
    e.preventDefault();

const userInput = e.target[0].value

const compare = () => {
    const filteredFloofs = [];

    for(let i = 0; i < userInput.length; i++) {
        storeUserInput.push(userInput[i])
        setStoreUserInput(storeUserInput)
    
    
        for(let j = 0; j < allFloofs.length; j++){
        
            let loopNames = allFloofs[j].name
            let floof = allFloofs[j]

            for(let k = 0; k < loopNames.length; k++){
            

                if(userInput[i] === loopNames[k]){
                
                    // arr.push(floofs)
                    console.log(floof)
                    filteredFloofs.push(floof)
        
                    continue;
                }
            }
        }
    }

    setAllFLoofs(filteredFloofs)
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
)}; 

export default Search