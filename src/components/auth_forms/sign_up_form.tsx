"use client";

import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { useSignupUserMutation } from "@/store/api-endpoints/auth";
import { showToast } from "../shared/show_toast";
import { useRouter } from "next/navigation";
import useMount from "@/hooks/use-mount";
import { useLocalStorage } from "usehooks-ts";
import { UserData } from "@/types/global";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SignUpValidationSchema } from "@/schema";

export function SignUpForm() {
  const [CreateUserAccount, { isLoading }] = useSignupUserMutation();
  const router = useRouter();
  const mount = useMount();
  const [, setUserData] = useLocalStorage<UserData | null>("user-info", null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
      role: "lawyer",
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { data } = await CreateUserAccount(values);
        if (data) {
          showToast({
            title: data.message,
            type: data.status === "success" ? "success" : "error",
          });
          if (data.status === "success") {
            setUserData(data.result);
            resetForm();
            router.push("/sign-in");
          }
        } else {
          showToast({
            title: "Unexpected response from the server",
            type: "error",
          });
        }
      } catch (error) {
        showToast({ title: "Error creating user account", type: "error" });
      }
    },
  });

  if (!mount) return null;

  return (
    <form
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 rounded-lg bg-white p-5 shadow-inner"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-lexend text-2xl font-bold text-blue-900">
          WELCOME TO 1ST MEDIA LINK!
        </h1>
        <p className="text-balance font-inter text-sm">
          Enter your details below to create your account
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          { field: "firstName", label: "First Name" },
          { field: "lastName", label: "Last Name" },
          { field: "email", label: "Email", type: "email" },
          { field: "phoneNumber", label: "Phone Number" },
          { field: "password", label: "Password", type: "password" },
          {
            field: "confirmPassword",
            label: "Confirm Password",
            type: "password",
          },
        ].map(({ field, label, type = "text" }) => (
          <div key={field} className="grid gap-2">
            <Label htmlFor={field}>
              {label} <span className="text-sm text-red-500">*</span>
            </Label>
            <Input
              id={field}
              type={type}
              placeholder={label}
              {...formik.getFieldProps(field)}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <>
        <Label>Role</Label>
        <RadioGroup
          value={formik.values.role}
          onValueChange={(value) => formik.setFieldValue("role", value)}
          className="flex gap-4"
        >
          {["lawyer", "finance"].map((role) => (
            <div key={role} className="flex items-center space-x-2">
              <RadioGroupItem value={role} id={role} />
              <Label htmlFor={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="termsAndConditions"
          checked={formik.values.termsAndConditions}
          onCheckedChange={(checked) =>
            formik.setFieldValue("termsAndConditions", Boolean(checked))
          }
        />
        <Label htmlFor="termsAndConditions" className="text-sm">
          I accept the{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms and Conditions
          </Link>
        </Label>
      </div>
      <Button type="submit" className="w-full bg-blue-400 uppercase">
        {isLoading ? "Loading..." : "Sign Up"}
      </Button>
    </form>
  );
}
