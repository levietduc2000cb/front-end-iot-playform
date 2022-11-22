import React from 'react';
import { MdDevicesOther } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

import BackGroundIcon from '~/assets/image/image_icon_home_page.png';

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 p-4 bg-[#faf9f9]">
        <div className=" bg-blue-800 text-white h-20 rounded-md border-[3px] border-solid border-blue-800 hover:border-blue-800">
          <div className="text-sm font-bold text-center leading-7">
            Total Devices
          </div>
          <div className="text-2xl font-bold flex justify-center items-center leading-8">
            <span className="w-10 h-8 flex justify-center items-center">
              <MdDevicesOther />
            </span>
            <span>20</span>
          </div>
        </div>
        <div className="bg-white h-20 rounded-md border-[3px] border-solid boder-[#ABADB0] hover:border-blue-800">
          <div className="text-sm font-bold text-center leading-7">
            Total Users
          </div>
          <div className="text-2xl font-bold flex justify-center items-center leading-8">
            <span className="w-10 h-8 flex justify-center items-center">
              <FaUsers />
            </span>
            <span>20</span>
          </div>
        </div>
      </div>
      <div className="bg-[#EEEEEE]">
        <div className="ml-4 bg-white pb-8 pr-4">
          <div className="flex items-center ml-8 my-8">
            <img src={BackGroundIcon} alt="" className="w-20 h-20"></img>
            <h2 className="text-4xl font-bold text-[#132533]">
              Bắt đầu với TLU.io
            </h2>
          </div>
          <p className="ml-8 text-justify tracking-wider">
            Chào Minh!
            <br />
            <br />
            Cảm ơn bạn đã quan tâm đến Nền tảng IoT mã nguồn mở TLU.io và bản
            demo trực tiếp của chúng tôi. Hiện tại bạn đang duyệt một bảng điều
            khiển đặc biệt có tên "Trang chủ". Chúng tôi đã chuẩn bị trang tổng
            quan này để minh họa một số trường hợp sử dụng được liệt kê bên
            dưới. Trên đầu trang tổng quan, bạn có thể tìm thấy một số thẻ. Nhấp
            vào một trong các thẻ để xem danh sách các thiết bị tương ứng. Nhấp
            vào biểu tượng chuông để xem danh sách các báo động thuộc về các
            thiết bị đó. Bạn luôn có thể thay đổi nội dung của trang tổng quan
            này bằng hướng dẫn này. Bạn cũng có thể thay đổi trang tổng quan
            chính cho người dùng của mình trong hồ sơ.
            <br />
            <br />
            Nhưng trước tiên, chúng tôi khuyên bạn nên làm theo hướng dẫn bắt
            đầu. Ở đó, bạn sẽ tìm hiểu những điều cơ bản về cách kết nối thiết
            bị, định cấu hình quy tắc cảnh báo, cung cấp bảng điều khiển và chỉ
            định chúng cho khách hàng của bạn. Sử dụng kiến ​​thức từ hướng dẫn
            bắt đầu, việc áp dụng các trường hợp sử dụng đó theo nhu cầu của bạn
            sẽ dễ dàng hơn nhiều.
          </p>
          <div className="ml-8 mt-14">
            <h4 className="text-2xl font-bold mb-12">Kiểm soát môi trường</h4>
            <div className="flex">
              <div className="w-1/2 pr-4">
                <img
                  src="https://thingsboard.io/images/demo/data/temperature-sensors.png"
                  alt="image_introduce"
                ></img>
              </div>
              <div className="w-1/2 leading-6 text-justify tracking-wider">
                <p>
                  Trường hợp sử dụng giám sát môi trường cơ bản trực quan hóa
                  các cảm biến trên bản đồ và sử dụng bảng. Cho phép bạn cung
                  cấp các cảm biến mới và chỉ định chúng cho khách hàng. Cho
                  phép người dùng tùy chỉnh định cấu hình ngưỡng cảnh báo cho
                  từng cảm biến và quản lý cảnh báo. Sử dụng điều này làm mẫu
                  cho các dự án giám sát môi trường ngoài trời.
                  <br />
                  <br /> Trường hợp sử dụng giới thiệu một số khái niệm
                  ThingsBoard: thiết bị, cấu hình thiết bị, bảng điều khiển
                  nhiều lớp và hành động của tiện ích con. Bảng điều khiển "Giám
                  sát môi trường" chứa các ví dụ hữu ích về hành động tùy chỉnh
                  để quản lý thiết bị và thuộc tính của chúng thông qua giao
                  diện người dùng Bảng điều khiển.
                </p>
                <button className="w-28 h-9 bg-[#132533] text-white rounded font-semibold mt-9">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="ml-8 mt-14">
            <h4 className="text-2xl font-bold mb-12">Kiểm soát môi trường</h4>
            <div className="flex flex-row-reverse">
              <div className="w-1/2 pr-4">
                <img
                  src="https://thingsboard.io/images/demo/data/temperature-sensors.png"
                  alt="image_introduce"
                ></img>
              </div>
              <div className="w-1/2 leading-6 text-justify tracking-wider">
                <p>
                  Trường hợp sử dụng giám sát môi trường cơ bản trực quan hóa
                  các cảm biến trên bản đồ và sử dụng bảng. Cho phép bạn cung
                  cấp các cảm biến mới và chỉ định chúng cho khách hàng. Cho
                  phép người dùng tùy chỉnh định cấu hình ngưỡng cảnh báo cho
                  từng cảm biến và quản lý cảnh báo. Sử dụng điều này làm mẫu
                  cho các dự án giám sát môi trường ngoài trời.
                  <br />
                  <br /> Trường hợp sử dụng giới thiệu một số khái niệm
                  ThingsBoard: thiết bị, cấu hình thiết bị, bảng điều khiển
                  nhiều lớp và hành động của tiện ích con. Bảng điều khiển "Giám
                  sát môi trường" chứa các ví dụ hữu ích về hành động tùy chỉnh
                  để quản lý thiết bị và thuộc tính của chúng thông qua giao
                  diện người dùng Bảng điều khiển.
                </p>
                <button className="w-28 h-9 bg-[#132533] text-white rounded font-semibold mt-9">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
