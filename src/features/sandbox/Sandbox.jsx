import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import {  decremnt, increment } from './testReducer';

export default function Sandbox(){
    const dispatch = useDispatch();
    const data = useSelector((state) =>state)
    return (
        <>
           <h1> testing  123</h1>
           <h3> the data is: {data.test.data}</h3>
           <Button color='green' content='increase' onClick={()=>{
              dispatch(increment(20))
           }}/> 
            <Button color='red' content='increase' onClick={()=>{
              dispatch(decremnt(5))
           }}/> 

        </>
    )
}