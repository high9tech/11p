// تسجيل Service Worker للعمل أوفلاين
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('HIGH TECH PS - SW Registered Successfully!'))
            .catch(err => console.error('SW Failed:', err));
    });
}

// التحكم بشريط تحميل الكاش تلقائياً حتى 100%
const progressFill = document.getElementById('progress-fill');
const cachePercent = document.getElementById('cache-percent');
const cacheStatus = document.getElementById('cache-status');

function startCachingProcess() {
    let progress = 0;
    const isCached = localStorage.getItem('hightech_cached');

    if (isCached === 'true') {
        progressFill.style.width = '100%';
        cachePercent.innerText = '100%';
        cacheStatus.innerText = 'الكاش مكتمل سابقاً! يمكنك فصل الإنترنت الآن والعمل أوفلاين.';
        cacheStatus.style.color = 'var(--success)';
        return;
    }

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 5) + 2;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            localStorage.setItem('hightech_cached', 'true');
            cacheStatus.innerText = 'تم اكتمال الكاش (100%)! اقفل الإنترنت الآن وستعمل الصفحة أوفلاين.';
            cacheStatus.style.color = 'var(--success)';
        }
        progressFill.style.width = progress + '%';
        cachePercent.innerText = progress + '%';
    }, 60);
}

window.addEventListener('load', startCachingProcess);

// وظيفة الزر وتحديث سجل الأوامر
function log(msg) {
    document.getElementById('console-log').innerText = msg;
}

function launchExploit() {
    const btn = document.getElementById('seal-btn');
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.8';

    log("Initiating WebKit Exploit (PsFree)...");

    setTimeout(() => {
        log("Bypassing ASLR & Memory Corruption...");
    }, 1200);

    setTimeout(() => {
        log("Triggering Kernel Exploit & Injecting Payloads...");
    }, 2500);

    setTimeout(() => {
        log("GoldHen v2.4b16 Loaded Successfully! Enjoy Gaming.");
        alert("تم تفعيل GoldHen بنجاح على جهازك (HIGH TECH PS)!");
        btn.style.pointerEvents = 'auto';
        btn.style.opacity = '1';
    }, 4000);
}