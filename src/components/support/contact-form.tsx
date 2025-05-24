
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, User, Phone, Mail as MailIcon, BookOpen, TrendingUp, Briefcase, HelpCircle, MessageSquare } from "lucide-react"; // Added MessageSquare
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { APP_NAME } from "@/lib/constants";

const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().optional(),
  phone: z.string().min(10, { message: "Please enter a valid 10-digit phone number." }).regex(/^\d{10,}$/, { message: "Phone number must be 10 digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  university: z.string().min(1, { message: "Please select your university." }),
  program: z.string().min(1, { message: "Please select your program." }),
  queryType: z.string().min(1, { message: "Please select a query type." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }).max(500, { message: "Description must not exceed 500 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const formFieldsConfig = [
  { name: "firstName" as const, placeholder: "First Name *", icon: User, fieldType: "input", inputType: "text" },
  { name: "lastName" as const, placeholder: "Last Name", icon: User, fieldType: "input", inputType: "text" },
  { name: "phone" as const, placeholder: "Phone *", icon: Phone, fieldType: "input", inputType: "tel" },
  { name: "email" as const, placeholder: "Email *", icon: MailIcon, fieldType: "input", inputType: "email" },
  { name: "university" as const, placeholder: "Select University *", icon: BookOpen, fieldType: "select", options: ["Mumbai University", "Delhi University", "Pune University", "Other"] },
  { name: "program" as const, placeholder: "Select Program *", icon: TrendingUp, fieldType: "select", options: ["B.Tech", "MBA", "B.Com", "Other"] },
  { name: "queryType" as const, placeholder: "Select Query Type *", icon: HelpCircle, fieldType: "select", options: ["Admission", "Fees", "Syllabus", "Technical Support", "Other"] },
  { name: "subject" as const, placeholder: "Subject *", icon: Briefcase, fieldType: "input", inputType: "text" },
];

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      university: "",
      program: "",
      queryType: "",
      subject: "",
      description: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    console.log("Form data:", data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
      variant: "default",
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Card className="bg-card/70 backdrop-blur-md text-foreground p-6 sm:p-8 shadow-xl rounded-xl font-signika-negative">
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {formFieldsConfig.map((fieldInfo) => (
                <FormField
                  key={fieldInfo.name}
                  control={form.control}
                  name={fieldInfo.name}
                  render={({ field }) => (
                    <FormItem className="relative">
                      <fieldInfo.icon className="absolute left-3 top-[calc(50%+4px)] transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10 pointer-events-none" />
                      {fieldInfo.fieldType === "input" && (
                        <FormControl>
                          <Input
                            type={fieldInfo.inputType}
                            placeholder={fieldInfo.placeholder}
                            {...field}
                            className="pl-10 bg-background/30 border-input/50 focus:ring-primary focus:border-primary text-foreground placeholder:font-signika-negative placeholder:text-muted-foreground"
                          />
                        </FormControl>
                      )}
                      {fieldInfo.fieldType === "select" && (
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="pl-10 bg-background/30 border-input/50 focus:ring-primary focus:border-primary text-foreground placeholder:font-signika-negative placeholder:text-muted-foreground">
                              <SelectValue placeholder={fieldInfo.placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {fieldInfo.options?.map(option => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      )}
                      <FormMessage className="text-destructive text-xs pt-1" />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Description *"
                      className="min-h-[120px] bg-background/30 border-input/50 focus:ring-primary focus:border-primary text-foreground placeholder:font-signika-negative placeholder:text-muted-foreground"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-destructive text-xs pt-1" />
                </FormItem>
              )}
            />
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button
                type="submit"
                className="w-full sm:w-auto flex-1 font-medium py-3 rounded-lg text-base bg-dropdown-hover-gradient text-primary-foreground bg-[length:200%_200%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    SENDING...
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
                className="w-full sm:w-auto flex-1 font-medium py-3 rounded-lg text-base bg-destructive-gradient text-primary-foreground bg-[length:200%_200%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out border-0"
                disabled={isSubmitting}
              >
                RESET
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              {APP_NAME} not sell, share, or trade customer information. Your privacy is very important to us.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
