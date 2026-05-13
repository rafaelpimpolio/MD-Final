Design a **desktop web admin dashboard UI/UX** for a system called **AFIRM** (Admin-Focused Integrated Reporting and Monitoring System), a **Mister Donut Sales, Inventory, Attendance, and Reporting Management System**.

This design is for the **ADMIN / CORE MANAGER SIDE ONLY**.
Do **NOT** design the branch employee mobile interface.
The admin interface is a **web-based desktop dashboard** used by the core manager to monitor all branches, manage master data, review submitted reports, track attendance, monitor stock movement, and view analytics.

---

## DESIGN STYLE / BRANDING

Use the **60-30-10 color rule** exactly:

* **60% Primary background / base:** `#FAF7F2`
* **30% Secondary surfaces / cards / panels / sidebars:** `#D4C4B0`
* **10% Accent / buttons / highlights / active states / charts:** `#622F1E`

Visual style:

* Clean, modern, professional **admin dashboard**
* Warm, premium, organized look inspired by **Mister Donut / coffee / bakery operations**
* Minimal but polished
* Soft rounded corners (12–16px)
* Light shadows
* Spacious layout
* Clear information hierarchy
* Desktop-first responsive admin web layout
* Use readable modern sans-serif font (similar to Inter / Poppins / clean web admin font)
* Consistent spacing using 8px system
* Use tables, summary cards, analytics widgets, filters, status chips, and action buttons
* Make it look like a real capstone/business system for operations management

---

## MAIN LAYOUT STRUCTURE

Create a **desktop admin dashboard layout** with:

### Left Sidebar Navigation

Include these menu items in this exact order:

1. Dashboard
2. User & Access Management
3. Master Data Management
4. Attendance Management
5. Daily Sales & Report Submission
6. Inventory & Stock Monitoring
7. Reporting & Analytics
8. Settings / Profile

Sidebar should include:

* AFIRM logo / system name at top
* Collapsible or modern dashboard-style sidebar
* Active state highlight using accent color `#622F1E`
* Icons for each menu item
* Bottom area for Admin Profile + Logout

### Top Header Bar

Include:

* Page title
* Breadcrumb
* Global search bar
* Date filter / branch filter
* Notification icon
* Admin avatar / profile dropdown

---

## DESIGN THE FOLLOWING SCREENS / FRAMES

Create a **complete UI/UX system** with multiple desktop frames/screens for the admin side.

---

# 1. LOGIN PAGE (ADMIN WEB)

Design a clean desktop login page for AFIRM.

Include:

* AFIRM logo / branding
* Title: “Admin Login”
* Username field
* Password field
* Show / hide password
* Login button
* “Forgot Password?” link
* Background visual related to bakery / reports / dashboard (subtle and professional)
* Warm branded color palette using 60-30-10

---

# 2. DASHBOARD PAGE (ADMIN HOME)

This is the main admin dashboard after login.

### Dashboard Overview Cards

Include top summary cards:

* Total Daily Sales Overview
* Branch Performance Overview
* Product Sales Overview
* Attendance Overview
* Stock Movement Overview

### Monitoring Widgets / Panels

Include:

* Recent Submitted Reports
* Sales Summary by Branch
* Product Movement Summary
* Attendance Compliance Summary
* Best-Selling Products Snapshot

### Charts / Visualizations

Include:

* Daily / Weekly / Monthly Sales Trend line chart
* Branch Sales Comparison bar chart
* Product Category Sales donut/pie chart
* Stock Movement chart
* Attendance compliance mini chart

### Quick Access Buttons

Include:

* Go to Reports
* Manage Products
* Manage Branches
* Manage Employees
* Stock-In Records
* Daily Reports

### Dashboard Filters

Include:

* Date range filter
* Branch filter
* Shift filter (optional)

Design should feel like a real operational command center.

---

# 3. USER & ACCESS MANAGEMENT MODULE

Create a desktop admin management page for:

## a. Authentication / Access Context

(visualized as user management, not actual login form)

* User list table
* Active / inactive status
* Last login
* Role badge

## b. Profile Management

Include:

* View user profile panel
* Update profile information form
* Change password modal or section

## c. Role-Based Access Control

Create role management UI for:

* Admin access
* Branch employee access

### Page elements:

* Search bar
* Filter by role
* User table columns:

  * User ID
  * Name
  * Username
  * Role
  * Assigned Branch
  * Status
  * Last Login
  * Actions
* Buttons:

  * Add User
  * Edit User
  * Reset Password
  * Activate / Deactivate

---

# 4. MASTER DATA MANAGEMENT MODULE

Create separate admin pages or tabbed sections for:

## a. Product Management

Include:

* Product master list table
* Add new product modal/form
* Edit product details
* Delete / archive action
* Product category assignment
* Product price management

Table columns:

* Product ID
* Product Name
* Category
* Unit Price
* Status
* Last Updated
* Actions

## b. Branch Management

Include:

* Branch master list
* Add branch
* Edit branch
* View branch records

Table columns:

* Branch ID
* Branch Name
* Location
* Manager
* Status
* Actions

## c. Employee Management

Include:

* Employee master list
* Add employee
* Edit employee
* Assign employee to branch
* Assign employee role

Table columns:

* Employee ID
* Full Name
* Contact Number
* Role
* Assigned Branch
* Status
* Actions

## d. Shift Management

Include:

* Shift master list
* Add shift schedule
* Edit shift details
* Assign shift reference for attendance and reports

Table columns:

* Shift ID
* Shift Name
* Time Start
* Time End
* Description
* Status
* Actions

Use clean data table admin layout with filters, search, and action buttons.

---

# 5. ATTENDANCE MANAGEMENT MODULE

Create an admin page for attendance monitoring and reporting.

