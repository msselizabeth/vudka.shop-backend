const adminCurrent = async (req, res) => {
    const { name, role} = req.user;
    res.json({
        name,
        role,
    })
}

module.exports = {
    adminCurrent,
}