# Essence - Luxury Perfume E-commerce

A modern Next.js e-commerce application for a luxury perfume store, featuring a dark, elegant design with gold accents.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 📁 Folder Structure

```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/               # Auth-related pages (login, register)
│   ├── about/                # About page
│   ├── account/              # User account pages
│   │   ├── orders/           # Order history
│   │   └── wishlist/         # User wishlist
│   ├── cart/                 # Shopping cart
│   ├── checkout/             # Checkout flow
│   │   └── success/          # Order confirmation
│   ├── collections/          # Product collections
│   │   └── [slug]/           # Dynamic collection pages
│   ├── contact/              # Contact page
│   ├── products/             # Product listing
│   │   └── [slug]/           # Product detail pages
│   ├── search/               # Search results
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   ├── loading.tsx           # Loading state
│   ├── not-found.tsx         # 404 page
│   └── page.tsx              # Home page
│
├── components/               # React components
│   ├── about/                # About page components
│   ├── account/              # Account page components
│   ├── auth/                 # Authentication forms
│   ├── cart/                 # Cart components
│   ├── checkout/             # Checkout components
│   ├── collections/          # Collection components
│   ├── contact/              # Contact page components
│   ├── home/                 # Homepage components
│   ├── layout/               # Layout components (Header, Footer)
│   ├── products/             # Product-related components
│   ├── search/               # Search components
│   └── ui/                   # Reusable UI components
│
├── hooks/                    # Custom React hooks
│   ├── useCart.ts            # Cart operations hook
│   ├── useLocalStorage.ts    # LocalStorage hook
│   ├── useMediaQuery.ts      # Responsive design hook
│   └── useWishlist.ts        # Wishlist operations hook
│
├── lib/                      # Utility functions & config
│   ├── api.ts                # API client
│   ├── constants.ts          # App constants
│   └── utils.ts              # Helper functions
│
├── store/                    # Zustand state stores
│   ├── cart.ts               # Cart state
│   └── wishlist.ts           # Wishlist state
│
├── types/                    # TypeScript types
│   └── index.ts              # Type definitions
│
public/
├── images/                   # Static images
│   ├── about/                # About page images
│   ├── categories/           # Category images
│   ├── collections/          # Collection images
│   └── products/             # Product images
```

## 🎨 Design System

### Colors

- **Gold (Primary):** `#d4a574` - Accent color for CTAs and highlights
- **Noir (Background):** `#0d0d0d` to `#1a1a1a` - Dark gradient background
- **Rose:** Used for sale badges and warnings

### Typography

- **Display Font:** Playfair Display (serif) - For headings
- **Body Font:** Raleway (sans-serif) - For body text

### Components

The UI components are located in `src/components/ui/`:

- `Button` - Primary, secondary, and ghost variants
- `Input` - Form input with label and error states
- `Select` - Styled select dropdown
- `Badge` - Product badges (new, sale, bestseller)
- `Card` - Container component with glass effect option
- `Modal` - Modal dialog
- `Drawer` - Slide-in drawer (cart, mobile menu)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=/api
```

## 📱 Features

- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Luxurious dark aesthetic
- **Product Filtering** - By category, fragrance family, price, etc.
- **Shopping Cart** - Persistent cart with Zustand + localStorage
- **Wishlist** - Save favorite products
- **Search** - Product search with filters
- **User Accounts** - Login, registration, order history
- **Animations** - Smooth transitions with Framer Motion

## 🔜 Next Steps

1. Add product images to `public/images/products/`
2. Connect to your backend API
3. Implement authentication
4. Add payment integration (Stripe)
5. Set up email notifications
6. Add product reviews system

## 📄 License

MIT License - feel free to use for your projects.

