self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed');
  });
  
  self.addEventListener('fetch', (e) => {
    // اینجا میتونی کشینگ رو پیاده کنی
    // فعلاً خالی بذاریم فقط نصب بشه
  });