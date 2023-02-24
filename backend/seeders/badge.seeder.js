const Badge = require('../models/badge.model')

const badges = [
    {
        name: 'Bronze',
        points: 5000,
    },
    {
        name: 'Silver',
        points: 10000,
    },
    {
        name: 'Gold',
        points: 20000,
    },
    {
        name: 'Platinum',
        points: 50000,
    },
    {
        name: 'Diamond',
        points: 100000,
    },
    {
        name: 'Crown',
        points: 500000,
    },
    {
        name: 'Ace',
        points: 1000000,
    },
]

exports.seedBadges = async () => {
    await Badge.deleteMany()
    await Badge.insertMany(badges)

    console.log('Badges Seeded')
}
