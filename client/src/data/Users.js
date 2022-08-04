// Enums
const educationLevel = [
    'High school',
    'Trade/tech school',
    'College',
    'Graduate school',
    'Graduated'
]


const Users = 
[
    {
        id: '1',
        name: "Template User",

        bio: "Template Bio.",

        photos: [
            {
                img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                title: 'Breakfast',
            },
            {
                img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                title: 'Burger',
            },
            {
                img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                title: 'Camera',
            },
            {
                img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                title: 'Coffee',
            },
            {
                img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                title: 'Hats',
            },
            {
                img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                title: 'Honey',
            },
            {
                img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                title: 'Basketball',
            },
            {
                img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                title: 'Fern',
            },
            {
                img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                title: 'Mushrooms',
            },
        ],
    
        
        age: 100,
        gender: 'Human',
        height: '175 cm',
        education: educationLevel[0],
        looking: 'Casual',
        children: 'Want some day',
        drinking: 'Frequently',
        smoking: 'Socially',
        cannabis: 'Never',
        politics: 'Central',
        religion: 'Agnostic'
    },

    {
        id: '2',
        name: "Template User 2",
        age: 50,

        bio: "Template Bio.",

        photos: [],
    }
]
export default Users;