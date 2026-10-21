# HARLEY-DAVIDSON — IRONCLAD
### Premium Cinematic Motorcycle Digital Experience

An editorial, high-performance web experience inspired by the **REDLINE** racing website aesthetic, featuring Harley-Davidson motorcycles (*Sportster S*, *Fat Boy 114*, *Nightster*, and *Street Glide*).

Built purely with:
- **HTML5** (Semantic markup, accessible attributes)
- **CSS3** (Custom properties, HUD corner brackets, spotlight beam gradients, responsive grids, prefers-reduced-motion)
- **Vanilla JavaScript** (Zero frameworks or external libraries, dynamic spec modal, live customizer with real photographic color rendering, localStorage persistence, dealer locator, toast notifications)

---

## 📁 Project Structure

```
harley-website/
│
├── index.html            # Flagship homepage (Hero, Collection, Configurator, About, Tech, Stories, Dealers, Social, Contact)
├── motorcycles.html      # Complete motorcycle fleet & technical specifications
├── about.html            # Brand heritage & 1903 Milwaukee history
├── stories.html          # Rider culture editorial essays
├── contact.html          # Test ride booking & communications
├── login.html            # Dedicated rider sign-in portal
├── register.html         # Dedicated rider membership registration
│
├── style.css             # Root master stylesheet
├── script.js             # Root master JavaScript application
│
├── css/
│   └── style.css         # Mirrored stylesheet for modular folder structure
├── js/
│   └── main.js           # Mirrored JavaScript engine
│
└── assets/
    └── images/           # High-resolution motorcycle studio photography
        ├── hero-sportster-s.jpg
        ├── fat-boy-114.jpg
        ├── nightster.jpg
        ├── street-glide.jpg
        ├── config-sportster-black.jpg
        ├── config-sportster-gray.jpg
        ├── config-sportster-orange.jpg
        ├── config-sportster-red.jpg
        ├── tech-engineering.jpg
        ├── tech-design.jpg
        ├── tech-rider.jpg
        ├── story-long-ride.jpg
        ├── story-night.jpg
        └── story-own-road.jpg
```

---

## ⚡ Quick Start & How to Run in VS Code

### Option 1: Live Server Extension (Recommended)
1. Open the project folder in **VS Code**:
   - File -> Open Folder -> `C:\Users\Raviteja\.gemini\antigravity\scratch\harley-website`
2. Install the **Live Server** extension (by Ritwick Dey) if not already installed.
3. Right-click `index.html` in the file explorer and select **"Open with Live Server"**.
4. The site will open automatically in your browser at `http://127.0.0.1:5500`.

### Option 2: Python Local Server
Run this single command inside the project directory:
```bash
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

### Option 3: Direct Browser Launch
Double-click `index.html` in Windows File Explorer to open directly in Google Chrome, Microsoft Edge, Firefox, or Brave.

---

## 🎨 Design & Technical Highlights
1. **REDLINE Hero Composition**:
   - High-contrast serif typography (`Bodoni Moda` / `Playfair Display`)
   - Vertical spotlight beam and ambient top-down haze
   - Flanking HUD brackets: `[ SYS.ACTIVE ]` and `[ IRONCLAD.MK1 ]`
   - Bottom status bar with pulsating status indicator and quick build triggers
2. **Interactive Configurator ("BUILD YOUR MACHINE")**:
   - 4 Harley-Davidson platforms (Sportster S, Fat Boy, Nightster, Street Glide)
   - Real distinct photo renders for every factory color (Vivid Black, Metallic Gray, Deep Orange, Dark Red)
   - Ergonomic seats, handlebars, wheels, and Screamin' Eagle accessories
   - Real-time calculation and `localStorage` garage storage
3. **Product Spec Modal**: Verified displacement, horsepower, torque, running weight, and features
4. **Dealer Locator**: Interactive city and ZIP code search with distance readouts
5. **Rider Authentication System**: Client-side demo with password reveals and session badges
