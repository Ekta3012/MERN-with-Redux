import axios from 'axios';


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
    //debugger;
    console.log("resultCourse",result)
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/course',
            data: result
        })
        .then(res=> {
            dispatch({type:'FETCH_COURSES',
            payload:res})
        });
    }
}

