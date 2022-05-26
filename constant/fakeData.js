const dataSlider = [
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887",
  "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
  "https://images.unsplash.com/photo-1570222094114-d054a817e56b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=905",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935",
  "https://images.unsplash.com/photo-1622434641406-a158123450f9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1904",
];

const pcProduct = [
  {
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842",
    name: "Pc Gaming Fullset",
    isPromo: true,
    promotion: 20,
    pricing: 45000000,
    stock: 10,
  },
  {
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465",
    name: "Mouse Black Color Seri A",
    isPromo: false,
    promotion: 0,
    pricing: 120000,
    stock: 3,
  },
  {
    image:
      "https://images.unsplash.com/photo-1616323691656-7c948357b157?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    name: "USB Samsung Gray",
    isPromo: true,
    promotion: 10,
    pricing: 65000,
    stock: 19,
  },
  {
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865",
    name: "Keyboard Gaming",
    isPromo: true,
    promotion: 50,
    pricing: 500000,
    stock: 1,
  },
];

const peralatanRumahTangga = [
  {
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=426",
    name: "Kulkas Kaca Transparan",
    isPromo: false,
    promotion: 0,
    pricing: 4500000,
    stock: 11,
  },
  {
    image:
      "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580",
    name: "Panci Kukus",
    isPromo: false,
    promotion: 0,
    pricing: 250000,
    stock: 6,
  },
  {
    image:
      "https://images.unsplash.com/photo-1622059558435-5a09bcfb83a7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
    name: "Telenan Kayu",
    isPromo: false,
    promotion: 0,
    pricing: 50000,
    stock: 23,
  },
  {
    image:
      "https://images.unsplash.com/photo-1578845425669-b6562f83b11e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    name: "Kompor Listrik 4 Tungku",
    isPromo: false,
    promotion: 0,
    pricing: 6500000,
    stock: 10,
  },
];

const services = [
  {
    icon: <i className="bx bxs-wallet-alt"></i>,
    name: "Pembayaran Mudah",
    desc: "Kami telah melakukan kerjasama ke beberapa perusahaan pembayaran baik offline maupun online, sehingga memuat pembayaran menjadi lebih mudah dan cepat",
  },
  {
    icon: <i className="bx bx-archive"></i>,
    name: "Produk Terlengkap",
    desc: "Kami sudah menyediakan banyak ketegori produk seperti pakaian, peralatan rumah tangga, elektronik, dan masih banyak lainnya",
  },
  {
    icon: <i className="bx bx-navigation"></i>,
    name: "24 Jam",
    desc: "CS kami akan membalas semua pertanyaan dengan cepat dan tepat, sehingga akan membudahkan jika ingin berkonsultasi dan ingin bertanya seputar produk",
  },
  {
    icon: <i className="bx bx-trip"></i>,
    name: "Pengantaran Cepat",
    desc: "Kami telah melakukan kerjasama dengan berbagai perusahaan jasa pengantaran sehingga kami memiliki banyak pilihan untuk melakukan pengiriman",
  },
];

const socialMedia = [
  {
    icons: <i className="bx bxl-facebook"></i>,
    path: "#",
  },
  {
    icons: <i className="bx bxl-instagram"></i>,
    path: "#",
  },
  {
    icons: <i className="bx bxl-tiktok"></i>,
    path: "#",
  },
  {
    icons: <i className="bx bxl-linkedin"></i>,
    path: "#",
  },
];

const payment = [
  "allo-bank.png",
  "bni.png",
  "bri.png",
  "bsi.png",
  "dana.png",
  "linkaja.png",
  "ovo.png",
  "paypal.png",
  "shopee-pay.png",
];

const categories = [
  {
    name: "Pakaian",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772",
  },
  {
    name: "Elektronik",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
  },
  {
    name: "Peralatan Dapur",
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
  },
  {
    name: "Pakaian",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772",
  },
  {
    name: "Elektronik",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
  },
  {
    name: "Peralatan Dapur",
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
  },
  {
    name: "Pakaian",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772",
  },
  {
    name: "Elektronik",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
  },
  {
    name: "Peralatan Dapur",
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
  },
];

export {
  dataSlider,
  pcProduct,
  services,
  peralatanRumahTangga,
  socialMedia,
  payment,
  categories,
};
