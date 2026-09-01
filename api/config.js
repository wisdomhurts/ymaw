// GET /api/config - which payment rails are live. The registration page reads
// this on load and hides the card option until Stripe keys exist, so a parent
// never chooses a payment path that isn't actually available yet.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    card: !!process.env.STRIPE_SECRET_KEY,
    db: !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY)
  });
}
