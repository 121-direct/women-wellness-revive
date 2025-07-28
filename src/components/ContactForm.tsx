import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, Calendar } from "lucide-react"

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    treatment: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Consultation Requested",
      description: "Thank you! We'll contact you within 24 hours to schedule your free consultation.",
    })
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      treatment: "",
    })
  }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-large">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-primary">Book Free Consultation</CardTitle>
        <CardDescription>
          Take the first step towards reclaiming your confidence
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                className="transition-all duration-200 focus:ring-wellness-pink"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                className="transition-all duration-200 focus:ring-wellness-pink"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="transition-all duration-200 focus:ring-wellness-pink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="transition-all duration-200 focus:ring-wellness-pink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="treatment">Treatment Interest</Label>
            <Select value={formData.treatment} onValueChange={(value) => setFormData({ ...formData, treatment: value })}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select treatment" />
              </SelectTrigger>
              <SelectContent className="bg-background border shadow-lg z-50">
                <SelectItem value="nuv-vaginal">NuV Vaginal Rejuvenation</SelectItem>
                <SelectItem value="menopause">Menopause Support</SelectItem>
                <SelectItem value="contraception">Contraception</SelectItem>
                <SelectItem value="general">General Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            variant="wellness" 
            size="lg" 
            className="w-full"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book Free Consultation
          </Button>

          <div className="flex items-center justify-center space-x-4 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+44 XXX XXX XXXX</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>info@clinic.com</span>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}