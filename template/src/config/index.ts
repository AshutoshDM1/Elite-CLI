export const config = {
  cors: {
    origin: process.env.CORS_ORIGIN || '*'
  },
  db: {
    url: process.env.DATABASE_URL
  }
};