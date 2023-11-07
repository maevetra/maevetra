import { Lato, Playfair_Display, Poppins} from 'next/font/google';

export const lato = Lato({
    subsets:['latin'],
    weight: ['400', '700', '900']
})

export const playfair = Playfair_Display({
    subsets: ['latin'],
    style: 'italic'
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700', '900']
})
