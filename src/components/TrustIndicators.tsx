import { Shield, Award, Users, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const TrustIndicators = () => {
  const indicators = [
    {
      icon: Award,
      label: "87% Excellent Rating",
      variant: "wellness" as const,
    },
    {
      icon: Shield,
      label: "CQC Registered",
      variant: "medical" as const,
    },
    {
      icon: Users,
      label: "Nurse-Led Team",
      variant: "trust" as const,
    },
    {
      icon: CheckCircle,
      label: "3,500+ Reviews",
      variant: "success" as const,
    },
  ]

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {indicators.map((indicator, index) => {
        const IconComponent = indicator.icon
        return (
          <Badge
            key={index}
            variant={indicator.variant}
            className="flex items-center gap-2 px-4 py-2 text-sm"
          >
            <IconComponent className="h-4 w-4" />
            {indicator.label}
          </Badge>
        )
      })}
    </div>
  )
}