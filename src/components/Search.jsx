import {useState} from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../App.CSS"

const getRoot = document.getElementById('root')

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
    const [storeIndividualDogs, setStoreDogs] = useState([]);

const searchHandler = (e) => {
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

        for(let k = 0; k < loopNames.length; k++){
            console.log(loopNames[k])
            setStoreDogs(storeIndividualDogs)

            if(userInput[i] === loopNames[k]){
                console.log("yay")
                console.log(loopNames)
                let arr = [];
                arr.push(loopNames)
                console.log(arr)
                
            }
        }
        
    }}
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