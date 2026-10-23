// Live listing: set the Drive folder ID and a Google Drive API key (restricted to
// this site's domain, Drive API only). The folder must be shared "Anyone with the link".
// While either is empty, the static list below is used instead.
const DRIVE_FOLDER_ID = "";
const DRIVE_API_KEY = "";

// Fallback videos in display order (sorted by the 01-25 number prefix in the file name).
// Each file must be shared as "Anyone with the link - Viewer".
const VIDEOS = [
  { id: "1Kh5mNjwe7rr551qt1JYDmkYhzBzua8UP", title: "01 Krishna" },
  { id: "1RUlAJZfFnuwp8OrvSFjwC3-Cn2YUHwNP", title: "02 Dr Vivan Panchal" },
  { id: "1vDWcOlVEvhkEDaiz6w3j1nRfaIHjEkV0", title: "03 Bhartmanat Army" },
  { id: "1JYPzKq3hQLDS8jv2ww61w198l1tQU37e", title: "03 Bhartmanat Army 2" },
  { id: "1byTO9l_pCcvK18tldtFjh6SjuIg5aC6L", title: "04 Krishana" },
  { id: "1OOSdk9xTx6vsnZChUTNalKV82fuzkbYG", title: "05 Ram Lakshman" },
  { id: "1YeP7COd2r4CCkJZOElJEMVYva7mSqBco", title: "06 Khedut Rudra" },
  { id: "15dbnvh687De7-ik3WURsdkHOIpLa27WL", title: "07 Khodira Anjali" },
  { id: "1t2F8IMlnjDXglm1qwMpHQiIuk9n83Rdp", title: "08 Yoga Teacher Mohi" },
  { id: "18tiLZjgeCmiHCMbvuYs_9s1XqtkkmeOq", title: "09 Gangubai Dimple" },
  { id: "1yb7RTHJ0ACx363ObiKBNjSs6l6nizsLY", title: "10 Radhe Krisha" },
  { id: "1ZxvBmXQOKg-ZBBsV4CttrpGTAOIm4WKq", title: "11 Gamda ni Gori Bhumi 1" },
  { id: "1hXBBXsMzmUNUpfBgpQ3avYZzRCq1_dJX", title: "11 Gamda ni Gori Bhumi 2" },
  { id: "1yyN6gidQuVPF5e_DMaK37JaISlZsm0zG", title: "12 Rajasthani Ullashben 1" },
  { id: "1wxQRI2PQAT1XL3ZI-HF-HF64nc9KdjsY", title: "12 Rajasthani Ullashben 2" },
  { id: "1E1we7CIQPz2ZyaApxD_GBaOglxxE_Kbw", title: "13 Bhoot Megh" },
  { id: "1JWanilpSkMy32LniV7uyXutGn64zwSSK", title: "14 Kantara Akshitaben" },
  { id: "1ONrMxksP3u9fjl52XAQ4W0seaRZkg2tH", title: "15 Chhota Pandit" },
  { id: "1KDqZ8UH-uilsWjjZyZVkXo8ygVOJ9L7i", title: "16 Doremon Divya Deep Vyom" },
  { id: "1W1it3a-HL4OiL0g2UpypS-jujCZwF-Ov", title: "17 Su thayu?" },
  { id: "1-d8qByQ-4wxFM6rcve8vxLF4LmwHPU8N", title: "18 Marathi Sanstruti" },
  { id: "18zLRpO-vZ-oHc2K-tFRrqZl2chB7GJi3", title: "19 Bhakti madar Lila baa Kanta baa" },
  { id: "1tQ0BOtFGJXHqQ7zLDHybNaG5Ru2YsErr", title: "20 Bankaaa Gang" },
  { id: "10YbmBIDTyBwNiDjjevAtDE46q0j1ZCXm", title: "21 Baburao Ganpatrao" },
  { id: "15MBqb5NY_vpQ2Sy6OiqUHplCCudDzdS9", title: "22 Gamdani Parampara 1" },
  { id: "1jjnqdfTlulSHSDP0yu-QsOE0tDT-PxCn", title: "22 Gamdani Parampara 2" },
  { id: "17DfNH8xnaiXb0gwAX1IUQQp_JlHChcxl", title: "23 Mummy Bhoot" },
  { id: "1i5Hg5O8A672uK7vqO9CBTDzzxLP7MP1h", title: "24 Dhurandhar" },
  { id: "1PnF96L8-Z2mIqlqJnx2RXKAUUJDcTWL1", title: "25 Garba Lastma" },
];
