"use client";

import { useActionState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { handleSubmit, initState } from "@/lib/action";
import { signinAction } from "@/lib/actions/auth";
import useActionToast from "@/lib/hooks/use-action-toast";
import { signinSchema } from "@/lib/validations/auth";

export default function SigninForm() {
  const [state, dispatch, isPending] = useActionState(
    signinAction,
    initState()
  );

  useActionToast(state);

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Card className="w-[320px] md:w-[400px]">
      <CardHeader>
        <CardTitle>{"Signin"}</CardTitle>
        <CardDescription>{"Signin Description"}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Form {...form}>
          <form
            action={dispatch}
            onSubmit={handleSubmit(form, dispatch)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"Email"}</FormLabel>
                  <FormControl>
                    <Input
                      required
                      autoComplete="email"
                      placeholder={"Email"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"Password"}</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="password"
                      autoComplete="current-password"
                      placeholder={"Password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>
              {"Signin"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-xs text-muted-foreground">
          Welcome to the LunchBox.
        </p>
      </CardFooter>
    </Card>
  );
}
