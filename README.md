# Delicious Bites - Premium Restaurant Website

A modern, fully responsive restaurant website built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. No frameworks, no dependencies—pure, production-quality code.

## 🌟 Features

### Design & Responsiveness
- ✅ **Fully Responsive** - Desktop, Tablet, Mobile optimized
- ✅ **Modern UI/UX** - Premium, elegant design suitable for luxury restaurant
- ✅ **Semantic HTML** - Proper HTML5 structure for accessibility
- ✅ **CSS Grid & Flexbox** - Advanced layout techniques
- ✅ **Smooth Animations** - Professional CSS transitions and keyframes

### Navigation
- ✅ **Sticky Navigation Bar** - Fixed header with smooth scrolling
- ✅ **Mobile Hamburger Menu** - Responsive navigation for small screens
- ✅ **Active Link Highlighting** - Visual feedback for current section
- ✅ **Dynamic Background** - Navbar changes appearance on scroll

### Hero Section
- ✅ **Full Screen Hero** - Impressive landing section with overlay
- ✅ **Fade-in Animations** - Smooth appearance of content
- ✅ **Call-to-Action Buttons** - Smooth scroll to reservation/menu

### About Section
- ✅ **Two-Column Layout** - Image and text arrangement
- ✅ **Feature Cards** - Highlight restaurant strengths
- ✅ **Animated Counters** - Impressive statistics display
  - Years of Experience
  - Happy Customers
  - Professional Chefs
  - Awards Won

### Menu Section
- ✅ **Dynamic Filtering** - Filter by category (All, Breakfast, Lunch, Dinner, Desserts, Drinks)
- ✅ **Menu Cards** - Image, name, description, price, rating
- ✅ **Hover Effects** - Interactive card animations
- ✅ **Lazy Loading** - Optimized image loading

### Special Offers Section
- ✅ **Promotional Cards** - Display special deals
- ✅ **Countdown Timers** - Dynamic countdown to offer expiration
- ✅ **Visual Badges** - Special offer highlighting

### Gallery Section
- ✅ **Responsive Grid** - Auto-arranging image gallery
- ✅ **Lightbox Modal** - Image zoom with modal display
- ✅ **Navigation Controls** - Previous/Next buttons
- ✅ **Keyboard Support** - Arrow keys and Escape key navigation
- ✅ **Hover Zoom** - Visual feedback on hover

### Chefs Section
- ✅ **Professional Profiles** - Display chef information
- ✅ **Social Media Links** - Connect with team members
- ✅ **Hover Animations** - Card lift effects

### Testimonials Section
- ✅ **Customer Reviews** - Display ratings and feedback
- ✅ **Auto-Playing Slider** - Automatic rotation every 5 seconds
- ✅ **Manual Navigation** - Previous/Next buttons
- ✅ **Smooth Transitions** - Professional slide animations

### Why Choose Us Section
- ✅ **Feature Cards** - 6 key differentiators
- ✅ **Icon Display** - Visual representation
- ✅ **Hover Effects** - Interactive animations

### Statistics Section
- ✅ **Animated Counters** - Numbers count up on view
- ✅ **Intersection Observer** - Trigger animation when visible
- ✅ **Professional Design** - Dark gradient background

### FAQ Section
- ✅ **Accordion Component** - Questions and answers
- ✅ **One Open at a Time** - Only one FAQ item open
- ✅ **Smooth Expand/Collapse** - Animated transitions
- ✅ **Common Questions** - Delivery, reservations, events, vegetarian

### Reservation System
- ✅ **Booking Form** - Complete reservation details
- ✅ **Form Validation** - Required fields, email, phone, date
- ✅ **Date Picker** - Future dates only
- ✅ **Guest Selection** - Dropdown for party size
- ✅ **Success Messages** - User feedback on submission
- ✅ **Contact Information** - Display restaurant details

### Newsletter
- ✅ **Email Subscription** - Collect subscriber emails
- ✅ **Email Validation** - Proper format checking
- ✅ **Success Feedback** - User confirmation

### Contact Section
- ✅ **Contact Form** - Name, email, subject, message
- ✅ **Form Validation** - All fields required
- ✅ **Restaurant Info** - Address, phone, email, hours
- ✅ **Google Map** - Embedded location map

### Footer
- ✅ **Quick Links** - Easy navigation
- ✅ **Social Media** - Connect on social platforms
- ✅ **Opening Hours** - Display working hours
- ✅ **Back to Top** - Fixed button for easy scrolling
- ✅ **Copyright** - Legal information

### JavaScript Features
- ✅ **Menu Filtering** - Dynamic category switching
- ✅ **Lightbox Gallery** - Image modal with navigation
- ✅ **Testimonial Slider** - Auto-play with manual controls
- ✅ **FAQ Accordion** - Smooth expand/collapse
- ✅ **Form Validation** - Email, phone, date checking
- ✅ **Counter Animation** - Animated statistics
- ✅ **Scroll Animations** - Elements animate on scroll
- ✅ **Countdown Timers** - Offers expiration countdown
- ✅ **Mobile Navigation** - Hamburger menu functionality
- ✅ **Smooth Scrolling** - All internal links scroll smoothly
- ✅ **Intersection Observer** - Performance-optimized scroll effects

