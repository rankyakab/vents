import React from 'react';
import { Route } from 'react-router';
import { Container } from "semantic-ui-react";
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import EventDashboard from "../../features/events/eventsDashboard/EventDashboard";
import HomePage from '../../features/home/HomePage';
import NavBar from "../../features/nav/NavBar";

function App() {

  return (
    <>
      <Route exact path='/' component={HomePage}/>
      <Route path={'/(.+)'} render={()=>(

        <div>
            <NavBar/>
              
              <Container className='main'>
                
                <Route exact path='/events' component={EventDashboard}/>
                <Route  path='/events/:id' component={EventDetailedPage}/>
                <Route  path={['/createEvent','/manage/:id']} component={EventForm}/>
              </Container>
       </div>
      )}
      />
        
    </>
  );
}

export default App;
