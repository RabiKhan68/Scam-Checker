let reports = [];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const report = req.body;

    reports.push(report);

    res.status(200).json({
      message: "Reported successfully!",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to report" });
  }
}