function OpenNav() {
  document.getElementById("Nav").style.width = "100%";
}
function CloseNav() {
  document.getElementById("Nav").style.width = "0";
}
// url
function url() {
  location.href = "https://www.hay88.one/?inviteCode=1086325";
}
const headerr = document.querySelector("#headerr");
function headed() {
  const headContentt = document.createElement("div");
  headContentt.innerHTML = `
        <div class="max-w-6xl m-auto  md:px-2 md:py-1.5">
                <div class="flex flex-col md:flex-row justify-center md:justify-between items-center text-white relative">
                    <!-- open nav -->
                    <div class="menu-icon absolute left-3 top-7 md:hidden text-2xl text-gray-50" onclick="OpenNav()">
                        <ion-icon name="menu"></ion-icon>
                    </div>
                    <!-- logo -->
                    <div class="logo max-w-[268px] cursor-pointer py-3">
                        <a href="/index.html"><img src="/image/logo.png"></a>
                    </div>
                    <!-- navigation screen -->
                    <nav id="Nav" class="z-40  fixed top-0 left-0 w-0 md:w-auto h-full overflow-x-hidden md:relative md:h-auto duration-300">
                    <div class="md:hidden flex justify-end text-3xl text-white p-2 font-bold w-full h-full  opacity-80">
                        <ion-icon onclick="CloseNav()" name="close"></ion-icon>
                    </div>
                    <div class="h-full opacity-100 md:relative absolute top-0 flex flex-col bg-gray-50 md:bg-transparent">
                        <!-- search -->
                        <div class="mt-10 md:hidden p-4 border-b">
                            <div class="flex justify-center items-center">
                                <input type="search" class="p-2 focus:outline-none w-56 font-normal shadow-inner border text-gray-800" placeholder="search ..." required />
                                <button class="bg-orange-400 text-white py-2 px-2 rounded">
                                    <ion-icon name="search" class="text-2xl flex justify-center items-center"></ion-icon>
                                </button>
                            </div>
                        </div>
                        <!-- menu item -->
                        <div class="max-w-6xl text-gray-500 pl-5 md:text-white text-sm font-[600] tracking-wider md:m-auto cursor-pointer">
                            <ul class="flex-col flex md:flex-row gap-5 md:border-none">
                                <li><a href=""><ion-icon class="text-[20px] hidden md:block " name="search-outline"></ion-icon></a></li>
                                <li><a href="/index.html">TRANG CHỦ</a></li>
                                <li><a href="../Dangky/Dangky.html">ĐĂNG KÝ</a></li>
                                <li><a href="../Ruttien/Ruttien.html">RÚT TIỀN</a></li>
                                <li><a href="../khuyenmai/khuyenmai.html">KHUYẾN MÃI</a></li>
                            </ul>
                        </div>
                        <div class=" mt-5 pl-5 md:hidden ">
                            <ul class="text-[#555]">
                                <li><a href="" class="flex items-center gap-2" ><ion-icon class="text-[20px] " name="mail-outline"></ion-icon>NEWSLETTER</a></li>
                                <li  class="flex gap-4 *:text-[20px] mt-2">
                                    <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
                                    <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
                                    <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
                                    <a href=""><ion-icon name="mail-outline"></ion-icon></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                    <!-- sign in -->
                    <div class=" md:bg-transparent w-full md:w-auto bg-gray-600 md:block *:w-28 flex gap-1 py-1.5 justify-center items-center text-[15px] font-[500] tracking-wide *:md:py-1.5 *:py-1 *:rounded-2xl *:duration-300 *:border *:border-gray-400">
                        <button onclick="url()" class="bg-[#364D6A] hover:bg-blue-600">Đăng Ký</button>
                        <button onclick="url()" class="bg-[#7E9467] hover:bg-green-600">Đặng Nhập</button>
                    </div>
                </div>
                
            </div>`;

  headerr.appendChild(headContentt);
}
headed();
const footer1 = document.querySelector("#footer1");
function footerItem1() {
  const footerContentt = document.createElement("div");
  footerContentt.innerHTML = `
        <div class="bg-[#CC6C18] pt-10 *:text-white ">
            <div class="max-w-6xl m-auto px-6 md:px-0 grid-cols-2 grid flex justify-around md:grid-cols-4">
                <div>
                    <div class="pb-5">
                        <img src="/image/logo.png">
                    </div>
                    <p><strong>Rubik88</strong>  - Thương hiệu đẳng cấp tận tâm với người chơi, chúng tôi khẳng định website Rubik88 sẽ là một trong những nhà cái đứng top đầu trong tương lai  gần.</p>
                    <div class="py-5 *:p-2 *:rounded-3xl *:border *:text-white">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <img class="w-[250px]" src="/image/logo1.jpg" alt="">
                </div>
                <div class="px-4"> 
                    <h3 class="text-[15px] font-bold border-b">THÔNG TIN CHÍNH</h3>
                    <ul class="pt-10 *:py-1.5 *:border-b *:cursor-pointer">
                        <li><a href="/index.html">LIÊN HỆ</a></li>
                        <li><a href="/index.html">CHÍNH SÁCH BẢO MẬT</a></li>
                        <li><a href="/index.html">ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</a></li>
                        <li><a href="/index.html">KHUYỄN MÃI</a></li>
                        <li><a href="/index.html">CHƠI CÓ TRÁCH NHIỆM</a></li>
                    </ul>
                </div>
                <div class="px-4">
                    <h3 class="text-[15px] font-bold border-b mt-5 md:mt-0">GAME HOT</h3>
                    <ul class="pt-10 *:py-1.5 *:border-b *:cursor-pointer">
                        <li><a href="/index.html">THỂ THAO</a></li>
                        <li><a href="/index.html">NỔ HŨ</a></li>
                        <li><a href="/index.html">BẮN CÁ</a></li>
                        <li><a href="/index.html">CASINO</a></li>
                        <li><a href="/index.html">XỔ SỐ</a></li>
                        <li><a href="/index.html">GAME BÀI</a></li>
                    </ul>
                </div>
                <div class="px-4">
                    <h3 class="text-[20px] font-bold border-b mt-5 md:mt-0">GAME HOT</h3>
                    <p class="pt-10 mb-3">Địa chỉ: 58 Phố Khương Trung, Khương Trung, Thanh Xuân, Hà Nội</p>
                    <p>Website: rubik88.cc</p>
                </div>
            </div>
        </div>
        <div class="bg-gray-600 text-center text-[#ffffff80] py-3">
            <p>Copyright 2024 <strong> © Nhà cái Rubik88</strong></p>
        </div>`;

  footer1.appendChild(footerContentt);
}

footerItem1();
