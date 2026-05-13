# 🎯 Siegedle

A daily guessing game inspired by **Wordle** and **Loldle**, created specifically for **Rainbow Six Siege** players.

Test your tactical knowledge by guessing the **Operator of the Day** or identifying the **Daily Map** using visual clues and attribute comparisons.

---

## 🎮 Game Modes

---

### 🧠 1. Guess the Operator

Guess the secret Rainbow Six Siege operator of the day.

After each guess, the game provides visual feedback based on the operator’s attributes.

#### 🟩 Feedback System

- 🟩 **Green Box** → Exact match
- 🟥 **Red Box** → Incorrect attribute
- ⬆️ / ⬇️ **Arrows** → Indicates whether the secret operator’s value is higher or lower

#### 📊 Compared Attributes

- Gender
- Side (Attacker / Defender)
- Unit
- Release Year
- Speed

---

### 🗺️ 2. Guess the Map

Players must identify the correct map using the smart autocomplete search bar.

---

## ✨ Features

### 📅 Daily Seed System
The secret operator and map change every day at midnight.

Every player receives the same daily challenge.

### 🔎 Smart Auto-complete
Search operators and maps instantly with:
- Real-time suggestions
- Keyboard navigation
- Operator icons

### 🖼️ Image Fallback System
Automatically attempts modern image formats first:
- `.avif`
- `.webp`

If unsupported, the game falls back to:
- `.png`
- `.jpg`

### ⚡ Vanilla Tech Stack
Built entirely with:
- HTML
- CSS
- JavaScript

No frameworks, APIs, or external libraries required.

---

## 🚀 How to Run Locally

Running the project is extremely simple.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/siegedle.git
```

### 2. Navigate into the folder

```bash
cd siegedle
```

### 3. Open the project

Open the `index.html` file in any modern web browser.

> 💡 Recommended:  
> If you're using VS Code, use the **Live Server** extension for a smoother development experience.

---

## 📁 Folder Structure & Assets

To make the game work correctly, you must provide the images for:
- Backgrounds
- Operators
- Maps

Example structure:

```text
/siegedle
├── index.html
├── style.css
├── script.js
├── r6sx-heroBanner.avif
├── icons/
│   ├── ash.png
│   ├── blackbeard.webp
│   └── ...
├── maps/
│   ├── banco.jpg
│   ├── arranha-ceu.jpg
│   └── ...
└── README.md
```

---

## 🖼️ Naming Convention for Images

The JavaScript automatically formats names to find the correct files.

### ✅ Rules

- All lowercase
- No accents
- Spaces replaced with hyphens `-`
- Parentheses removed or converted to hyphens

### 📌 Examples

| Original Name | File Name |
|---|---|
| Capitão | `capitao.png` |
| Blackbeard | `blackbeard.webp` |
| Mansion | `mansion.jpg` |
| Arranha Céu | `arranha-ceu.jpg` |

### 📦 Supported Formats

- `.avif`
- `.webp`
- `.png`
- `.jpg`

---

## 🛠️ Technologies Used

### HTML5
Semantic structure and accessible layout.

### CSS3
Used for:
- Flexbox layouts
- CSS Grid
- Animations
- Responsive design
- Blur and transition effects

### JavaScript (ES6)
Handles:
- Daily seed generation
- Guess validation
- Search filtering
- DOM manipulation
- Dynamic feedback system

---

## 🧠 Core Concepts Behind the Project

This project was designed to practice:

- Deterministic daily challenge systems
- Search and autocomplete logic
- Dynamic UI rendering
- Image optimization strategies
- Responsive web game interfaces

---

## 🔮 Future Improvements

- [ ] 🏆 Win streak and statistics tracking
- [ ] 🌍 Multiplayer challenge sharing
- [ ] 🎵 Sound effects and UI feedback
- [ ] 📱 Progressive Web App (PWA) support
- [ ] 🎨 Animated reveal transitions
- [ ] 🧩 Additional game modes
- [ ] 💾 Save progress with `localStorage`

---

## ⚖️ Disclaimer

This project is an unofficial fan creation.

**Rainbow Six Siege**, its operators, maps, icons, and related assets are property of **Ubisoft**.

This project was created for educational and entertainment purposes only and is not affiliated with or endorsed by Ubisoft.

---

## 📄 License

This project is open-source and available under the **MIT License**.

Feel free to study, modify, and expand it.

---

## 👨‍💻 Author

Developed by **Keller Nz**

---

## ⭐ Support

If you enjoyed this project, consider giving it a ⭐ on GitHub!
