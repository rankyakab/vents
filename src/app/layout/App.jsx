import React from 'react';
import { Route, useLocation } from 'react-router';
import { Container } from "semantic-ui-react";
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import EventDashboard from "../../features/events/eventsDashboard/EventDashboard";
import HomePage from '../../features/home/HomePage';
import NavBar from "../../features/nav/NavBar";
import Sandbox from '../../features/sandbox/Sandbox';

function App() {
  const {key}= useLocation();
  return (
    <>
      <Route exact path='/' component={HomePage}/>
      <Route path={'/(.+)'} render={()=>(

        <div>
            <NavBar/>
              
              <Container className='main'>
                 <Route  path='/sandbox' component={Sandbox}/>
                <Route exact path='/events' component={EventDashboard}/>
                <Route  path='/events/:id' component={EventDetailedPage}/>
                <Route  path={['/createEvent','/manage/:id']} component={EventForm} key={key}/>
              </Container>
       </div>
      )}
      />
        
    </>
  );
}

export default App;
