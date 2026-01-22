import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Video, 
  MessageCircle, 
  FileText, 
  Shield, 
  Clock, 
  Heart,
  Calendar,
  Stethoscope,
  UserCheck,
  Pill,
  Star,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Users,
  Sparkles
} from 'lucide-react';
import { doctors } from '@/lib/mockData';
import heroImage from '@/assets/hero-telemedicine.jpg';

const features = [
  {
    icon: Video,
    title: 'Video Consultation',
    description: 'Face-to-face consultations from the comfort of your home with HD video calls.',
  },
  {
    icon: MessageCircle,
    title: 'Secure Chat',
    description: 'Private messaging with your healthcare providers, anytime you need support.',
  },
  {
    icon: FileText,
    title: 'Digital Prescriptions',
    description: 'Receive and manage prescriptions digitally, with easy pharmacy integration.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Your health data is protected with enterprise-grade security and privacy.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Access healthcare services around the clock, whenever you need them.',
  },
  {
    icon: Heart,
    title: 'Complete Health Records',
    description: 'All your medical history, documents, and reports in one secure place.',
  },
];

const steps = [
  {
    step: 1,
    icon: UserCheck,
    title: 'Create Account',
    description: 'Sign up in minutes with your basic information.',
  },
  {
    step: 2,
    icon: Stethoscope,
    title: 'Choose Doctor',
    description: 'Browse specialists and pick the right doctor for you.',
  },
  {
    step: 3,
    icon: Calendar,
    title: 'Book Appointment',
    description: 'Select a convenient time slot for your consultation.',
  },
  {
    step: 4,
    icon: Video,
    title: 'Video Consultation',
    description: 'Connect with your doctor via secure video call.',
  },
  {
    step: 5,
    icon: Pill,
    title: 'Get Prescription',
    description: 'Receive your digital prescription and follow-up plan.',
  },
];

const stats = [
  { value: '50,000+', label: 'Patients Served' },
  { value: '500+', label: 'Verified Doctors' },
  { value: '98%', label: 'Patient Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Trusted by 50,000+ patients</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Consult Doctors{' '}
                <span className="text-gradient-primary">Anytime,</span>
                <br />
                <span className="text-gradient-primary">Anywhere</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Remote healthcare made simple and secure. Get expert medical consultations 
                from certified doctors without leaving your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-hero-primary text-lg px-8" asChild>
                  <Link to="/patient/book-appointment">
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="btn-hero-secondary text-lg px-8" asChild>
                  <Link to="/signup">
                    Join as Doctor
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-primary">
                        {String.fromCharCode(64 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Rated 4.9/5 from 2000+ reviews</p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-healthcare-lg">
                <img
                  src={heroImage}
                  alt="Telemedicine consultation"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -left-4 top-1/4 bg-card rounded-xl p-4 shadow-lg border animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                    <Video className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Live Consultation</p>
                    <p className="text-xs text-muted-foreground">Dr. Sarah is online</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-card rounded-xl p-4 shadow-lg border animate-float hidden md:block" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Appointment Confirmed</p>
                    <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for{' '}
              <span className="text-gradient-primary">Virtual Healthcare</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive platform provides all the tools for seamless remote healthcare experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="card-feature group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-gradient-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started with your healthcare journey in 5 simple steps.
            </p>
          </div>
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 hidden lg:block" />
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative text-center group">
                  <div className="relative mx-auto mb-6">
                    <div className="h-20 w-20 rounded-full bg-card border-4 border-primary/20 flex items-center justify-center mx-auto group-hover:border-primary transition-colors duration-300">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient-primary">Expert Doctors</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team of certified healthcare professionals is here to help you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.slice(0, 6).map((doctor, i) => (
              <div key={doctor.id} className="card-doctor">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <Stethoscope className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                    </div>
                  </div>
                  <p className="text-primary font-medium text-sm mb-2">{doctor.specialization}</p>
                  <p className="text-muted-foreground text-sm mb-4">{doctor.experience} experience</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-success font-medium">{doctor.availability}</span>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/doctors">
                View All Doctors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Bridging Healthcare Gaps, One Consultation at a Time
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                TeleCare is committed to making quality healthcare accessible to everyone, 
                especially those in underserved and rural communities.
              </p>
              <ul className="space-y-4">
                {[
                  'Connecting rural patients with specialist doctors',
                  'Reducing travel time and healthcare costs',
                  'Providing 24/7 access to medical professionals',
                  'Supporting mental health with private consultations',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 rounded-2xl p-6 text-center">
                <MapPin className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-foreground">200+</h3>
                <p className="text-primary-foreground/70">Rural Areas Served</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-2xl p-6 text-center">
                <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-foreground">15,000+</h3>
                <p className="text-primary-foreground/70">Rural Patients</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-2xl p-6 text-center">
                <Clock className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-foreground">4 hrs</h3>
                <p className="text-primary-foreground/70">Avg. Travel Saved</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-2xl p-6 text-center">
                <Heart className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-foreground">95%</h3>
                <p className="text-primary-foreground/70">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-secondary/50 to-background rounded-3xl p-12 md:p-16 border">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of patients who trust TeleCare for their healthcare needs. 
              Get started today and experience healthcare the modern way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero-primary text-lg px-8" asChild>
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
