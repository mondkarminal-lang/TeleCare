import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Calendar, 
  Pill,
  Stethoscope,
  Clock
} from 'lucide-react';
import { prescriptions } from '@/lib/mockData';
import { format } from 'date-fns';

export default function PatientPrescriptions() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">My Prescriptions</h1>
          <p className="text-muted-foreground mt-1">
            View and download your medical prescriptions
          </p>
        </div>

        <div className="space-y-6">
          {prescriptions.map((prescription) => (
            <Card key={prescription.id} className="dashboard-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Stethoscope className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{prescription.doctor.name}</CardTitle>
                      <CardDescription>{prescription.doctor.specialization}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {format(new Date(prescription.date), 'MMM d, yyyy')}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Medicines */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Pill className="h-4 w-4 text-primary" />
                      Medications
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {prescription.medicines.map((medicine, i) => (
                        <div 
                          key={i}
                          className="p-4 rounded-xl bg-muted/50 border"
                        >
                          <p className="font-semibold text-primary">{medicine.name}</p>
                          <div className="mt-2 space-y-1 text-sm">
                            <p>
                              <span className="text-muted-foreground">Dosage:</span>{' '}
                              {medicine.dosage}
                            </p>
                            <p>
                              <span className="text-muted-foreground">Frequency:</span>{' '}
                              {medicine.frequency}
                            </p>
                            <p>
                              <span className="text-muted-foreground">Duration:</span>{' '}
                              {medicine.duration}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="p-4 rounded-xl bg-secondary/50 border border-secondary">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Instructions
                    </h4>
                    <p className="text-sm text-muted-foreground">{prescription.instructions}</p>
                  </div>

                  {/* Follow-up */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-warning/10 border border-warning/20">
                    <Clock className="h-5 w-5 text-warning" />
                    <div>
                      <p className="font-medium">Follow-up Appointment</p>
                      <p className="text-sm text-muted-foreground">
                        Scheduled for {format(new Date(prescription.followUp), 'EEEE, MMMM d, yyyy')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
