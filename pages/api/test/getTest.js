export default function GetTest(req, res) {
  console.log(req.body ?? "no");
  if (req.method === "GET")
    return res.status(200).json({ message: "Hey there..." });
  if (req.method === "POST") return res.status(201).json({ ...req.body });
}
