import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accesToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmIkMDkkS2YxRmQ1WlIvektvcG4ybGFhUG9VdXBSNXBjd0dvbkg0TXQyQ0c1eS9LcFNUb3BISTQ1eDYiLCJpc0FkbWluIjp0cnVlfSwiaWF0IjoxNjkwMDYyOTY5LCJleHAiOjE2OTAwNzAxNjl9.t-hZZptL2OYGDl_u_bAAx_pgfAS0pL4OGDV885QzPQw";

type Moto = {
  allUsers: [
    id: any,
    name: string | number,
    email: string | number,
    address: string | number,
    phone: string | number,
    status: string | number
  ];
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/user/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${accesToken}`);
    }
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Moto, null>({
      query: () => "deliveries"
    }),
    getUserById: builder.query<unknown, { id: string }>({
      query: ({ id }) => `user/details/${id}`
    })
  })
});

export const { useGetUsersQuery } = userApi;
