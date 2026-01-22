import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MessageSquare, 
  FileText, 
  Clock, 
  ArrowRight,
  Video,
  User,
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import { dashboardStats, patientAppointments, prescriptions } from '@/lib/mockData';
import { format } from 'date-fns';

const statCards = [
  {
    title: 'Upcoming Appointments',
    value: dashboardStats.patient.upcomingAppointments,
    icon: Calendar,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    link: '/patient/appointments',
  },
  {
    title: 'Past Consultations',
    value: dashboardStats.patient.pastConsultations,
    icon: Clock,
    color: 'text-success',
    bgColor: 'bg-success/10',
    link: '/patient/history',
  },
  {
    title: 'Active Chats',
    value: dashboardStats.patient.activeChats,
    icon: MessageSquare,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    link: '/patient/chat',
  },
  {
    title: 'Prescriptions',
    value: dashboardStats.patient.prescriptions,
    icon: FileText,
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    link: '/patient/prescriptions',
  },
];

export default function PatientDashboard() {
  const upcomingAppointment = patientAppointments.find(apt => apt.status !== 'completed');

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Welcome back, John!</h1>
            <p className="text-muted-foreground mt-1">Here's what's happening with your health today.</p>
          </div>
          <Button className="btn-hero-primary" asChild>
            <Link to="/patient/book-appointment">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statCards.map((stat, i) => (
            <Link key={i} to={stat.link}>
              <Card className="dashboard-card hover:shadow-md transition-shadow group">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className={`h-12 w-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="mt-4">
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upcoming Appointment */}
          <Card className="lg:col-span-2 dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Appointment</CardTitle>
                <CardDescription>Your next scheduled consultation</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/patient/appointments">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              {upcomingAppointment ? (
                <div className="bg-muted/50 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{upcomingAppointment.doctor.name}</h3>
                        <Badge className={
                          upcomingAppointment.status === 'confirmed' 
                            ? 'badge-confirmed' 
                            : 'badge-pending'
                        }>
                          {upcomingAppointment.status}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">{upcomingAppointment.doctor.specialization}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {format(new Date(upcomingAppointment.date), 'EEEE, MMM d, yyyy')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {upcomingAppointment.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Video className="h-4 w-4" />
                          {upcomingAppointment.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button className="btn-hero-primary">
                        <Video className="mr-2 h-4 w-4" />
                        Join Call
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No upcoming appointments</p>
                  <Button variant="link" asChild>
                    <Link to="/patient/book-appointment">Book one now</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks at your fingertips</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link 
                to="/patient/book-appointment"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Book Appointment</p>
                  <p className="text-sm text-muted-foreground">Schedule a consultation</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Link>
              <Link 
                to="/patient/chat"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Chat with Doctor</p>
                  <p className="text-sm text-muted-foreground">Send a message</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Link>
              <Link 
                to="/patient/prescriptions"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">View Prescriptions</p>
                  <p className="text-sm text-muted-foreground">Access your medications</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Link>
              <Link 
                to="/patient/profile"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Update Profile</p>
                  <p className="text-sm text-muted-foreground">Manage your info</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Prescriptions */}
        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Prescriptions</CardTitle>
              <CardDescription>Your latest medications and instructions</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/patient/prescriptions">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {prescriptions.slice(0, 2).map((prescription) => (
                <div 
                  key={prescription.id}
                  className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-semibold">{prescription.doctor.name}</p>
                      <Badge variant="secondary">
                        {format(new Date(prescription.date), 'MMM d, yyyy')}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prescription.medicines.map((med, i) => (
                        <Badge key={i} variant="outline" className="font-normal">
                          {med.name} - {med.dosage}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
