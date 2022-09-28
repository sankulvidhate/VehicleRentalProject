# VehicleRentalProject
This Repository contains both front end &amp; backend source codes need to run project. I also have uploaded Database queries to quickly populate MySQL DB.

Steps For Evaluation
1. Download Zip file & Extract it.
2. In front End Folder, Type 'cmd' - It will open command prompt & then type 'npm install'
3. Import Backend folder in STS as Maven Project, Force update Maven
4. Update your user name & password for mySQL server. & Run Project as springboot app
5. Default Port no. for BackEnd id 8080


Following are MySQL Queries To Quickly Populate Vehicle Table

INSERT INTO vehicle 
(vehicle_id, brand, model, mfg_year, transmission, category_name, fuel, cappacity, status, city, Image_Path, rent_per_day)
VALUES 
(1, 'Maruti', 'Swift 1', '2019', 'Manual', 'Hatchback', 'Petrol', '1,200 cc', 'AVAILABLE', 'Nashik', 'http://motoroctane.com/wp-content/uploads/2018/01/Maruti-Swift-2018-front.jpg.webp', 2000),
(default, 'Maruti', 'Swift 2', '2019', 'Manual', 'Hatchback', 'Petrol', '1,200 cc', 'AVAILABLE', 'Pune', 'http://motoroctane.com/wp-content/uploads/2018/01/Maruti-Swift-2018-front.jpg.webp', 2000),
(default, 'Maruti', 'Swift 3', '2019', 'Manual', 'Hatchback', 'Petrol', '1,200 cc', 'AVAILABLE', 'Mumbai', 'http://motoroctane.com/wp-content/uploads/2018/01/Maruti-Swift-2018-front.jpg.webp', 2000),
(default, 'Maruti', 'Brezz1', '2019', 'Manual', 'SUV', 'Petrol', '1,500 cc', 'AVAILABLE', 'Nashik', ' http://www.carblogindia.com/wp-content/uploads/2016/03/maruti-vitara-brezza-review-images-2.jpg ', 2500),
(default, 'Maruti', 'Brezz2', '2020', 'Manual', 'SUV', 'Petrol', '1,500 cc', 'AVAILABLE', 'Pune', ' http://www.carblogindia.com/wp-content/uploads/2016/03/maruti-vitara-brezza-review-images-2.jpg ', 2700),
(default, 'Maruti', 'Brezz3', '2020', 'Manual', 'SUV', 'Petrol', '1,500 cc', 'AVAILABLE', 'Mumbai', ' http://www.carblogindia.com/wp-content/uploads/2016/03/maruti-vitara-brezza-review-images-2.jpg ', 2700);
