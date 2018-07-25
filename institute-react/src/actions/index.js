export const ENQUIRY ="ENQUIRY";
export const COURSE="COURSE";

export const addEnquiryData  =  (input)   =>  ({
    type:ENQUIRY,
    payload:input
})

export const addCourseData  =  (input)   =>  ({
    type:COURSE,
    payload:input
})