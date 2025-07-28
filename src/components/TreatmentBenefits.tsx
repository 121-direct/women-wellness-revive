import { CheckCircle, Clock, Heart, Shield, Sparkles, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const TreatmentBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "15-Minute Procedure",
      description: "Quick, efficient treatment that fits into your schedule with zero downtime required."
    },
    {
      icon: Shield,
      title: "No Surgery, No Scarring",
      description: "Non-invasive laser treatment with no surgical risks or recovery time needed."
    },
    {
      icon: Heart,
      title: "Enhanced Intimacy",
      description: "Improve sensation, comfort, and confidence in intimate moments with your partner."
    },
    {
      icon: Sparkles,
      title: "Tissue Rejuvenation",
      description: "Stimulates natural collagen production for tighter, more youthful vaginal health."
    },
    {
      icon: Zap,
      title: "Immediate Results",
      description: "Many patients notice improvements within weeks, with full benefits at 3 months."
    },
    {
      icon: CheckCircle,
      title: "Long-Lasting Effects",
      description: "Results typically last 12-18 months with proper maintenance treatments."
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose NuV Treatment?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the benefits of our advanced, clinically-proven approach to intimate wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-wellness-pink-light rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-wellness-pink" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}