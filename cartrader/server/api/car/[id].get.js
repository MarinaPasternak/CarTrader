import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const car = await prisma.car.findUnique({
    where: {
      id: parseInt(id),
      
    }
  })

  if (!car) {
    throw createError({
      statusCode: error.value.statusCode,
      message: `Car with id of ${id} doesn't exist`,
    });
  }

  return car;
});
