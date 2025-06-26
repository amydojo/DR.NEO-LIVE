import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import styles from "@/styles/Frame_82.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import TagMultiSelect from "@/components/ui/MultiSelectTag";
import {
  ChevronLeft,
  ChevronRight,
  HandCoins,
  HeartPulse,
  Microscope,
  TestTubeDiagonal,
  Book,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const differenceCards = [
  {
    title: "Comprehensive Hair Loss Assessment",
    icon: <TestTubeDiagonal className="h-20 w-20 text-[white]" />,
  },
  {
    title: "Digital microscopic scalp analysis",
    icon: <Microscope className="h-20 w-20 text-[white]" />,
  },
  {
    title: "Personalized treatment recommendations",
    icon: <HeartPulse className="h-20 w-20 text-[white]" />,
  },
  {
    title: "Transparent pricing and financing options",
    icon: <HandCoins className="h-20 w-20 text-[white]" />,
  },
  {
    title: "No pressure, educational approach",
    icon: <Book className="h-20 w-20 text-[white]" />,
  },
];
import { CircleCheck, ArrowRight } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  location: z.string().optional(),
  message: z.string().optional(),
  treatments: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

// What to expect items
const expectationItems = [
  "Comprehensive hair loss assessment",
  "Digital microscopic scalp analysis",
  "Personalized treatment recommendations",
  "Transparent pricing and financing options",
  "No pressure, educational approach",
];

export default function ContactSection() {
  const { toast } = useToast();
  const [api, setApi] = React.useState<any>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      consent: false,
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", values);

      toast({
        title: "Consultation Request Submitted",
        description:
          "Thank you! We will contact you shortly to schedule your consultation.",
        variant: "default",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description:
          "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#f8f6f3]">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#625046] mb-4">
            Start Your Hair Restoration Journey
          </h2>
          <p className="text-lg text-[#625046] max-w-2xl mx-auto">
            Schedule your personalized consultation today and discover how Dr.
            Neo can help you achieve natural, lasting results.
          </p>
        </div>

        {/* Two-column layout for form and expectations */}
        <div className="lg:flex flex-col lg:items-center lg:gap-12 max-w-6xl mx-auto">
          {/* Form column */}
          <div className="lg:w-7/12 mb-12 lg:mb-0">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-normal text-[#625046] mb-4">
                Book your free consultation
              </h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <legend className="sr-only">Full Name</legend>
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#625046]">
                            First Name*
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="p-3 border border-gray-300 rounded-lg"
                              placeholder="Your first name"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#625046]">
                            Last Name*
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="p-3 border border-gray-300 rounded-lg"
                              placeholder="Your last name"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </fieldset>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#625046]">
                          Email Address*
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="p-3 border border-gray-300 rounded-lg"
                            placeholder="your.email@example.com"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#625046]">
                          Phone Number*
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            className="p-3 border border-gray-300 rounded-lg"
                            placeholder="(123) 456-7890"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="location-select"
                          className="text-sm font-medium text-[#625046]"
                        >
                          Preferred Location
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              id="location-select"
                              className="p-3 border border-gray-300 rounded-lg"
                            >
                              <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="irvine">Irvine</SelectItem>
                            <SelectItem value="elsegundo">
                              El Segundo
                            </SelectItem>
                            <SelectItem value="solanabeach">
                              Encinitas
                            </SelectItem>
                            <SelectItem value="palmdesert">
                              Palm Desert
                            </SelectItem>

                            <SelectItem value="temecula">Temecula</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  {/* <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#625046]">
                          Tell us about your hair concerns
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={3}
                            className="p-3 border border-gray-300 rounded-lg resize-none"
                            placeholder="What are your hair restoration goals?"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  /> */}
                  <FormField
                    control={form.control}
                    name="treatments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="treatment-select"
                          className="text-sm font-medium text-[#625046]"
                        >
                          Preferred Medical Services
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              id="treatment-select"
                              className="p-3 border border-gray-300 rounded-lg"
                            >
                              <SelectValue placeholder="Select a medical service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="HyperPRP">Hyper PRP</SelectItem>
                            <SelectItem value="exosomes">Hypersomes</SelectItem>

                            <SelectItem value="hair-transplant">
                              Hair Transplant
                            </SelectItem>
                            <SelectItem value="multple">
                              Multiple Medical Services
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            id="consent"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1 data-[state=checked]:bg-[#A87B23] data-[state=checked]:text-white border-gray-300"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="consent"
                          className="text-sm text-[#575757] font-normal"
                        >
                          I consent to receive communications from Dr. NEO. I
                          understand I can unsubscribe at any time.*
                        </FormLabel>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#141414] hover:bg-[#2a2a2a] text-white py-6 font-medium rounded-full transition-all hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Request My Free Consultation"}
                    </Button>

                    <p className="text-xs text-[#575757] mt-4 text-center">
                      Your information is secure and will never be shared with
                      third parties.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>

          {/* What to expect column */}
          {/* <div className="lg:w-5/12">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-normal text-[#625046] mb-6">
                What to expect
              </h3>

              <div className="space-y-4">
                {expectationItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#A87B23]/10 rounded-full p-1.5 mt-0.5 shrink-0">
                      <CircleCheck className="h-4 w-4 text-[#A87B23]" />
                    </div>
                    <p className="ml-3 text-[#625046]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-medium text-[#625046] mb-3">
                  Patient testimonial
                </h4>
                <div className="bg-[#f8f6f3] p-4 rounded-lg">
                  <p className="text-[#625046]/80 italic mb-3">
                    "The consultation was incredibly informative. They took the
                    time to analyze my hair loss pattern and recommend the
                    perfect solution."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#A87B23]/20 flex items-center justify-center text-[#A87B23] font-bold mr-3">
                      AC
                    </div>
                    <div>
                      <p className="font-medium text-[#625046]">Alex C.</p>
                      <p className="text-sm text-[#625046]/70">Irvine, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-[#625046]">
                      Have questions?
                    </h4>
                    <p className="text-sm text-[#625046]/70">
                      Contact us directly
                    </p>
                  </div>
                  <a
                    href="tel:(949) 570-0500"
                    className="inline-flex items-center text-[#625046] hover:text-[#A87B23] transition-colors"
                  >
                    (949) 570-0500
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={styles.headerContainer}>
            <h2 className={styles.sectionTitle}>What to Expect</h2>
          </div>
          <div className={styles.carouselWrapper}>
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
                slidesToScroll: 1,
              }}
              className={styles.carousel}
            >
              <CarouselContent className={styles.carouselContent}>
                {differenceCards.map((card, index) => (
                  <CarouselItem key={index} className={styles.carouselItem}>
                    <div
                      className={styles.differenceCard}
                      style={
                        index === 0
                          ? {
                              backgroundImage:
                                "linear-gradient(145deg, #625046 0%, #C8B68F 100%)",
                            }
                          : {
                              background:
                                "linear-gradient(145deg, #625046 0%, #C8B68F 100%)",
                            }
                      }
                    >
                      <div className={styles.cardContent}>
                        <div className="flex flex-col items-center h-full text-center justify-center gap-5">
                          {card.icon}
                          <h3 className={"text-xl font-[600] text-white"}>
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex flex-row gap-5 w-full justify-center">
              <button
                onClick={() => api?.scrollPrev()}
                className={styles.navButton}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className={styles.navButton}
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
