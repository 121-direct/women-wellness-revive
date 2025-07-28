import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { TreatmentBenefits } from "@/components/TreatmentBenefits"
import { TestimonialSection } from "@/components/TestimonialSection"
import { PricingSection } from "@/components/PricingSection"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Plus,
  Minus
} from "lucide-react"
import { useState } from "react"
import doctorPortrait from "@/assets/doctor-portrait.jpg"
import medicalDevice from "@/assets/medical-device.jpg"

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Is the NuV treatment safe?",
      answer: "Yes, NuV is completely safe. The procedure is always carried out in a medical clinic by fully trained and experienced nurses with medical oversight from qualified doctors."
    },
    {
      question: "Is there any pain or downtime?",
      answer: "There is no downtime - you can return to normal daily activities immediately. Some patients report a mild tingling or sunburn sensation for a few days, comparable to intimate waxing. We recommend avoiding gym and swimming for 5 days."
    },
    {
      question: "How many treatments will I need?",
      answer: "The recommendation is 3 treatments over a 12-month period based on extensive clinical studies. However, each patient is unique and your nurse will provide personalized advice."
    },
    {
      question: "How soon will I see results?",
      answer: "This varies from patient to patient. It's normal to expect progressive improvement over time, with many patients noticing changes within the first few weeks and full benefits by 3 months."
    },
    {
      question: "What can I expect after treatment?",
      answer: "Patients report improvements in sensitivity, comfort during intimacy, confidence, tightness, and overall vaginal health. Many also find relief from stress incontinence."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="medical" className="mb-4">
                Medical Excellence
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Expert Care from Qualified Professionals
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At The Women's Health Clinic, we understand that intimate wellness is deeply personal. 
                  Our team of qualified nurses and medical professionals provide compassionate, 
                  confidential care in a women-led environment.
                </p>
                <p>
                  The NuV treatment uses advanced CO2 laser technology to stimulate natural collagen 
                  production, helping to restore vaginal health and function without surgery or downtime.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">CQC Registered</h4>
                    <p className="text-sm text-muted-foreground">Fully regulated and inspected for your safety</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-wellness-pink-light rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-wellness-pink" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Women-Led Team</h4>
                    <p className="text-sm text-muted-foreground">For women, by women - understanding your needs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={doctorPortrait} 
                  alt="Professional female healthcare provider" 
                  className="rounded-lg shadow-medium w-full"
                />
                <img 
                  src={medicalDevice} 
                  alt="Modern medical laser equipment" 
                  className="rounded-lg shadow-medium w-full mt-8"
                />
              </div>
              
              <Card className="absolute -bottom-6 -left-6 bg-background shadow-large">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-wellness-pink">87%</div>
                    <div className="text-sm text-muted-foreground">Excellent Rating</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Benefits */}
      <TreatmentBenefits />

      {/* Clinical Team */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Clinical Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Led by qualified medical professionals with years of experience in women's health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Clinical Director</CardTitle>
                <CardDescription className="text-lg font-semibold text-wellness-pink">
                  Katy Pitt Allen
                </CardDescription>
                <Badge variant="medical" className="mx-auto w-fit">
                  Registered Nurse, BMS
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading our nursing team with extensive experience in women's health and intimate wellness treatments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Clinical Oversight</CardTitle>
                <CardDescription className="text-lg font-semibold text-medical-blue">
                  Dr Kamaljit Singh
                </CardDescription>
                <Badge variant="trust" className="mx-auto w-fit">
                  BSc (Hons), MBChB, MRCGP
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Providing medical oversight and ensuring the highest standards of patient care and safety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Pricing */}
      <PricingSection />

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about NuV treatment
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader 
                  className="cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-foreground">{item.question}</CardTitle>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-wellness-pink" />
                    ) : (
                      <Plus className="h-5 w-5 text-wellness-pink" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="wellness" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-wellness-pink-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Take the First Step Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book your free consultation and discover how NuV can help you reclaim your confidence
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-wellness-pink">Women's</span>
                <span className="text-medical-blue"> Health</span>
                <span className="text-background"> Clinic</span>
              </div>
              <p className="text-muted">
                Professional, confidential women's health services in a comfortable, women-led environment.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+44 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@thewomenshealthclinic.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Multiple clinic locations</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#treatments" className="block hover:text-wellness-pink transition-colors">Treatments</a>
                <a href="#about" className="block hover:text-wellness-pink transition-colors">About Us</a>
                <a href="#pricing" className="block hover:text-wellness-pink transition-colors">Pricing</a>
                <a href="#faq" className="block hover:text-wellness-pink transition-colors">FAQ</a>
              </div>
            </div>
          </div>

          <div className="border-t border-muted mt-8 pt-8 text-center text-sm text-muted">
            <p>&copy; 2024 The Women's Health Clinic. All rights reserved. | CQC Registered | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
