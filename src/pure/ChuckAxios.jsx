import { Container, IconButton, Typography } from '@mui/material';
import {ThumbDownOffAlt, ThumbUpOffAlt, ThumbUpAlt, ThumbDownAlt} from '@mui/icons-material/';
import React, { useState, useEffect } from 'react';
import { getJoke } from '../services/axios-service';



const ChuckAxios = () => {

    const [joke, setJoke] = useState(null);
    const [like, setLike] = useState(false);
    const [unlike, setUnlike] = useState(false);
    const [liked, setLiked] = useState(0);
    const [unliked, setUnliked] = useState(0);
    const obtainJoke = () => {
        getJoke().then(response => {
            console.log(response.data);
            setJoke(response.data.value);
        })
        setLike(false);
        setUnlike(false);
    }

    const handleLike = () => {
        if(like)  {
            setLike(false);
            setLiked(liked - 1)
        }
        else if(!like) {
            if(unlike) {
                setLike(true)
                
            setUnliked(unliked - 1);
            setLiked(liked + 1)
            }else {
                setLike(true)
                setLiked(liked + 1)
            }
                     
        }
        setUnlike(false);
    }
    const handleUnlike = () => {
        if(unlike)  {
            setUnlike(false);
            setUnliked(unliked - 1)
        }
        
        else if(!unlike) {
            if(like) {
                setUnlike(true)
                
                setLiked(liked - 1);
                setUnliked(unliked + 1)
            }else {
                setUnlike(true)
                setUnliked(unliked + 1)
            }
                       
        }
        setLike(false);
    }

  return (
    <div>
        <button onClick={obtainJoke}>Get joke</button>
    
        {
            
            joke && (
                <Container maxWidth="sm" style={{backgroundColor: '#AFD0BF'}}>
                <Typography>
                    {joke}
                </Typography>    
                <IconButton onClick={handleLike}>
                    {like ? (<ThumbUpAlt style={{color: '#42a5f5'}}/>) : (<ThumbUpOffAlt/>)}
                </IconButton>
                <IconButton onClick={handleUnlike}>
                    {unlike ? (<ThumbDownAlt style={{color: '#ef5350'}}/>) : (<ThumbDownOffAlt/>)}
                </IconButton>
                 <h2>Jokes liked: {liked}</h2>
                 <h2>Jokes unliked: {unliked}</h2>
                </Container>        
            )
            
        }

        
    </div>
  )
}

export default ChuckAxios;