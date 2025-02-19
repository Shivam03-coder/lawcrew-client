import { AlertCircle, Calendar, FileText, Info } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const TaxationNotice = () => {
  return (
    <div className="mt-6">
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-yellow-500" />
          <CardTitle>Important Notices & Compliance Updates</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-4">
          <Calendar className="mt-0.5 h-5 w-5 text-gray-500" />
          <div>
            <p className="font-medium">GST Return Due</p>
            <p className="text-muted-foreground text-sm">
              Your GST payment for Q1 2024 is due in 15 days. Please
              ensure timely payment to avoid penalties.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FileText className="mt-0.5 h-5 w-5 text-gray-500" />
          <div>
            <p className="font-medium">Document Update Required</p>
            <p className="text-muted-foreground text-sm">
              Please update your business registration documents before
              the next filing.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Info className="mt-0.5 h-5 w-5 text-blue-500" />
          <div>
            <p className="font-medium">New Tax Regulation Update</p>
            <p className="text-muted-foreground text-sm">
              Recent changes in tax regulations may affect your next
              filing. Review the updates in the compliance section.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
  )
}

export default TaxationNotice