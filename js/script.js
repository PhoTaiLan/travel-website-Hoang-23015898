function chonTour(tenTour) {
    const messageArea = document.getElementById('status-message');
    if (messageArea) {
        messageArea.innerText = "Bạn đã chọn tour: " + tenTour;
    } else {
        alert("Bạn đã chọn tour: " + tenTour);
    }
}
function kiemTraDatTour(event) {
    event.preventDefault();

    const hoTen = document.getElementById('hoTen').value.trim();
    const sdt = document.getElementById('sdt').value.trim();
    const email = document.getElementById('email').value.trim();
    const diemDen = document.getElementById('diemDen').value;
    const ngayDi = document.getElementById('ngayDi').value;
    const soNguoi = document.getElementById('soNguoi').value;

    if (!hoTen) return alert("Họ tên không được để trống!");
    if (!sdt) return alert("Số điện thoại không được để trống!");
    if (!email) return alert("Email không được để trống!");
    if (!diemDen) return alert("Vui lòng chọn điểm đến!");
    if (!ngayDi) return alert("Ngày đi không được để trống!");
    if (soNguoi <= 0) return alert("Số người phải lớn hơn 0!");

    alert("Đặt tour thành công!");
}