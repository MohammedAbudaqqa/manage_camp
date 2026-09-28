# نظام إدارة المخيم

موقع لإدارة الأسر في المخيم (الأسر، الأفراد، المساعدات، التصدير والاستيراد عبر Excel).

## الملفات
- `index.html`: الموقع (يجب أن يبقى بهذا الاسم في جذر المستودع).
- `firebase-config.js`: إعدادات المزامنة السحابية (اختياري، انظر أدناه).
- `xlsx.full.min.js` و `firebase-*-compat.js`: مكتبات مضمّنة.

## المزامنة بين الأجهزة (Firebase)
بدون هذه الخطوات تُحفظ البيانات في كل جهاز على حدة. لربط كل الأجهزة بنفس البيانات:

1. افتح https://console.firebase.google.com وأنشئ مشروعاً (الخطة المجانية Spark تكفي).
2. **Build ← Firestore Database ← Create database** (اختر Production mode وأقرب موقع).
3. **Build ← Authentication ← Get started ← Email/Password ← Enable**.
4. من **Authentication ← Users ← Add user** أنشئ حسابات المستخدمين.
   يمكن كتابة اسم مستخدم عادي عند الدخول (مثل `ahmad`) وسيُحوَّل تلقائياً إلى `ahmad@camp.local`،
   فأنشئ الحساب بهذا الشكل، أو استخدم بريداً حقيقياً.
5. **Authentication ← Settings ← User actions**: أوقف خيار **Enable create (sign-up)** حتى لا يستطيع أحد إنشاء حساب بنفسه.
6. **Authentication ← Settings ← Authorized domains**: أضف `اسمك.github.io`.
7. **Firestore ← Rules** ← الصق القواعد التالية (عدّل قائمة الحسابات المسموحة) ثم Publish:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null
        && request.auth.token.email in ['ahmad@camp.local', 'sara@camp.local'];
    }
  }
}
```
8. **Project settings (⚙️) ← Your apps ← Web (</>)**: سجّل تطبيقاً وانسخ قيم `firebaseConfig`
   (apiKey, authDomain, projectId, appId) إلى ملف `firebase-config.js` ثم ارفع الملف إلى GitHub.

> مفتاح `apiKey` ليس سراً؛ الحماية الحقيقية هي قواعد Firestore أعلاه (لا تتركها مفتوحة للجميع).

عند أول دخول من جهاز فيه بيانات محلية والسحابة فارغة، سيسألك الموقع إن كنت تريد رفعها.

## تحذير
لا ترفع ملفات النسخ الاحتياطية أو Excel التي تحتوي على بيانات الأسر إلى المستودع.
