/* eslint-disable */
import apiService from '../utils/axios.config';

export const GetPlaces = async ({ keyword }) => {
  const response = await apiService({
    url: '/api/places/list-places',
    method: 'POST',
    data: { keyword },
  });
  return response;
};

export const GetPlaceByID = async ({ id }) => {
  const response = await apiService({
    url: '/api/places/place-by-id',
    method: 'POST',
    data: { id },
  });
  return response;
};

export const UserReview = async (formData) => {
  const response = await apiService({
    url: '/api/places/user-review',
    method: 'POST',
    data: formData,
    headers:{'Content-Type': 'multipart/form-data'}
  });
  return response;
};


export const AddPlace = async (formData) =>{   
  const response = await apiService({
    url : "/api/places/add-place",
    method : "POST",
    data : formData,
    headers:{'Content-Type': 'multipart/form-data'}
  })
  return response
}