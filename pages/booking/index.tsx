// pages/booking/index.tsx

import { useState } from 'react';
import BookingForm from '../../components/booking/BookingForm';
import OrderSummary from '../../components/booking/OrderSummary';
import CancellationPolicy from '../../components/booking/CancellationPolicy';

const BookingPage = () => {
  const [bookingData, setBookingData] = useState(null);

  const handleBooking = (data: any) => {
    setBookingData(data);
  };

  return (
    <div className="booking-container">
      <h1>Booking</h1>
      <BookingForm onBook={handleBooking} />
      
      {bookingData && (
        <>
          <OrderSummary bookingData={bookingData} />
          <CancellationPolicy />
        </>
      )}
    </div>
  );
};

export default BookingPage;
