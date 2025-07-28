import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Phone } from "lucide-react"
import { TrustIndicators } from "./TrustIndicators"
import clinicHero from "@/assets/clinic-hero.jpg"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-soft overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={clinicHero} 
          alt="Modern women's health clinic" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="wellness" className="mb-4">
                Content Approved by The Women's Health Clinic
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Reclaim Your</span>{" "}
                <span className="text-transparent bg-gradient-primary bg-clip-text">
                  Confidence
                </span>{" "}
                <span className="text-foreground">& Intimate Wellness</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Revolutionary NuV vaginal rejuvenation treatment that helps restore function, 
                comfort, and confidence in just 15 minutes. No surgery, no downtime.
              </p>
            </div>

            {/* Trust Indicators */}
            <TrustIndicators />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="wellness" size="xl" className="group">
                <Calendar className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Book Free Consultation
              </Button>
              
              <Button variant="outline" size="xl" className="group">
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Patient Story
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Call: +44 XXX XXX XXXX</span>
              </div>
              <div className="border-l border-border pl-6">
                <span className="font-semibold text-foreground">Over 60%</span> of women experience intimate wellness changes
              </div>
            </div>
          </div>

          {/* Video/Image Section */}
          <div className="lg:pl-12">
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-large">
                <div className="bg-wellness-pink-light rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-wellness-pink mb-4">
                    Transform Your Life in 15 Minutes
                  </h3>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-wellness-pink rounded-full mt-2" />
                      <p className="text-foreground">Vaginal looseness after childbirth?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-wellness-pink rounded-full mt-2" />
                      <p className="text-foreground">Painful or uncomfortable intercourse?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-wellness-pink rounded-full mt-2" />
                      <p className="text-foreground">Dryness, itching, or burning sensations?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-wellness-pink rounded-full mt-2" />
                      <p className="text-foreground">Loss of confidence in intimate moments?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-wellness-pink rounded-full mt-2" />
                      <p className="text-foreground">Stress incontinence when laughing or exercising?</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-background rounded-lg">
                    <p className="font-semibold text-wellness-pink mb-2">You're not alone.</p>
                    <p className="text-sm text-muted-foreground">
                      Our NuV treatment has helped thousands of women reclaim their confidence and intimate wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}