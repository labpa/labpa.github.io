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
    tagTypes: ['Transaktionen','Art', 'Laden', 'trigger'],
    endpoints: (builder) => ({

        //Transaktionen
        //Abfrage
        getTransaktion:builder.query({
            query: () => 'rest/v1/Transaktionen',
            providesTags: ['Transaktionen']
        }),
        //Hinzufügen
        createTransaktionen: builder.mutation({
            query: ({payload}) => ({
                url: 'rest/v1/Transaktionen',
                method: 'post',
                body: {...payload}
            }),
            invalidatesTags: ['Transaktionen']
        }),
        //Löschen
        removeTransaktion: builder.mutation({
            query: (transaktion_id) => ({
                url: `rest/v1/Transaktionen?transaktion_id=eq.${transaktion_id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Transaktionen']
        }),

        //Art
        getArt:builder.query({
            query: () => 'rest/v1/Art',
            providesTags: ['Art']
        }),

        //Laden
        getLaden:builder.query({
            query: () => 'rest/v1/Laden',
            providesTags: ['Laden']
        }),

        //Zeiterfassung

        //trigger
        getTrigger:builder.query({
            query:() => 'rest/v1/trigger',
            providesTags: ['trigger']
        }),

        createTrigger: builder.mutation({
            query: ({payload}) => ({
                url: 'rest/v1/trigger',
                method: 'post',
                body: {...payload}
            }),
            invalidatesTags: ['trigger']
        })




    })
})

export const {
    useGetTransaktionQuery,
    useCreateTransaktionenMutation,
    useRemoveTransaktionMutation,
    useGetArtQuery,
    useGetLadenQuery,
    useGetTriggerQuery,
    useCreateTriggerMutation,

} = supabaseApiBuchhaltung;

export {supabaseApiBuchhaltung};