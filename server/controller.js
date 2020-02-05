let list = ["fix this app"];

module.exports = {
  getList: (req, res) => {
    res.status(200).send(list);
  },

  addToList: (req, res) => {
    const { text } = req.body;
    list.push(text);
    res.status(200).send(list);
  },

  editList: (req, res) => {
    const { index } = req.params;
    const { text } = req.body;
    list.splice(+index, 1, text);
    res.status(200).send(list);
  },

  removeFromList: (req, res) => {
    const { index } = req.params;
    list.splice(+index, 1);
    res.status(200).send(list);
  }
};
