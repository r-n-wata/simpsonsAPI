const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

const characters = {
    'data': [
                {
                    'name':'agnes skinner',
                    'age': '70s',
                    'sex':'female',
                    'Status':'Alive',
                    'Alia(es)': [
                        'Ag', 
                        'Mother'
                    ],
                    'occupation': {
                        'former': [
                            'Wing Walker (previously',
                            'Receptionist at City Intern',
                            'Application (previously)',
                            'Retired'
                        ],
                        'currently': 'Olympic Pole Vaulter'
                    },
                    'first appearance': [
                        'The Crepes of Wrath'
                    ],
                    'images': 'https://static.simpsonswiki.com/images/7/7d/Agnes_Skinner.png'

                
            },
            {
                    'name':'dr. apu nahasapeemapetilon Jr.',
                    'age': 38,
                    'sex': 'Male',
                    'status': 'Alive',
                    'alias(es)': [
                        'Steve Barnes',
                        'Slime Q. Slimedog',
                        'Apu DeBeaumarchas',
                        'Old Man Squishee',
                        'Achu',
                        'Apoo',
                        'A-boo',
                        'The hindu guy',
                        'Funny Sounding Cleveland'
                
                ],
                    'country of birth': 'India',
                    'occupation': {
                        'currently' : 'Owner fo the Kwik-E-Mart',
                        'Former': [
                            'Medical Student',
                            'Singer'
                        ]
                    },
                        
                
                    'first appearance': [
                        'The Telltale Head'
                    ],
                    'image':'https://static.wikia.nocookie.net/simpsons/images/7/7d/Apu_Nahasapeemapetilon.png/revision/latest?cb=20201222215823' 
                
            },
               { 
                    'name':'arnie pye',
                    'age': 37,
                    'sex': 'Male',
                    'status': 'Alive',
                    'alias(es)': ['Bill pie'],
                    'occupation': {
                        'currenly': ['Channel 6 helicopter reporter']
                    },
                    'first appearance': [
                        'Some Enchanted Evening', 
                        'Homer Alone'
                    ],
                    'image': 'https://static.wikia.nocookie.net/simpsons/images/4/40/Arnie_Pye.png/revision/latest?cb=20130816174158'
                },
                {
                    'name':'artie ziff',
                    'age': 'unknown',
                    'sex': 'Male',
                    'status': 'Alive',
                    'alias(es)': [

                    ],
                    'occupation':{
                        'former': [
                            'Software billionaire',
                            'Owner of Ziffcorp'
                        ]
                    } ,
                    'first appearance': [
                        'The Way We Was'
                    ],
                    'image': 'https://static.wikia.nocookie.net/simpsons/images/0/0c/Artie_Ziff.png/revision/latest?cb=20150727093911'
                
            },
            {
                    'name':'birch barlow',
                    'age':43 ,
                    'sex': 'Male',
                    'status': 'Alive',
                    'alias(es)': [],
                    'occupation':{
                        'current': 'Talk Show Host'
                    } ,
                    'first appearance': [
                        'Slideshow Bob Roberts'
                    ],
                    'image': 'https://static.wikia.nocookie.net/simpsons/images/e/e9/Birch_Barlow.png/revision/latest?cb=20180104233549'
                
            },
            {
                
                    'name':'bartolomew jojo simpson',
                    'age': 10,
                    'sex': 'Male',
                    'status': 'Alive',
                    'alias(es)': [
                        
                        'Bartman',
                        'El Barto',,
                        'Cupcake Kid',
                        `The "I Didn't Do It" Boy`,
                        'Edith Knickertwist',
                        'Bartron',
                        'Baby Stink Breath',
                        'Cosmos',
                        'Rusty',
                        'Bart-Dude (by Otto Mann)',
                        'Bart Bart',
                        `Timmy O' Toole`,
                        'The Thing From Uranus',
                        'Beautiful Bart',
                        'Laddie Liberty',
                        'Cal A. Bunga',
                        'Earring Boy',
                        'Special Little Guy (By Marge)',
                        'The Great Bart-o',
                        'Naked Fairy Godboy',
                        'Bart Flanders',
                        'The Boy (by Homer)',
                        'Ratboy (by Homer)',
                        'Shoes Butt-back',
                        'Steve Bennett',
                        'Bartina',
                    ],
                    'occupation':{
                        'current': 'Student at Sprinflied Elementary School'
                    } ,
                    'first appearance': [
                        'Goodnight'
                    ],
                    'image': 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest?cb=20190409004756'
                
            }
        ]
        
    // 'dr. apu nahasapeemapetilon Jr.':{
    //     'age': ,
    //     'sex':,
    //     'status': ,
    //     'alias(es)': [],
    //     'country of birth': ,
    //     'occupation':{} ,
    //     'first appearance': [],
    //     'image': 
    // }

}

app.use(cors())


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(characters)
})

app.listen(process.env.PORT || PORT, () =>{
    console.log('sever is running')
})