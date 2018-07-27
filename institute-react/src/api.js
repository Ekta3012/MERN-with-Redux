import axios from 'axios';

export const postCourseAPI  =   (formData)  =>  {
    return axios({
        method: 'post',
        url: 'http://localhost:3001/course',
        data: formData
    })
}

export const getCourses = () => {
    return axios.get('http://localhost:3001/showCourses')
    .then((response) => {
        return Promise.resolve( response.data.map(item=> ({ name:item.name, description: item.description})))
    });
  }