export async function GET() {
  return Response.json({
    id: '123',
    name: `Muhamad Son'ani <script>alert("xss")</script>`,
    email: '18mson@gmail.com',
    publicKey: `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvfTdv+3fgvVTKRnP/HVNG8zp
  3AyfmT3UHltd0ZOH9uSqF5h0jU1iNi3nHl1VEBjjn3cYzj9/hdOk1JdERnmjmPwLUV3C
  gEZUnY1Lv1Uw2qsrn/ZYQa+RMYaVPSQtVGS0xq9ODI3Vy4L8w7qGfcnbMkQNrY+XkW9Z
  Ky8qWRm8Y+WVFJ+Bw8xYME0UV7leIAVwQPXQciP9SpXS4BAoN7+p8CYMc9/PjJLHcYz4
  3YkNi4/PCx44nNvnhGHkQsmM0L0L1bVr7vQ48IEm3lWiVdFRUE7q4MgUGGNMahj6DTh4
  hLLXRHIGlYrEmRXXe4xvUkr/YoCSLbF7JR1wMXSqDyxBRwIDAQAB
  -----END PUBLIC KEY-----`,
  });
}
