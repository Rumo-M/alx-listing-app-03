// components/booking/OrderSummary.tsx

interface OrderSummaryProps {
  bookingData: {
    name: string;
    email: string;
    service: string;
    date: string;
  };
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingData }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p><strong>Name:</strong> {bookingData.name}</p>
      <p><strong>Email:</strong> {bookingData.email}</p>
      <p><strong>Service:</strong> {bookingData.service}</p>
      <p><strong>Date:</strong> {bookingData.date}</p>
    </div>
  );
};

export default OrderSummary;
