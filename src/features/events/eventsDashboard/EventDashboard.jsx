import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
//import {sampleData} from '../../../app/api/SampleData'
import { useSelector } from 'react-redux';
 const EventDashboard=()=>{
    // const [events, setEvents]=useState(sampleData);
    const {events} = useSelector(state=>state.events);
    


  return(
      <Grid>
          <Grid.Column width={10}>
               <EventList events={events} />

          </Grid.Column>
          <Grid.Column width={6}>
               <h2>Event filters</h2>
          </Grid.Column>

      </Grid>
  )
}
export default EventDashboard;