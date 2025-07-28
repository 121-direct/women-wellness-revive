import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export const PricingSection = () => {
  const pricingOptions = [
    {
      title: "Single Treatment",
      price: "£499",
      originalPrice: null,
      description: "Try our NuV treatment with a single session",
      badge: null,
      features: [
        "FREE telephone consultation",
        "£50 deposit (refunded after completion)",
        "Professional nurse consultation", 
        "In-depth health assessment",
        "1 NuV laser treatment session",
        "Dedicated aftercare support"
      ],
      buttonText: "Book Single Session",
      buttonVariant: "outline" as const
    },
    {
      title: "Triple Package",
      price: "£333",
      originalPrice: "£999",
      description: "Recommended course for optimal results",
      badge: "Most Popular",
      features: [
        "FREE telephone consultation",
        "£50 deposit (refunded after completion)",
        "3 treatments within 12 months",
        "Professional nurse consultation",
        "Complete health assessment",
        "Exclusive patient community access",
        "Progress tracking and monitoring",
        "Priority appointment booking"
      ],
      buttonText: "Book Triple Package",
      buttonVariant: "wellness" as const
    },
    {
      title: "Annual Top-up",
      price: "£333",
      originalPrice: null,
      description: "Maintenance treatment after initial course",
      badge: null,
      features: [
        "Follow-up consultation",
        "£50 deposit (refunded after completion)",
        "Health reassessment",
        "1 maintenance treatment",
        "Ongoing support access"
      ],
      buttonText: "Book Top-up",
      buttonVariant: "outline" as const
    }
  ]

  return (
    <section className="py-16 bg-wellness-pink-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent, Affordable Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Why pay 70% more elsewhere for the same quality care? Choose your treatment package below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <Card key={index} className={`relative shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 ${option.badge ? 'ring-2 ring-wellness-pink' : ''}`}>
              {option.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="wellness" className="px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    {option.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-foreground mb-2">
                  {option.title}
                </CardTitle>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-wellness-pink">
                    {option.price}
                  </span>
                  {option.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {option.originalPrice}
                    </span>
                  )}
                </div>
                <CardDescription className="text-muted-foreground">
                  {option.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-wellness-pink mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={option.buttonVariant} 
                  size="lg" 
                  className="w-full"
                >
                  {option.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All prices include consultation, treatment, and aftercare support. 
            <br />
            Payment plans available. No hidden fees.
          </p>
        </div>
      </div>
    </section>
  )
}