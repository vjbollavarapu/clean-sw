# Django Backend Development Documentation

## Overview
This document contains comprehensive prompts for developing the Django backend for the cleaning service management system. The backend should support all the frontend modules and provide RESTful API endpoints with proper authentication, authorization, and data management.

## Project Structure
The backend will be organized into Django apps for different modules:
- `users` - User management and authentication
- `clients` - Client management
- `employees` - Employee management
- `service_orders` - Service order management
- `contracts` - Contract management
- `billing` - Billing and invoice management
- `payroll` - Payroll management
- `attendance` - Attendance and timesheet management
- `inventory` - Inventory management
- `financial` - Financial management
- `reports` - Reporting and analytics
- `settings` - System settings and configuration

---

## 1. Project Setup and Configuration

```
Create a Django project for a cleaning service management system with the following requirements:

- Project name: clean_sw_backend
- Use Django 4.2+ with Python 3.11+
- Include Django REST Framework for API development
- Set up CORS headers for frontend integration
- Configure environment variables for database, secret key, and other settings
- Set up proper project structure with apps for different modules
- Include authentication with JWT tokens
- Set up PostgreSQL as the database
- Configure static and media file handling
- Set up logging configuration
- Include requirements.txt with all necessary dependencies

The system should support multiple user roles: Administrator, Management, HR Manager, Employee, Client, Procurement, and Accounts.
```

---

## 2. User Management and Authentication

```
Create Django models and API endpoints for user management with the following specifications:

Models:
- User model extending AbstractUser with fields: email, name, role (choices), department, phone, avatar, isActive, createdAt
- UserRole model for role-based permissions
- UserProfile model for additional user information

API Endpoints:
- POST /api/auth/login/ - User login with JWT token
- POST /api/auth/logout/ - User logout
- POST /api/auth/refresh/ - Refresh JWT token
- GET /api/users/ - List all users (with filtering and pagination)
- POST /api/users/ - Create new user
- GET /api/users/{id}/ - Get user details
- PUT /api/users/{id}/ - Update user
- DELETE /api/users/{id}/ - Delete user
- GET /api/users/me/ - Get current user profile
- PUT /api/users/me/ - Update current user profile

Include proper serializers, permissions, and validation. Support role-based access control.
```

---

## 3. Client Management

```
Create Django models and API endpoints for client management:

Models:
- Client model with fields: name, email, phone, address, serviceHistory (count), totalSpent, status, createdAt, updatedAt
- ClientContact model for multiple contacts per client
- ClientLocation model for multiple locations per client

API Endpoints:
- GET /api/clients/ - List all clients with search and filtering
- POST /api/clients/ - Create new client
- GET /api/clients/{id}/ - Get client details
- PUT /api/clients/{id}/ - Update client
- DELETE /api/clients/{id}/ - Delete client
- GET /api/clients/{id}/services/ - Get client service history
- GET /api/clients/{id}/billing/ - Get client billing information
- POST /api/clients/{id}/contacts/ - Add client contact
- GET /api/clients/{id}/locations/ - Get client locations

Include proper serializers, validation, and search functionality.
```

---

## 4. Employee Management

```
Create Django models and API endpoints for employee management:

Models:
- Employee model with fields: name, email, phone, position, department, hireDate, salary, status, createdAt, updatedAt
- EmployeeProfile model for additional employee information
- EmployeeDocument model for storing employee documents
- EmployeeEmergencyContact model for emergency contacts

API Endpoints:
- GET /api/employees/ - List all employees with search and filtering
- POST /api/employees/ - Create new employee
- GET /api/employees/{id}/ - Get employee details
- PUT /api/employees/{id}/ - Update employee
- DELETE /api/employees/{id}/ - Delete employee
- GET /api/employees/{id}/attendance/ - Get employee attendance
- GET /api/employees/{id}/timesheet/ - Get employee timesheet
- GET /api/employees/{id}/payroll/ - Get employee payroll information
- POST /api/employees/{id}/documents/ - Upload employee document
- GET /api/employees/departments/ - Get all departments

Include proper serializers, validation, and file upload handling.
```

---

## 5. Service Orders Management

