# VichuGraphy website

A responsive Next.js 16 + React + TypeScript + Tailwind CSS v4 catalogue and portfolio website. Customers browse gifts, frames, albums, photography and videography and contact the business through WhatsApp. There is no checkout, payment gateway, customer login or email enquiry flow.

## Requirements
- Node.js 20.9+ (use a current Node.js LTS release)
- npm

## Setup (Windows PowerShell)
```powershell
npm install
Copy-Item .env.example .env.local
```
Edit `.env.local` and set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the business WhatsApp number in international format with digits only, e.g. India `919876543210`.

Start the development server:
```powershell
npm run dev
```
Open http://localhost:3000.

Production check:
```powershell
npm run build
npm start
```

## Project structure
```text
src/
  app/                  App Router pages and global stylesheet
  components/           Navbar, footer, product cards and WhatsApp links
  lib/                  Product/portfolio sample data and WhatsApp URL helper
public/images/          Add locally owned images here
```

## Edit content
- Product names, categories, prices, descriptions and image URLs: `src/lib/data.ts`
- WhatsApp number: `.env.local`
- Branding and navigation: `src/components/Navbar.tsx`
- Main hero content and homepage sections: `src/app/page.tsx`
- Colours and responsive styling: `src/app/globals.css`

The product data is currently sample data stored in `src/lib/data.ts`. The admin dashboard, database-backed content management, secure admin authentication and Cloudinary upload workflow are not included in this public-site starter. Add those as a separate backend phase before promising self-service content editing to a client. Replace sample images, sample prices, location text and sample descriptions with client-approved content before publishing.

## WhatsApp behaviour
Each enquiry link opens WhatsApp with a pre-filled message. The visitor must press Send inside WhatsApp. The site does not silently send messages or collect/store enquiries.

## Images
Demo image URLs use Unsplash. For production, replace them with client-owned/licensed photographs or a managed image CDN. Confirm image rights and optimize large images before launch.
