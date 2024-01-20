const current = async (req, res) => {
    const { userName, email, portrait, favorites } = req.user;
    res.json({
        userName,
        email,
        portrait,
        favorites,
    })
}

module.exports = {
    current
}