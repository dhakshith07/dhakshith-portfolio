// Administrative middleware to protect CUD operations on projects
const adminAuth = (req, res, next) => {
  const adminKey = req.header('x-admin-key') || req.header('authorization')?.replace('Bearer ', '');
  const expectedKey = process.env.ADMIN_KEY || 'dhakshith_admin_secret_2026';

  if (!adminKey || adminKey !== expectedKey) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized: Administrative access key required for this operation.'
    });
  }

  next();
};

module.exports = adminAuth;