```
Create Django models and API endpoints for service orders:

Models:
- ServiceOrder model with fields: client, serviceType, status, scheduledDate, completedDate, amount, location, notes, createdAt, updatedAt
- ServiceOrderAssignment model for employee assignments
- ServiceType model for different service types
- ServiceOrderStatus model for status tracking

API Endpoints:
- GET /api/service-orders/ - List all service orders with filtering
- POST /api/service-orders/ - Create new service order
- GET /api/service-orders/{id}/ - Get service order details
- PUT /api/service-orders/{id}/ - Update service order
- DELETE /api/service-orders/{id}/ - Delete service order
- POST /api/service-orders/{id}/assign/ - Assign employees to service order
- PUT /api/service-orders/{id}/status/ - Update service order status
- GET /api/service-orders/{id}/timeline/ - Get service order timeline
- GET /api/service-orders/calendar/ - Get service orders for calendar view
- GET /api/service-types/ - Get all service types

Include proper serializers, validation, and status workflow management.
```

---

## 6. Contract Management

```
Create Django models and API endpoints for contract management:

Models:
- Contract model with fields: contractNumber, client, serviceType, startDate, endDate, monthlyValue, totalValue, status, locations, assignedCleaners, autoRenewal, renewalNotice, notes, createdAt, updatedAt
- ContractLocation model for multiple locations
- ContractRenewal model for renewal history
- ContractDocument model for contract documents

API Endpoints:
- GET /api/contracts/ - List all contracts with filtering
- POST /api/contracts/ - Create new contract
- GET /api/contracts/{id}/ - Get contract details
- PUT /api/contracts/{id}/ - Update contract
- DELETE /api/contracts/{id}/ - Delete contract
- POST /api/contracts/{id}/renew/ - Renew contract
- GET /api/contracts/{id}/renewals/ - Get contract renewal history
- GET /api/contracts/expiring/ - Get contracts expiring soon
- POST /api/contracts/{id}/documents/ - Upload contract document
- GET /api/contracts/analytics/ - Get contract analytics

Include proper serializers, validation, and contract lifecycle management.
```

---

## 7. Billing and Invoice Management

```
Create Django models and API endpoints for billing and invoice management:

Models:
- Invoice model with fields: invoiceNumber, client, serviceOrder, amount, tax, totalAmount, status, issueDate, dueDate, paidDate, notes, createdAt, updatedAt
- InvoiceItem model for invoice line items
- Payment model for payment tracking
- PaymentMethod model for payment methods
- BillingSettings model for client billing preferences

API Endpoints:
- GET /api/invoices/ - List all invoices with filtering
- POST /api/invoices/ - Create new invoice
- GET /api/invoices/{id}/ - Get invoice details
- PUT /api/invoices/{id}/ - Update invoice
- DELETE /api/invoices/{id}/ - Delete invoice
- POST /api/invoices/{id}/send/ - Send invoice to client
- POST /api/invoices/{id}/pay/ - Record payment
- GET /api/invoices/{id}/payments/ - Get invoice payments
- GET /api/invoices/overdue/ - Get overdue invoices
- GET /api/billing/analytics/ - Get billing analytics
- GET /api/payments/ - List all payments
- POST /api/payments/ - Create new payment

Include proper serializers, validation, and payment processing.
```

---

## 8. Payroll Management

```
Create Django models and API endpoints for payroll management:

Models:
- Payroll model with fields: employee, period, baseSalary, allowances, overtime, deductions, netPay, status, processedDate, createdAt, updatedAt
- PayrollItem model for payroll line items
- PayrollDeduction model for deductions
- PayrollAllowance model for allowances
- TaxCalculation model for tax calculations

API Endpoints:
- GET /api/payroll/ - List all payroll records with filtering
- POST /api/payroll/ - Create new payroll record
- GET /api/payroll/{id}/ - Get payroll details
- PUT /api/payroll/{id}/ - Update payroll
- DELETE /api/payroll/{id}/ - Delete payroll
- POST /api/payroll/process/ - Process payroll for period
- GET /api/payroll/{id}/payslip/ - Generate payslip
- GET /api/payroll/analytics/ - Get payroll analytics
- GET /api/payroll/tax-reports/ - Get tax reports
- POST /api/payroll/{id}/approve/ - Approve payroll

Include proper serializers, validation, and payroll calculations.
```

