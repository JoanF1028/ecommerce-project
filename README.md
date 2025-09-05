# 🛍️ E-commerce Store

A modern, fully functional e-commerce web application built with React, TypeScript, and Tailwind CSS. This application includes a complete purchase flow.

[E-commerce Store Preview](https://joanfloridoecommerce.netlify.app/)

## ✨ Key Features

### 🏠 Homepage
- **Product catalog** fetched from Fake Store API
- **Responsive design** with adaptive grid
- **Product cards** with image, title, price, and category
- **Loading states** with animated skeletons
- **Error handling** with user-friendly UI

### 🔍 Search & Filters
- **Global search** with 300ms debounce
- **Advanced filters**: category, price range, rating
- **Sorting options**: price (asc/desc), newest, popular
- **Shareable URLs** that maintain filter state

### 📱 Product Details Page
- **Dynamic routes** for each product
- **Image gallery** with zoom functionality
- **Complete information**: description, category, price, rating
- **Quantity selector** and product variants
- **Entry and exit animations**

### 🛒 Shopping Cart
- **Global state** with React Context
- **localStorage persistence**
- **Real-time counter** in navbar
- **Quantity management** with +/- buttons
- **Automatic calculation** of subtotals, shipping, and taxes
- **Animations** for adding/removing products

### 🎨 UI/UX & Accessibility
- **Mobile-first design** fully responsive
- **Keyboard navigation** optimized
- **Focus states** and ARIA labels
- **SEO optimized** with meta tags
- **Lazy loading** for images
- **Microinteractions** and smooth animations

## 🛠️ Technologies Used

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Global State**: React Context
- **API**: Fake Store API
- **Animations**: CSS Transitions
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## 📁 Project Structure

```
src/
├── components/         # Reusable components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── Navbar.tsx      # Navigation bar
│   ├── ProductCard.tsx # Product card
│   └── ProductGrid.tsx # Product grid
├── contexts/           # React contexts
│   └── CartContext.tsx # Cart context
├── hooks/              # Custom hooks
│   ├── use-mobile.tsx  # Mobile detection hook
│   └── use-toast.ts    # Toast notifications hook
├── lib/                # Utilities and configurations
│   ├── api.ts          # API configuration
│   └── utils.ts        # Utility functions
├── pages/              # Application pages
│   ├── Cart.tsx        # Cart page
│   ├── Checkout.tsx    # Checkout page
│   ├── Index.tsx       # Home page
│   ├── ProductDetail.tsx # Product detail page
│   └── Products.tsx    # Products list page
├── types/              # TypeScript definitions
│   └── index.ts        # Global types
└── main.tsx           # Entry point
```

## 🎯 Implemented Features

### ✅ Completed
- [x] Responsive product catalog
- [x] Advanced search and filters
- [x] Product detail page
- [x] Persistent shopping cart
- [x] Mobile-first design
- [x] Animations and microinteractions
- [x] Error handling
- [x] Loading states
- [x] Basic SEO

## 📱 Responsive Design

The application is optimized for all devices:
- **Desktop**: Full layout with sidebar and product grid
- **Tablet**: Adaptive grid with optimized navigation
- **Mobile**: Single column design with hamburger navigation

## 🔒 Security
- **Data validation** on frontend
- **HTTPS** in production
- **Input sanitization** for user inputs

## 👨‍💻 Author
-[GitHub](https://github.com/JoanF1028)

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com) for providing product data
- [shadcn/ui](https://ui.shadcn.com) for UI components
- [Tailwind CSS](https://tailwindcss.com) for the styling framework

---

⭐ If you liked this project, give it a star on the repository!