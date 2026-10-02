let currentError = "";
let iserrorValid = false;
let totalRevenue = 0;
let totalerrorments = 0;

let isRunning = true; 

while (true) {
    console.log("=====================================================");
    console.log("HỆ THỐNG TUYEN SINH BRIGHTWAY ENGLISH ");
    console.log("=====================================================");
    console.log("1. Nhập và kiểm tra mã đăng ký ");
    console.log("2. Tính học phí khóa học ");
    console.log("3. Thẩm định số báo danh may mắn ");
    console.log("0. Thoát chương trình");
    console.log("=====================================================");


    let choiceInput = prompt(menuPrompt);
    if (choiceInput===null ){
        choiceInput = "" ;
    }
    let choice = choiceInput.trim(); 

    switch (choice) {
        case "1": {
        currentErrorcode = "";
        iserrorValid = false;

        let rawCode = prompt("Nhập mã đăng ký (VD: BW123456):");
        if (rawCode === null) {
            rawCode = "";
        } 
    }

        case "2": { 
            if (!iserrorValid) {
                console.log("Vui lòng nhập mã đăng ký hợp lệ trước khi tính học phí.");
                break;
            }
            let courseCount = null ; 
            while (true) {
                let courseCountInput = prompt("Nhập số lượng khóa học (1-5):");
                if (courseCountInput === null) {
                    courseCountInput = "";
                }
                courseCount = parseInt(courseCountInput);
                if (courseCount >= 1 && courseCount <= 5) {
                    break;
                } else {
                    console.log("Số lượng khóa học không hợp lệ. Vui lòng nhập lại.");
                }
            }
        }
    

        case "3": {
            if (!iserrorValid) {
                console.log("Vui lòng nhập mã đăng ký hợp lệ trước khi thẩm định số báo danh may mắn.");
                break;
            }

}
 case "0": {
                console.log("thoat chuong trinh !");
                isRunning = false;
                break;
            }
            default: {
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
            }
}
}

