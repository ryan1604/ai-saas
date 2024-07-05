"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've used!",
  },
  {
    name: "Maria",
    avatar: "M",
    title: "Data Scientist",
    description: "An amazing tool that has significantly improved my workflow!",
  },
  {
    name: "John",
    avatar: "J",
    title: "Product Manager",
    description: "User-friendly and highly efficient. Highly recommend!",
  },
  {
    name: "Sarah",
    avatar: "S",
    title: "UX Designer",
    description:
      "A game-changer for our team's productivity and collaboration.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="mb-10 text-center text-4xl font-extrabold text-white">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="border-none bg-[#192339] text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="px-0 pt-4">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
