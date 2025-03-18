"use client";

import { useState } from "react";
import { z } from "zod";
import { login } from "@/server/auth-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Define the validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    
    // Clear the error for this field when user starts typing
    if (errors[name as keyof LoginFormValues]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate the form data
      const result = loginSchema.safeParse(formValues);
      
      if (!result.success) {
        // Extract and format validation errors
        const formattedErrors: Partial<Record<keyof LoginFormValues, string>> = {};
        result.error.errors.forEach(error => {
          const path = error.path[0] as keyof LoginFormValues;
          formattedErrors[path] = error.message;
        });
        
        setErrors(formattedErrors);
        setIsSubmitting(false);
        return;
      }
      
      // Call the login server action with form data
      const response = await login({
        email: formValues.email,
        password: formValues.password
      });
      
      if (response.success) {
        // Redirect to dashboard on success
        router.push("/dashboard");
      } else {
        // Handle server-side validation errors
        if (Array.isArray(response.error)) {
          const formattedErrors: Partial<Record<keyof LoginFormValues, string>> = {};
          response.error.forEach(error => {
            const path = error.path[0] as keyof LoginFormValues;
            formattedErrors[path] = error.message;
          });
          setErrors(formattedErrors);
        } else {
          setErrors({ email: "Invalid email or password" });
        }
      }
      
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ email: "Login failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formValues.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password}</p>
            )}
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}