# 🛍️ E-commerce Store

A modern, fully functional e-commerce web application built with React, TypeScript, and Tailwind CSS. This application includes a complete purchase flow.

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