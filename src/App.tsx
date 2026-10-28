// src/App.tsx
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Programmes from './components/Programmes';
import Coaches from './components/Coaches';
import ClassSchedule from './components/ClassSchedule';
import Memberships from './components/Memberships';
import Community from './components/Community';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedMembership, setSelectedMembership] = useState('');

  return (
    <>
      <a href="#main-content" className="sr-only">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Philosophy />
        <Programmes />
        <Coaches />
        <ClassSchedule />
        <Memberships onSelect={setSelectedMembership} />
        <Community />
        <EnquiryForm selectedMembership={selectedMembership} />
      </main>
      <Footer />
    </>
  );
}
