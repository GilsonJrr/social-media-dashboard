import Face from '../img/icon-facebook.svg'
import Twitter from '../img/icon-twitter.svg'
import Insta from '../img/icon-instagram.svg'
import Youtube from '../img/icon-youtube.svg' 

export const data = ([
    {   
        media: 'FaceBook',
        logo: Face,
        name: '@nathanf',
        followers: 1987,
        entry: 12,
        entryPlus: true,
        bgCollor: 'hsl(208, 92%, 53%)'
    },
    {   
        media: 'Twitter',
        logo: Twitter,
        name: '@nathanf',
        followers: 1044,
        entry: 99,
        entryPlus: true,
        bgCollor: 'hsl(203, 89%, 53%)'
        // bgCollor: 'linear-Gradient(90deg,hsl(37, 97%, 70%), hsl(329, 70%, 58%))'
    },
    {   
        media: 'Instagram',
        logo: Insta,
        name: '@realnathanf',
        followers: '11k',
        entry: 1099,
        entryPlus: true,
        bgCollor: 'linear-Gradient(90deg,hsl(37, 97%, 70%), hsl(329, 70%, 58%))'
    },
    {   
        media: 'Youtube',
        logo: Youtube,
        name: 'Nathan F.',
        followers: 8239,
        entry: 144,
        entryPlus: false,
        bgCollor: 'hsl(348, 97%, 39%)'
    },
])

export const Overview =([
    {
        title: 'Page Views',
        logo: Face,
        number: 87,
        percent: 3,
        up: true,
    },
    {
        title: 'Likes',
        logo: Face,
        number: 52,
        percent: 2,
        up: false,
    },
    {
        title: 'Likes',
        logo: Insta,
        number: 5462,
        percent: 2257,
        up: true,
    },
    {
        title: 'Page Views',
        logo: Insta,
        number: '52k',
        percent: 1375,
        up: true,
    },
    {
        title: 'Retweets',
        logo: Twitter,
        number: 117,
        percent: 303,
        up: true,
    },
    {
        title: 'Likes',
        logo: Twitter,
        number: 507,
        percent: 553,
        up: true,
    },
    {
        title: 'Likes',
        logo: Youtube,
        number: 107,
        percent: 19,
        up: false,
    },
    {
        title: 'Total Views',
        logo: Youtube,
        number: 1407,
        percent: 12,
        up: false,
    },
])