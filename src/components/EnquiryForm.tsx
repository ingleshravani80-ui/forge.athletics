// src/components/EnquiryForm.tsx
import { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import './EnquiryForm.css';

type MembershipId = 'essential' | 'performance' | 'unlimited' | '';

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  membership: MembershipId;
  interest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  membership?: string;
}

interface EnquiryFormProps {
  selectedMembership: string;
}

const membershipLabels: Record<string, string> = {
  essential: 'Essential — ₹2,499 / month',
  performance: 'Performance — ₹3,999 / month',
  unlimited: 'Unlimited — ₹5,499 / month',
};

const interestOptions = [
  'Strength & Conditioning',
  'Personal Training',
  'Functional Fitness',
  'Group Training',
  'General fitness',
  'Not sure yet',
];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.membership) errors.membership = 'Please select a membership plan.';
  return errors;
}

export default function EnquiryForm({ selectedMembership }: EnquiryFormProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    phone: '',
    membership: '' as MembershipId,
    interest: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Sync membership selection from plans section
  useEffect(() => {
    if (selectedMembership && selectedMembership !== values.membership) {
      setValues((v) => ({ ...v, membership: selectedMembership as MembershipId }));
    }
  }, [selectedMembership]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((er) => ({ ...er, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first error field
      const firstErr = Object.keys(errs)[0];
      const el = document.getElementById(`field-${firstErr}`);
      el?.focus();
      return;
    }
    // Frontend-only submission
    setSubmitted(true);
  };

  const handleReset = () => {
    setValues({ fullName: '', email: '', phone: '', membership: '', interest: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section id="enquiry" className="section enquiry" aria-labelledby="enquiry-headline">
        <div className="container enquiry__inner">
          <div className="enquiry__success" role="status" aria-live="polite">
            <div className="enquiry__success-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
                <circle cx="20" cy="20" r="19" stroke="#D87945" strokeWidth="2" />
                <path d="M12 20l6 6 10-12" stroke="#D87945" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="enquiry__success-title">Enquiry Validated</h2>
            <p className="enquiry__success-body">
              Your enquiry for the <strong>{membershipLabels[values.membership] ?? values.membership}</strong> plan has been validated locally.
            </p>
            <p className="enquiry__success-note">
              This is a portfolio demonstration website. No data has been sent to a real gym or stored on any server.
            </p>
            <button className="btn-outline enquiry__success-reset" onClick={handleReset}>
              Submit Another Enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry" className="section enquiry" aria-labelledby="enquiry-headline">
      <div className="container enquiry__inner">
        <div className="enquiry__left">
          <SectionHeading
            eyebrow="Your Next Step"
            headline="LET'S GET YOU STARTED."
            subtext="Tell us a little about your training goals. Choose your preferred membership and submit an enquiry to get started."
            align="left"
          />
          {values.membership && (
            <div className="enquiry__selected-plan" aria-live="polite">
              <span className="enquiry__selected-label">Selected plan</span>
              <span className="enquiry__selected-val">{membershipLabels[values.membership]}</span>
            </div>
          )}
        </div>

        <form
          className="enquiry__form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Membership enquiry form"
        >
          {/* Full name */}
          <div className={`form-field${errors.fullName ? ' form-field--error' : ''}`}>
            <label className="form-label" htmlFor="field-fullName">
              Full Name <span className="form-required" aria-label="required">*</span>
            </label>
            <input
              id="field-fullName"
              name="fullName"
              type="text"
              className="form-input"
              placeholder="Your full name"
              value={values.fullName}
              onChange={handleChange}
              autoComplete="name"
              aria-required="true"
              aria-describedby={errors.fullName ? 'err-fullName' : undefined}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <p id="err-fullName" className="form-error" role="alert">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className={`form-field${errors.email ? ' form-field--error' : ''}`}>
            <label className="form-label" htmlFor="field-email">
              Email Address <span className="form-required" aria-label="required">*</span>
            </label>
            <input
              id="field-email"
              name="email"
              type="email"
              className="form-input"
              placeholder="your@email.com"
              value={values.email}
              onChange={handleChange}
              autoComplete="email"
              aria-required="true"
              aria-describedby={errors.email ? 'err-email' : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p id="err-email" className="form-error" role="alert">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="form-field">
            <label className="form-label" htmlFor="field-phone">
              Phone Number <span className="form-optional">Optional</span>
            </label>
            <input
              id="field-phone"
              name="phone"
              type="tel"
              className="form-input"
              placeholder="Your phone number"
              value={values.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </div>

          {/* Membership */}
          <div className={`form-field${errors.membership ? ' form-field--error' : ''}`}>
            <label className="form-label" htmlFor="field-membership">
              Membership Plan <span className="form-required" aria-label="required">*</span>
            </label>
            <select
              id="field-membership"
              name="membership"
              className="form-select"
              value={values.membership}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={errors.membership ? 'err-membership' : undefined}
              aria-invalid={!!errors.membership}
            >
              <option value="">Select a plan</option>
              <option value="essential">Essential — ₹2,499 / month</option>
              <option value="performance">Performance — ₹3,999 / month</option>
              <option value="unlimited">Unlimited — ₹5,499 / month</option>
            </select>
            {errors.membership && (
              <p id="err-membership" className="form-error" role="alert">{errors.membership}</p>
            )}
          </div>

          {/* Interest */}
          <div className="form-field">
            <label className="form-label" htmlFor="field-interest">
              Training Interest <span className="form-optional">Optional</span>
            </label>
            <select
              id="field-interest"
              name="interest"
              className="form-select"
              value={values.interest}
              onChange={handleChange}
            >
              <option value="">Select an area</option>
              {interestOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="form-field form-field--full">
            <label className="form-label" htmlFor="field-message">
              Training Goals <span className="form-optional">Optional</span>
            </label>
            <textarea
              id="field-message"
              name="message"
              className="form-textarea"
              placeholder="Tell us about your training goals or any questions you have…"
              rows={4}
              value={values.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="form-field form-field--full">
            <button type="submit" className="btn-primary form-submit">
              Send Enquiry
            </button>
          </div>

          {/* Privacy note */}
          <p className="form-privacy">
            This is a portfolio demonstration website. Submitting this form does not send your information to a real gym or any server. No personal data is collected or stored.
          </p>
        </form>
      </div>
    </section>
  );
}
