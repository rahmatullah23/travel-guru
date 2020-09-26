 import hotel1 from '../../images/Rectangle 28.png'
 import hotel2 from '../../images/Rectangle 27.png'
 import hotel3 from '../../images/Rectangle 26.png'
 
 const rooms = [
    {
        title: 'Light bright airy stylish apt & safe peaceful stay',
        description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
        img:hotel1,
        star:'4.9(20)' ,
        capacity: 1,
        bedType: 'Single',
        avatar: 'S',
        price: 34
    },
    {
        title: 'Apartment in Lost Panorama',
        description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
        img:hotel3,
        star:'4.8(10)' ,
        capacity: 2,
        bedType: 'Double',
        avatar: 'D',
        price: 52
    },
    {
        title: 'AR Longe & Pool (r&r+b&b)',
        description: ' Have lots of in-room facilities and are designed in open-concept living area.',
        img:hotel2,
        star:'4.9(25)' ,
        capacity: 4,
        bedType: 'Family',
        avatar: 'F',
        price: 44
    }
];
export default rooms;