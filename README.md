# ShopSphere — Modern E-Commerce Platform

> **"Shop Smart. Live Better."**  
> Built by **Bhanu Pratap** | Frontend Web Developer

---

## 🌟 Overview

**ShopSphere** is a modern, high-performance, full-featured e-commerce web application built for a developer portfolio. Engineered with **JavaScript (80%+ core logic)** and **React**, it incorporates modern UX patterns, robust state persistence via `localStorage`, real-time multi-attribute search and filtering, interactive variant pickers, a multi-step checkout workflow with client-side form validation, dynamic order generation, and an integrated developer portfolio modal.

---

## 🚀 Key Features

### 1. 🏠 Dynamic Home Experience
- **Interactive Hero Carousel:** Auto-rotating and manually controllable slides showcasing Electronics, Fashion, and Home Living collections with direct call-to-actions.
- **Curated Category Grid:** Visual cards for 6 top shopping categories with direct filter routing.
- **Deals of the Day:** Live countdown timer synchronized with discounted products up to 33% off.
- **Trending & Staff Picks Tabs:** Interactive tab switcher toggling between Trending, Best Sellers, and Featured items.
- **Newsletter Subscription:** Instant email format validation and toast reward code generation (`BHANUDEV`).

### 2. 🔍 Advanced Product Discovery & Filtering
- **Live Search with Instant Suggestions:** Search dropdown displaying matching products, categories, and brands as you type.
- **Multi-Attribute Filters:**
  - Category selector with live item counts
  - Price range slider ($0 – $400)
  - Star ratings filter (4.5★+, 4.0★+, 3.5★+)
  - Multi-select brand checkboxes
  - Availability & "On Sale" quick toggles
- **Dynamic Sorting Algorithms:**
  - Popularity
  - Price (Low to High / High to Low)
  - Customer Rating
  - Discount Percentage
  - Newest Arrivals
- **Responsive Layout Switcher:** 3-column Grid, 2-column Compact Grid, and detailed List View.

### 3. 🛍️ Rich Product Details (PDP) & Quick View Modal
- Multi-angle Image Gallery with hover zoom and interactive thumbnail selector.
- Color & Size variant selectors with active feedback.
- Quantity adjustment stepper with stock boundary checks.
- Dual CTAs: **Add to Cart** and **Buy Now** (instant direct checkout).
- Tabbed Information:
  - Product Overview & Key Features
  - Technical Specifications
  - Verified Customer Reviews & **Interactive "Write a Review" submission form**
  - Shipping & 30-day Return Policy
- Related products recommendation carousel.

### 4. 🛒 Persistent Shopping Cart & Coupons
- **Slide-out Cart Drawer:** Quick access anytime from the navigation bar.
- **Dedicated Cart Page:** Line-item modification, subtotal calculation, 8% tax calculation, and free-shipping progress tracker (unlocks at $99).
- **Promo Code Engine:**
  - `BHANUDEV` — 25% Off
  - `WELCOME10` — 10% Off
  - `FREESHIP` — 100% Free Shipping
  - `FESTIVE20` — 20% Off

### 5. ❤️ Wishlist Management
- One-click heart toggle on product cards, PDP, and quick-view modals.
- Dedicated Wishlist page with item removal, individual move to cart, or **"Move All to Cart"** batch action.

### 6. 💳 Multi-Step Simulated Checkout
- **Step 1: Shipping Information** — Validates full name, email address, 10-digit mobile number, street address, and PIN/postal code with real-time error indicators.
- **Step 2: Payment Gateway Simulation** — Supports Credit/Debit Card (with interactive card layout), UPI QR code scanner, and Cash on Delivery (COD).
- **Step 3: Order Review & Placement** — Line-item review and order generation with unique IDs (`SPH-XXXX-XXXX`).

### 7. 📦 Order Confirmation & Tracking
- Celebratory confirmation screen with animated state tracker (*Order Placed &rarr; Processing &rarr; Shipped &rarr; Delivered*).
- Printable Invoice / Receipt generator.

### 8. 👤 User Profile & Address Manager
- Order history with past invoice access and delivery status.
- Saved Addresses manager (Add, delete, and set default shipping destinations).
- Currency Switcher (USD `$` and INR `₹` with live conversion rate).

### 9. 💼 Bhanu Pratap Developer Portfolio Integration
- Accessible from the top navigation bar, profile page, and footer credits.
- Showcases professional summary, education (B.Tech in Computer Science), technical skillset, experience at Spikal, featured projects, and live links to Portfolio, GitHub, and LeetCode.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Primary Logic (80%+)** | Modern JavaScript (ES6+, Array Methods, Memoization, Storage APIs) |
| **Framework** | React 19 (Hooks, Context API, Modular Components) |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS (Utility-first, responsive design, custom palettes) |
| **Icons** | Lucide React |
| **State Persistence** | Browser LocalStorage (`ShopContext`) |

---

## 💻 Developer Profile

- **Name:** Bhanu Pratap
- **Role:** Frontend Web Developer
- **Portfolio:** [bhanuportfolioio.netlify.app](https://bhanuportfolioio.netlify.app/)
- **GitHub:** [github.com/Bhanupratap43](https://github.com/Bhanupratap43)
- **LeetCode:** [leetcode.com/u/bhanupratapcode43](https://leetcode.com/u/bhanupratapcode43)
- **Email:** bhanu.pratap.dev@gmail.com
