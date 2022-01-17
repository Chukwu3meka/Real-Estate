module.exports = {
  env: {
    FIREBASE_CLIENT_EMAIL: "",
    FIREBASE_API_KEY: "",
    FIREBASE_AUTH_DOMAIN: "",
    FIREBASE_DB_URL: "",
    FIREBASE_PROJECT_ID: "",
    FIREBASE_STORAGE_BUCKET: "",
    FIREBASE_MESSAGING_SENDER_ID: "",
    FIREBASE_APP_ID: "",
    FIREBASE_MMEASUREMENT_ID: "",
    FIREBASE_PRIVATE_KEY: "",
    GA_TRACKING_ID: "",
  },
  target: "serverless",
  images: {
    domains: ["platform-lookaside.fbsbx.com", "firebasestorage.googleapis.com", "scontent-atl3-2.xx.fbcdn.net"],
  },
};
