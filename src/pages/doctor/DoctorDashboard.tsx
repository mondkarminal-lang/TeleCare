import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, 
  MessageSquare, 
  Users, 
  Clock, 
  ArrowRight,
  Video,
  ChevronRight,
  CheckCircle2,
  XCircle,
  TrendingUp
} from 'lucide-react';
import { dashboardStats, doctorAppointments } from '@/lib/mockData';
import { format } from 'date-fns';

const statCards = [
  {
    title: "Today's Appointments",
    value: dashboardStats.doctor.todayAppointments,
    icon: Calendar,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    change: '+2 from yesterday',
    link: '/doctor/appointments',
  },
  {
    title: 'Total Patients',
    value: dashboardStats.doctor.totalPatients,
    icon: Users,
    color: 'text-success',
    bgColor: 'bg-success/10',
    change: '+12 this month',
    link: '/doctor/patients',
  },
  {
    title: 'Pending Consultations',
    value: dashboardStats.doctor.pendingConsultations,
    icon: Clock,
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    change: 'Needs attention',
    link: '/doctor/appointments',
  },
  {
    title: 'Completed Today',
    value: dashboardStats.doctor.completedToday,
    icon: CheckCircle2,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    change: '3 more scheduled',
    link: '/doctor/appointments',
  },
];

export default function DoctorDashboard() {
  const todaysAppointments = doctorAppointments.filter(
    apt => apt.date === format(new Date(), 'yyyy-MM-dd')
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Good morning, Dr. Sarah!</h1>
            <p className="text-muted-foreground mt-1">
              You have {dashboardStats.doctor.todayAppointments} appointments scheduled for today.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/doctor/patients">
                <Users className="mr-2 h-5 w-5" />
                My Patients
              </Link>
            </Button>
            <Button className="btn-hero-primary" asChild>
              <Link to="/doctor/appointments">
                <Calendar className="mr-2 h-5 w-5" />
                View Schedule
              </Link>
            </Button>
          </div>
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
                  <div className="mt-2 flex items-center gap-1 text-xs text-success">
                    <TrendingUp className="h-3 w-3" />
                    <span>{stat.change}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2 dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>
                  {format(new Date(), 'EEEE, MMMM d, yyyy')}
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/doctor/appointments">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {doctorAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl bg-muted/50"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={appointment.patient.image} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {appointment.patient.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <p className="font-semibold truncate">{appointment.patient.name}</p>
                          <Badge className={
                            appointment.status === 'confirmed'
                              ? 'badge-confirmed'
                              : 'badge-pending'
                          }>
                            {appointment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Age: {appointment.patient.age} • {appointment.notes}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium">{appointment.time}</p>
                        <p className="text-sm text-muted-foreground">{appointment.type}</p>
                      </div>
                      <div className="flex gap-2">
                        {appointment.status === 'pending' ? (
                          <>
                            <Button size="sm" className="bg-success hover:bg-success/90 text-success-foreground">
                              <CheckCircle2 className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="destructive">
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <Button size="sm" className="btn-hero-primary">
                            <Video className="mr-2 h-4 w-4" />
                            Start
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions & Stats */}
          <div className="space-y-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link 
                  to="/doctor/prescriptions"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Write Prescription</p>
                    <p className="text-sm text-muted-foreground">Create new prescription</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Link 
                  to="/doctor/chat"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Patient Messages</p>
                    <p className="text-sm text-muted-foreground">3 unread messages</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Link 
                  to="/doctor/patients"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Patient Records</p>
                    <p className="text-sm text-muted-foreground">View patient history</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>This Week</CardTitle>
                <CardDescription>Your performance summary</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Consultations</span>
                  <span className="font-semibold">32</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">New Patients</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Prescriptions</span>
                  <span className="font-semibold">28</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Rating</span>
                  <span className="font-semibold text-warning">4.9 ★</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
