import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Stethoscope, 
  Calendar, 
  TrendingUp,
  ArrowRight,
  UserCheck,
  UserX,
  Activity,
  DollarSign
} from 'lucide-react';
import { dashboardStats } from '@/lib/mockData';

const statCards = [
  {
    title: 'Total Users',
    value: dashboardStats.admin.totalUsers.toLocaleString(),
    icon: Users,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    change: '+124 this month',
  },
  {
    title: 'Verified Doctors',
    value: dashboardStats.admin.totalDoctors,
    icon: Stethoscope,
    color: 'text-success',
    bgColor: 'bg-success/10',
    change: '+8 pending verification',
  },
  {
    title: 'Total Appointments',
    value: dashboardStats.admin.totalAppointments.toLocaleString(),
    icon: Calendar,
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    change: '+256 this week',
  },
  {
    title: 'Active Consultations',
    value: dashboardStats.admin.activeConsultations,
    icon: Activity,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    change: 'Live now',
  },
];

const recentActivities = [
  { type: 'user_registered', message: 'New patient registered: Emma Wilson', time: '2 mins ago' },
  { type: 'doctor_verified', message: 'Dr. Michael Chen verified', time: '15 mins ago' },
  { type: 'appointment', message: 'Appointment completed: John Smith with Dr. Sarah', time: '32 mins ago' },
  { type: 'user_registered', message: 'New patient registered: Robert Davis', time: '1 hour ago' },
  { type: 'doctor_pending', message: 'Doctor verification pending: Dr. Lisa Anderson', time: '2 hours ago' },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Overview of platform statistics and management
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/admin/doctors">
                <Stethoscope className="mr-2 h-5 w-5" />
                Verify Doctors
              </Link>
            </Button>
            <Button className="btn-hero-primary" asChild>
              <Link to="/admin/statistics">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Reports
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statCards.map((stat, i) => (
            <Card key={i} className="dashboard-card">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
                <p className="text-xs text-success mt-2">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 dashboard-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest platform events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      activity.type === 'user_registered' ? 'bg-primary/10' :
                      activity.type === 'doctor_verified' ? 'bg-success/10' :
                      activity.type === 'doctor_pending' ? 'bg-warning/10' :
                      'bg-accent/10'
                    }`}>
                      {activity.type === 'user_registered' && <Users className="h-5 w-5 text-primary" />}
                      {activity.type === 'doctor_verified' && <UserCheck className="h-5 w-5 text-success" />}
                      {activity.type === 'doctor_pending' && <UserX className="h-5 w-5 text-warning" />}
                      {activity.type === 'appointment' && <Calendar className="h-5 w-5 text-accent" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Platform Overview</CardTitle>
              <CardDescription>This month's summary</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">New Patients</span>
                  <span className="font-semibold">+89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">New Doctors</span>
                  <span className="font-semibold">+12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Consultations</span>
                  <span className="font-semibold">856</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <span className="font-semibold text-success">$42,560</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Rating</span>
                  <span className="font-semibold text-warning">4.8 ★</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3">Pending Actions</h4>
                <div className="space-y-2">
                  <Badge className="w-full justify-between py-2" variant="secondary">
                    <span>Doctor Verifications</span>
                    <span className="bg-warning text-warning-foreground px-2 py-0.5 rounded-full text-xs">8</span>
                  </Badge>
                  <Badge className="w-full justify-between py-2" variant="secondary">
                    <span>Support Tickets</span>
                    <span className="bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full text-xs">3</span>
                  </Badge>
                  <Badge className="w-full justify-between py-2" variant="secondary">
                    <span>Refund Requests</span>
                    <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs">2</span>
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
