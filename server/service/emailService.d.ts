// server/service/emailService.d.ts
export function sendEmail(
  to: string,
  subject: string,
  text: string,
  html: string,
): Promise<void>;
