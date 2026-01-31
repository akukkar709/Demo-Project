export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, date, time } = req.body;

    return res.status(200).json({
      success: true,
      message: "Appointment booked"
    });
  }

  res.status(405).json({ error: "Method not allowed" });
}
