#!/bin/bash

# Create main directories
mkdir -p src/{app,components,hooks,context,lib,types,styles}
mkdir -p public/{images,fonts,locales}
mkdir -p tests/{unit,integration,e2e}
mkdir -p config scripts

# Create nested directories and files in app
mkdir -p src/app/{about,contact,services/{graphic-design,web-development,app-development},portfolio,blog}
touch src/app/{about,contact}/page.tsx
touch src/app/services/{page.tsx,graphic-design/page.tsx,web-development/page.tsx,app-development/page.tsx}



# Create other directories and files
mkdir -p src/components/{layout,common,home,portfolio,blog}
mkdir -p src/lib/{api,auth,db,utils}

touch src/styles/{variables.css,animations.css}
touch src/types/index.d.ts
touch src/components/layout/{Header.tsx,Footer.tsx,Layout.tsx}
touch src/hooks/{useForm.ts,useIntersectionObserver.ts}
touch src/context/ThemeContext.tsx
touch config/{seo.ts,theme.ts,constants.ts}
touch .env.local
touch scripts/{generate-sitemap.js,optimize-images.js}

# Update existing files
echo "/** @type {import('next').NextConfig} */" > next.config.js
echo "const nextConfig = {" >> next.config.js
echo "  // Add your Next.js config options here" >> next.config.js
echo "};" >> next.config.js
echo "" >> next.config.js
echo "module.exports = nextConfig;" >> next.config.js

echo "module.exports = {" > jest.config.js
echo "  testEnvironment: 'jsdom'," >> jest.config.js
echo "  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']," >> jest.config.js
echo "};" >> jest.config.js

echo "# Environment variables" > .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:3000/api" >> .env.local

echo "Project structure updated successfully!"