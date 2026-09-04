export const formatPrice = (price) => `₹${price}`;

export const formatStockStatus = (stockQty, reorderPoint) =>
  stockQty <= reorderPoint ? "Low stock" : "In stock";

export const formatSKU = (sku) => sku.toUpperCase()