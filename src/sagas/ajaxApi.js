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

export const uploadFileApi = file => axios.request({
  method: 'POST',
  url: '/api/file',
  data: file,
  // headers: {
  //   'token': localStorage.getItem('token'),
  // },
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
