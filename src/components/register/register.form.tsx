"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/lib/auth/auth.action";
import { Register, registerSchema } from "@/lib/auth/auth.schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function RegisterForm() {
  const [formValues, setFormValues] = useState<Register>({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Register, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    
    // Clear the error for this field when user starts typing
    if (errors[name as keyof Register]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate the form data
      const result = registerSchema.safeParse(formValues);
      
      if (!result.success) {
        // Extract and format validation errors
        const formattedErrors: Partial<Record<keyof Register, string>> = {};
        result.error.errors.forEach(error => {
          const path = error.path[0] as keyof Register;
          formattedErrors[path] = error.message;
        });
        
        setErrors(formattedErrors);
        setIsSubmitting(false);
        return;
      }
      
      // Call the register server action with form data
      const response = await register(formValues);
      
      if (response.success) {
        // Redirect to login page on success
        router.push("/login");
      } else {
        // Handle server-side validation errors
        if (Array.isArray(response.error)) {
          const formattedErrors: Partial<Record<keyof Register, string>> = {};
          response.error.forEach(error => {
            const path = error.path[0] as keyof Register;
            formattedErrors[path] = error.message;
          });
          setErrors(formattedErrors);
        } else {
          setErrors({ email: response.error as string });
        }
      }
      
    } catch (error) {
      console.error("Registration failed:", error);
      setErrors({ email: "Registration failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formValues.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>
          
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
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formValues.confirmPassword}
              onChange={handleChange}
              aria-invalid={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">{errors.confirmPassword}</p>
            )}
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Register"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}