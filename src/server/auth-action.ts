"use server";

import { auth } from "@/lib/auth/auth";
import { z } from "zod";

// Define validation schema for login
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Define validation schema for registration
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
});

export const login = async (formData: { email: string; password: string }) => {
  try {
    // Validate input data
    const validatedData = loginSchema.parse(formData);

    // Proceed with login
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

export const register = async (formData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    // Validate input data
    const validatedData = registerSchema.parse(formData);

    // Proceed with registration
    const result = await auth.api.signUpEmail({
      body: {
        name: validatedData.name,
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
    return { success: false, error: "Registration failed" };
  }
};
