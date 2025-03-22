"use server";

import { auth } from "@/lib/auth/auth";
import { z } from "zod";
import { Login, loginSchema, Register, registerSchema } from "./auth.schema";

export const login = async (formData: Login) => {
  try {
    const validatedData = loginSchema.parse(formData);
    const result = await auth.api.signInEmail({
      body: {
        email: validatedData.email,
        password: validatedData.password,
      },
    });
    return { success: true, data: result };
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }
    return { success: false, error: "Login failed" };
  }
};

export const register = async (formData: Register) => {
  try {
    const validatedData = registerSchema.parse(formData);
    const result = await auth.api.signUpEmail({
      body: {
        name: validatedData.name,
        email: validatedData.email,
        password: validatedData.password,
        confirmPassword: validatedData.password,
      },
    });
    return { success: true, data: result };
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }
    return { success: false, error: "Registration failed" };
  }
};
