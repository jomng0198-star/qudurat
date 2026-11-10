# تطبيق آيفون – منصة قدرات لفظي

هذا المجلد يحوّل المنصة (index.html والفيديوهات في جذر المستودع) إلى تطبيق آيفون باستخدام Capacitor.
البناء يتم تلقائياً على أجهزة ماك في GitHub Actions (ملف `.github/workflows/ios.yml`).

- كل تعديل على `index.html` أو `videos/` أو هذا المجلد يعيد بناء التطبيق للتأكد أنه سليم.
- الرفع إلى App Store يحتاج مفتاح App Store Connect API يُضاف إلى أسرار المستودع (Secrets):
  `ASC_KEY_ID` و`ASC_ISSUER_ID` و`ASC_KEY_P8` و`APPLE_TEAM_ID`.
