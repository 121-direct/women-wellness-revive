import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      age: "32",
      rating: 5,
      text: "The NuV treatment completely changed my life. After two children, I had lost confidence, but now I feel like myself again. The staff were incredibly professional and understanding.",
      condition: "Post-childbirth concerns"
    },
    {
      name: "Emma L.",
      age: "45",
      rating: 5,
      text: "I was skeptical at first, but the results were amazing. No pain, no downtime, and I noticed improvements within weeks. I wish I had done this sooner!",
      condition: "Menopause-related changes"
    },
    {
      name: "Rachel K.",
      age: "38",
      rating: 5,
      text: "The consultation was thorough and professional. I felt comfortable throughout the entire process. The results exceeded my expectations completely.",
      condition: "Intimate wellness"
    }
  ]

  return (
    <section className="py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Results from Real Women
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of women who have reclaimed their confidence with NuV treatment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Badge variant="wellness" className="ml-2">
                    Verified Patient
                  </Badge>
                </div>
                
                <Quote className="h-8 w-8 text-wellness-pink mb-4" />
                
                <blockquote className="text-foreground mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">Age {testimonial.age}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.condition}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
              <span className="font-semibold">4.9/5</span>
            </div>
            <span>•</span>
            <span>Based on 3,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}