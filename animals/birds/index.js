var router = require('express').Router();

var birds = [{
        id: 1,
        name: 'bald eagle',
        area: 'canada',
        size: 29,
        food: ['fish', 'rabbits', 'squirrels'],
        habitat: ['lakes', 'rivers', 'swamps', 'marshes']
    },
    {
        id: 2,
        name: 'flamingo',
        area: 'south America',
        size: 57,
        food: ['Brine flies', 'shrimp', 'mollusks'],
        habitat: ['Large shallow lakes', 'lagoons']

    },
    {
        id: 3,
        name: 'coua',
        area: 'south America',
        size: 24,
        food: ['insects', 'snails', 'fruit'],
        habitat: ['forest', 'savannah']
    },
    {
        id: 4,
        name: 'owl',
        area: 'arctic',
        size: 25,
        food: ['skunks', 'ducks', 'rats'],
        habitat: ['forest', 'savannah']
    }
]

router.get('/', function(req, res) {
    res.status(200).json(birds);
});

router.get('/:id', function(req, res) {
    var bird = getbird(birds, req.params.id);
    res.status(200).json(bird);
});



router.post('/', function(req, res) {
    var birdId = req.body.id;
    birds.push(req.body);
    var bird = getbird(birds, birdId);
    res.status(200).json(bird);
});

router.put('/:id', function(req, res) {
    var bird = updatebird(birds, req.body, req.params.id);
    res.status(200).json(bird);
});

function getbird(arr, id) {
    var bird;
    for (var i = 0; i < arr.length; i++) {
        if (id.toString() === arr[i].id.toString()) {
            bird = arr[i];
        }
    }
    return bird;
}

function updatebird(arr, newbird, id) {
    var bird;
    for (var i = 0; i < arr.length; i++) {
        if (id.toString() === arr[i].id.toString()) {
            arr[i].name = newbird.name;
            arr[i].food = newbird.food;
            arr[i].habitat = newbird.habitat;
            bird = arr[i];
        }
    }
    return bird;
}

module.exports = router;