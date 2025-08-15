// components/booking/BookingForm.tsx

import { useState } from 'react';

interface BookingFormProps {
  onBook: (data: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onBook }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook(formData); // Pass form data back to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="service">Service:</label>
        <input
          type="text"
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
