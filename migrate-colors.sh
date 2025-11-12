#!/bin/bash
# LingoLab Color Theme Migration Script
# Run this from your project root directory

echo "🎨 Starting LingoLab → LingoLab color migration..."

# Backup before making changes
echo "📦 Creating backup..."
cp -r app app_backup_$(date +%Y%m%d_%H%M%S)
cp -r messages messages_backup_$(date +%Y%m%d_%H%M%S)

# Color replacements
echo "🔵 Replacing orange → blue..."

# Gradients
find app -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i '' \
  -e 's/from-blue-500 to-indigo-600/from-blue-500 to-indigo-600/g' \
  -e 's/from-blue-600 to-indigo-700/from-blue-600 to-indigo-700/g' \
  -e 's/from-blue-50 to-indigo-50/from-blue-50 to-indigo-50/g' \
  -e 's/from-blue-100 to-indigo-100/from-blue-100 to-indigo-100/g' \
  -e 's/from-blue-50 to-indigo-100/from-blue-50 to-indigo-100/g' \
  {} +

# Primary colors
find app -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i '' \
  -e 's/blue-500/blue-500/g' \
  -e 's/blue-600/blue-600/g' \
  -e 's/blue-400/blue-400/g' \
  -e 's/blue-300/blue-300/g' \
  -e 's/blue-200/blue-200/g' \
  -e 's/blue-100/blue-100/g' \
  -e 's/blue-50/blue-50/g' \
  {} +

# Secondary colors (red → indigo)
find app -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i '' \
  -e 's/indigo-600/indigo-600/g' \
  -e 's/indigo-500/indigo-500/g' \
  -e 's/indigo-400/indigo-400/g' \
  -e 's/indigo-300/indigo-300/g' \
  -e 's/indigo-100/indigo-100/g' \
  -e 's/indigo-50/indigo-50/g' \
  {} +

echo "🏷️  Replacing LingoLab → LingoLab branding..."

# Branding
find app messages -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.json" \) -exec sed -i '' \
  -e 's/LingoLab/LingoLab/g' \
  -e 's/LingoLab/lingolab/g' \
  {} +

echo "✅ Color migration complete!"
echo ""
echo "📋 Next steps:"
echo "1. Review changes: git diff"
echo "2. Replace logo: public/logo.png"
echo "3. Replace favicon: public/favicon.ico"
echo "4. Update contact info (phone, email)"
echo "5. Update metadata in app/[locale]/layout.js"
echo "6. Update translation files with language learning content"
echo "7. Test the application: npm run dev"
echo ""
echo "💾 Backups created in:"
echo "   - app_backup_*/"
echo "   - messages_backup_*/"