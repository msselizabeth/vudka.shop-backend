const current = async (req, res) => {
    const { firstName, lastName, email, phone, orderSum} = req.user;
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