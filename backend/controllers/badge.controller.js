const { User, Badge } = require('../models')

exports.purchaseBadge = async (req, res) => {
    const { badgeName } = req.body
    let user = await User.findById(req.user._id)
    try {
        let badge = await Badge.findOne({ name: badgeName })

        if (!badge) {
            return res.json({ msg: 'Badge Not Found' })
        }

        if (user.points < badge.points) {
            return res.json({ msg: 'Not Enough Points' })
        }

        if (user.badges) {
            if (user.badges.includes(badge.name)) {
                return res.json({ msg: 'Badge Already Purchased' })
            }
        }
        user.badges.push(badge.name)
        user.points -= badge.points

        await user.save()
        return res.json({ msg: 'Badge Purchased Successfully' })
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}
