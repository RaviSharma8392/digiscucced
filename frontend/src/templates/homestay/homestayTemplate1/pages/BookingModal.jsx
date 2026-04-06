export default function BookingModal({ cabin, checkIn, checkOut, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">{cabin}</h2>

        <p>Check In: {checkIn}</p>
        <p>Check Out: {checkOut}</p>

        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
          Confirm Booking
        </button>

        <button onClick={onClose} className="ml-4 text-gray-500">
          Close
        </button>
      </div>
    </div>
  );
}
