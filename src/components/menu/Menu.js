const Menu = [
    {
      date: '2024-06-01',
      meals: {
        breakfast: [
          { name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: 5.99 },
          { name: 'Omelette', description: 'Cheese and ham omelette', price: 6.99 },
          { name: 'Fruit Salad', description: 'Fresh mixed fruit salad', price: 4.99 },
        ],
        lunch: [
          { name: 'Burger', description: 'Beef burger with fries', price: 8.99 },
          { name: 'Caesar Salad', description: 'Chicken Caesar salad', price: 7.99 },
          { name: 'Grilled Cheese Sandwich', description: 'Cheese sandwich with tomato soup', price: 6.99 },
        ],
        dinner: [
          { name: 'Steak', description: 'Grilled steak with mashed potatoes', price: 14.99 },
          { name: 'Spaghetti', description: 'Spaghetti with marinara sauce', price: 12.99 },
          { name: 'Salmon', description: 'Baked salmon with vegetables', price: 13.99 },
        ],
      },
    },
    {
      date: '2024-06-02',
      meals: {
        breakfast: [
          { name: 'French Toast', description: 'Served with butter and syrup', price: 5.99 },
          { name: 'Breakfast Burrito', description: 'Eggs, cheese, and bacon wrapped in a tortilla', price: 6.99 },
          { name: 'Yogurt Parfait', description: 'Layers of yogurt, granola, and fruit', price: 4.99 },
        ],
        lunch: [
          { name: 'Chicken Wrap', description: 'Grilled chicken with veggies', price: 7.99 },
          { name: 'BLT Sandwich', description: 'Bacon, lettuce, and tomato sandwich', price: 6.99 },
          { name: 'Soup and Salad', description: 'Daily soup with a side salad', price: 5.99 },
        ],
        dinner: [
          { name: 'Lasagna', description: 'Cheesy beef lasagna', price: 12.99 },
          { name: 'Chicken Alfredo', description: 'Fettuccine with Alfredo sauce', price: 11.99 },
          { name: 'Grilled Shrimp', description: 'Shrimp with garlic butter sauce', price: 13.99 },
        ],
      },
    },
    {
      date: '2024-06-03',
      meals: {
        breakfast: [
          { name: 'Bagel', description: 'Bagel with cream cheese', price: 3.99 },
          { name: 'Scrambled Eggs', description: 'Eggs scrambled with cheese', price: 4.99 },
          { name: 'Smoothie', description: 'Fruit smoothie with yogurt', price: 4.99 },
        ],
        lunch: [
          { name: 'Turkey Sandwich', description: 'Turkey sandwich with lettuce and tomato', price: 6.99 },
          { name: 'Veggie Wrap', description: 'Wrap with mixed veggies and hummus', price: 6.49 },
          { name: 'Chicken Soup', description: 'Classic chicken soup with noodles', price: 5.99 },
        ],
        dinner: [
          { name: 'Beef Tacos', description: 'Tacos with beef, cheese, and lettuce', price: 9.99 },
          { name: 'Veggie Pizza', description: 'Pizza with mixed vegetables', price: 10.99 },
          { name: 'BBQ Chicken', description: 'Grilled chicken with BBQ sauce', price: 11.99 },
        ],
      },
    },
    {
      date: '2024-06-04',
      meals: {
        breakfast: [
          { name: 'Waffles', description: 'Crispy waffles with syrup', price: 5.99 },
          { name: 'Breakfast Sandwich', description: 'Egg, bacon, and cheese sandwich', price: 6.49 },
          { name: 'Oatmeal', description: 'Oatmeal with fresh berries', price: 4.49 },
        ],
        lunch: [
          { name: 'Fish Tacos', description: 'Tacos with grilled fish and salsa', price: 8.99 },
          { name: 'Caprese Salad', description: 'Salad with tomatoes, mozzarella, and basil', price: 7.49 },
          { name: 'Pulled Pork Sandwich', description: 'Sandwich with pulled pork and coleslaw', price: 7.99 },
        ],
        dinner: [
          { name: 'Grilled Lamb', description: 'Grilled lamb chops with mint sauce', price: 15.99 },
          { name: 'Stuffed Peppers', description: 'Peppers stuffed with rice and meat', price: 12.99 },
          { name: 'Seafood Paella', description: 'Paella with mixed seafood', price: 16.99 },
        ],
      },
    },
    {
      date: '2024-06-05',
      meals: {
        breakfast: [
          { name: 'Cereal', description: 'Assorted cereals with milk', price: 3.99 },
          { name: 'Breakfast Burrito', description: 'Eggs, sausage, and cheese in a tortilla', price: 6.99 },
          { name: 'Avocado Toast', description: 'Toast with avocado and poached egg', price: 5.99 },
        ],
        lunch: [
          { name: 'Chicken Caesar Wrap', description: 'Wrap with chicken Caesar salad', price: 7.99 },
          { name: 'Lentil Soup', description: 'Hearty lentil soup with vegetables', price: 5.99 },
          { name: 'Grilled Cheese', description: 'Grilled cheese sandwich with tomato soup', price: 6.49 },
        ],
        dinner: [
          { name: 'Pasta Primavera', description: 'Pasta with mixed vegetables', price: 11.99 },
          { name: 'Beef Stroganoff', description: 'Beef stroganoff with noodles', price: 13.99 },
          { name: 'Lemon Chicken', description: 'Grilled chicken with lemon sauce', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-06',
      meals: {
        breakfast: [
          { name: 'Croissant', description: 'Butter croissant', price: 3.49 },
          { name: 'Eggs Benedict', description: 'Poached eggs with hollandaise sauce', price: 7.99 },
          { name: 'Fruit Smoothie', description: 'Smoothie with mixed fruits', price: 4.99 },
        ],
        lunch: [
          { name: 'Tuna Sandwich', description: 'Tuna salad sandwich', price: 6.99 },
          { name: 'Greek Salad', description: 'Salad with feta cheese, olives, and veggies', price: 7.49 },
          { name: 'Chicken Noodle Soup', description: 'Classic chicken noodle soup', price: 5.99 },
        ],
        dinner: [
          { name: 'Ratatouille', description: 'Vegetable ratatouille', price: 12.99 },
          { name: 'Beef Fajitas', description: 'Beef fajitas with peppers and onions', price: 13.99 },
          { name: 'Shrimp Scampi', description: 'Shrimp in garlic butter sauce', price: 14.99 },
        ],
      },
    },
    {
      date: '2024-06-07',
      meals: {
        breakfast: [
          { name: 'Bagel with Lox', description: 'Bagel with smoked salmon and cream cheese', price: 7.99 },
          { name: 'Quiche', description: 'Slice of quiche with ham and cheese', price: 6.99 },
          { name: 'Granola', description: 'Granola with yogurt and honey', price: 4.49 },
        ],
        lunch: [
          { name: 'Philly Cheesesteak', description: 'Cheesesteak sandwich with peppers and onions', price: 8.99 },
          { name: 'Tomato Basil Soup', description: 'Creamy tomato basil soup', price: 5.99 },
          { name: 'Chicken Salad', description: 'Chicken salad with mixed greens', price: 7.99 },
        ],
        dinner: [
          { name: 'Pork Chops', description: 'Grilled pork chops with applesauce', price: 13.99 },
          { name: 'Vegetable Stir Fry', description: 'Stir-fried vegetables with rice', price: 11.99 },
          { name: 'Baked Ziti', description: 'Baked ziti with marinara sauce and cheese', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-08',
      meals: {
        breakfast: [
          { name: 'Blueberry Muffins', description: 'Fresh blueberry muffins', price: 3.99 },
          { name: 'Breakfast Tacos', description: 'Tacos with eggs, cheese, and salsa', price: 6.99 },
          { name: 'Smoothie Bowl', description: 'Smoothie bowl with granola and fruits', price: 5.99 },
        ],
        lunch: [
          { name: 'Veggie Burger', description: 'Veggie burger with fries', price: 7.99 },
          { name: 'Cobb Salad', description: 'Salad with chicken, bacon, and avocado', price: 8.49 },
          { name: 'French Onion Soup', description: 'French onion soup with cheese crouton', price: 6.49 },
        ],
        dinner: [
          { name: 'Stuffed Chicken', description: 'Chicken stuffed with spinach and cheese', price: 14.99 },
          { name: 'Beef Bourguignon', description: 'Beef stew with red wine sauce', price: 16.99 },
          { name: 'Linguine with Clams', description: 'Pasta with clams in white wine sauce', price: 15.99 },
        ],
      },
    },
    {
      date: '2024-06-09',
      meals: {
        breakfast: [
          { name: 'Cinnamon Rolls', description: 'Warm cinnamon rolls with icing', price: 4.99 },
          { name: 'Huevos Rancheros', description: 'Eggs with salsa and tortillas', price: 6.99 },
          { name: 'Greek Yogurt', description: 'Greek yogurt with honey and nuts', price: 4.49 },
        ],
        lunch: [
          { name: 'Pastrami Sandwich', description: 'Pastrami sandwich with pickles', price: 8.49 },
          { name: 'Spinach Salad', description: 'Spinach salad with strawberries and feta', price: 7.49 },
          { name: 'Minestrone Soup', description: 'Vegetable minestrone soup', price: 5.99 },
        ],
        dinner: [
          { name: 'Chicken Parmesan', description: 'Breaded chicken with marinara and cheese', price: 13.99 },
          { name: 'Vegetable Curry', description: 'Mixed vegetable curry with rice', price: 12.99 },
          { name: 'Fish and Chips', description: 'Fried fish with fries', price: 14.99 },
        ],
      },
    },
    {
      date: '2024-06-10',
      meals: {
        breakfast: [
          { name: 'Scones', description: 'Scones with clotted cream and jam', price: 4.99 },
          { name: 'Breakfast Bowl', description: 'Bowl with eggs, bacon, and potatoes', price: 6.99 },
          { name: 'Mango Smoothie', description: 'Smoothie with mango and yogurt', price: 4.99 },
        ],
        lunch: [
          { name: 'Club Sandwich', description: 'Triple-decker club sandwich', price: 7.99 },
          { name: 'Avocado Salad', description: 'Salad with avocado and mixed greens', price: 7.49 },
          { name: 'Chicken Tortilla Soup', description: 'Spicy chicken tortilla soup', price: 6.49 },
        ],
        dinner: [
          { name: 'Meatloaf', description: 'Classic meatloaf with gravy', price: 12.99 },
          { name: 'Pad Thai', description: 'Thai noodles with shrimp and peanuts', price: 13.99 },
          { name: 'Eggplant Parmesan', description: 'Baked eggplant with marinara and cheese', price: 11.99 },
        ],
      },
    },
    {
      date: '2024-06-11',
      meals: {
        breakfast: [
          { name: 'Bagel with Cream Cheese', description: 'Bagel with a choice of cream cheese', price: 3.99 },
          { name: 'Eggs and Sausage', description: 'Scrambled eggs with sausage links', price: 5.99 },
          { name: 'Berry Parfait', description: 'Yogurt parfait with mixed berries', price: 4.99 },
        ],
        lunch: [
          { name: 'BBQ Chicken Sandwich', description: 'Sandwich with BBQ chicken and coleslaw', price: 7.99 },
          { name: 'Taco Salad', description: 'Salad with taco toppings', price: 7.49 },
          { name: 'Mushroom Soup', description: 'Creamy mushroom soup', price: 5.99 },
        ],
        dinner: [
          { name: 'Veal Piccata', description: 'Veal with lemon caper sauce', price: 14.99 },
          { name: 'Ravioli', description: 'Cheese ravioli with marinara sauce', price: 12.99 },
          { name: 'Grilled Swordfish', description: 'Swordfish with lemon herb sauce', price: 16.99 },
        ],
      },
    },
    {
      date: '2024-06-12',
      meals: {
        breakfast: [
          { name: 'English Muffin', description: 'English muffin with butter and jam', price: 2.99 },
          { name: 'Breakfast Skillet', description: 'Skillet with eggs, sausage, and veggies', price: 7.49 },
          { name: 'Peach Smoothie', description: 'Smoothie with peaches and yogurt', price: 4.99 },
        ],
        lunch: [
          { name: 'Ham Sandwich', description: 'Ham sandwich with mustard', price: 6.49 },
          { name: 'Asian Chicken Salad', description: 'Salad with Asian chicken and sesame dressing', price: 7.99 },
          { name: 'Broccoli Cheddar Soup', description: 'Soup with broccoli and cheddar cheese', price: 5.99 },
        ],
        dinner: [
          { name: 'Beef Wellington', description: 'Beef wrapped in puff pastry', price: 17.99 },
          { name: 'Lobster Roll', description: 'Lobster roll with butter', price: 18.99 },
          { name: 'Vegetable Lasagna', description: 'Lasagna with mixed vegetables', price: 13.99 },
        ],
      },
    },
    {
      date: '2024-06-13',
      meals: {
        breakfast: [
          { name: 'Banana Bread', description: 'Homemade banana bread', price: 3.99 },
          { name: 'Egg White Omelette', description: 'Omelette with egg whites and veggies', price: 5.99 },
          { name: 'Tropical Smoothie', description: 'Smoothie with tropical fruits', price: 4.99 },
        ],
        lunch: [
          { name: 'Roast Beef Sandwich', description: 'Roast beef sandwich with horseradish sauce', price: 7.99 },
          { name: 'Caesar Salad Wrap', description: 'Wrap with Caesar salad and chicken', price: 6.99 },
          { name: 'Tomato Soup', description: 'Classic tomato soup', price: 5.49 },
        ],
        dinner: [
          { name: 'Pork Tenderloin', description: 'Roasted pork tenderloin with gravy', price: 13.99 },
          { name: 'Shrimp Fried Rice', description: 'Fried rice with shrimp and vegetables', price: 12.99 },
          { name: 'Stuffed Zucchini', description: 'Zucchini stuffed with rice and meat', price: 11.99 },
        ],
      },
    },
    {
      date: '2024-06-14',
      meals: {
        breakfast: [
          { name: 'Pancakes', description: 'Pancakes with maple syrup', price: 5.99 },
          { name: 'Oatmeal with Honey', description: 'Oatmeal topped with honey and nuts', price: 4.49 },
          { name: 'Green Smoothie', description: 'Smoothie with spinach and fruits', price: 4.99 },
        ],
        lunch: [
          { name: 'BLT Wrap', description: 'Wrap with bacon, lettuce, and tomato', price: 6.99 },
          { name: 'Clam Chowder', description: 'Creamy clam chowder', price: 6.49 },
          { name: 'Chicken Quesadilla', description: 'Quesadilla with chicken and cheese', price: 7.99 },
        ],
        dinner: [
          { name: 'Chicken Marsala', description: 'Chicken with mushroom Marsala sauce', price: 14.99 },
          { name: 'Vegetable Stir-Fry', description: 'Stir-fried vegetables with tofu', price: 12.99 },
          { name: 'Grilled Salmon', description: 'Salmon with a lemon dill sauce', price: 15.99 },
        ],
      },
    },
    {
      date: '2024-06-15',
      meals: {
        breakfast: [
          { name: 'Croissant Sandwich', description: 'Croissant with ham and cheese', price: 5.99 },
          { name: 'Muesli', description: 'Muesli with milk and fruits', price: 4.49 },
          { name: 'Strawberry Smoothie', description: 'Smoothie with strawberries', price: 4.99 },
        ],
        lunch: [
          { name: 'Turkey Club', description: 'Turkey club sandwich with bacon', price: 8.49 },
          { name: 'Gazpacho', description: 'Cold tomato soup', price: 5.99 },
          { name: 'Cheese Quesadilla', description: 'Quesadilla with cheese and salsa', price: 6.99 },
        ],
        dinner: [
          { name: 'Mushroom Risotto', description: 'Creamy mushroom risotto', price: 14.99 },
          { name: 'Beef Enchiladas', description: 'Enchiladas with beef and cheese', price: 13.99 },
          { name: 'Stuffed Bell Peppers', description: 'Bell peppers stuffed with rice and meat', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-16',
      meals: {
        breakfast: [
          { name: 'Brioche French Toast', description: 'French toast made with brioche', price: 6.99 },
          { name: 'Breakfast Pizza', description: 'Pizza with eggs and bacon', price: 7.99 },
          { name: 'Blueberry Smoothie', description: 'Smoothie with blueberries and yogurt', price: 4.99 },
        ],
        lunch: [
          { name: 'Caprese Panini', description: 'Panini with mozzarella, tomato, and basil', price: 7.99 },
          { name: 'Lentil Salad', description: 'Salad with lentils, feta, and vegetables', price: 6.99 },
          { name: 'Potato Leek Soup', description: 'Creamy potato leek soup', price: 5.99 },
        ],
        dinner: [
          { name: 'Chicken Cordon Bleu', description: 'Chicken stuffed with ham and cheese', price: 15.99 },
          { name: 'Lamb Kebabs', description: 'Grilled lamb kebabs with vegetables', price: 16.99 },
          { name: 'Vegetarian Chili', description: 'Chili with beans and vegetables', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-17',
      meals: {
        breakfast: [
          { name: 'Chocolate Chip Pancakes', description: 'Pancakes with chocolate chips', price: 6.49 },
          { name: 'Egg and Avocado Toast', description: 'Toast with avocado and a fried egg', price: 5.99 },
          { name: 'Mixed Berry Smoothie', description: 'Smoothie with mixed berries', price: 4.99 },
        ],
        lunch: [
          { name: 'Chicken Panini', description: 'Panini with grilled chicken and pesto', price: 7.99 },
          { name: 'Quinoa Salad', description: 'Salad with quinoa, veggies, and feta', price: 7.49 },
          { name: 'Split Pea Soup', description: 'Hearty split pea soup', price: 5.99 },
        ],
        dinner: [
          { name: 'Shrimp Alfredo', description: 'Pasta with shrimp and Alfredo sauce', price: 15.99 },
          { name: 'Beef Tacos', description: 'Tacos with seasoned beef and toppings', price: 13.99 },
          { name: 'Mushroom Stroganoff', description: 'Vegetarian mushroom stroganoff', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-18',
      meals: {
        breakfast: [
          { name: 'Bacon and Eggs', description: 'Crispy bacon and scrambled eggs', price: 5.99 },
          { name: 'Chia Pudding', description: 'Chia pudding with coconut milk', price: 4.99 },
          { name: 'Mango Smoothie', description: 'Smoothie with mango and orange', price: 4.99 },
        ],
        lunch: [
          { name: 'Chicken Salad Wrap', description: 'Wrap with chicken salad', price: 7.49 },
          { name: 'Gazpacho', description: 'Cold tomato soup', price: 5.99 },
          { name: 'Vegetable Quesadilla', description: 'Quesadilla with mixed vegetables', price: 6.99 },
        ],
        dinner: [
          { name: 'Pasta Carbonara', description: 'Pasta with bacon and creamy sauce', price: 14.99 },
          { name: 'Teriyaki Chicken', description: 'Chicken with teriyaki sauce and rice', price: 13.99 },
          { name: 'Vegetable Biryani', description: 'Spiced rice with vegetables', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-19',
      meals: {
        breakfast: [
          { name: 'Cinnamon Toast', description: 'Toast with cinnamon and sugar', price: 3.49 },
          { name: 'Breakfast Burrito', description: 'Burrito with eggs, cheese, and sausage', price: 6.99 },
          { name: 'Spinach Smoothie', description: 'Smoothie with spinach and banana', price: 4.99 },
        ],
        lunch: [
          { name: 'BLT Sandwich', description: 'Bacon, lettuce, and tomato sandwich', price: 6.99 },
          { name: 'Chicken Tortilla Soup', description: 'Spicy chicken tortilla soup', price: 5.99 },
          { name: 'Falafel Wrap', description: 'Wrap with falafel and tahini sauce', price: 6.99 },
        ],
        dinner: [
          { name: 'Stuffed Pork Chops', description: 'Pork chops stuffed with apples and cranberries', price: 14.99 },
          { name: 'Vegetarian Paella', description: 'Paella with mixed vegetables', price: 12.99 },
          { name: 'Grilled Tilapia', description: 'Tilapia with lemon butter sauce', price: 13.99 },
        ],
      },
    },
    {
      date: '2024-06-20',
      meals: {
        breakfast: [
          { name: 'Pancakes', description: 'Pancakes with fresh berries', price: 5.99 },
          { name: 'Veggie Omelette', description: 'Omelette with mixed vegetables', price: 5.99 },
          { name: 'Peach Smoothie', description: 'Smoothie with peaches and yogurt', price: 4.99 },
        ],
        lunch: [
          { name: 'Turkey Wrap', description: 'Wrap with turkey, cheese, and lettuce', price: 6.99 },
          { name: 'French Onion Soup', description: 'Soup with caramelized onions and cheese', price: 5.99 },
          { name: 'Hummus and Veggie Plate', description: 'Plate with hummus and fresh veggies', price: 5.99 },
        ],
        dinner: [
          { name: 'BBQ Ribs', description: 'Ribs with BBQ sauce and fries', price: 15.99 },
          { name: 'Vegetable Casserole', description: 'Casserole with mixed vegetables', price: 12.99 },
          { name: 'Salmon Teriyaki', description: 'Salmon with teriyaki sauce and rice', price: 14.99 },
        ],
      },
    },
    {
      date: '2024-06-21',
      meals: {
        breakfast: [
          { name: 'Muffins', description: 'Assorted muffins', price: 3.99 },
          { name: 'Breakfast Sandwich', description: 'Sandwich with egg, bacon, and cheese', price: 5.99 },
          { name: 'Tropical Smoothie', description: 'Smoothie with tropical fruits', price: 4.99 },
        ],
        lunch: [
          { name: 'Reuben Sandwich', description: 'Sandwich with corned beef and sauerkraut', price: 8.49 },
          { name: 'Spinach and Artichoke Dip', description: 'Dip with spinach and artichokes', price: 6.49 },
          { name: 'Tomato Basil Soup', description: 'Tomato soup with basil', price: 5.99 },
        ],
        dinner: [
          { name: 'Beef Stroganoff', description: 'Beef with noodles in a creamy sauce', price: 13.99 },
          { name: 'Vegetable Curry', description: 'Curry with mixed vegetables and rice', price: 12.99 },
          { name: 'Baked Salmon', description: 'Salmon with garlic and dill', price: 14.99 },
        ],
      },
    },
    {
      date: '2024-06-22',
      meals: {
        breakfast: [
          { name: 'Waffles', description: 'Waffles with strawberries and cream', price: 5.99 },
          { name: 'Scrambled Eggs', description: 'Scrambled eggs with cheese', price: 4.99 },
          { name: 'Berry Smoothie', description: 'Smoothie with mixed berries', price: 4.99 },
        ],
        lunch: [
          { name: 'Chicken Salad Sandwich', description: 'Sandwich with chicken salad', price: 7.49 },
          { name: 'Lentil Soup', description: 'Hearty lentil soup', price: 5.99 },
          { name: 'Caprese Salad', description: 'Salad with tomatoes, mozzarella, and basil', price: 6.49 },
        ],
        dinner: [
          { name: 'Chicken Alfredo', description: 'Pasta with chicken and Alfredo sauce', price: 14.99 },
          { name: 'Beef Tacos', description: 'Tacos with seasoned beef and toppings', price: 13.99 },
          { name: 'Stuffed Peppers', description: 'Bell peppers stuffed with rice and meat', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-23',
      meals: {
        breakfast: [
          { name: 'Croissants', description: 'Flaky croissants with butter', price: 4.49 },
          { name: 'Avocado Toast', description: 'Toast with avocado and tomatoes', price: 5.99 },
          { name: 'Green Smoothie', description: 'Smoothie with spinach and kale', price: 4.99 },
        ],
        lunch: [
          { name: 'Pulled Pork Sandwich', description: 'Sandwich with pulled pork and BBQ sauce', price: 7.99 },
          { name: 'Garden Salad', description: 'Salad with mixed greens and veggies', price: 6.49 },
          { name: 'Chicken Noodle Soup', description: 'Classic chicken noodle soup', price: 5.99 },
        ],
        dinner: [
          { name: 'Beef Wellington', description: 'Beef wrapped in puff pastry', price: 17.99 },
          { name: 'Vegetable Stir Fry', description: 'Stir-fried vegetables with tofu', price: 12.99 },
          { name: 'Grilled Chicken', description: 'Chicken with herbs and lemon', price: 14.99 },
        ],
      },
    },
    {
      date: '2024-06-24',
      meals: {
        breakfast: [
          { name: 'Pancakes', description: 'Pancakes with syrup', price: 5.99 },
          { name: 'Fruit Bowl', description: 'Bowl of mixed fresh fruits', price: 4.99 },
          { name: 'Chocolate Smoothie', description: 'Smoothie with chocolate and banana', price: 4.99 },
        ],
        lunch: [
          { name: 'Turkey Wrap', description: 'Wrap with turkey and veggies', price: 6.99 },
          { name: 'Broccoli Cheddar Soup', description: 'Soup with broccoli and cheddar', price: 5.99 },
          { name: 'Grilled Cheese Sandwich', description: 'Sandwich with melted cheese', price: 4.99 },
        ],
        dinner: [
          { name: 'Pasta Primavera', description: 'Pasta with fresh vegetables', price: 12.99 },
          { name: 'Chicken Marsala', description: 'Chicken with mushroom Marsala sauce', price: 14.99 },
          { name: 'Grilled Salmon', description: 'Salmon with lemon butter sauce', price: 15.99 },
        ],
      },
    },
    {
      date: '2024-06-25',
      meals: {
        breakfast: [
          { name: 'Bagels', description: 'Assorted bagels with cream cheese', price: 3.99 },
          { name: 'Eggs Benedict', description: 'Poached eggs with hollandaise sauce', price: 7.49 },
          { name: 'Strawberry Smoothie', description: 'Smoothie with strawberries', price: 4.99 },
        ],
        lunch: [
          { name: 'Ham and Cheese Sandwich', description: 'Sandwich with ham and cheese', price: 6.49 },
          { name: 'Caesar Salad', description: 'Salad with romaine, croutons, and Caesar dressing', price: 6.99 },
          { name: 'Chicken Soup', description: 'Hearty chicken soup with vegetables', price: 5.99 },
        ],
        dinner: [
          { name: 'Beef Stroganoff', description: 'Beef with noodles in a creamy sauce', price: 13.99 },
          { name: 'Vegetable Curry', description: 'Curry with mixed vegetables', price: 12.99 },
          { name: 'Grilled Tilapia', description: 'Tilapia with lemon and herbs', price: 13.99 },
        ],
      },
    },
    {
      date: '2024-06-26',
      meals: {
        breakfast: [
          { name: 'French Toast', description: 'French toast with maple syrup', price: 5.99 },
          { name: 'Smoothie Bowl', description: 'Smoothie bowl with granola and fruits', price: 6.49 },
          { name: 'Green Smoothie', description: 'Smoothie with spinach and fruits', price: 4.99 },
        ],
        lunch: [
          { name: 'Tuna Sandwich', description: 'Sandwich with tuna salad', price: 6.49 },
          { name: 'Greek Salad', description: 'Salad with cucumbers, tomatoes, and feta', price: 7.49 },
          { name: 'Mushroom Soup', description: 'Creamy mushroom soup', price: 5.99 },
        ],
        dinner: [
          { name: 'Shrimp Scampi', description: 'Shrimp with garlic and lemon sauce', price: 15.99 },
          { name: 'Chicken Pot Pie', description: 'Pie with chicken and vegetables', price: 13.99 },
          { name: 'Vegetable Lasagna', description: 'Lasagna with mixed vegetables', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-27',
      meals: {
        breakfast: [
          { name: 'Banana Pancakes', description: 'Pancakes with bananas', price: 5.99 },
          { name: 'Yogurt Parfait', description: 'Parfait with yogurt and granola', price: 4.99 },
          { name: 'Peach Smoothie', description: 'Smoothie with peaches and yogurt', price: 4.99 },
        ],
        lunch: [
          { name: 'Grilled Cheese', description: 'Sandwich with grilled cheese', price: 5.49 },
          { name: 'Vegetable Soup', description: 'Hearty vegetable soup', price: 5.99 },
          { name: 'Chicken Caesar Wrap', description: 'Wrap with chicken Caesar salad', price: 6.99 },
        ],
        dinner: [
          { name: 'Baked Ziti', description: 'Pasta with marinara and cheese', price: 13.99 },
          { name: 'Pork Chops', description: 'Grilled pork chops with apple sauce', price: 14.99 },
          { name: 'Veggie Stir-Fry', description: 'Stir-fried vegetables with tofu', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-28',
      meals: {
        breakfast: [
          { name: 'Blueberry Muffins', description: 'Muffins with fresh blueberries', price: 3.99 },
          { name: 'Eggs and Bacon', description: 'Scrambled eggs with bacon', price: 5.99 },
          { name: 'Tropical Smoothie', description: 'Smoothie with tropical fruits', price: 4.99 },
        ],
        lunch: [
          { name: 'Turkey and Swiss Sandwich', description: 'Sandwich with turkey and Swiss cheese', price: 7.49 },
          { name: 'Tomato Soup', description: 'Creamy tomato soup', price: 5.99 },
          { name: 'Falafel Salad', description: 'Salad with falafel and tahini dressing', price: 6.99 },
        ],
        dinner: [
          { name: 'Chicken Piccata', description: 'Chicken with lemon caper sauce', price: 14.99 },
          { name: 'Beef Burritos', description: 'Burritos with seasoned beef', price: 13.99 },
          { name: 'Vegetable Risotto', description: 'Risotto with mixed vegetables', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-29',
      meals: {
        breakfast: [
          { name: 'French Toast', description: 'French toast with syrup', price: 5.99 },
          { name: 'Omelette', description: 'Omelette with choice of fillings', price: 6.49 },
          { name: 'Strawberry Smoothie', description: 'Smoothie with strawberries and yogurt', price: 4.99 },
        ],
        lunch: [
          { name: 'Pulled Pork Sandwich', description: 'Sandwich with pulled pork', price: 7.99 },
          { name: 'Caesar Salad', description: 'Salad with romaine and Caesar dressing', price: 6.99 },
          { name: 'Vegetable Soup', description: 'Hearty vegetable soup', price: 5.99 },
        ],
        dinner: [
          { name: 'Spaghetti Bolognese', description: 'Pasta with meat sauce', price: 13.99 },
          { name: 'Chicken Tikka Masala', description: 'Chicken in spiced tomato sauce', price: 14.99 },
          { name: 'Stuffed Bell Peppers', description: 'Peppers stuffed with rice and vegetables', price: 12.99 },
        ],
      },
    },
    {
      date: '2024-06-30',
      meals: {
        breakfast: [
          { name: 'Waffles', description: 'Waffles with fresh fruit', price: 5.99 },
          { name: 'Scrambled Eggs', description: 'Scrambled eggs with cheese', price: 4.99 },
          { name: 'Berry Smoothie', description: 'Smoothie with mixed berries', price: 4.99 },
        ],
        lunch: [
          { name: 'Chicken Salad Sandwich', description: 'Sandwich with chicken salad', price: 7.49 },
          { name: 'Lentil Soup', description: 'Hearty lentil soup', price: 5.99 },
          { name: 'Caprese Salad', description: 'Salad with tomatoes, mozzarella, and basil', price: 6.49 },
        ],
        dinner: [
          { name: 'Chicken Alfredo', description: 'Pasta with chicken and Alfredo sauce', price: 14.99 },
          { name: 'Beef Tacos', description: 'Tacos with seasoned beef and toppings', price: 13.99 },
          { name: 'Stuffed Peppers', description: 'Bell peppers stuffed with rice and meat', price: 12.99 },
        ],
      },
    },
  ];
  export default Menu
  