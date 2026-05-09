(function() {
    'use strict';
    // 一覧画面が表示された時に動く
    kintone.events.on('app.record.index.show', function(event) {
        // 画面の一番上にメッセージを出す
        const header = kintone.app.getHeaderMenuSpaceElement();
        header.innerHTML = '<h1 style="padding:10px; background:#f4f4f4;">Tabulator準備完了！</h1>';
        
        console.log("kintoneとGitHubが繋がりました！");
        return event;
    });
})();
