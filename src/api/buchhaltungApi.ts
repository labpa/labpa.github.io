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
    tagTypes: ['testen'],
    endpoints: (builder) => ({
        // ausgaben
        getTesten: builder.query({
            query: () => 'rest/v1/testen',
            providesTags: ['testen']
        }),
    })
})

export const {
    useGetTestenQuery,
} = supabaseApiBuchhaltung;

export {supabaseApiBuchhaltung};