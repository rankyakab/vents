import React,{useState} from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../eventsAction';
export default function EventForm({match,history}){
   
    const selectedEvent = useSelector(state => state.events.events.find(e=>e.id===match.params.id));
    const innitialValues = selectedEvent ?? {
        title:'',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:'',
        id : cuid(),
        hostedBy:'Ranky',
        attendees :[],
        hostPhotoURL:'/assets/user.png'
    }

    const [values, setValues]=useState(innitialValues);
   const dispatch = useDispatch();
    function handleFormSubmit(){
        selectedEvent? dispatch(updateEvent({...selectedEvent, ...values})): 
        dispatch(createEvent({...values}));
        history.push('/events');
      
      
    }
    function handleInputChange(e){
        const {name, value}=e.target;
        setValues({...values, [name] : value})
    }
    return(
        <Segment clearing>
            <Header content={selectedEvent?'Edit  Event':'Create new event'}/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input 
                    type='text' 
                    placeholder='Event title'
                    name='title'
                    value={values.title}
                    onChange={(e)=>handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input type='text'
                     placeholder='Category '
                     name='category'
                     value={values.category}
                    onChange={(e)=>handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input type='text'
                     placeholder='Description'
                     name='description'
                     value={values.description}
                    onChange={(e)=>handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input type='text'
                     placeholder='City'
                     name='city'
                     value={values.city}
                    onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type='text'
                     placeholder='Venue'
                     name='venue'
                     value={values.venue}
                    onChange={(e)=>handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input type='date' 
                    placeholder='Date '
                    value={values.date}
                    name='date'
                    onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>
                <Button  type='submit' positive floated='right' content='submit'/>
                <Button as={Link} to='/events' type='submit' floated='right' content='cancel'/>
            </Form>
        </Segment>
    )
}