module.exports = {
  test: function (req, res) {
    res.json({ message: process.env.APIKEY, status: 200 });
  },
};
