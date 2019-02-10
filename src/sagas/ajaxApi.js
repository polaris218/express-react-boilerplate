import axios from 'axios';

export const ajaxApi = (method, url, authParams) => {
  if (method === 'GET') {
    return axios.request({
      method,
      url,
      headers: authParams,
    });
  }
  return axios.request({
    method,
    url,
    data: authParams,
  });
};

export const signupApi = data => axios.request({
  method: 'POST',
  url: '/api/usersignup',
  data
}, console.log(data));

export const uploadFileApi = file => axios.request({
  method: 'POST',
  url: '/api/createoffer',
  data: file,
  headers: {
    'Authorization': localStorage.getItem('token'),
  },
  onUploadProgress: (progressEvent) => {
    console.log(`upload progress${Math.round((progressEvent.loaded / progressEvent.total) * 100)}`);
  },
});
export const downloadFileApi = file =>
  axios.request({
  method: 'GET',
  url: '/api/filedownload',
  responseType: 'blob',
    headers: {
      'fileId' : file,
    },
})
