import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);

  if (req.method === "POST") {
    const createMovie = await prisma.movie.create({
      data,
    });

    res.json(createMovie);
  } else if (req.method === "DELETE") {
    const deleteMovie = await prisma.movie.delete({
      where: { id: data.id },
    });

    res.json(deleteMovie);
  } else if (req.method === "PUT") {
    const updateMovie = await prisma.movie.update({
      where: { id: data.id },
      data,
    });

    res.json(updateMovie);
  }
};