### Performance & Accessibility
- ✅ **Optimized Images** - Placeholder images (easily replaceable)
- ✅ **Lazy Loading** - Images load as needed
- ✅ **Semantic HTML** - Proper heading hierarchy
- ✅ **ARIA Labels** - Screen reader support
- ✅ **Alt Text** - All images have descriptions
- ✅ **Keyboard Navigation** - Full keyboard support
- ✅ **Color Contrast** - WCAG compliant colors
- ✅ **Responsive Design** - Works on all devices

## 📁 Project Structure

```
Restaurant/
├── index.html          # Main HTML file with all sections
├── style.css          # Complete CSS styling (1000+ lines)
├── script.js          # JavaScript functionality (600+ lines)
└── images/            # Folder for restaurant images
```

## 🎨 Color Scheme

- **Primary Color**: #8B0000 (Maroon)
- **Accent Color**: #D4AF37 (Gold)
- **Light Color**: #FFF8F0 (Off-white)
- **Dark Color**: #1F1F1F (Near black)

## 🔤 Typography

- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)
- **Fonts**: Imported from Google Fonts

## 🚀 Quick Start

1. **Open the Website**
   - Simply open `index.html` in a web browser
   - No installation or build process required
   - Works offline

2. **Customize Content**
   - Edit restaurant name in `index.html`
   - Update menu items in `script.js` (menuItems array)
   - Replace gallery images in `galleryImages` array
   - Modify testimonials in `testimonials` array
   - Update contact information in `index.html`

3. **Replace Images**
   - Add your own images to the `images/` folder
   - Update image paths in HTML and JavaScript
   - Use optimized images for better performance

## 🔧 Customization Guide

### Change Restaurant Name
```html
<!-- In index.html -->
<span class="logo-text">Your Restaurant Name</span>
```

### Update Menu Items
```javascript
// In script.js
const menuItems = [
    {
        category: 'breakfast',
        name: 'Your Dish',
        description: 'Dish description',
        price: '$X.XX',
        rating: '⭐ 4.8',
        image: 'image-url'
    }
];
```

### Change Colors
```css
/* In style.css */
:root {
    --primary-color: #8B0000;
    --accent-color: #D4AF37;
    --light-color: #FFF8F0;
    --dark-color: #1F1F1F;
}
```

### Update Contact Information
```html
<!-- In index.html - Contact section -->
<span>+1-800-BITES-123</span>  <!-- Phone -->
<span>info@deliciousbites.com</span>  <!-- Email -->
<span>123 Gourmet Street, Food City, FC 12345</span>  <!-- Address -->
```

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎯 Code Quality

- **Well-Commented** - Clear explanations throughout
- **Modular Functions** - Organized, reusable code
- **No Dependencies** - Pure Vanilla JavaScript
- **Production-Ready** - Professional-grade code
- **Semantic HTML** - Proper element usage
- **CSS Organization** - Logical sections and structure
- **Best Practices** - Follows web standards

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Extra Small**: < 480px

## ✨ Animation Effects

- **Fade In** - Element appearance
- **Slide Up** - Bottom to top animation
- **Zoom** - Scale transformation
- **Slide In Left/Right** - Directional entrance
- **Pulse** - Subtle scaling animation
- **Rotate** - Icon rotation
- **Hover Effects** - Interactive feedback

## 🔐 Security Considerations

- ✅ No external dependencies (reduced attack surface)
- ✅ Client-side form validation
- ✅ Safe email regex pattern
- ✅ Phone number validation
- ✅ Date validation for reservations
- ✅ XSS protection through vanilla JS

## 📈 Performance Tips

1. **Optimize Images**
   - Replace placeholder images with optimized versions
   - Use WebP format when possible
   - Compress images to reduce file size

2. **Reduce CSS/JS**
   - Remove unused CSS rules if needed
   - Minify CSS and JavaScript for production
   - Consider code splitting for large projects

3. **Caching**
   - Use browser caching headers
   - Serve static assets with cache-control

## 🎓 Learning Resources

This project demonstrates:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Vanilla JavaScript DOM manipulation
- Event handling and listeners
- Array methods and data filtering
- Form validation techniques
- Intersection Observer API
- LocalStorage capabilities
- Accessibility standards (WCAG)

## 📝 License

Free to use and modify for your restaurant business.

## 🤝 Support

For questions or modifications, consult the inline code comments throughout the HTML, CSS, and JavaScript files.

## 🎉 Ready to Use

This website is production-ready and can be deployed immediately. Simply:

1. Replace placeholder images with real photos
2. Update restaurant information
3. Customize colors and fonts (optional)
4. Host on any web server

Enjoy your professional restaurant website!

---

**Created with ❤️ using HTML5, CSS3, and Vanilla JavaScript**
