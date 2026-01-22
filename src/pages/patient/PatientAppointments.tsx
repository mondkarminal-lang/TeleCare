import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  Video, 
  MessageSquare,
  Stethoscope,
  XCircle
} from 'lucide-react';
import { patientAppointments } from '@/lib/mockData';
import { format } from 'date-fns';

export default function PatientAppointments() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingAppointments = patientAppointments.filter(apt => apt.status !== 'completed');
  const pastAppointments = patientAppointments.filter(apt => apt.status === 'completed');

  const AppointmentCard = ({ appointment }: { appointment: typeof patientAppointments[0] }) => (
    <Card className="dashboard-card">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Stethoscope className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold text-lg">{appointment.doctor.name}</h3>
                <Badge className={
                  appointment.status === 'confirmed' ? 'badge-confirmed' :
                  appointment.status === 'pending' ? 'badge-pending' :
                  'badge-completed'
                }>
                  {appointment.status}
                </Badge>
              </div>
              <p className="text-primary font-medium">{appointment.doctor.specialization}</p>
              <p className="text-sm text-muted-foreground mt-1">{appointment.notes}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{format(new Date(appointment.date), 'MMM d, yyyy')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{appointment.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 text-muted-foreground" />
                <span>{appointment.type}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {appointment.status !== 'completed' && (
                <>
                  <Button className="btn-hero-primary">
                    <Video className="mr-2 h-4 w-4" />
                    Join Call
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                    <XCircle className="h-5 w-5" />
                  </Button>
                </>
              )}
              {appointment.status === 'completed' && (
                <Button variant="outline">
                  View Details
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">My Appointments</h1>
          <p className="text-muted-foreground mt-1">
            Manage your scheduled consultations
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Upcoming ({upcomingAppointments.length})
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Past ({pastAppointments.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4 mt-6">
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <Card className="dashboard-card">
                <CardContent className="py-12 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="font-semibold mb-2">No upcoming appointments</h3>
                  <p className="text-muted-foreground mb-4">
                    Book a consultation with our doctors
                  </p>
                  <Button className="btn-hero-primary">Book Appointment</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4 mt-6">
            {pastAppointments.length > 0 ? (
              pastAppointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <Card className="dashboard-card">
                <CardContent className="py-12 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="font-semibold mb-2">No past appointments</h3>
                  <p className="text-muted-foreground">
                    Your completed consultations will appear here
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
