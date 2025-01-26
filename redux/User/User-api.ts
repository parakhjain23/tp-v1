import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const userApi = createApi({
    reducerPath: 'user', // A unique key for the API slice
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://dummyapi.com/api', // Replace with your actual base URL
    }),
    endpoints: (builder) => ({
      // Dummy GET request to fetch data
      getProductSpaces: builder.query({
        query: () => '/productSpaces', // Replace with your endpoint
      }),
      // Dummy POST request to add data
      createProductSpace: builder.mutation({
        query: (newProductSpace) => ({
          url: '/productSpaces', // Replace with your endpoint
          method: 'POST',
          body: newProductSpace,
        }),
      }),
    }),
  });
  
  // Export hooks for the queries and mutations
  export const {
    useGetProductSpacesQuery,
    useCreateProductSpaceMutation,
  } = userApi;