import React from 'react';
import EventListItem from './EventListItem';
export default function EventList({events,selectEvent,deleteEvent}){
    console.log(events)
    return(
        <>
        {events.map(function(event){
            return <EventListItem key={event.id} event={event} selectEvent={selectEvent} deleteEvent={deleteEvent}/>;
        })}
        
        
        </>
    )
}