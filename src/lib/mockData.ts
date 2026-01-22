// Mock data for TeleCare demo

export const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialization: "General Physician",
    experience: "12 years",
    rating: 4.9,
    reviews: 248,
    availability: "Available Today",
    image: "/placeholder.svg",
    bio: "Board-certified physician with expertise in preventive care and chronic disease management.",
    consultationFee: 50,
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialization: "Cardiologist",
    experience: "15 years",
    rating: 4.8,
    reviews: 312,
    availability: "Available Tomorrow",
    image: "/placeholder.svg",
    bio: "Leading cardiologist specializing in heart health and cardiovascular prevention.",
    consultationFee: 75,
  },
  {
    id: "3",
    name: "Dr. Emily Williams",
    specialization: "Dermatologist",
    experience: "8 years",
    rating: 4.9,
    reviews: 189,
    availability: "Available Today",
    image: "/placeholder.svg",
    bio: "Expert in skin conditions, cosmetic dermatology, and skin cancer screening.",
    consultationFee: 60,
  },
  {
    id: "4",
    name: "Dr. James Anderson",
    specialization: "Pediatrician",
    experience: "10 years",
    rating: 4.7,
    reviews: 276,
    availability: "Available Today",
    image: "/placeholder.svg",
    bio: "Dedicated pediatrician focused on child wellness and developmental care.",
    consultationFee: 55,
  },
  {
    id: "5",
    name: "Dr. Lisa Martinez",
    specialization: "Psychiatrist",
    experience: "14 years",
    rating: 4.9,
    reviews: 198,
    availability: "Available Tomorrow",
    image: "/placeholder.svg",
    bio: "Mental health specialist with focus on anxiety, depression, and stress management.",
    consultationFee: 80,
  },
  {
    id: "6",
    name: "Dr. Robert Kim",
    specialization: "Orthopedic",
    experience: "18 years",
    rating: 4.8,
    reviews: 342,
    availability: "Available Today",
    image: "/placeholder.svg",
    bio: "Orthopedic surgeon specializing in sports injuries and joint replacement.",
    consultationFee: 70,
  },
];

export const specializations = [
  "General Physician",
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Psychiatrist",
  "Orthopedic",
  "Neurologist",
  "Gynecologist",
  "ENT Specialist",
  "Ophthalmologist",
];

export const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
];

export const patientAppointments = [
  {
    id: "apt1",
    doctor: doctors[0],
    date: "2026-01-24",
    time: "10:00 AM",
    status: "confirmed",
    type: "Video Consultation",
    notes: "Follow-up for blood pressure check",
  },
  {
    id: "apt2",
    doctor: doctors[2],
    date: "2026-01-25",
    time: "02:30 PM",
    status: "pending",
    type: "Video Consultation",
    notes: "Skin rash consultation",
  },
  {
    id: "apt3",
    doctor: doctors[1],
    date: "2026-01-20",
    time: "11:00 AM",
    status: "completed",
    type: "Video Consultation",
    notes: "Annual heart checkup",
  },
];

export const doctorAppointments = [
  {
    id: "dapt1",
    patient: { name: "John Smith", age: 45, image: "/placeholder.svg" },
    date: "2026-01-22",
    time: "09:00 AM",
    status: "confirmed",
    type: "Video Consultation",
    notes: "Routine checkup",
  },
  {
    id: "dapt2",
    patient: { name: "Emma Davis", age: 32, image: "/placeholder.svg" },
    date: "2026-01-22",
    time: "10:30 AM",
    status: "pending",
    type: "Video Consultation",
    notes: "Headache and fatigue",
  },
  {
    id: "dapt3",
    patient: { name: "Michael Brown", age: 58, image: "/placeholder.svg" },
    date: "2026-01-22",
    time: "02:00 PM",
    status: "confirmed",
    type: "Video Consultation",
    notes: "Blood pressure follow-up",
  },
];

export const prescriptions = [
  {
    id: "presc1",
    doctor: doctors[0],
    date: "2026-01-20",
    medicines: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", duration: "30 days" },
      { name: "Aspirin", dosage: "81mg", frequency: "Once daily", duration: "30 days" },
    ],
    instructions: "Take with food. Monitor blood pressure daily.",
    followUp: "2026-02-20",
  },
  {
    id: "presc2",
    doctor: doctors[2],
    date: "2026-01-15",
    medicines: [
      { name: "Hydrocortisone Cream", dosage: "1%", frequency: "Twice daily", duration: "14 days" },
    ],
    instructions: "Apply to affected area. Avoid sun exposure.",
    followUp: "2026-01-29",
  },
];

export const chatMessages = [
  {
    id: "msg1",
    sender: "doctor",
    content: "Hello! How are you feeling today?",
    timestamp: "2026-01-22T09:00:00",
  },
  {
    id: "msg2",
    sender: "patient",
    content: "Hi Doctor, I've been having some headaches lately.",
    timestamp: "2026-01-22T09:01:00",
  },
  {
    id: "msg3",
    sender: "doctor",
    content: "I see. How long have you been experiencing these headaches? Are they constant or do they come and go?",
    timestamp: "2026-01-22T09:02:00",
  },
  {
    id: "msg4",
    sender: "patient",
    content: "They come and go, usually in the afternoon. Been about a week now.",
    timestamp: "2026-01-22T09:03:00",
  },
];

export const medicalHistory = [
  {
    id: "hist1",
    date: "2026-01-20",
    type: "Consultation",
    doctor: doctors[0],
    summary: "Blood pressure follow-up. BP reading: 128/82. Medication adjusted.",
    documents: ["Blood_Pressure_Report.pdf"],
  },
  {
    id: "hist2",
    date: "2026-01-15",
    type: "Lab Report",
    doctor: doctors[0],
    summary: "Complete blood count - All values within normal range.",
    documents: ["CBC_Report.pdf"],
  },
  {
    id: "hist3",
    date: "2025-12-10",
    type: "Consultation",
    doctor: doctors[1],
    summary: "Annual cardiac checkup. ECG normal. No concerns.",
    documents: ["ECG_Report.pdf", "Cardiac_Summary.pdf"],
  },
];

export const dashboardStats = {
  patient: {
    upcomingAppointments: 2,
    pastConsultations: 15,
    activeChats: 1,
    prescriptions: 4,
  },
  doctor: {
    todayAppointments: 8,
    totalPatients: 156,
    pendingConsultations: 3,
    completedToday: 5,
  },
  admin: {
    totalUsers: 1250,
    totalDoctors: 48,
    totalAppointments: 3420,
    activeConsultations: 12,
  },
};
