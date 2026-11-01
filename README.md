# Portfolio Viala Romain

## 🚀 How to Run the Project

Follow these steps to set up and run the project locally:

### 1️⃣ Install Dependencies

After downloading/cloning the project, navigate to the project directory and run:

```bash
npm install
# or
yarn install
```

This will install all required dependencies.

### 2️⃣ Start the Development Server

Once the installation is complete, start the server with:

```bash
npm run dev
# or
yarn dev
```

The portfolio will now be running at `http://localhost:3000`.

## Folder Structure Overview



- **content:** Contains data for projects. Add any additional section data here.
- **Components:** All the UI components of app e.g. navbar, hero, projects, footer etc
- **src/services:** Retrieves data (e.g., projects, testimonials) using the fs module. Update this file if you change or modify the data source.
- **src/assets:** Stores all assets, including images and icons, additionally you can add audio, video, and local fonts here.
- **src/hooks:** Holds custom hooks.
- **src/lib/types.d.ts:** Contains TypeScript types.
- **util/icons:** Centralizes icons and images for easy updates.
- **appData:** Includes app data, such as services and skills (including icons).
- **app/page.tsx:** Root file of the app.
- **app/layout.tsx:** Manages global and SEO configurations (e.g., fonts, head tags, analytics).


