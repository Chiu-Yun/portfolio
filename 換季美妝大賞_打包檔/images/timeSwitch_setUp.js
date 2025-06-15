// 設定檔
window.onload = () => {

    let tsObj1 = new timeSwitchObj(".D01", {
        debug: false,
        docCondition: docCondition,
        mode: "show", // show/hide/addClass
        isMultiTime: true,
        startTimeAry: [
            "2023/1/1 00:00:00",
        ], // 多時段
        endTimeAry: [
            "2023/9/8 23:59:59",
        ],
    });

    let tsObj2 = new timeSwitchObj(".D02", {
        debug: false,
        docCondition: docCondition,
        mode: "show", // show/hide/addClass
        isMultiTime: true,
        startTimeAry: [
            "2023/9/9 00:00:00",
        ], // 多時段
        endTimeAry: [
            "2023/9/12 23:59:59",
        ],
    });
	

};



