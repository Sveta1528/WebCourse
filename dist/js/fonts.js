"use strict";function loadFont(t,e,n){var a=navigator.userAgent;if(window.addEventListener&&(!a.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/)||a.match(/Chrome/))){var o={};try{o=localStorage||{}}catch(t){}var r="x-font-"+t,s=r+"url",i=r+"css",d=o[s],c=o[i],l=document.createElement("style");if(l.rel="stylesheet",document.head.appendChild(l),!c||d!==e&&d!==n){var u=n&&function(){if(!window.FontFace)return!1;var t=new FontFace("t",'url("data:application/font-woff2,") format("woff2")',{});return t.load(),"loading"===t.status}()?n:e,f=new XMLHttpRequest;f.open("GET",u),f.onload=function(){f.status>=200&&f.status<400&&(o[s]=u,o[i]=l.textContent=f.responseText)},f.send()}else l.textContent=c}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbnRzLmpzIl0sIm5hbWVzIjpbImxvYWRGb250IiwiZm9udE5hbWUiLCJ3b2ZmVXJsIiwid29mZjJVcmwiLCJudWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsImxvU3RvIiwiZXgiLCJsb2NhbFN0b3JhZ2VVcmxLZXkiLCJsb2NhbFN0b3JhZ2VQcmVmaXgiLCJsb2NhbFN0b3JhZ2VDc3NLZXkiLCJzdG9yZWRGb250VXJsIiwic3R5bGVFbGVtZW50Iiwic3RvcmVkRm9udENzcyIsImRvY3VtZW50IiwidGV4dENvbnRlbnQiLCJ3aW5kb3ciLCJGb250RmFjZSIsInN1cHBvcnRzV29mZjIiLCJmIiwibG9hZCIsInN0YXR1cyIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsInVybCIsIm9ubG9hZCIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IllBQUEsU0FBU0EsVUFBU0MsRUFBVUMsRUFBU0MsR0FDbkMsR0FBTUMsR0FBTUMsVUFBVUMsU0FBdEIsSUFEZ0JMLE9BQVVDLG9CQUFtQkUsRUFBQUcsTUFBQSx3REFBQUgsRUFBQUcsTUFBQSxXQUM3QyxDQUdFLEdBQUFDLEtBQ0QsS0FDREEsRUFBSUEsaUJBQ0osTUFBSUMsSUFDRkQsR0FBQUEsR0FBd0IsVUFBeEJQLEVBQ0FTLEVBQVlDLEVBQUEsTUFDUkEsRUFBcUJBLEVBQTNCLE1BQ01ELEVBQUFBLEVBQXFCQyxHQUNyQkMsRUFBQUEsRUFBcUJELEdBQ3JCRSxFQUFnQkwsU0FBTUUsY0FBTixRQUd0QkksSUFGQUEsRUFBTUMsSUFBQUEsYUFDTkMsU0FBTUYsS0FBQUEsWUFBZUUsSUFDckJGLEdBQW1CRCxJQUFuQlgsR0FBQVcsSUFBQVYsRUFFSVksQ0FDRkQsR0FBQUEsR0FBYUcsR0FZZCxXQUdDLElBQUtDLE9BQU9DLFNBRGQsT0FBU0MsQ0FFTCxJQUFBQyxHQUFPLEdBQVBGLFVBQUEsSUFBQSx5REFFRixPQURDRSxHQUFBQyxPQUNTLFlBQUpELEVBQUlFLFVBbEJWcEIsRUFBQUQsRUFDS3NCLEVBQUEsR0FBQUMsZUFDTEQsR0FBTUUsS0FBT3ZCLE1BQUFBLEdBQ2JxQixFQUFNQSxPQUFVLFdBQ2hCQSxFQUFhRCxRQUFiLEtBQUFDLEVBQUFELE9BQUEsTUFDQUMsRUFBUUcsR0FBcUJELEVBQzNCbEIsRUFBSWdCLEdBQXlCQSxFQUFBUCxZQUFzQk8sRUFBQUksZUFHbERKLEVBQUFLLFdBWExiLEdBQWNjLFlBQVloQiIsImZpbGUiOiJmb250cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRGb250KGZvbnROYW1lLCB3b2ZmVXJsLCB3b2ZmMlVybCkge1xyXG4gIGNvbnN0IG51YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgY29uc3Qgbm9TdXBwb3J0ID0gIXdpbmRvdy5hZGRFdmVudExpc3RlbmVyICB8fCAobnVhLm1hdGNoKC8oQW5kcm9pZCAoMnwzfDQuMHw0LjF8NC4yfDQuMykpfChPcGVyYSAoTWluaXxNb2JpKSkvKSAmJiAhbnVhLm1hdGNoKC9DaHJvbWUvKSk7XHJcbiAgaWYgKG5vU3VwcG9ydCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBsZXQgbG9TdG8gPSB7fTtcclxuICB0cnkge1xyXG4gICAgbG9TdG8gPSBsb2NhbFN0b3JhZ2UgfHwge307XHJcbiAgfSBjYXRjaChleCkge31cclxuICBjb25zdCBsb2NhbFN0b3JhZ2VQcmVmaXggPSAneC1mb250LScgKyBmb250TmFtZTtcclxuICBjb25zdCBsb2NhbFN0b3JhZ2VVcmxLZXkgPSBsb2NhbFN0b3JhZ2VQcmVmaXggKyAndXJsJztcclxuICBjb25zdCBsb2NhbFN0b3JhZ2VDc3NLZXkgPSBsb2NhbFN0b3JhZ2VQcmVmaXggKyAnY3NzJztcclxuICBjb25zdCBzdG9yZWRGb250VXJsID0gbG9TdG9bbG9jYWxTdG9yYWdlVXJsS2V5XTtcclxuICBjb25zdCBzdG9yZWRGb250Q3NzID0gbG9TdG9bbG9jYWxTdG9yYWdlQ3NzS2V5XTtcclxuICBjb25zdCBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlRWxlbWVudC5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG4gIGlmIChzdG9yZWRGb250Q3NzICYmIChzdG9yZWRGb250VXJsID09PSB3b2ZmVXJsIHx8IHN0b3JlZEZvbnRVcmwgPT09IHdvZmYyVXJsKSkge1xyXG4gICAgc3R5bGVFbGVtZW50LnRleHRDb250ZW50ID0gc3RvcmVkRm9udENzcztcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdXJsID0gKHdvZmYyVXJsICYmIHN1cHBvcnRzV29mZjIoKSkgPyB3b2ZmMlVybCA6IHdvZmZVcmw7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCk7XHJcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgIGxvU3RvW2xvY2FsU3RvcmFnZVVybEtleV0gPSB1cmw7XHJcbiAgICAgICAgbG9TdG9bbG9jYWxTdG9yYWdlQ3NzS2V5XSA9IHN0eWxlRWxlbWVudC50ZXh0Q29udGVudCA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdXBwb3J0c1dvZmYyKCkge1xyXG4gICAgaWYgKCF3aW5kb3cuRm9udEZhY2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZiA9IG5ldyBGb250RmFjZSgndCcsICd1cmwoXCJkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjIsXCIpIGZvcm1hdChcIndvZmYyXCIpJywge30pO1xyXG4gICAgZi5sb2FkKCk7XHJcbiAgICByZXR1cm4gZi5zdGF0dXMgPT09ICdsb2FkaW5nJztcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