## a. Daily Attendance Logging (view / review from admin perspective)

Show:

* Employee time-in
* Employee time-out
* Attendance status tagging

## b. Attendance Monitoring

Include:

* Daily attendance log viewing
* Employee attendance history
* Shift-based attendance tracking
* Attendance record review

## c. Attendance Reporting

Include:

* Daily attendance report
* Employee attendance summary
* Late / incomplete attendance monitoring

### UI components:

* Attendance summary cards
* Filters by date / branch / shift / employee
* Attendance table columns:

  * Date
  * Employee Name
  * Branch
  * Shift
  * Time In
  * Time Out
  * Status
  * Remarks
* Status chips:

  * Present
  * Late
  * Incomplete
  * Absent
* Export / Print report buttons

---

# 6. DAILY SALES & REPORT SUBMISSION MODULE

Create a detailed admin monitoring page for daily reports.

## a. Daily Report Management

Include:

* Create daily report (admin override / manual entry view if needed)
* Select report date
* Link report to branch and shift
* View auto-computed total sales

## b. Sales Transaction Recording

Display:

* Products sold
* Quantity sold per product
* Unit price
* Auto-computed subtotal per product
* Auto-computed total sales per report

## c. Discount Recording

Display:

* Discount type
* Discount amount
* Discount description
* Link discount to sales transaction

## d. Submitted Report Monitoring

Include:

* View submitted daily reports
* View report details by branch/date
* Track report submission status

### UI requirements:

* Daily report table
* Expandable report detail drawer or modal
* Report status chips:

  * Submitted
  * Pending
  * Reviewed
  * Late
* Filters:

  * Branch
  * Date
  * Shift
  * Status

### Report detail panel should show:

* Report information
* Branch
* Shift
* Employee
* Sales items table
* Discounts section
* Computed total sales
* Notes / remarks
* Review status

---

# 7. INVENTORY & STOCK MONITORING MODULE

Create admin pages for stock tracking.

## a. Stock-In Management

Include:

* Record incoming stock deliveries
* Encode quantity received
* Record delivery date
* Link stock-in to product

## b. Inventory Usage Recording

Include:

* Record quantity used per product
* Link usage to product
* Track inventory consumption based on daily operations

## c. Inventory Monitoring

Include:

* View stock-in history
* View inventory usage history
* Monitor product movement
* View computed available stock

### UI components:

* Inventory summary cards:

  * Total stock received
  * Total stock used
  * Remaining stock
  * Low stock items
* Product inventory table columns:

  * Product ID
  * Product Name
  * Category
  * Stock In Total
  * Usage Total
  * Computed Available Stock
  * Stock Status
* Stock status badges:

  * Normal
  * Low
  * Critical
* Movement timeline or chart
* Date filters
* Branch filters if applicable

---

# 8. REPORTING & ANALYTICS MODULE

Create a powerful admin analytics page.

## a. Sales Reports

Include:

* Daily sales report
* Weekly sales summary
* Monthly sales summary
* Sales by branch
* Sales by product

## b. Inventory Reports

Include:

* Stock-in report
* Inventory usage report
* Product movement report
* Remaining stock summary (computed)

## c. Attendance Reports

Include:

* Daily attendance report
* Employee attendance history
* Attendance summary by branch
* Attendance by shift

## d. Product Performance Reports

Include:

* Best-selling products
* Slow-moving products
* Product sales trend summary

## e. Branch Performance Reports

Include:

* Branch sales comparison
* Branch report submission monitoring
* Branch operational summary

### UI requirements:

* Advanced filters panel
* Date range selector
* Branch selector
* Product selector
* Export options (PDF / Excel style buttons)
* Tabs or segmented report categories
* Large data tables + charts
* KPI cards at top
* Drill-down charts

Charts to include:

* Sales trend line chart
* Branch comparison bar chart
* Product performance ranking chart
* Stock movement chart
* Attendance compliance chart

---

# 9. SETTINGS / ADMIN PROFILE PAGE

Create a settings/profile page with:

* View profile
* Update profile information
* Change password
* Notification preferences
* Session / security settings
* Logout action

---

## COMPONENT SYSTEM / DESIGN SYSTEM

Create reusable components for:

* Sidebar
* Top navigation
* Summary cards
* Data tables
* Search bars
* Filter dropdowns
* Date pickers
* Buttons (primary, secondary, danger)
* Status chips / badges
* Modal forms
* Tabs
* Charts containers
* Empty states
* Confirmation dialog
* Pagination
* Toast / success notification

Buttons:

* Primary button = `#622F1E`
* Secondary / neutral surfaces = `#D4C4B0`
* Main page background = `#FAF7F2`

---

## UX NOTES

Important UX rules:

* This is an **admin-heavy system**, so prioritize:

  * readability
  * fast scanning
  * clear tables
  * quick filtering
  * strong hierarchy
  * analytics visibility
* Make the dashboard and report pages feel like the most important screens
* Keep forms professional and structured
* Use modals for add/edit actions
* Use detail drawers or full-page details for report review
* Show realistic sample data relevant to Mister Donut operations:

  * donuts
  * coffee
  * packaging
  * daily branch reports
  * attendance logs
  * stock-in deliveries
* Make the interface look presentable for a **college capstone defense**

---

## OUTPUT REQUEST

Generate:

* High-fidelity desktop admin web dashboard screens
* Multiple connected frames/pages
* Consistent design system
* Clean admin UX
* Professional business operations dashboard
* Ready for presentation / capstone defense

The final design should look like a complete **admin web system for AFIRM**, clearly based on these modules:

1. User and Access Management
2. Master Data Management
3. Attendance Management
4. Daily Sales and Report Submission
5. Inventory and Stock Monitoring
6. Reporting and Analytics
7. Admin Dashboard
