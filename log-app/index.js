(function() {
    'use strict';
    kintone.events.on('app.record.index.show', function(event) {
        // 表を表示するための場所（箱）を作る
        const header = kintone.app.getHeaderMenuSpaceElement();
        const displayDiv = document.createElement('div');
        displayDiv.id = 'tabulator-table';
        header.appendChild(displayDiv);

        // テスト用のデータ
        const tableData = [
            {id:1, name:"テストスタッフ", role:"エンジニア"},
            {id:2, name:"あなたの名前", role:"管理者"}
        ];

        // Tabulatorを起動！
        new Tabulator("#tabulator-table", {
            data: tableData, // データをセット
            layout: "fitColumns", // 横幅いっぱいに広げる
            columns: [ // 列の設定
                {title:"ID", field:"id"},
                {title:"名前", field:"name"},
                {title:"役職", field:"role"},
            ],
        });

        return event;
    });
})();