---

## 9. Attendance and Timesheet Management

```
Create Django models and API endpoints for attendance and timesheet management:

Models:
- Attendance model with fields: employee, date, checkIn, checkOut, totalHours, overtime, status, notes, createdAt, updatedAt
- Timesheet model with fields: employee, weekStart, weekEnd, totalHours, overtime, status, submittedDate, approvedDate, createdAt, updatedAt
- TimesheetEntry model for individual time entries
- LeaveRequest model for leave management
- LeaveType model for different leave types

API Endpoints:
- GET /api/attendance/ - List all attendance records with filtering
- POST /api/attendance/check-in/ - Employee check-in
- POST /api/attendance/check-out/ - Employee check-out
- GET /api/attendance/{id}/ - Get attendance details
- PUT /api/attendance/{id}/ - Update attendance
- GET /api/timesheets/ - List all timesheets with filtering
- POST /api/timesheets/ - Create new timesheet
- GET /api/timesheets/{id}/ - Get timesheet details
- PUT /api/timesheets/{id}/ - Update timesheet
- POST /api/timesheets/{id}/submit/ - Submit timesheet
- POST /api/timesheets/{id}/approve/ - Approve timesheet
- GET /api/leave-requests/ - List all leave requests
- POST /api/leave-requests/ - Create leave request
- PUT /api/leave-requests/{id}/approve/ - Approve/reject leave request

Include proper serializers, validation, and time tracking functionality.
```

---

## 10. Inventory Management

```
Create Django models and API endpoints for inventory management:

Models:
- InventoryItem model with fields: name, category, quantity, minQuantity, unitPrice, supplier, lastRestocked, createdAt, updatedAt
- InventoryCategory model for item categories
- InventoryTransaction model for stock movements
- Supplier model for suppliers
- PurchaseOrder model for purchase orders

API Endpoints:
- GET /api/inventory/ - List all inventory items with filtering
- POST /api/inventory/ - Create new inventory item
- GET /api/inventory/{id}/ - Get inventory item details
- PUT /api/inventory/{id}/ - Update inventory item
- DELETE /api/inventory/{id}/ - Delete inventory item
- POST /api/inventory/{id}/adjust/ - Adjust inventory quantity
- GET /api/inventory/low-stock/ - Get low stock items
- GET /api/inventory/transactions/ - Get inventory transactions
- GET /api/suppliers/ - List all suppliers
- POST /api/suppliers/ - Create new supplier
- GET /api/purchase-orders/ - List all purchase orders
- POST /api/purchase-orders/ - Create new purchase order

Include proper serializers, validation, and stock management.
```

---

## 11. Financial Management

```
Create Django models and API endpoints for financial management:

Models:
- FinancialRecord model with fields: type, category, amount, description, date, reference, createdAt, updatedAt
- FinancialCategory model for income/expense categories
- Account model for chart of accounts
- Transaction model for financial transactions
- Budget model for budget planning

API Endpoints:
- GET /api/financial/ - List all financial records with filtering
- POST /api/financial/ - Create new financial record
- GET /api/financial/{id}/ - Get financial record details
- PUT /api/financial/{id}/ - Update financial record
- DELETE /api/financial/{id}/ - Delete financial record
- GET /api/financial/income/ - Get income records
- GET /api/financial/expenses/ - Get expense records
- GET /api/financial/analytics/ - Get financial analytics
- GET /api/financial/reports/ - Get financial reports
- GET /api/accounts/ - List all accounts
- GET /api/budgets/ - List all budgets

Include proper serializers, validation, and financial calculations.
```

---

## 12. Reporting and Analytics

