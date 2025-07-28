import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  FileText, 
  UserCheck, 
  Zap, 
  Heart, 
  CheckCircle, 
  Calendar 
} from "lucide-react"

export const TreatmentSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Free Telephone Consultation",
      description: "A free obligation free phone consultation allows our team to assess your suitability for the Nu-V CO2 Laser treatment. Your medical history will be discussed, including any previous vaginal concerns (e.g., laxity, dryness, incontinence). A recent smear test is required for eligibility.",
      icon: Phone,
      color: "medical-blue"
    },
    {
      number: 2,
      title: "Preparation",
      description: "Complete medical history forms and questionnaires before your appointment. Discontinue blood-thinning medications 5 days prior if applicable. Avoid sexual activity for 24 hours before the procedure.",
      icon: FileText,
      color: "wellness-pink"
    },
    {
      number: 3,
      title: "Face-to-Face Consultation",
      description: "A physical internal examination will be conducted to assess your condition. The practitioner will address any questions and provide professional advice. You can take time to consider before signing consent.",
      icon: UserCheck,
      color: "medical-blue"
    },
    {
      number: 4,
      title: "During the Session",
      description: "Comfortable positioning similar to a smear test. The CO2 laser stimulates collagen production, tightening and rejuvenating vaginal walls. The procedure takes 10-15 minutes with minimal discomfort.",
      icon: Zap,
      color: "wellness-pink"
    },
    {
      number: 5,
      title: "Aftercare",
      description: "Return to normal activities immediately but avoid sexual intercourse and strenuous exercise for 7 days. Mild soreness or spotting may occur but should subside within a few days.",
      icon: Heart,
      color: "medical-blue"
    },
    {
      number: 6,
      title: "Results and Maintenance",
      description: "Results begin within the first few weeks, with full benefits after 3 months. A series of 3 treatments spaced 4-6 weeks apart is recommended for optimal results.",
      icon: CheckCircle,
      color: "wellness-pink"
    },
    {
      number: 7,
      title: "Long-Term Care and Follow-Up",
      description: "Complete follow-up questionnaires to track progress. Routine pelvic floor exercises may enhance treatment effects. Follow-up consultations arranged if needed.",
      icon: Calendar,
      color: "medical-blue"
    }
  ]

  return (
    <section id="treatment-steps" className="py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="medical" className="mb-4">
            Treatment Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            NuV Treatment Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your journey to renewed confidence and intimate wellness in 7 simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 1
              
              return (
                <div key={step.number} className={`flex ${isEven ? 'flex-row-reverse' : 'flex-row'} items-center gap-8`}>
                  <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                    <Card className="shadow-medium h-full">
                      <CardHeader>
                        <div className={`flex items-center gap-3 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            step.color === 'medical-blue' ? 'bg-medical-blue-light' : 'bg-wellness-pink-light'
                          }`}>
                            <IconComponent className={`h-6 w-6 ${
                              step.color === 'medical-blue' ? 'text-medical-blue' : 'text-wellness-pink'
                            }`} />
                          </div>
                          <div className={isEven ? 'text-right' : 'text-left'}>
                            <CardTitle className="text-lg text-foreground">{step.title}</CardTitle>
                            <CardDescription className="text-muted-foreground">Step {step.number}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-background ${
                      step.color === 'medical-blue' ? 'bg-medical-blue' : 'bg-wellness-pink'
                    }`}>
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Spacer for alternating layout */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}