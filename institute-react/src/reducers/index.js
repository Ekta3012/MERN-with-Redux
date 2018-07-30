import { ENQUIRY,COURSE_SUCCESS } from "../actions";

const initialState= {
                        enquiries:[],
                        courses:[]
                    }

export default function addDataToView(state=initialState,action){
        switch (action.type){
            case ENQUIRY:
                const obj=action.payload
                const enq=state.enquiries.slice()
                enq.push(obj)
                console.log(enq)
                return Object.assign({},{enquiries:enq})
                
            case COURSE_SUCCESS:
                const obj_a=action.payload
                const course=state.courses.slice()
                course.push(obj_a)
                console.log(course)
                return Object.assign({},{courses:course});

            case 'FETCH_COURSES':
            debugger;
                return Object.assign({},{courses:action.payload});
                
            default:
                return initialState
        }
}