/**
 * Formatters and helper functions for ShopSphere
 */

export const USD_TO_INR_RATE = 85.0;

/**
 * Format price based on active currency
 * @param {number} amount Base amount in INR (Rupees)
 * @param {string} currency 'INR' | 'USD'
 * @returns {string} Formatted price string
 */
export const formatPrice = (amount, currency = "INR") => {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "₹0";
  }

  if (currency === "USD") {
    const amountInUSD = amount / USD_TO_INR_RATE;
    return `$${amountInUSD.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  }

  // Default to INR (Rupees ₹) with Indian locale formatting
  const roundedINR = Math.round(amount);
  return `₹${roundedINR.toLocaleString("en-IN")}`;
};

/**
 * Generate unique order ID in format SPH-XXXX-XXXX
 */
export const generateOrderId = () => {
  const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `SPH-${timestamp}-${randomPart}`;
};

/**
 * Format date string into human readable format
 */
export const formatDate = (dateInput) => {
  const d = dateInput ? new Date(dateInput) : new Date();
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};

/**
 * Get estimated delivery date string (e.g. "Thu, Aug 20")
 */
export const getEstimatedDeliveryDate = (daysAhead = 4) => {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
};

/**
 * Form field validation helpers
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  const cleaned = String(phone).replace(/\D/g, "");
  return cleaned.length >= 10;
};

export const validatePinCode = (pin) => {
  const cleaned = String(pin).trim();
  return /^[0-9]{5,6}$/.test(cleaned);
};

export const validatePostalCode = validatePinCode;
