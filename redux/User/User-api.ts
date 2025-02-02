import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "../store";

export const userApi = createApi({
  reducerPath: 'userApi', // Changed to avoid conflict with user reducer
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:6000/',
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => '/authenticate',
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Store the user details, product spaces and team mappings in the user reducer
          const currentState = store.getState().user.userDetails;
          dispatch({
            type: 'User/userDetails',
            payload: {
              ...currentState,
              [data.userDetails.id]: data.userDetails
            }
          });
          dispatch({
            type: 'User/userProductSpaces', 
            payload: data.userProductSpaces
          });
          dispatch({
            type: 'User/userTeamMappings',
            payload: data.userTeamMappings
          });
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
    }),
    createProductSpace: builder.mutation({
      query: (newProductSpace) => ({
        url: '/productSpaces',
        method: 'POST',
        body: newProductSpace,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Store the new product space in the productSpace reducer
          dispatch({
            type: 'ProductSpace/addProductSpace',
            payload: data
          });
        } catch (error) {
          console.error('Error creating product space:', error);
        }
      }
    }),
  }),
});

// Export hooks for the queries and mutations
export const {
  useGetUserDetailsQuery,
  useCreateProductSpaceMutation,
} = userApi;