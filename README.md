# my-portfolio-website
# Jacelyn Caratao - Portfolio Website
 
A modern, responsive portfolio website showcasing projects, skills, and creative work. Built with React, Vite, and Tailwind CSS for optimal performance and developer experience.
 
## 🚀 Features
 
- **Modern Design**: Clean, professional interface with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works seamlessly on all devices
- **Project Showcase**: Interactive project cards with modal popups for detailed information
- **Skills Section**: Comprehensive display of technical and soft skills
- **Graphic Design Gallery**: Dedicated section for creative design work
- **Smooth Navigation**: Sticky navigation with active section tracking
- **Performance Optimized**: Built with Vite for fast development and production builds
 
## 🛠️ Tech Stack
 
### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library
 
### UI Components
- **Radix UI** - Accessible component primitives
- **Class Variance Authority** - Utility for component variants
- **Tailwind Merge** - Utility for merging Tailwind classes
 
### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **TypeScript** - Type safety (partial implementation)
 
## 📁 Project Structure
 
```
my-portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   └── img/          # Project images and assets
│   ├── components/        # Reusable React components
│   │   ├── ui/           # Base UI components
│   │   ├── magicui/      # Special UI components
│   │   ├── Navbar.jsx    # Navigation component
│   │   ├── Modal.jsx     # Project detail modal
│   │   └── Portfolio.jsx # Main portfolio component
│   ├── pages/            # Page components
│   │   └── GraphicDesign.jsx
│   ├── lib/              # Utility functions
│   ├── App.css           # Global styles
│   ├── App.jsx           # Main App component
│   ├── index.css         # Base styles
│   └── main.jsx          # Application entry point
├── .gitignore            # Git ignore file
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```
 
## 🚀 Getting Started
 
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
 
### Installation
 
1. **Clone the repository**
   ```bash
   git clone https://github.com/jacelynk/my-portfolio-website.git
   cd my-portfolio-website
   ```
 
2. **Install dependencies**
   ```bash
   npm install
   ```
 
3. **Start development server**
   ```bash
   npm run dev
   ```
 
4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)
 
## 📜 Available Scripts
 
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run deploy` - Build and deploy to GitHub Pages
 
## 🎨 Customization
 
### Adding New Projects
1. Add project images to `src/assets/img/`
2. Update the `projectData` object in `src/components/Portfolio.jsx`
3. Include project details:
   - Title and description
   - Tech stack
   - Live URL and GitHub link
   - Project images
   - Detailed features and roles
 
### Modifying Styles
- Global styles: `src/App.css`
- Component-specific styles are inline or in CSS modules
- Tailwind configuration: `tailwind.config.js`
 
### Adding New Sections
1. Create new components in `src/components/`
2. Add routes in `src/App.jsx` (if needed)
3. Update navigation in `src/components/Navbar.jsx`
 
## 🚀 Deployment
 
### GitHub Pages
The project is configured for automatic deployment to GitHub Pages:
 
1. **Manual deployment**
   ```bash
   npm run deploy
   ```
 
2. **Automatic deployment**
   - Push to main branch
   - GitHub Actions will automatically build and deploy
 
### Other Platforms
The build output in `dist/` can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting
 
## 🎯 Key Components
 
### Portfolio Component (`src/components/Portfolio.jsx`)
- Main component containing all sections
- Project data management
- Modal functionality for project details
- Smooth scrolling and navigation
 
### Modal Component (`src/components/Modal.jsx`)
- Reusable modal for project details
- Image gallery functionality
- Responsive design
 
### Navbar Component (`src/components/Navbar.jsx`)
- Sticky navigation with scroll effects
- Active section tracking
- Smooth scrolling to sections
 
## 🎨 Design Features
 
- **Glass morphism effects** for modern aesthetics
- **Gradient backgrounds** and text effects
- **Smooth animations** using CSS transitions
- **Hover states** and micro-interactions
- **Responsive grid layouts** for projects and skills
- **Custom scrollbar** styling
 
## 📱 Browser Support
 
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
 
## 🤝 Contributing
 
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
 
## 📄 License
 
This project is licensed under the MIT License - see the LICENSE file for details.
 
## 👤 Author
 
**Jacelyn Caratao**
- GitHub: [@jacelynk](https://github.com/jacelynk)
- Portfolio: [https://jacelynk.github.io/my-portfolio-website](https://jacelynk.github.io/my-portfolio-website)
 
## 🙏 Acknowledgments
 
- [React](https://reactjs.org/) for the UI framework
- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Radix UI](https://www.radix-ui.com/) for accessible components
 
