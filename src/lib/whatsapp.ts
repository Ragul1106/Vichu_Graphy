export function whatsappUrl(message: string) {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  const query = encodeURIComponent(message);
  return number
    ? `https://wa.me/${number}?text=${query}`
    : `https://wa.me/?text=${query}`;
}
