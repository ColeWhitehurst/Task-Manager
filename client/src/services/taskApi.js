import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/tasks' }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/tasks', 
    }),
  }),
});

export const { useGetTasksQuery } = taskApi;

export default taskApi;