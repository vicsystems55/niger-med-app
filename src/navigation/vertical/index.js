export default [
  { heading: 'Main Navigation' },
  {
    title: 'Dashboard',
    icon: { icon: 'tabler-layout-dashboard' },
    to: { name: 'dashboard' },
  },

  { heading: 'E-Commerce Management' },
  {
    title: 'Products',
    icon: { icon: 'tabler-shopping-bag' },
    children: [
      { title: 'All Products', to: { name: 'invoice-history' } },
      { title: 'Add Product', to: { name: 'invoice-history' } },
      { title: 'Categories', to: { name: 'invoice-history' } },
      { title: 'Inventory', to: { name: 'invoice-history' } },
    ],
  },
  {
    title: 'Orders',
    icon: { icon: 'tabler-shopping-cart' },
    children: [
      { title: 'All Orders', to: { name: 'invoice-history' } },
      { title: 'Pending Orders', to: { name: 'invoice-history' } },
      { title: 'Completed Orders', to: { name: 'invoice-history' } },
      { title: 'Cancelled Orders', to: { name: 'invoice-history' } },
    ],
  },
  {
    title: 'Customers',
    icon: { icon: 'tabler-users' },
    children: [
      { title: 'All Customers', to: { name: 'invoice-history' } },
      { title: 'Customer Groups', to: { name: 'invoice-history' } },
    ],
  },


  {
    title: 'Services',
    icon: { icon: 'tabler-heart' },
    children: [
      { title: 'All Services', to: { name: 'invoice-history' } },
      { title: 'Add Service', to: { name: 'invoice-history' } },
    ],
  },
  {
    title: 'Staff',
    icon: { icon: 'tabler-id-badge-2' },
    children: [
      { title: 'All Staff', to: { name: 'invoice-history' } },
      { title: 'Add Staff', to: { name: 'invoice-history' } },
      { title: 'Roles & Permissions', to: { name: 'invoice-history' } },
    ],
  },




  { heading: 'Analytics & Reports' },
  {
    title: 'Sales Reports',
    icon: { icon: 'tabler-chart-line' },
    to: { name: 'invoice-history' },
  },
  {
    title: 'Appointment Reports',
    icon: { icon: 'tabler-clipboard-text' },
    to: { name: 'invoice-history' },
  },
  {
    title: 'Inventory Reports',
    icon: { icon: 'tabler-package' },
    to: { name: 'invoice-history' },
  },

  { heading: 'Settings' },
  {
    title: 'System Settings',
    icon: { icon: 'tabler-settings' },
    children: [
      { title: 'General Settings', to: { name: 'invoice-history' } },
      { title: 'Payment Settings', to: { name: 'invoice-history' } },
      { title: 'Shipping Settings', to: { name: 'invoice-history' } },
      { title: 'Security & Login', to: { name: 'invoice-history' } },
    ],
  },
]
