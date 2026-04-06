export default function DateSelector({
  checkIn,
  checkOut,
  setCheckIn,
  setCheckOut,
}) {
  return (
    <div className="flex gap-4 flex-wrap">
      <div>
        <label className="text-sm">Check In</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="text-sm">Check Out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
}
