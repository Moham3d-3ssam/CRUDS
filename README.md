# CRUDS - Product Management System

A simple and elegant product management application built with vanilla JavaScript, HTML, and CSS. CRUDS stands for **Create, Read, Update, Delete, and Search** - the core operations of this application.

## 🌟 Features

- **Create Products**: Add single or multiple products (up to 100 at once) with detailed information
- **Read Products**: View all products in an organized table format
- **Update Products**: Edit existing product details
- **Delete Products**: Remove individual products or delete all products at once
- **Search Products**: Search by product title or category
- **Price Calculator**: Automatic total price calculation including taxes, ads, and discounts
- **Dark/Light Mode**: Toggle between dark and light themes with preference saved locally
- **Local Storage**: All data persists in browser's local storage
- **Responsive Design**: Clean and user-friendly interface
- **Scroll to Top**: Convenient button to quickly return to the top of the page

## 📋 Product Fields

Each product contains the following information:
- **Title**: Product name
- **Price**: Base price
- **Taxes**: Tax amount
- **ADS**: Advertising costs
- **Discount**: Discount amount
- **Total**: Automatically calculated (Price + Taxes + ADS - Discount)
- **Count**: Number of products to create (1-100)
- **Category**: Product category

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Moham3d-3ssam/CRUDS.git
```

2. Navigate to the project directory:
```bash
cd CRUDS
```

3. Open `index.html` in your web browser:
```bash
# On Linux/Mac
open index.html

# On Windows
start index.html

# Or simply double-click the index.html file
```

## 💻 Usage

### Creating Products

1. Fill in the product details (Title, Price, Taxes, ADS, Discount, Category)
2. The total price will be calculated automatically
3. Set the count (1-100) for how many identical products to create
4. Click the "Create" button
5. All fields are required except Taxes, ADS, and Discount

### Updating Products

1. Click the "Update" button on any product row
2. The form will be populated with the product's data
3. Modify the fields as needed
4. Click the "Update" button to save changes

### Deleting Products

- **Single Delete**: Click the "Delete" button on any product row
- **Delete All**: Click the "Delete All" button (appears when products exist)

### Searching Products

1. Choose search mode: "Search By Title" or "Search By Category"
2. Type in the search box
3. Results update in real-time as you type

### Theme Toggle

- Click the moon/sun icon in the top-right corner to switch between dark and light modes
- Your preference is saved automatically

## 📁 Project Structure

```
CRUDS/
│
├── index.html          # Main HTML file
├── css/
│   └── master.css      # Styling and theme definitions
├── js/
│   └── main.js         # Application logic
├── images/
│   └── icon.png        # Favicon
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling with custom properties for theming
- **JavaScript (ES6+)**: Application logic and DOM manipulation
- **Local Storage API**: Data persistence
- **Font Awesome**: Icons

## 🎨 Features in Detail

### Automatic Total Calculation
The application automatically calculates the total price as you enter:
- Base price
- Taxes
- Advertising costs (ADS)
- Discount

Formula: `Total = Price + Taxes + ADS - Discount`

### Data Persistence
All product data is stored in the browser's local storage, so your data persists even after closing the browser.

### Batch Creation
Create multiple identical products at once by setting the count field (useful for inventory management).

### Real-time Search
Search functionality works in real-time without the need to press a search button. Results filter as you type.

## 🌙 Theme Support

The application supports both dark and light themes:
- **Dark Theme**: Default theme with dark background
- **Light Theme**: Light background for better visibility in bright environments
- Theme preference is saved in local storage

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for use.

## 👤 Author

**Moham3d-3ssam**
- GitHub: [@Moham3d-3ssam](https://github.com/Moham3d-3ssam)

## 📧 Contact

If you have any questions or suggestions, feel free to reach out or open an issue!

---

**Note**: This is a client-side application. All data is stored locally in your browser and is not sent to any server.
