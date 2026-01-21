# Engineering Resources Finder 🎓

A modern, beautifully designed web application that helps engineering students discover and access educational resources. Navigate through colleges, branches, semesters, and subjects to find study materials, notes, and resources.

![Engineering Resources Finder](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- 🏛️ **Multi-College Support** - Browse resources from MIT, Stanford, IIT Delhi, and more
- 🔧 **Branch Selection** - Support for EEE, Mechanical, Computer Science, Civil Engineering
- 📚 **8 Semester Coverage** - Complete semester-wise organization
- 📝 **Subject Resources** - Detailed subject information with notes and materials
- 🎨 **Modern UI** - Dark theme with glassmorphism effects and smooth animations
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Zero Dependencies** - Pure HTML, CSS, and JavaScript (no frameworks required)

## 🚀 Quick Start

### Option 1: Direct Usage (No Installation Required)

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/engineering-resources-finder.git
   cd engineering-resources-finder
   ```

2. Open `index.html` in your web browser:
   - **Windows**: Double-click `index.html` or right-click → Open with → Chrome/Firefox
   - **Mac**: Double-click `index.html` or use `open index.html`
   - **Linux**: Use `xdg-open index.html`

That's it! No build process, no node_modules, no npm install required.

### Option 2: Local Web Server

For a more production-like environment:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have it)
npx serve
```

Then open `http://localhost:8000` in your browser.

## 📖 Usage

1. **Select Your College** - Choose from MIT, Stanford, or IIT Delhi
2. **Pick Your Branch** - Select your engineering discipline (EEE, Mechanical, CSE, etc.)
3. **Choose Semester** - Navigate to any semester from 1 to 8
4. **Browse Subjects** - View subjects and expand to see available resources
5. **Access Notes** - Click on any subject card to view and access study materials

## 🏗️ Project Structure

```
engineering-resources-finder/
├── index.html          # Main application file
├── styles.css          # Complete design system and styling
├── app.js              # Application logic and navigation
├── data.js             # Sample database with colleges, branches, subjects
└── README.md           # This file
```

## 🎨 Design Features

- **Rich Dark Theme** - Easy on the eyes with vibrant accent colors
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Smooth Animations** - Micro-animations and transitions throughout
- **Gradient Accents** - Beautiful color gradients for visual appeal
- **Modern Typography** - Inter font family from Google Fonts
- **Responsive Grid** - Adaptive layouts for all screen sizes

## 🗄️ Database Structure

The application uses a simple JavaScript object as a database with the following structure:

- **Colleges** - Institution information (MIT, Stanford, IIT Delhi)
- **Branches** - Engineering disciplines linked to colleges
- **Semesters** - Semesters 1-8
- **Subjects** - Course information with codes, credits, descriptions
- **Notes** - Study materials and resources for each subject

### Sample Data

Currently includes:
- 3 colleges (MIT, Stanford, IIT Delhi)
- 8 branches across different colleges
- Complete semester structure (1-8)
- 10+ subjects with detailed information
- 10+ note resources with descriptions

## 🔧 Customization

### Adding New Colleges

Edit `data.js`:

```javascript
database.colleges.push({
    id: 4,
    name: "Your College",
    fullName: "Your College Full Name",
    description: "Your college description"
});
```

### Adding Branches

```javascript
database.branches.push({
    id: 9,
    collegeId: 4, // Link to your college
    name: "Aerospace Engineering",
    code: "AERO",
    description: "Aerodynamics and space systems"
});
```

### Adding Subjects

```javascript
database.subjects.push({
    id: 11,
    branchId: 1,
    semesterId: 4,
    name: "Your Subject Name",
    code: "SUB401",
    description: "Subject description",
    credits: 4
});
```

### Adding Notes/Resources

```javascript
database.notes.push({
    id: 11,
    subjectId: 1,
    title: "Resource Title",
    description: "Resource description",
    type: "PDF", // or "VIDEO"
    fileUrl: "your-file-url-here"
});
```

## 🎯 Future Enhancements

This project can be extended to:

- [ ] **Next.js Migration** - Convert to Next.js for SSR and better routing
- [ ] **Supabase Integration** - Replace local data with real database
- [ ] **User Authentication** - Add login/signup functionality
- [ ] **File Uploads** - Allow students to contribute resources
- [ ] **Search Functionality** - Search across subjects and notes
- [ ] **Bookmarks/Favorites** - Save favorite subjects and resources
- [ ] **Admin Dashboard** - Content management system
- [ ] **Rating System** - Let students rate resources
- [ ] **Comments** - Discussion section for each subject

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Engineering Resources Finder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Designed with love for engineering students worldwide
- Inspired by modern web design trends
- Built with vanilla web technologies for maximum compatibility

## 📧 Contact

For questions, suggestions, or issues, please open an issue on GitHub.

---

Made with ❤️ for engineering students
