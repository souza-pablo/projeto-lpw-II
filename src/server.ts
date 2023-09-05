import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running on port http://localhost:3333");
  });

const prisma = new PrismaClient();

app.get("/students", async () => {
  const students = await prisma.student.findMany();
  return students;
});

app.get("/teachers", async () => {
  const teachers = await prisma.teacher.findMany();
  return teachers;
});

app.get("/subjects", async () => {
  const subjects = await prisma.subject.findMany();
  return subjects;
});
