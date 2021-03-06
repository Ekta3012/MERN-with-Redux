import axios from 'axios';
import { postCourseAPI,getCourses } from "../api";

export const ENQUIRY ="ENQUIRY";
export const COURSE_REQUEST="COURSE_REQUEST";
export const COURSE_SUCCESS = "COURSE_SUCCESS";
export const COURSE_ERROR = "COURSE_ERROR"

export const addEnquiryData  =  (input)   =>  ({
    type:ENQUIRY,
    payload:input
})

export const addCourseData = (result) => {
    return dispatch => {
        dispatch({
            type:COURSE_SUCCESS,
            payload:result
        })
    }
}

// export const addCourseData  =   (result) => (dispatch)=> dispatch({
//     type:COURSE_SUCCESS,
//     payload:result
// });

/* const errorAction = (err) =>({
    type:'ERROR',
    payload:err
})
*/

export const getCourseDataFromDb = (result)=>{
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/showcourses',
            data: result
        })
        .then(res=> {
            dispatch({
                type:'FETCH_COURSES',
                payload:res.data
            });
        });
    }
}

export const postCourseDataInDb =   (data)  =>  {
    return (dispatch)   =>  {
        postCourseAPI(data)
        .then(res =>{
            dispatch({
            type:'COURSE_SUCCESS',
            payload: {
                name:res.data.name,
                description:res.data.description
            }
            })
        })  
    }
}

