import React from 'react';
import EventListItem from './EventListItem';
export default function EventList(props){
    return(
        <>
        {props.events.map(function(event){
            return <EventListItem key={event.id} event={event}/>;
        })}
        
        
        </>
    )
}