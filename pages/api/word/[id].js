import Word from "../../../models/Word.js";
export default function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    res.status(400).json({ error: "Missing id" });
    return;
  }

  if (req.method === "DELETE") {
    Word.findByIdAndDelete(id)
      .then(
        () => {
          res.json({ message: "Word deleted" });
        }
        // If error, return error message
      )
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else if (req.method === "GET") {
    Word.findById(id)
      .then((word) => {
        res.json(word);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
}
