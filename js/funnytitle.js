 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '૮₍ •᎔•₎ა';
         clearTimeout(titleTime);
     }
     else {
         document.title = '૮₍♡♡₎ა' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
