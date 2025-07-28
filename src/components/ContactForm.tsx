import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, Calendar } from "lucide-react"

export const ContactForm = () => {
  return (
    <Card className="w-full max-w-lg mx-auto shadow-large">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-primary">Book Free Consultation</CardTitle>
        <CardDescription>
          Take the first step towards reclaiming your confidence
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[538px] w-full">
          <iframe
            src="https://brand.121.direct/widget/form/3bhjufYGt6SdcZw7szBJ"
            style={{width: "100%", height: "100%", border: "none", borderRadius: "4px"}}
            id="inline-3bhjufYGt6SdcZw7szBJ"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="TWHC Lead Form"
            data-height="538"
            data-layout-iframe-id="inline-3bhjufYGt6SdcZw7szBJ"
            data-form-id="3bhjufYGt6SdcZw7szBJ"
            title="TWHC Lead Form"
          />
        </div>

        <div className="flex items-center justify-center space-x-4 pt-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-1" />
            <span>0800 488 0909</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-1" />
            <span>hello@thewomenshealth.clinic</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}