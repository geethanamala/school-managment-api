# To-Do List Application

A modern, feature-rich to-do list application with persistent local storage functionality. Built with vanilla JavaScript, HTML, and CSS.

## ✨ Features

### Core Functionality
✅ **Add Tasks** - Create new to-do items  
✅ **Mark Complete** - Check off finished tasks  
✅ **Delete Tasks** - Remove individual items  
✅ **Filter Tasks** - View All, Active, or Completed tasks  
✅ **Local Storage** - Data persists across browser sessions  

### Advanced Features
✅ **Real-time Statistics** - Track total, completed, and active tasks  
✅ **Bulk Actions** - Clear completed or delete all tasks  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Smooth Animations** - Professional transitions and effects  
✅ **Data Export** - Download tasks as JSON file  
✅ **Input Validation** - Prevents empty tasks  
✅ **XSS Protection** - HTML escaping for security  

## 🚀 Quick Start

### Option 1: Direct File Access
1. Download or clone the repository
2. Open `todo-app/index.html` in your browser
3. Start adding tasks!

### Option 2: GitHub Pages
```
https://github.com/geethanamala/school-managment-api/tree/todo-app
```

### Option 3: Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using Live Server extension in VS Code
# Open index.html and click "Go Live"
```

## 📋 How to Use

### Adding Tasks
1. Type your task in the input field
2. Press **Enter** or click the **➕ Add** button
3. Task appears at the top of the list

### Managing Tasks
- **Check Checkbox** - Mark task as completed
- **Click Delete** - Remove a task permanently
- **Filter** - Switch between All, Active, or Completed views

### Bulk Operations
- **Clear Completed** - Remove all finished tasks
- **Delete All** - Remove all tasks (with confirmation)

## 🔄 Local Storage Details

### Storage Key
```
Key: 'todos_data'
Type: JSON Array
Location: Browser's Local Storage
```

### Stored Data Structure
```json
[
  {
    "id": 1234567890,
    "text": "Buy groceries",
    "completed": false,
    "createdAt": "2026-05-08T10:30:00.000Z"
  },
  {
    "id": 1234567891,
    "text": "Finish project",
    "completed": true,
    "createdAt": "2026-05-08T11:15:00.000Z"
  }
]
```

### Storage Capacity
- **Typical Limit**: 5-10 MB per domain
- **Current Usage**: Check in browser DevTools → Application → Local Storage

## 🎨 Customization

### Change Color Scheme
Edit `styles.css` and modify:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Storage Key
Edit `script.js`:
```javascript
this.storageKey = 'custom_key_name';
```

### Add More Features
- Task priorities
- Due dates
- Categories/tags
- Search functionality
- Recurring tasks

## 📱 Responsive Breakpoints

| Device | Width | Optimized |
|--------|-------|-----------|
| Mobile | < 600px | ✅ |
| Tablet | 600px - 900px | ✅ |
| Desktop | > 900px | ✅ |

## 🔐 Security Features

✅ **XSS Prevention** - HTML content escaped before rendering  
✅ **Input Validation** - Empty tasks rejected  
✅ **No External Dependencies** - Reduced attack surface  
✅ **Confirmation Dialogs** - Prevents accidental data loss  

## 🛠️ Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Opera | ✅ Full |
| IE 11 | ⚠️ Partial |

## 💾 Data Management

### Export Tasks
```javascript
app.exportData(); // Downloads as JSON file
```

### View Storage Info
```javascript
app.getStorageInfo();
// Returns: { items: 5, sizeInBytes: 245, sizeInKB: "0.24" }
```

### Clear Local Storage (Developer Console)
```javascript
localStorage.removeItem('todos_data');
// or
localStorage.clear(); // Clears all local storage
```

## 🐛 Troubleshooting

### Tasks Not Saving?
- Check if Local Storage is enabled in browser
- Verify you're not in Private/Incognito mode
- Check browser console for errors

### Tasks Disappeared?
- They might be in a different filter view
- Check Local Storage is not disabled
- Try refreshing the page

### Storage Full?
- Export tasks as JSON
- Clear completed tasks
- Delete old tasks
- Check other websites' storage usage

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| Lines of Code | ~350 |
| CSS Rules | 100+ |
| JavaScript Classes | 1 |
| Dependencies | 0 (Vanilla JS) |
| File Size | ~15 KB |
| Load Time | < 100ms |

## 🎯 Usage Examples

### Example 1: Daily Tasks
```
📝 My To-Do List
✓ Morning Exercise (Completed)
  Prepare breakfast
  Check emails
  Attend meeting at 2 PM
  Grocery shopping
```

### Example 2: Project Planning
```
📝 Project Tasks
✓ Setup repository (Completed)
✓ Create documentation (Completed)
  Design UI mockups
  Implement features
  Write tests
  Deploy to production
```

## 🚀 Future Enhancements

- [ ] Task priorities (High, Medium, Low)
- [ ] Due dates and reminders
- [ ] Task categories/tags
- [ ] Search and filter by text
- [ ] Recurring tasks
- [ ] Cloud sync (Firebase, Supabase)
- [ ] Dark mode
- [ ] Keyboard shortcuts
- [ ] Undo/Redo functionality
- [ ] Drag & drop reordering

## 📄 File Structure

```
todo-app/
├── index.html          # HTML structure
├── styles.css          # Styling and animations
├── script.js           # JavaScript logic and local storage
└── README.md          # Documentation
```

## 📝 License

MIT License - Feel free to use and modify

## 👤 Author

**Geetha Namala**  
GitHub: [@geethanamala](https://github.com/geethanamala)

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section
2. Open an issue on GitHub
3. Check browser console for error messages

## 🙏 Credits

Built with ❤️ using vanilla HTML, CSS, and JavaScript

---

**Last Updated**: May 8, 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
