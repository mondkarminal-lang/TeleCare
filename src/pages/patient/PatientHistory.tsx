import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  FileText, 
  Search,
  Stethoscope,
  Download,
  Filter
} from 'lucide-react';
import { medicalHistory } from '@/lib/mockData';
import { format } from 'date-fns';

export default function PatientHistory() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Medical History</h1>
            <p className="text-muted-foreground mt-1">
              Your complete health timeline
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search records..." className="pl-9 w-64" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-6">
            {medicalHistory.map((record, index) => (
              <div key={record.id} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex h-16 w-16 rounded-full bg-card border-4 border-primary/20 items-center justify-center flex-shrink-0 z-10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                
                <Card className="flex-1 dashboard-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <Badge variant="secondary">{record.type}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {format(new Date(record.date), 'MMMM d, yyyy')}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Stethoscope className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">{record.doctor.name}</p>
                            <p className="text-sm text-muted-foreground">{record.doctor.specialization}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{record.summary}</p>
                      </div>
                      
                      {record.documents.length > 0 && (
                        <div className="flex flex-col gap-2">
                          <p className="text-sm font-medium text-muted-foreground">Documents</p>
                          {record.documents.map((doc, i) => (
                            <Button key={i} variant="outline" size="sm" className="justify-start">
                              <FileText className="mr-2 h-4 w-4" />
                              {doc}
                              <Download className="ml-2 h-3 w-3" />
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
