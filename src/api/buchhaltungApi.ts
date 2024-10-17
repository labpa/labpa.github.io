import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseApiKey = process.env.REACT_APP_SUPABASE_API_KEY || '';


if (!supabaseUrl || !supabaseApiKey) {
    throw new Error("Supabase URL oder API-Key sind nicht definiert.");
}

const getToken = () => {
    const token = localStorage.getItem("access_Token");
    return token ? `Bearer ${token}` : "";
}


const supabaseApiBuchhaltung = createApi({
    reducerPath: "BuchhaltungApi",
    baseQuery: fetchBaseQuery({
        baseUrl: supabaseUrl,
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) {
                headers.set('Authorization',token);
            }
            headers.set('apikey', supabaseApiKey);
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['Transaktionen','Art'],
    endpoints: (builder) => ({

        //Transaktionen
        getTransaktion:builder.query({
            query: () => 'rest/v1/Transaktionen',
            providesTags: ['Transaktionen']
        }),
        createTransaktionen: builder.mutation({
            query: ({payload}) => ({
                url: 'rest/v1/Transaktionen',
                method: 'post',
                body: {...payload}
            }),
            invalidatesTags: ['Transaktionen']
        }),

        //Art
        getArt:builder.query({
            query: () => 'rest/v1/Art',
            providesTags: ['Art']
        }),




    })
})

export const {
    useGetTransaktionQuery,
    useCreateTransaktionenMutation,
    useGetArtQuery,

} = supabaseApiBuchhaltung;

export {supabaseApiBuchhaltung};