```
Create Django API endpoints for reporting and analytics:

API Endpoints:
- GET /api/reports/dashboard/ - Get dashboard analytics
- GET /api/reports/revenue/ - Get revenue reports
- GET /api/reports/employee-performance/ - Get employee performance reports
- GET /api/reports/client-analytics/ - Get client analytics
- GET /api/reports/service-efficiency/ - Get service efficiency reports
- GET /api/reports/payroll-summary/ - Get payroll summary
- GET /api/reports/inventory-status/ - Get inventory status
- GET /api/reports/financial-summary/ - Get financial summary
- POST /api/reports/export/ - Export reports to various formats
- GET /api/analytics/trends/ - Get trend analytics
- GET /api/analytics/forecasting/ - Get forecasting data

Include proper data aggregation, filtering, and export functionality.
```

---

## 13. Settings and Configuration

```
Create Django models and API endpoints for system settings:

Models:
- SystemSetting model for application settings
- NotificationSetting model for notification preferences
- EmailTemplate model for email templates
- AuditLog model for system audit trail

API Endpoints:
- GET /api/settings/ - Get all system settings
- PUT /api/settings/ - Update system settings
- GET /api/settings/notifications/ - Get notification settings
- PUT /api/settings/notifications/ - Update notification settings
- GET /api/settings/email-templates/ - Get email templates
- PUT /api/settings/email-templates/{id}/ - Update email template
- GET /api/audit-logs/ - Get audit logs
- POST /api/settings/backup/ - Create system backup
- POST /api/settings/restore/ - Restore system from backup

Include proper serializers, validation, and configuration management.
```

---

## 14. API Documentation and Testing

```
Create comprehensive API documentation and testing setup:

- Set up Django REST Framework's built-in API documentation
- Create OpenAPI/Swagger documentation
- Set up unit tests for all models and views
- Create integration tests for API endpoints
- Set up test data fixtures
- Create API endpoint testing with pytest
- Set up automated testing pipeline
- Create API usage examples and documentation
- Set up API rate limiting and throttling
- Create API versioning strategy

Include proper test coverage and documentation standards.
```

---

## 15. Deployment and Production Setup

```
Create production-ready deployment configuration:

- Set up Docker containerization
- Create docker-compose.yml for local development
- Set up production deployment scripts
- Configure environment-specific settings
- Set up database migrations and backup strategies
- Configure static file serving with nginx
- Set up SSL certificate management
- Create monitoring and logging setup
- Set up CI/CD pipeline
- Configure security headers and CORS
- Set up database connection pooling
- Create health check endpoints

Include proper production deployment and monitoring.
```

---

## Development Guidelines

### Code Standards
- Follow PEP 8 Python coding standards
- Use type hints for function parameters and return values
- Write comprehensive docstrings for all functions and classes
- Use meaningful variable and function names
- Implement proper error handling and logging

### Security Best Practices
- Use Django's built-in security features
- Implement proper input validation and sanitization
- Use HTTPS in production
- Implement rate limiting for API endpoints
- Use secure session management
- Implement proper CORS policies

### Performance Optimization
- Use database indexing for frequently queried fields
- Implement caching where appropriate
- Use select_related() and prefetch_related() for database queries
- Implement pagination for large datasets
- Use database connection pooling

### Testing Strategy
- Write unit tests for all models and business logic
- Create integration tests for API endpoints
- Use test fixtures for consistent test data
- Implement automated testing in CI/CD pipeline
- Maintain high test coverage (aim for 90%+)

### Documentation Requirements
- Maintain up-to-date API documentation
- Document database schema changes
- Create deployment guides
- Maintain changelog for version tracking
- Document configuration options

---

## Getting Started

1. **Clone the repository and set up the environment**
2. **Install dependencies**: `pip install -r requirements.txt`
3. **Set up the database**: Configure PostgreSQL connection
4. **Run migrations**: `python manage.py migrate`
5. **Create superuser**: `python manage.py createsuperuser`
6. **Run the development server**: `python manage.py runserver`

## API Base URL
- Development: `http://localhost:8000/api/`
- Production: `https://your-domain.com/api/`

## Authentication
The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

---

## Support and Maintenance

For questions or issues during development:
1. Check the Django documentation
2. Review the API documentation
3. Check the test suite for usage examples
4. Review the changelog for recent updates

This documentation should be updated as the backend development progresses to reflect any changes or additions to the API structure. 