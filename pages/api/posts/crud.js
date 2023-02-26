import prisma from "../../../libs/prisma";
export default async function handler(req, res) {
  // console.log(prisma);
  if (req.method === "GET") {
    const results = await prisma.post.findMany();
    console.log(results);
    res.status(200).json(results);
  }
  if (req.method === "POST") {
    const data = await prisma.post.create({ data: req.body });
    res.status(200).json(data);
  }
  if (req.method === "DELETE") {
    await prisma.post.delete({
      where: { postId: req.body.postId },
    });
    res.status(200).json({ done: true });
  }
}
