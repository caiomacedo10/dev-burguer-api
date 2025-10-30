const authConfig = {
  secret: process.env.JWT_SECRET || 'dev-secret-temporario',
  expiresIn: process.env.JWT_EXPIRES_IN || '7d',
};

export default authConfig;
