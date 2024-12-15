const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: false,
  trailingSlash: true,
  env: {
    // Important Notes !!!!!!!!
    // for login with Google, need to active firebase
    // active google map api service from Google cloud platform (GCP)
    google_map: "AIzaSyBzDODs9pUfFtUQn6HB3FDAD1kkdf-R_YQ",
    // this is our test stripe key. You must replace it with your own key. This is the temporary key
    stripe_publish_key: "pk_test_51PAEwaKoIQlIvCbTelR9JkbKrIuGdrx2IaidqO3wBkRgJkfs1TQjnslGZHz0lRP4g9rOHkPJKrcG7sOFKY74MTEH00kYaHFnTI",
    product_mode: "production",
    backend_url:
        process.env.NODE_ENV === "development"
            ? "http://localhost:5500/"
            : "http://localhost:5500/",
    socket_io:
        process.env.NODE_ENV === "development"
            ? "http://localhost:5500"
            : "http://localhost:5500",
  },
});