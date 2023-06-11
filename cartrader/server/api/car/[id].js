import cars from "../../../data/cars.json";

export default defineEventHandler((event) => {
  const { id } = event.context.params;

  const car = cars.find((c) => {
    return c.id === parseInt(id);
  });

  if (!car) {
    throw createError({
      statusCode: error.value.statusCode,
      message: `Car with id of ${id} doesn't exist`,
    });
  }

  return car;
});
