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
    tagTypes: ['ausgaben', 'benutzer', 'einnahmen', 'kategorie', 'konten', 'Privat_geschaeftlich', 'projekte', 'transaktionen'],
    endpoints: (builder) => ({
        // ausgaben
        getAusgaben: builder.query({
            query: () => 'rest/v1/ausgaben',
            providesTags: ['ausgaben']
        }),
    })
})

export const {
    useGetAusgabenQuery,
} = supabaseApiBuchhaltung;

export {supabaseApiBuchhaltung};