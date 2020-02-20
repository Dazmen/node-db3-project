-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT product.ProductName
    , category.CategoryName
FROM [Product]
INNER JOIN category ON product.CategoryId = category.Id


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT Id
    , shipName
    , orderDate
FROM [order]
WHERE orderDate < '2012-08-09'; 

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.productName
    , od.quantity
FROM  OrderDetail as od
INNER JOIN [product] as p ON od.productId = p.ID
WHERE od.orderId = 10251
ORDER BY p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id
    , c.CompanyName
    , e.LastName AS Employee
FROM [Order] as o
INNER JOIN Customer AS c ON o.CustomerId = c.Id
INNER JOIN Employee AS e ON o.employeeId = e.id;