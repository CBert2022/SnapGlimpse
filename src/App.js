import React, { useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import header from './images/Header.png';
import Posts from "./components/Posts/Posts.js";
import Form2 from "./components/Form2/Form2";
import useStyles from './styles'






const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    },[ currentId, dispatch])

    return (
        <>
      
        <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit" style={{ backgroundImage: `url(${header})`, backgroundSize: 'cover', borderRadius: '15px', marginBottom: '10px'}}>
        <Typography className={classes.heading} variant="h3" align="center" style={{ color: 'white'}}>
        Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid direction='column-reverse' className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form2 currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
        </>
    )
}

export default App;