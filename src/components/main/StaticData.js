const data = [
    {
        img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: '1',
        price: '2864',
        name: 'flate',
        location: 'mumbai',
        bed: '3beds',
        bathroom: '2 bathroom',
        area: '6*7',
        date: '2022-12-03'
    },
    {
        img: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: '2',
        price: '3966',
        name: 'duplex',
        location: 'bangalore',
        bed: '10beds',
        bathroom: '6 bathroom',
        area: '12*8',
        date: '2023-04-29'
    },
    {
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: '3',
        price: '1765',
        name: 'flate',
        location: 'delhi',
        bed: '8beds',
        bathroom: '4 bathroom',
        area: '10*8',
        date: '2023-01-10'
    },
    {
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        id: '4',
        price: '2755',
        name: 'flate',
        location: 'bangalore',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '9*8',
        date: '2023-08-12'
    },
    {
        img: 'https://media.istockphoto.com/id/91686604/photo/house-for-rest.jpg?s=612x612&w=0&k=20&c=vNu1eppV-BFrzPRyZMH5ZrjLVPIeHfEO1anyxkOMZEI=',
        id: '5',
        price: '1495',
        name: 'palace',
        location: 'delhi',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '7*8',
        date: '2023-06-10'
    },
    {
        img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: '6',
        price: '2879',
        name: 'duplex',
        location: 'delhi',
        bed: '5beds',
        bathroom: '4 bathroom',
        area: '8*8',
        date: '2023-12-06'
    },
    {
        img: 'https://media.istockphoto.com/id/155396123/photo/ranthambhore-np-in-rajasthan-india.jpg?s=612x612&w=0&k=20&c=LnWdEYBvIvLVURZUdUJuRlKM5pSl-JpR8M_uxNF_71E=',
        id: '7',
        price: '1495',
        name: 'palace',
        location: 'mumbai',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '7*8',
        date: '2023-02-07'
    },
    {
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        id: '8',
        price: '2755',
        name: 'flate',
        location: 'bangalore',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '9*8',
        date: '2023-10-25'
    },
    {
        img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: '9',
        price: '2864',
        name: 'flate',
        location: 'mumbai',
        bed: '3beds',
        bathroom: '2 bathroom',
        area: '6*7',
        date: '2024-12-11'
    },
    {
        img: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: '10',
        price: '1495',
        name: 'duplex',
        location: 'delhi',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '7*8',
        date: '2023-05-25'
    },
    {
        img: 'https://media.istockphoto.com/id/475976182/photo/modern-architecture-design-84-for-house-bungalow.jpg?s=612x612&w=0&k=20&c=EHUcOO7WykNFh8y417zDCsFw_JfO3eukZD8nGofksgM=',
        id: '11',
        price: '1495',
        name: 'flate',
        location: 'bangalore',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '7*8',
        date: '2023-03-28'
    },
    {
        img: 'https://media.istockphoto.com/id/1045228484/photo/house-three-dimensional-render.jpg?s=612x612&w=0&k=20&c=XMeaxQW7lLF2gXf12-lEPqrP2VQZu5zRvHjpsarjPQ4=',
        id: '12',
        price: '1495',
        name: 'duplex',
        location: 'delhi',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '7*8',
        date: '2023-09-18'
    },
    {
        img: 'https://media.istockphoto.com/id/185275043/photo/old-stone-house.jpg?s=612x612&w=0&k=20&c=DOPIBIPoF4wPwImDeQrc6paRqribK2NjxLyCxMrnrWA=',
        id: '13',
        price: '1495',
        name: 'palace',
        location: 'mumbai',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '7*8',
        date: '2023-04-19'
    },
    {
        img: 'https://media.istockphoto.com/id/185321544/photo/beautiful-house-in-florida.jpg?s=612x612&w=0&k=20&c=EsyEfWm4BUoCpEwpWXvFgGtn33l2zrvyoSW1jP--HL8=',
        id: '14',
        price: '1495',
        name: 'palace',
        location: 'mumbai',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '7*8',
        date: '2026-02-16'
    },
    {
        img: 'https://media.istockphoto.com/id/1437203779/photo/luxury-villa-decorated-with-christmas-tree-gift-boxes-and-ornaments-in-snowy-weather.jpg?b=1&s=170667a&w=0&k=20&c=n4cY6Otvd8CjLNqP00N2oJAYAD-rA_qdxvw-sz6UA3A=',
        id: '15',
        price: '1495',
        name: 'flate',
        location: 'bangalore',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '7*8',
        date: '2023-02-18'
    },
    {
        img: 'https://media.istockphoto.com/id/1437895304/photo/3d-rendering-of-white-and-black-modern-tudor-house.jpg?b=1&s=170667a&w=0&k=20&c=QdhdPuceHcHNqVSD2BgbDcf5iQt1T74nLhIAqGbIxlg=',
        id: '16',
        price: '2864',
        name: 'palace',
        location: 'bangalore',
        bed: '3beds',
        bathroom: '2 bathroom',
        area: '6*7',
        date: '2023-12-06'
    },
    {
        img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: '17',
        price: '2864',
        name: 'flate',
        location: 'mumbai',
        bed: '3beds',
        bathroom: '2 bathroom',
        area: '6*7',
        date: '2023-01-04'
    },
    {
        img: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: '18',
        price: '1495',
        name: 'duplex',
        location: 'mumbai',
        bed: '6beds',
        bathroom: '4 bathroom',
        area: '7*8',
        date: '2023-02-07'
    },
    {
        img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        id: '19',
        price: '3966',
        name: 'flate',
        location: 'bangalore',
        bed: '10beds',
        bathroom: '6 bathroom',
        area: '12*8',
        date: '2023-03-28'
    },
    {
        img: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: '20',
        price: '3966',
        name: 'palace',
        location: 'bangalore',
        bed: '10beds',
        bathroom: '6 bathroom',
        area: '12*8',
        date: '2023-03-27'
    },
]

export default data;