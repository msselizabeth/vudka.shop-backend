const current = async (req, res) => {
    const { userName, email, portrait, favorites } = req.user;
    res.json({
        firstName,
        lastName,
        phone,
        email,
        orderSum,

    })
}

module.exports = {
    current
}