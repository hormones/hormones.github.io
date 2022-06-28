console.log("title: ", document.title);

// 时间控制每隔500毫秒检查当前页面高度以及滚动高度
// window.setInterval(function reinitIframe() {
//     let iframes = document.getElementsByClassName("iframe");
//     for (let i = 0; i < iframes.length; i++) {
//         const iframe = iframes[i];
//         try {
//             //bHeight 和 dHeight 如果相等，用其一等于iframe.height 即可
//             // var bHeight = iframe.contentWindow.document.body.scrollHeight;
//             var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
//             // var height = Math.max(bHeight, dHeight);
//             iframe.height = dHeight;
//         } catch (ex) { }
//     }
// }, 500);

function onLoadIframe(iframe) {
    iframe.height = iframe.contentWindow.document.documentElement.scrollHeight;
}
