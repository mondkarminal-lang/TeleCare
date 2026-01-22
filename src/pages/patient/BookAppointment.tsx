import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { 
  Search,
  Star,
  Clock,
  Video,
  CheckCircle2,
  Stethoscope,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { doctors, specializations, timeSlots } from '@/lib/mockData';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

type Step = 'specialization' | 'doctor' | 'datetime' | 'confirm';

export default function BookAppointment() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('specialization');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const filteredDoctors = doctors.filter(doc => {
    const matchesSpecialization = !selectedSpecialization || doc.specialization === selectedSpecialization;
    const matchesSearch = !searchQuery || 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialization && matchesSearch;
  });

  const handleNext = () => {
    if (step === 'specialization' && selectedSpecialization) setStep('doctor');
    else if (step === 'doctor' && selectedDoctor) setStep('datetime');
    else if (step === 'datetime' && selectedDate && selectedTime) setStep('confirm');
  };

  const handleBack = () => {
    if (step === 'doctor') setStep('specialization');
    else if (step === 'datetime') setStep('doctor');
    else if (step === 'confirm') setStep('datetime');
  };

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  const steps = [
    { id: 'specialization', name: 'Specialization' },
    { id: 'doctor', name: 'Doctor' },
    { id: 'datetime', name: 'Date & Time' },
    { id: 'confirm', name: 'Confirm' },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === step);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Book an Appointment</h1>
          <p className="text-muted-foreground mt-1">
            Schedule a consultation with our expert doctors
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center font-semibold transition-colors",
                  i <= currentStepIndex
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}>
                  {i < currentStepIndex ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
                </div>
                <span className={cn(
                  "text-xs mt-2 hidden sm:block",
                  i <= currentStepIndex ? "text-primary font-medium" : "text-muted-foreground"
                )}>
                  {s.name}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={cn(
                  "flex-1 h-0.5 mx-2",
                  i < currentStepIndex ? "bg-primary" : "bg-muted"
                )} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <Card className="dashboard-card">
          <CardContent className="p-6">
            {/* Step 1: Specialization */}
            {step === 'specialization' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Select Specialization</h2>
                  <p className="text-muted-foreground">Choose the type of doctor you need</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {specializations.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => setSelectedSpecialization(spec)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-center transition-all duration-200",
                        selectedSpecialization === spec
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <Stethoscope className={cn(
                        "h-8 w-8 mx-auto mb-2",
                        selectedSpecialization === spec ? "text-primary" : "text-muted-foreground"
                      )} />
                      <span className="text-sm font-medium">{spec}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Doctor Selection */}
            {step === 'doctor' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Choose a Doctor</h2>
                    <p className="text-muted-foreground">
                      {selectedSpecialization} specialists available
                    </p>
                  </div>
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search doctors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {filteredDoctors.map((doctor) => (
                    <button
                      key={doctor.id}
                      onClick={() => setSelectedDoctor(doctor)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-all duration-200",
                        selectedDoctor?.id === doctor.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex gap-4">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Stethoscope className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold truncate">{doctor.name}</p>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-warning text-warning" />
                              <span className="text-xs">{doctor.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-primary">{doctor.specialization}</p>
                          <p className="text-xs text-muted-foreground mt-1">{doctor.experience} exp.</p>
                          <div className="flex items-center justify-between mt-2">
                            <Badge variant="secondary" className="text-xs">
                              <Video className="h-3 w-3 mr-1" />
                              ${doctor.consultationFee}
                            </Badge>
                            <span className="text-xs text-success">{doctor.availability}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 'datetime' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Select Date & Time</h2>
                  <p className="text-muted-foreground">
                    Choose a convenient slot for your consultation
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="mb-3 block">Select Date</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-lg border p-3"
                    />
                  </div>
                  <div>
                    <Label className="mb-3 block">Select Time</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "p-3 rounded-lg border text-sm font-medium transition-colors",
                            selectedTime === time
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes" className="mb-2 block">Appointment Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Describe your symptoms or reason for visit..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 'confirm' && selectedDoctor && selectedDate && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Confirm Appointment</h2>
                  <p className="text-muted-foreground">
                    Review your appointment details
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Stethoscope className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{selectedDoctor.name}</h3>
                      <p className="text-primary">{selectedDoctor.specialization}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span className="text-sm">{selectedDoctor.rating} ({selectedDoctor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Date & Time</p>
                        <p className="font-medium">
                          {format(selectedDate, 'EEEE, MMM d, yyyy')} at {selectedTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                      <Video className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Consultation Type</p>
                        <p className="font-medium">Video Consultation</p>
                      </div>
                    </div>
                  </div>
                  {notes && (
                    <div className="p-4 bg-card rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Notes</p>
                      <p>{notes}</p>
                    </div>
                  )}
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg border-2 border-primary/20">
                    <span className="font-medium">Consultation Fee</span>
                    <span className="text-2xl font-bold text-primary">${selectedDoctor.consultationFee}</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 'specialization'}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          {step === 'confirm' ? (
            <Button className="btn-hero-primary" onClick={handleConfirm}>
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Confirm Booking
            </Button>
          ) : (
            <Button
              className="btn-hero-primary"
              onClick={handleNext}
              disabled={
                (step === 'specialization' && !selectedSpecialization) ||
                (step === 'doctor' && !selectedDoctor) ||
                (step === 'datetime' && (!selectedDate || !selectedTime))
              }
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <DialogTitle className="text-2xl">Appointment Booked!</DialogTitle>
            <DialogDescription>
              Your appointment has been successfully scheduled. You will receive a confirmation email shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-muted rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">Appointment with</p>
            <p className="font-semibold">{selectedDoctor?.name}</p>
            <p className="text-primary text-sm">
              {selectedDate && format(selectedDate, 'EEEE, MMM d')} at {selectedTime}
            </p>
          </div>
          <DialogFooter className="flex-col sm:flex-col gap-2">
            <Button className="w-full btn-hero-primary" onClick={() => navigate('/patient/appointments')}>
              View My Appointments
            </Button>
            <Button variant="outline" className="w-full" onClick={() => navigate('/patient/dashboard')}>
              Back to Dashboard
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
