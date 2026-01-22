# TeleCare

Telemedicine web app for booking appointments and remote consultations.

## Project info

- **Tech**: React + TypeScript + Vite, Tailwind CSS, shadcn-ui
- **Routing**: React Router
- **Tests**: Vitest
- **Default dev port**: `8080`

## Quick start

```sh
npm install
npm run dev
```

## Structure (main)

```txt
src/
  pages/        # routes (Landing, Auth, Dashboards)
  components/   # UI + layout components
  contexts/     # app contexts (auth, etc.)
  lib/          # helpers + mock data
public/         # static assets
```

## Scripts

```sh
npm run build
npm run preview
npm run test
npm run lint
```

## Hackathon project specification (Telemedicine Portal)

**Project Name**: TeleCare Connect  
**Type**: Telemedicine / Online Doctor Consultation Portal  
**Platform**: Web Application  
**Users**: Patient, Doctor, Admin  
**Goal**: Enable remote healthcare consultation through appointments, chat, video calls, and digital prescriptions.

### Global requirements

- Fully responsive (mobile, tablet, desktop)
- Modern healthcare-themed UI (white, blue, light green)
- Clear typography and spacing
- Icons for navigation
- Smooth transitions
- Dummy data where backend is not connected
- Clear call-to-action buttons
- Loading states and empty states
- Error handling messages
- Accessibility-friendly layout
- Mention data privacy & security (conceptually), role-based authorization, and cloud deployment readiness

### User roles

Each role must have:

- Separate dashboard
- Role-based navigation
- Role-based access control

### Pages & features

#### 1) Landing / Home page

- **Navbar**: Logo (TeleCare Connect), Home, Features, How It Works, Doctors, Contact, Login, Sign Up
- **Hero**: “Consult Doctors Anytime, Anywhere” + “Remote healthcare made simple and secure”, CTAs (Book Appointment / Join as Doctor)
- **Features cards**: Online Consultation, Secure Chat, Video Calls, Digital Prescriptions, Medical History
- **How it works**: Sign Up → Choose Doctor → Book Appointment → Video Consultation → Get Prescription
- **Doctors preview**: doctor cards (photo, name, specialization, experience)
- **Impact**: rural healthcare, time saving, accessibility
- **Footer**: About, Privacy Policy, Terms & Conditions, Contact Info, Social Icons

#### 2) Authentication

- **Login**: Email/Phone, Password, Role selector (Patient/Doctor), Forgot password, redirect to dashboard
- **Signup**: Full name, Email, Phone, Password, Role selection, Terms checkbox

#### 3) Patient dashboard

- **Sidebar**: Dashboard, Book Appointment, My Appointments, Chat, Prescriptions, Medical History, Profile, Logout
- **Widgets**: Upcoming Appointments, Past Consultations, Active Chats, Health Summary

#### 4) Doctor dashboard

- **Sidebar**: Dashboard, Appointments, Patients, Chat, Prescriptions, Profile, Logout
- **Widgets**: Today’s Appointments, Total Patients, Pending Consultations, Completed Consultations

#### 5) Book appointment

- Select specialization → doctor → preview → date → time slot → notes → book button → confirmation modal

#### 6) Appointments management

- **Patient**: upcoming/past list, status (Pending/Confirmed/Completed), Join Call, Chat
- **Doctor**: list, Accept/Reject, Start Consultation

#### 7) Video consultation

- Embedded video area (Jitsi/Meet placeholder), appointment details sidebar, timer, end consultation, doctor notes

#### 8) Chat system

- Real-time chat UI, timestamps, file upload (reports), online/offline indicator

#### 9) Prescription management

- **Doctor**: form (patient, medicines, dosage, instructions, follow-up), upload PDF, submit
- **Patient**: view/download PDFs, prescription history

#### 10) Medical history

- Timeline view, past appointments, prescriptions, uploaded reports, search & filter

#### 11) Profile page

- **Patient**: personal + medical details, edit profile
- **Doctor**: specialization, experience, availability, verification badge

#### 12) Admin dashboard (bonus)

- User management, doctor verification, app statistics, appointment monitoring
"# TeleCare" 
