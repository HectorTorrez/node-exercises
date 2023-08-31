import z from 'zod'

const MoviesShema = z.object({
    title: z.string({
        invalid_type_error: 'Movie title must be a string',
    }),
    year: z.number().int().min(1900).max(2023),
    director: z.string(),
    duration: z.number().int().positive(),
    poster: z.string().url({
        message: 'Poster must be valid URL'
    }),
    genre: z.array(
        z.enum([
            'Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi'
        ]),
        {
            required_error: 'Movie genre is required'
        }
    ),
    rate: z.number().min(0).max(10).default(5)

})

 export function validateMovie(object){
    return MoviesShema.safeParse(object)
}


