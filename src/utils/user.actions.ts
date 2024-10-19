"use server";

import prisma from "@/lib/db";
import { CreateUser, UpdateUser } from "@/types";

export async function createUser({
  id,
  email,
  imageUrl,
  name,
  username,
}: CreateUser) {
  try {
    const newUser = await prisma.user.create({
      data: {
        id,
        email,
        imageUrl,
        name,
        username,
      },
    });
    if (!newUser) {
      return null;
    }
    return newUser;
  } catch (error) {
    console.error("Error creating user", error);
    return null;
  }
}

export async function updateUser({ id, user }: UpdateUser) {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...user,
      },
    });
    return updatedUser;
  } catch (error) {
    console.error("Error updating user", error);
    return null;
  }
}
