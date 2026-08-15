/**
 * Discount and coupon codes for ShopSphere
 */
export const AVAILABLE_COUPONS = [
  {
    code: "SHOPSPHERE10",
    discountPercent: 10,
    minOrderValue: 999,
    description: "10% off on all orders above ₹999",
    isPopular: true
  },
  {
    code: "BHANUDEV",
    discountPercent: 25,
    minOrderValue: 0,
    description: "Special 25% Developer Portfolio discount courtesy of Bhanu Pratap",
    isPopular: true
  },
  {
    code: "WELCOME20",
    discountPercent: 20,
    minOrderValue: 1499,
    description: "20% off for first-time shoppers on orders over ₹1,499",
    isPopular: false
  },
  {
    code: "FREESHIP",
    discountPercent: 0,
    freeShipping: true,
    minOrderValue: 0,
    description: "Free Express Shipping on any order value across India",
    isPopular: true
  }
];
