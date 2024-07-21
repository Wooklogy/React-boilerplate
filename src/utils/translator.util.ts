//** 사이즈 단위로 변경*/
const translatePxValue = (val: string | number | undefined) => {
  if (val === undefined || val === null) return;
  const result = typeof val === "number" ? `${val}px` : val;
  return result;
};
//** 사이즈 weight로 변경*/
const translateWeightValue = (val: string | number | undefined) => {
  if (val === undefined || val === null) return;
  if (typeof val === "number") {
    return val;
  } else {
    switch (String(val).toLowerCase()) {
      case "thin":
        return 100;
      case "light":
        return 300;
      case "regular":
        return 400;
      case "medium":
        return 500;
      case "bold":
        return 700;
      case "black":
        return 900;
    }
  }
};

// no번호 계산기
const OperatorNo = (index: number, page: number, size: number) => {
  return index + (page - 1) * size + 1;
};
// 폰넘버 생성기
function formatPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
}

const UTIL_TRANSLATOR = {
  formatPhoneNumber,
  OperatorNo,
  translateWeightValue,
  translatePxValue,
};
export default UTIL_TRANSLATOR;
