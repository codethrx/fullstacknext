import prisma from "../../../libs/prisma";
export default async function handler(req, res) {
  // console.log(prisma);

  if (req.method === "POST") {
    const data = await prisma.comments.create({ data: req.body });
    res.status(200).json(data);
  }
  //   if (req.method === "DELETE") {
  //     await prisma.post.delete({
  //       where: { postId: req.body.postId },
  //     });
  //     res.status(200).json({ done: true });
  //   }
}
