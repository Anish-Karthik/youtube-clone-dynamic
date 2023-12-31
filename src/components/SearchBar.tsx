import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'
const searchBarBGColor = '#000';
const searchBarColor = '#fff';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!searchTerm) return;
    navigate(`/search/${searchTerm}`);
    // setSearchTerm('');  
  }

  return (
    <Paper
      component="form"
      onSubmit={(e) => {handleSubmit(e)}}
      sx={{ 
        backgroundColor: searchBarBGColor,
        color: searchBarColor,
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: {xs: 0, sm: 5},
      }}
    >
      <input
        style={{backgroundColor: searchBarBGColor, color: searchBarColor}}
        className='search-bar'
        placeholder="Search..."
        onChange={(e) => {setSearchTerm(e.target.value)}}
        value={searchTerm}
      />
      <IconButton type="submit" sx={{ p: '10px', color:'red' }} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar