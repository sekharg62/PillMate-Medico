// Dummy data for all PillMate modules

export const dummyStats = {
  totalMedicines: 1284,
  totalStockValue: 847250,
  lowStock: 23,
  expiringSoon: 18,
  expired: 7,
  todaySales: 142,
  todayRevenue: 38450,
  monthRevenue: 984200,
  totalSuppliers: 34,
  pendingOrders: 9,
  totalStaff: 12,
  totalCategories: 22,
};

export const salesTrend = [
  { day: 'Mon', sales: 28400, orders: 112 },
  { day: 'Tue', sales: 34200, orders: 138 },
  { day: 'Wed', sales: 29800, orders: 119 },
  { day: 'Thu', sales: 42100, orders: 168 },
  { day: 'Fri', sales: 51300, orders: 205 },
  { day: 'Sat', sales: 38450, orders: 142 },
  { day: 'Sun', sales: 22100, orders: 88 },
];

export const categoryRevenue = [
  { name: 'Antibiotics', value: 28 },
  { name: 'Vitamins', value: 22 },
  { name: 'Cardiac', value: 18 },
  { name: 'Diabetes', value: 15 },
  { name: 'Painkillers', value: 11 },
  { name: 'Others', value: 6 },
];

export const topSelling = [
  { rank: 1, name: 'Augmentin 625mg', category: 'Antibiotic', qty: 342, revenue: 34200 },
  { rank: 2, name: 'Crocin 500mg', category: 'Analgesic', qty: 289, revenue: 8670 },
  { rank: 3, name: 'Pantoprazole 40mg', category: 'Antacid', qty: 256, revenue: 12800 },
  { rank: 4, name: 'Vitamin D3 60K', category: 'Supplement', qty: 198, revenue: 39600 },
  { rank: 5, name: 'Metformin 500mg', category: 'Diabetes', qty: 187, revenue: 9350 },
];

export const medicines = [
  { id: 1, name: 'Augmentin 625mg', generic: 'Amoxicillin+Clavulanate', category: 'Antibiotic', sku: 'MED001', stock: 342, minStock: 50, unit: 'Strip', mrp: 98, costPrice: 72, manufacturer: 'GSK', status: 'in-stock' },
  { id: 2, name: 'Crocin 500mg', generic: 'Paracetamol', category: 'Analgesic', sku: 'MED002', stock: 28, minStock: 100, unit: 'Strip', mrp: 30, costPrice: 18, manufacturer: 'GSK', status: 'low-stock' },
  { id: 3, name: 'Pantoprazole 40mg', generic: 'Pantoprazole', category: 'Antacid', sku: 'MED003', stock: 256, minStock: 30, unit: 'Strip', mrp: 50, costPrice: 34, manufacturer: 'Alkem', status: 'in-stock' },
  { id: 4, name: 'Vitamin D3 60K', generic: 'Cholecalciferol', category: 'Supplement', sku: 'MED004', stock: 198, minStock: 40, unit: 'Capsule', mrp: 200, costPrice: 140, manufacturer: 'USV', status: 'in-stock' },
  { id: 5, name: 'Metformin 500mg', generic: 'Metformin HCl', category: 'Diabetes', sku: 'MED005', stock: 12, minStock: 80, unit: 'Strip', mrp: 50, costPrice: 28, manufacturer: 'Cipla', status: 'low-stock' },
  { id: 6, name: 'Losartan 50mg', generic: 'Losartan Potassium', category: 'Cardiac', sku: 'MED006', stock: 0, minStock: 40, unit: 'Strip', mrp: 120, costPrice: 82, manufacturer: 'Sun Pharma', status: 'out-of-stock' },
  { id: 7, name: 'Azithromycin 500mg', generic: 'Azithromycin', category: 'Antibiotic', sku: 'MED007', stock: 145, minStock: 30, unit: 'Strip', mrp: 140, costPrice: 95, manufacturer: 'Dr Reddys', status: 'in-stock' },
  { id: 8, name: 'Atorvastatin 10mg', generic: 'Atorvastatin', category: 'Cardiac', sku: 'MED008', stock: 88, minStock: 40, unit: 'Strip', mrp: 180, costPrice: 120, manufacturer: 'Pfizer', status: 'in-stock' },
  { id: 9, name: 'Cetirizine 10mg', generic: 'Cetirizine HCl', category: 'Antihistamine', sku: 'MED009', stock: 6, minStock: 50, unit: 'Strip', mrp: 25, costPrice: 14, manufacturer: 'Cipla', status: 'low-stock' },
  { id: 10, name: 'ORS Electrolyte', generic: 'Oral Rehydration Salts', category: 'Supplement', sku: 'MED010', stock: 320, minStock: 60, unit: 'Sachet', mrp: 20, costPrice: 10, manufacturer: 'Abbott', status: 'in-stock' },
];

export const batches = [
  { id: 1, medicine: 'Augmentin 625mg', batchNo: 'B2024-001', qty: 200, costPrice: 72, sellingPrice: 98, expiry: '2025-12-31', supplier: 'MedPharma Dist.', status: 'valid' },
  { id: 2, medicine: 'Crocin 500mg', batchNo: 'B2024-002', qty: 28, costPrice: 18, sellingPrice: 30, expiry: '2026-06-30', supplier: 'HealthPlus Supply', status: 'valid' },
  { id: 3, medicine: 'Vitamin D3 60K', batchNo: 'B2023-089', qty: 45, costPrice: 130, sellingPrice: 200, expiry: '2026-04-15', supplier: 'PharmaBridge', status: 'expiring-soon' },
  { id: 4, medicine: 'Losartan 50mg', batchNo: 'B2022-041', qty: 0, costPrice: 82, sellingPrice: 120, expiry: '2024-03-31', supplier: 'MedPharma Dist.', status: 'expired' },
  { id: 5, medicine: 'Metformin 500mg', batchNo: 'B2024-055', qty: 12, costPrice: 28, sellingPrice: 50, expiry: '2026-08-31', supplier: 'CureMed Wholesale', status: 'valid' },
  { id: 6, medicine: 'Pantoprazole 40mg', batchNo: 'B2024-033', qty: 256, costPrice: 34, sellingPrice: 50, expiry: '2027-01-31', supplier: 'HealthPlus Supply', status: 'valid' },
];

export const suppliers = [
  { id: 1, name: 'MedPharma Dist.', contact: 'Rajesh Kumar', phone: '+91 98765 43210', email: 'rajesh@medpharma.in', city: 'Mumbai', gst: '27AABCM1234A1Z5', totalOrders: 48, totalValue: 284500, rating: 4.8, status: 'active' },
  { id: 2, name: 'HealthPlus Supply', contact: 'Priya Sharma', phone: '+91 87654 32109', email: 'priya@healthplus.in', city: 'Delhi', gst: '07AABCH5678B1Z2', totalOrders: 32, totalValue: 198200, rating: 4.5, status: 'active' },
  { id: 3, name: 'PharmaBridge', contact: 'Amit Patel', phone: '+91 76543 21098', email: 'amit@pharmabridge.in', city: 'Ahmedabad', gst: '24AABCP9012C1Z9', totalOrders: 18, totalValue: 94800, rating: 4.2, status: 'active' },
  { id: 4, name: 'CureMed Wholesale', contact: 'Sunita Reddy', phone: '+91 65432 10987', email: 'sunita@curemed.in', city: 'Hyderabad', gst: '36AABCC3456D1Z6', totalOrders: 12, totalValue: 67300, rating: 3.9, status: 'inactive' },
  { id: 5, name: 'NovaCare Pharma', contact: 'Vikram Singh', phone: '+91 54321 09876', email: 'vikram@novacare.in', city: 'Bangalore', gst: '29AABNC7890E1Z3', totalOrders: 8, totalValue: 42100, rating: 4.6, status: 'active' },
];

export const purchaseOrders = [
  { id: 'PO-2024-0087', supplier: 'MedPharma Dist.', items: 12, total: 48200, status: 'received', date: '2024-12-28', expectedDate: '2024-12-28' },
  { id: 'PO-2024-0088', supplier: 'HealthPlus Supply', items: 8, total: 31500, status: 'pending', date: '2025-01-02', expectedDate: '2025-01-05' },
  { id: 'PO-2024-0089', supplier: 'PharmaBridge', items: 5, total: 18900, status: 'in-transit', date: '2025-01-03', expectedDate: '2025-01-06' },
  { id: 'PO-2024-0090', supplier: 'NovaCare Pharma', items: 15, total: 62400, status: 'pending', date: '2025-01-04', expectedDate: '2025-01-08' },
  { id: 'PO-2024-0091', supplier: 'MedPharma Dist.', items: 9, total: 28700, status: 'received', date: '2024-12-20', expectedDate: '2024-12-22' },
  { id: 'PO-2024-0092', supplier: 'CureMed Wholesale', items: 3, total: 9800, status: 'cancelled', date: '2024-12-15', expectedDate: '2024-12-18' },
];

export const sales = [
  { id: 'INV-2025-0142', customer: 'Walk-in Customer', items: 4, subtotal: 348, discount: 0, tax: 62, total: 410, payment: 'Cash', cashier: 'Ravi M.', time: '06:32 AM' },
  { id: 'INV-2025-0141', customer: 'Priya Nair', items: 2, subtotal: 230, discount: 23, tax: 41, total: 248, payment: 'UPI', cashier: 'Anita K.', time: '05:58 AM' },
  { id: 'INV-2025-0140', customer: 'Walk-in Customer', items: 6, subtotal: 980, discount: 0, tax: 176, total: 1156, payment: 'Card', cashier: 'Ravi M.', time: '05:12 AM' },
  { id: 'INV-2025-0139', customer: 'Ramesh V.', items: 3, subtotal: 540, discount: 54, tax: 88, total: 574, payment: 'UPI', cashier: 'Anita K.', time: '04:45 AM' },
  { id: 'INV-2025-0138', customer: 'Walk-in Customer', items: 1, subtotal: 98, discount: 0, tax: 18, total: 116, payment: 'Cash', cashier: 'Ravi M.', time: '04:30 AM' },
  { id: 'INV-2025-0137', customer: 'Sita D.', items: 5, subtotal: 1240, discount: 124, tax: 200, total: 1316, payment: 'Card', cashier: 'Ravi M.', time: '03:55 AM' },
];

export const alerts = [
  { id: 1, type: 'low-stock', medicine: 'Crocin 500mg', detail: 'Stock: 28 units (min: 100)', severity: 'high', time: '2 hrs ago' },
  { id: 2, type: 'expiry', medicine: 'Vitamin D3 60K', detail: 'Batch B2023-089 expires Apr 15, 2026', severity: 'medium', time: '4 hrs ago' },
  { id: 3, type: 'low-stock', medicine: 'Metformin 500mg', detail: 'Stock: 12 units (min: 80)', severity: 'high', time: '5 hrs ago' },
  { id: 4, type: 'expired', medicine: 'Losartan 50mg', detail: 'Batch B2022-041 expired Mar 31, 2024', severity: 'critical', time: '1 day ago' },
  { id: 5, type: 'low-stock', medicine: 'Cetirizine 10mg', detail: 'Stock: 6 units (min: 50)', severity: 'high', time: '6 hrs ago' },
  { id: 6, type: 'expiry', medicine: 'Azithromycin 500mg', detail: 'Batch B2024-007 expires in 28 days', severity: 'low', time: '8 hrs ago' },
  { id: 7, type: 'reorder', medicine: 'ORS Electrolyte', detail: 'Below reorder point — place purchase order', severity: 'medium', time: '12 hrs ago' },
];

export const notifications = [
  { id: 1, title: 'Low Stock Alert', message: 'Crocin 500mg is running low (28 units remaining)', type: 'warning', read: false, time: '2 hrs ago' },
  { id: 2, title: 'Purchase Order Received', message: 'PO-2024-0087 from MedPharma Dist. has been received', type: 'success', read: false, time: '4 hrs ago' },
  { id: 3, title: 'Expiry Alert', message: 'Vitamin D3 60K (Batch B2023-089) expires in 9 days', type: 'warning', read: false, time: '5 hrs ago' },
  { id: 4, title: 'New Staff Added', message: 'Anita Kumar has been added as a Pharmacist', type: 'info', read: true, time: '1 day ago' },
  { id: 5, title: 'Medicine Expired', message: 'Losartan 50mg Batch B2022-041 has expired', type: 'error', read: true, time: '1 day ago' },
  { id: 6, title: 'Daily Sales Report', message: "Yesterday's revenue was ₹34,200 across 138 orders", type: 'info', read: true, time: '2 days ago' },
  { id: 7, title: 'Purchase Order Pending', message: 'PO-2024-0088 from HealthPlus Supply is awaiting delivery', type: 'info', read: true, time: '3 days ago' },
];

export const staff = [
  { id: 1, name: 'Ravi Mehta', role: 'ADMIN', email: 'ravi@pillmate.in', phone: '+91 98765 43210', store: 'Main Branch', joined: '2022-03-15', status: 'active', avatar: 'RM' },
  { id: 2, name: 'Anita Kumar', role: 'PHARMACIST', email: 'anita@pillmate.in', phone: '+91 87654 32109', store: 'Main Branch', joined: '2023-06-01', status: 'active', avatar: 'AK' },
  { id: 3, name: 'Suresh Patel', role: 'PHARMACIST', email: 'suresh@pillmate.in', phone: '+91 76543 21098', store: 'Branch 2', joined: '2023-09-20', status: 'active', avatar: 'SP' },
  { id: 4, name: 'Meena Rao', role: 'VIEWER', email: 'meena@pillmate.in', phone: '+91 65432 10987', store: 'Branch 2', joined: '2024-01-10', status: 'inactive', avatar: 'MR' },
  { id: 5, name: 'Deepak Joshi', role: 'PHARMACIST', email: 'deepak@pillmate.in', phone: '+91 54321 09876', store: 'Main Branch', joined: '2024-03-05', status: 'active', avatar: 'DJ' },
];

export const auditLogs = [
  { id: 1, user: 'Ravi Mehta', action: 'UPDATE', entity: 'Medicine', entityName: 'Crocin 500mg', detail: 'Updated MRP from ₹28 to ₹30', time: '2025-01-07 06:28:14' },
  { id: 2, user: 'Anita Kumar', action: 'CREATE', entity: 'Sale', entityName: 'INV-2025-0142', detail: 'Created sale order for ₹410', time: '2025-01-07 06:32:18' },
  { id: 3, user: 'Ravi Mehta', action: 'CREATE', entity: 'PurchaseOrder', entityName: 'PO-2024-0090', detail: 'New PO to NovaCare Pharma for ₹62,400', time: '2025-01-06 14:22:11' },
  { id: 4, user: 'Anita Kumar', action: 'UPDATE', entity: 'Batch', entityName: 'B2024-055', detail: 'Stock adjusted from 80 to 12 units', time: '2025-01-06 11:55:03' },
  { id: 5, user: 'Ravi Mehta', action: 'CREATE', entity: 'Staff', entityName: 'Anita Kumar', detail: 'New staff added as PHARMACIST', time: '2025-01-05 09:10:45' },
  { id: 6, user: 'Suresh Patel', action: 'DELETE', entity: 'Supplier', entityName: 'OldPharma Co.', detail: 'Supplier removed from system', time: '2025-01-04 16:34:22' },
  { id: 7, user: 'Ravi Mehta', action: 'UPDATE', entity: 'Settings', entityName: 'Store Profile', detail: 'Updated store address', time: '2025-01-03 10:00:00' },
];

export const categories = [
  { id: 1, name: 'Antibiotic', medicines: 84, value: 128400 },
  { id: 2, name: 'Analgesic', medicines: 52, value: 48200 },
  { id: 3, name: 'Antacid', medicines: 38, value: 39800 },
  { id: 4, name: 'Supplement', medicines: 67, value: 184200 },
  { id: 5, name: 'Cardiac', medicines: 91, value: 312800 },
  { id: 6, name: 'Diabetes', medicines: 46, value: 87600 },
  { id: 7, name: 'Antihistamine', medicines: 29, value: 22100 },
  { id: 8, name: 'Antifungal', medicines: 22, value: 18400 },
];
