const { Badge } = require('../models')

exports.purchaseBadge = async (req, res) => {
    const { badgeName } = req.body
    const user = req.user
    try {
        let badge = await Badge.find({ name: badgeName })
        user.badges.push(badge)
        user.points -= badge.points

        await user.save()
        await badge.save()

        return res.json({ msg: 'Badge Purchased Successfully' })
    } catch (err) {
        return res.json({ err: err })
    }
}
