import React from 'react';
import { Container, Typograpgy, Grow, Grid} from '@material-ui/core';
import Posts from './components/Posts/Post';
import Form from './components/Form/Form';



function App() {
  return (

<Container maxidth ="lg">
<Grow in> 
<Container>
  <Grid container justify= "space-between" alignItems ="stretch" spacing = {3}>
    <Grid item xs={12} sm={7}>
      <Posts>

      </Posts>
    </Grid>
    <Grid item xs={12} sm={4}></Grid>
    <Form>
      
    </Form>
  </Grid>

</Container> 
</Grow>
</Container>

  );
}
export default App;