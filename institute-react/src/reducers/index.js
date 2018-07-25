import { ENQUIRY,COURSE } from "../actions";

const initialState= {
                        enquiries:[],
                        courses:[]
                    }

export function addDataToView(state=initialState,action){
        switch (action.type){
            case ENQUIRY:
                const obj=action.payload
                const enq=state.enquiries.slice()
                enq.push(obj)
                console.log(enq)
                return Object.assign({},{enquiries:enq})
                break;
            case COURSE:
                const obj_a=action.payload
                const course=state.courses.slice()
                course.push(obj_a)
                console.log(course)
                return Object.assign({},{courses:course})
                break;
            default:
                return initialState
        }
}