import type { NavbarConfig } from '@vuepress/theme-default'

export const vi: NavbarConfig = [
  {
    text: 'Nhập Môn',
    children: [
      {
        text: 'Lý thuyết',
        children: [
          '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/',
          '/nhapmon/CT172-Toan_roi_rac/',
          '/nhapmon/CT190-Nhap_mon_tri_tue_nhan_tao/',
          '/nhapmon/CT173-Kien_truc_may_tinh/',
          '/nhapmon/CT112-Mang_may_tinh/',
        ],
      },
      {
        text: 'Thực hành',
        children: [
          '/nhapmon/CT101-Lap_Trinh_Can_Ban_A/',
          '/nhapmon/CT188-Nhap_mon_lap_trinh_web/',
        ],
      },
    ],
  },
  {
    text: 'Cơ Sở Ngành',
    children: [
      {
        text: 'Lý thuyết',
        children: [
          '/cosonganh/CT178-Nguyen_ly_he_dieu_hanh/',
          '/cosonganh/CT179-Quan_tri_he_thong/',
          '/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/',
        ],
      },
      {
        text: 'Lập trình',
        children: [
          '/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/',
          '/cosonganh/CT175-Ly_thuyet_do_thi/',
          '/cosonganh/CT176-Lap_trinh_huong_doi_tuong/',
          '/cosonganh/CT177-Cau_truc_du_lieu/',
          '/cosonganh/CT180-Co_so_du_lieu/',
          '/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/',
        ],
      },
    ],
  },
  {
    text: 'Chuyên Ngành',
    children: [
      '/chuyennganh/CT222-An_toan_he_thong/',
      '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/',
      '/chuyennganh/CT273-Giao_dien_nguoi_may/',
      '/chuyennganh/CT275-Cong_nghe_web/',
      '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/',
      '/chuyennganh/CT294-May_hoc_ung_dung/',
      '/chuyennganh/CT467-Quan_tri_du_lieu/',
    ],
  },
  {
    text: `Đồ Án Ngành`,
    children: [
      '/doannganh/CT271-Nien_luan_co_so_CNTT/',
      '/doannganh/CT300-Phat_trien_phan_mem/',
      '/doannganh/CT446-Nien_luan_CNTT/',
      '/doannganh/CT449-Phat_trien_ung_dung_web/',
      '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/',
      '/doannganh/CT550-Luan_van_tot_nghiep/',
    ],
  },
  {
    text: 'Donate',
    children: [
      {
        text: 'PayPal',
        link: 'https://paypal.me/zenfection',
      },
    ]
  },
]
