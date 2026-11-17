'use strict';
/* =====================================================================
 * Baht-Kyat Exchange — front-end application (no build step).
 *
 * ALL Burmese UI strings live in the STRINGS object below so they can be
 * reviewed in one place. Myanmar Unicode only — never Zawgyi. Do not
 * "fix" working Burmese text; verify codepoints against a trusted source
 * before changing any string here.
 *
 * User-supplied content is NEVER injected via innerHTML unescaped: every
 * interpolated value from the database or user input goes through esc().
 * ===================================================================== */

/* ---------------- ALL Burmese UI strings ---------------- */
var STRINGS = {
  appName: 'ဘတ်-ကျပ် ငွေလဲ',

  demoBanner: 'ဒီမိုမုဒ် — ဒေတာဘေ့စ် မချိတ်ရသေးပါ။ စမ်းသပ်ဒေတာသာ ပြနေသည်။',
  navHome: 'ပင်မ',
  navDashboard: 'ဒက်ရှ်ဘုတ်',
  navOrders: 'အော်ဒါများ',
  navNewOrder: 'အော်ဒါအသစ်',
  navProfile: 'ပရိုဖိုင်',
  navAdmin: 'အက်ဒမင်',

  loginTitle: 'ဝင်ရောက်ရန်',
  registerTitle: 'အကောင့်ဖွင့်ရန်',
  email: 'အီးမေးလ်',
  password: 'စကားဝှက်',
  passwordPh: 'အနည်းဆုံး ၆ လုံး',
  displayName: 'အမည်',
  displayNamePh: 'သင့်အမည်',
  phone: 'ဖုန်းနံပါတ်',
  loginBtn: 'ဝင်ရောက်မည်',
  registerBtn: 'အကောင့်ဖွင့်မည်',
  noAccount: 'အကောင့် မရှိသေးဘူးလား။',
  haveAccount: 'အကောင့် ရှိပြီးသားလား။',
  goRegister: 'အကောင့်ဖွင့်ရန်',
  goLogin: 'ဝင်ရောက်ရန်',
  demoLoginBtn: 'ဒီမိုအက်ဒမင်အဖြစ် ဝင်ရန်',
  demoLoginHint: 'ဒီမို — admin@demo.local / demo1234',
  demoUserBtn: 'ဒီမိုအသုံးပြုသူအဖြစ် ဝင်ရန်',
  demoUserHint: 'ဒီမို — demo1@demo.local / demo1234',
  forgotPassword: 'စကားဝှက် မေ့သွားလား။',
  resetTitle: 'စကားဝှက် ပြန်လည်ရယူရန်',
  resetBtn: 'ပြန်လည်ရယူရန် လင့်ခ် ပို့မည်',
  resetSent: 'အီးမေးလ် ပို့လိုက်ပါပြီ။ အီးမေးလ်ပုံးကို စစ်ပါ။',
  resetHintDemo: 'ဒီမိုမုဒ်တွင် စကားဝှက် ပြန်လည်ရယူခြင်း မရပါ။',
  logout: 'ထွက်ရန်',
  loginFailed: 'အီးမေးလ် သို့မဟုတ် စကားဝှက် မှားနေသည်။',
  blockedMsg: 'သင့်အကောင့်ကို ပိတ်ထားသည်။ ဆိုင်ကို ဆက်သွယ်ပါ။',
  emailInUse: 'ဒီအီးမေးလ်ဖြင့် အကောင့် ဖွင့်ပြီးသားဖြစ်သည်။',
  fillAll: 'လိုအပ်တဲ့ အကွက်အားလုံး ဖြည့်ပါ။',
  passwordShort: 'စကားဝှက်သည် အနည်းဆုံး ၆ လုံး ရှိရမည်။',
  confirmEmailMsg: 'အကောင့် ဖွင့်ပြီးပါပြီ။ အီးမေးလ်ပုံးတွင် အတည်ပြုလင့်ခ်ကို စစ်ပါ။',
  welcomeBack: 'ပြန်လည် ကြိုဆိုပါတယ်။',
  accountCreated: 'အကောင့် ဖွင့်ပြီးပါပြီ။',

  rateTitle: 'ယနေ့ ဈေးနှုန်း',
  rateLineThb: '၁ ဘတ် = {rate} ကျပ်',
  rateLineMmk: '၁ ဘတ် ရရန် = {rate} ကျပ်',
  rateDirThb: 'ဘတ် → ကျပ်',
  rateDirMmk: 'ကျပ် → ဘတ်',
  lastUpdated: 'နောက်ဆုံး အပ်ဒိတ်',
  calcTitle: 'ငွေလဲ တွက်စက်',
  youSend: 'သင် ပေးမယ့် ပမာဏ',
  youReceive: 'သင် ရမယ့် ပမာဏ',
  fee: 'ဝန်ဆောင်ခ',
  netReceive: 'အသားတင် ရမယ့်ပမာဏ',
  rateUsed: 'သုံးတဲ့ ဈေးနှုန်း',
  directionThbToMmk: 'ဘတ် ပေး → ကျပ် ယူ',
  directionMmkToThb: 'ကျပ် ပေး → ဘတ် ယူ',
  thb: 'ဘတ်',
  mmk: 'ကျပ်',
  howTitle: 'ဘယ်လို လဲရမလဲ။',
  step1Title: 'အော်ဒါ တင်ပါ',
  step1Text: 'ပမာဏနဲ့ လက်ခံမယ့်သူ အချက်အလက် ဖြည့်ပါ။',
  step2Title: 'ငွေ လွှဲပြီး slip တင်ပါ',
  step2Text: 'ဆိုင်ရဲ့ အကောင့်ကို ငွေလွှဲပြီး slip ပုံ တင်ပါ။',
  step3Title: 'ငွေ လက်ခံရရှိပါ',
  step3Text: 'အက်ဒမင် စစ်ဆေးပြီးရင် ငွေ လွှဲပေးပါမည်။',
  shopOpen: 'ဆိုင်ဖွင့်ထားသည်',
  shopClosed: 'ဆိုင် ပိတ်ထားသည်',
  openHours: 'ဖွင့်ချိန်',
  contactUs: 'ဆက်သွယ်ရန်',
  orderNow: 'အခု အော်ဒါ တင်မည်',
  loginToOrder: 'အော်ဒါတင်ရန် ဝင်ရောက်ပါ',
  ratesNote: 'ဈေးနှုန်းကို အက်ဒမင်က လက်ဖြင့် သတ်မှတ်သည်။ အော်ဒါတင်ချိန်က ဈေးနှုန်းအတိုင်း အတည်ဖြစ်သည်။',

  dashboardTitle: 'ဒက်ရှ်ဘုတ်',
  statCompleted: 'ပြီးမြောက်တဲ့ အော်ဒါ',
  statPending: 'စောင့်နေတဲ့ အော်ဒါ',
  statTotalOrders: 'စုစုပေါင်း အော်ဒါ',
  recentOrders: 'နောက်ဆုံး အော်ဒါများ',
  viewAll: 'အားလုံး ကြည့်ရန်',
  noOrders: 'အော်ဒါ မရှိသေးပါ။',
  hello: 'မင်္ဂလာပါ',

  ordersTitle: 'အော်ဒါများ',
  filterAll: 'အားလုံး',
  statusPending: 'စောင့်နေသည်',
  statusReviewing: 'စစ်ဆေးနေသည်',
  statusCompleted: 'ပြီးမြောက်သည်',
  statusRejected: 'ပယ်ချခဲ့သည်',
  statusCancelled: 'ဖျက်သိမ်းခဲ့သည်',
  searchPh: 'အော်ဒါနံပါတ် ရှာရန်…',

  date: 'ရက်စွဲ',
  sendAmount: 'ပေးမယ့် ပမာဏ',
  receiveAmount: 'ရမယ့် ပမာဏ',
  rate: 'ဈေးနှုန်း',
  receiveMethod: 'လက်ခံမယ့် နည်း',
  receiver: 'လက်ခံသူ',
  receiverName: 'လက်ခံသူ အမည်',
  receiverAccount: 'လက်ခံသူ အကောင့် / ဖုန်း',
  receiverPhone: 'လက်ခံသူ ဖုန်း',
  slip: 'Slip ပုံ',
  slipTxn: 'Transaction ID',
  noSlip: 'Slip ပုံ မရှိပါ။',
  proof: 'လွှဲပြီးကြောင်း အထောက်အထား',
  noProof: 'အထောက်အထား မရှိသေးပါ။',
  adminNote: 'အက်ဒမင် မှတ်ချက်',
  cancelOrder: 'အော်ဒါ ဖျက်သိမ်းမည်',
  cancelConfirm: 'ဒီအော်ဒါကို ဖျက်သိမ်းမှာ သေချာလား။',
  cancelledOk: 'အော်ဒါကို ဖျက်သိမ်းလိုက်ပါပြီ။',
  timelineTitle: 'အခြေအနေ',
  timelineCreated: 'အော်ဒါ တင်ခဲ့သည်',
  timelineReviewing: 'စစ်ဆေးနေသည်',
  timelineCompleted: 'ပြီးမြောက်သည်',
  timelineRejected: 'ပယ်ချခဲ့သည်',
  timelineCancelled: 'ဖျက်သိမ်းခဲ့သည်',
  viewSlip: 'Slip ကြည့်ရန်',
  orderNotFound: 'အော်ဒါ မတွေ့ပါ။',
  statusLabel: 'အခြေအနေ',


  newOrderTitle: 'အော်ဒါအသစ်',
  wizardStep1: '၁။ ပမာဏ',
  wizardStep2: '၂။ ငွေလွှဲရန်',
  wizardStep3: '၃။ လက်ခံသူ + Slip',
  next: 'ရှေ့သို့',
  back: 'နောက်သို့',
  submitOrder: 'အော်ဒါ တင်မည်',
  directionLabel: 'လဲမယ့် ပုံစံ',
  minMax: 'အနည်းဆုံး {min} — အများဆုံး {max}',
  belowMin: 'အနည်းဆုံး ပမာဏထက် နည်းနေသည်။',
  aboveMax: 'အများဆုံး ပမာဏထက် များနေသည်။',
  invalidAmount: 'မှန်ကန်တဲ့ ပမာဏ ရိုက်ပါ။',
  payInstructions: 'အောက်ပါ အကောင့်ကို ငွေလွှဲပါ',

  accountName: 'အကောင့်ပိုင်ရှင် အမည်',
  accountNumber: 'အကောင့်နံပါတ်',
  copy: 'ကူးယူမည်',
  copied: 'ကူးယူပြီးပါပြီ။',
  noPayMethod: 'ငွေလွှဲရမယ့် အကောင့် မသတ်မှတ်ရသေးပါ။ ဆိုင်ကို ဆက်သွယ်ပါ။',
  methodLabel: 'နည်း',

  saveReceiver: 'ဒီလက်ခံသူကို သိမ်းထားမည်',
  savedReceivers: 'သိမ်းထားတဲ့ လက်ခံသူများ',
  useSaved: 'သုံးမည်',
  slipUpload: 'Slip ပုံ တင်ပါ',
  slipUploadHint: 'ဓာတ်ပုံကို အလိုအလျောက် ချုံ့ပါမည်။',
  slipRequired: 'Slip ပုံ တင်ရန် လိုအပ်သည်။',
  txnHint: 'Slip ပေါ်က transaction ID / reference နံပါတ်',
  confirmTitle: 'အတည်ပြုပါ',
  confirmText: 'အော်ဒါတင်ပြီးရင် ဈေးနှုန်းက အတည်ဖြစ်သည်။ ငွေလွှဲပြီးကြောင်း သေချာမှ တင်ပါ။',
  orderCreated: 'အော်ဒါ တင်ပြီးပါပြီ။',
  shopClosedWarn: 'ဆိုင်ပိတ်ထားချိန် ဖြစ်သည် — အော်ဒါကို လက်ခံထားပြီး ဖွင့်ချိန်တွင် စစ်ဆေးပါမည်။',

  profileTitle: 'ပရိုဖိုင်',
  save: 'သိမ်းမည်',
  savedOk: 'သိမ်းပြီးပါပြီ။',
  changePassword: 'စကားဝှက် ပြောင်းရန်',
  changePasswordHint: 'စကားဝှက် ပြောင်းရန် အီးမေးလ်သို့ လင့်ခ် ပို့ပါမည်။',
  changePasswordBtn: 'ပြောင်းရန် လင့်ခ် ပို့မည်',
  passwordChangeDemo: 'ဒီမိုမုဒ်တွင် စကားဝှက် ပြောင်းခြင်း မရပါ။',
  receiversTitle: 'သိမ်းထားတဲ့ လက်ခံသူများ',
  noReceivers: 'သိမ်းထားတဲ့ လက်ခံသူ မရှိသေးပါ။',
  removeReceiver: 'ဖျက်မည်',
  addReceiver: 'လက်ခံသူ အသစ် ထည့်မည်',
  emailReadonly: 'အီးမေးလ်ကို ပြောင်းလို့ မရပါ။',
  methodOther: 'အခြား',

  adminTitle: 'အက်ဒမင်',
  tabOverview: 'ခြုံငုံသုံးသပ်ချက်',
  tabOrders: 'အော်ဒါများ',
  tabRates: 'ဈေးနှုန်း',
  tabUsers: 'အသုံးပြုသူများ',
  tabSettings: 'ဆက်တင်',
  tabLedger: 'စာရင်း',
  todayVolume: 'ဒီနေ့ ပမာဏ',
  pendingCount: 'စောင့်နေတဲ့ အော်ဒါ',
  completedCount: 'ဒီနေ့ ပြီးမြောက်တာ',
  feesCollected: 'စုစုပေါင်း ဝန်ဆောင်ခ',
  recentOrdersAdmin: 'နောက်ဆုံး အော်ဒါများ',
  markReviewing: 'စစ်ဆေးနေသည်ဟု သတ်မှတ်မည်',
  completeOrder: 'ပြီးမြောက်သည်ဟု သတ်မှတ်မည်',
  rejectOrder: 'ပယ်ချမည်',

  rejectReasonPh: 'အကြောင်းရင်း ရေးပါ…',
  proofUpload: 'အထောက်အထား ပုံ တင်ပါ (မဖြစ်မနေ)',
  proofRequired: 'အထောက်အထား ပုံ တင်ရန် လိုအပ်သည်။',
  completeConfirm: 'ငွေ လွှဲပြီးမှ ပြီးမြောက်သည်ဟု သတ်မှတ်ပါ။',
  orderUpdated: 'အော်ဒါ အပ်ဒိတ် လုပ်ပြီးပါပြီ။',
  copyReceiver: 'လက်ခံသူ အချက်အလက် ကူးယူမည်',
  adminOnly: 'ဒီစာမျက်နှာကို အက်ဒမင်သာ ကြည့်လို့ ရသည်။',
  ratesTitle: 'ဈေးနှုန်း သတ်မှတ်ရန်',
  rateThbToMmkField: '၁ ဘတ် = ? ကျပ် (ဘတ် → ကျပ်)',
  rateMmkToThbField: '၁ ဘတ် ရရန် ? ကျပ် (ကျပ် → ဘတ်)',
  feePercent: 'ဝန်ဆောင်ခ (%)',
  minThb: 'အနည်းဆုံး (ဘတ်)',
  maxThb: 'အများဆုံး (ဘတ်)',
  minMmk: 'အနည်းဆုံး (ကျပ်)',
  maxMmk: 'အများဆုံး (ကျပ်)',
  saveRates: 'ဈေးနှုန်း သိမ်းမည်',
  ratesSaved: 'ဈေးနှုန်း သိမ်းပြီးပါပြီ။',
  ratesConfirmHint: 'ဒီဈေးနှုန်းတွေကို မလွှင့်မီ အက်ဒမင်က အတည်ပြုရမည်။ ဈေးနှုန်းအသစ်က အော်ဒါအသစ်တွေမှာသာ သက်ရောက်သည်။ အော်ဒါဟောင်းတွေရဲ့ ဈေးနှုန်း မပြောင်းပါ။',
  currentRates: 'လက်ရှိ ဈေးနှုန်း',
  rateHistoryTitle: 'ဈေးနှုန်း ပြောင်းခဲ့တဲ့ မှတ်တမ်း',
  noHistory: 'မှတ်တမ်း မရှိသေးပါ။',
  usersTitle: 'အသုံးပြုသူများ',
  searchUsersPh: 'အမည် / အီးမေးလ် ရှာရန်…',
  block: 'ပိတ်မည်',
  unblock: 'ပြန်ဖွင့်မည်',
  blocked: 'ပိတ်ထားသည်',
  active: 'ဖွင့်ထားသည်',
  orderCount: 'အော်ဒါ အရေအတွက်',
  joined: 'စတင်ခဲ့တဲ့ ရက်',
  settingsTitle: 'ဆိုင်ဆက်တင်',
  shopName: 'ဆိုင်အမည်',
  announcement: 'ကြေညာချက်',
  announcementPh: 'ဥပမာ — ဒီနေ့ ဈေးနှုန်း အထူး…',
  isOpen: 'ဆိုင် ဖွင့်ထားသည်',
  openHoursPh: 'ဥပမာ — 09:00 - 21:00',
  contactTelegram: 'Telegram (username / လင့်ခ်)',
  contactPhone: 'ဆက်သွယ်ရန် ဖုန်း',
  saveSettings: 'ဆက်တင် သိမ်းမည်',
  settingsSaved: 'ဆက်တင် သိမ်းပြီးပါပြီ။',
  paymentsThbTitle: 'ဘတ်လက်ခံတဲ့ အကောင့်များ',
  paymentsMmkTitle: 'ကျပ်လက်ခံတဲ့ အကောင့်များ',
  addMethod: 'အကောင့် အသစ် ထည့်မည်',
  methodNameLabel: 'နည်း အမည် (ဥပမာ PromptPay)',
  qrUrl: 'QR ပုံ လင့်ခ် (မရှိလျှင် ချန်ထားနိုင်သည်)',
  enabled: 'ဖွင့်ထားသည်',
  editMethod: 'ပြင်မည်',
  deleteMethod: 'ဖျက်မည်',
  noMethods: 'အကောင့် မသတ်မှတ်ရသေးပါ။',
  receiveMethodsTitle: 'လက်ခံနည်း အဖွင့်/အပိတ်',
  receiveMethodsHint: 'ဖွင့်ထားတဲ့ နည်းတွေသာ user တွေ order တင်တဲ့အခါ ပေါ်မယ်။ limit ပြည့်တဲ့ နည်းကို ခေတ္တပိတ်ထားနိုင်တယ်။',
  adminsTitle: 'အက်ဒမင်များ',
  addAdminByEmail: 'အီးမေးလ်ဖြင့် အက်ဒမင် ထည့်ရန်',
  addAdminBtn: 'အက်ဒမင် ထည့်မည်',
  removeAdmin: 'အက်ဒမင် ဖယ်ရှားမည်',
  cannotRemoveSelf: 'ကိုယ့်ကိုယ်ကို ဖယ်ရှား၍ မရပါ။',
  adminAdded: 'အက်ဒမင် ထည့်ပြီးပါပြီ။',
  adminRemoved: 'အက်ဒမင် ဖယ်ရှားပြီးပါပြီ။',
  userNotFoundAdmin: 'ဒီအီးမေးလ်ဖြင့် အကောင့်ဖွင့်ထားသူ မတွေ့ပါ။ အရင် အကောင့်ဖွင့်ခိုင်းပါ။',
  ledgerTitle: 'စာရင်း အစီရင်ခံစာ',
  rangeToday: 'ဒီနေ့',
  range7: '၇ ရက်',
  range30: '၃၀ ရက်',
  rangeAll: 'အားလုံး',
  ledgerVolumeThbToMmk: 'ဘတ် → ကျပ် စုစုပေါင်း (ပို့တဲ့ ဘတ်၊ ပြီးမြောက်တဲ့ အော်ဒါသာ)',
  ledgerVolumeMmkToThb: 'ကျပ် → ဘတ် စုစုပေါင်း (ပို့တဲ့ ကျပ်၊ ပြီးမြောက်တဲ့ အော်ဒါသာ)',
  ledgerFeesMmk: 'ဝန်ဆောင်ခ စုစုပေါင်း (ကျပ်)',
  ledgerFeesThb: 'ဝန်ဆောင်ခ စုစုပေါင်း (ဘတ်)',
  ledgerCounts: 'အခြေအနေအလိုက် အရေအတွက်',
  ledgerNote: 'ဒီစာရင်းက ပမာဏနဲ့ ဝန်ဆောင်ခသာ ပြသည်။ အမြတ်တွက်ခြင်း မပါပါ။',
  totalOrders: 'စုစုပေါင်း အော်ဒါ',

  loading: 'ဖွင့်နေသည်…',
  errorGeneric: 'တစ်ခုခု မှားသွားသည်။ ပြန်စမ်းပါ။',
  errorLoad: 'ဒေတာ ဖွင့်မရပါ။ ပြန်စမ်းပါ။',
  close: 'ပိတ်မည်',
  view: 'ကြည့်ရန်',

  backHome: 'ပင်မသို့ ပြန်မည်',
  notLoggedIn: 'ဝင်ရောက်ရန် လိုအပ်သည်။',
  confirmDelete: 'ဖျက်မှာ သေချာလား။',
  newOrderArrived: 'အော်ဒါအသစ် ရောက်လာပါပြီ။',

  justNow: 'အခုလေးတင်',
  minutesAgo: '{n} မိနစ်က',
  hoursAgo: '{n} နာရီက',
  daysAgo: '{n} ရက်က',
  neverUpdated: 'မသိရပါ',
  allCaughtUp: 'စောင့်နေတဲ့ အော်ဒါ မရှိပါ။'
};

/* ---------------- helpers ---------------- */

var store = window.ExchangeStore;

function S(key, vars) {
  var s = STRINGS[key] || key;
  if (vars) {
    Object.keys(vars).forEach(function (k) {
      s = s.split('{' + k + '}').join(String(vars[k]));
    });
  }
  return s;
}

function esc(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fmtNum(n, decimals) {
  var num = Number(n);
  if (!isFinite(num)) return '0';
  var d = decimals === undefined ? 0 : decimals;
  return num.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
}

function fmtMoney(amount, currency) {
  var d = currency === 'THB' ? 2 : 0;
  var label = currency === 'THB' ? S('thb') : S('mmk');
  return fmtNum(amount, d) + ' ' + label;
}

function fmtDateTime(iso) {
  if (!iso) return S('neverUpdated');
  var d = new Date(iso);
  if (isNaN(d.getTime())) return S('neverUpdated');
  return d.toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function fmtTimeAgo(iso) {
  if (!iso) return S('neverUpdated');
  var ms = Date.now() - new Date(iso).getTime();
  if (isNaN(ms) || ms < 0) return S('justNow');
  var mins = Math.floor(ms / 60000);
  if (mins < 1) return S('justNow');
  if (mins < 60) return S('minutesAgo', { n: mins });
  var hours = Math.floor(mins / 60);
  if (hours < 24) return S('hoursAgo', { n: hours });
  return S('daysAgo', { n: Math.floor(hours / 24) });
}

function $(sel, root) { return (root || document).querySelector(sel); }
function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

var toastTimer = null;
function showToast(msg, isError) {
  var t = $('#toast');
  t.textContent = msg;
  t.classList.toggle('toast--error', !!isError);
  t.hidden = false;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.hidden = true; }, 3200);
}

function openModal(html) {
  var root = $('#modalRoot');
  root.innerHTML = '<div class="modal-backdrop" id="modalBackdrop"><div class="modal" role="dialog" aria-modal="true">' + html + '</div></div>';
  $('#modalBackdrop').addEventListener('click', function (e) {
    if (e.target.id === 'modalBackdrop') closeModal();
  });
}
function closeModal() { $('#modalRoot').innerHTML = ''; }

function copyText(text) {
  function done() { showToast(S('copied')); }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
  } else { fallbackCopy(text); done(); }
}
function fallbackCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
}

/* Resolve private-bucket / demo file paths into viewable <img> sources. */
function hydrateImages(root) {
  $all('[data-file-path]', root).forEach(function (img) {
    var path = img.getAttribute('data-file-path');
    var bucket = img.getAttribute('data-bucket') || 'slips';
    store.getFileUrl(path, bucket).then(function (url) {
      if (url) { img.src = url; img.hidden = false; }
      else { img.hidden = true; }
    }).catch(function () { img.hidden = true; });
  });
  $all('[data-zoom-src]', root).forEach(function (el) {
    el.addEventListener('click', function () {
      var path = el.getAttribute('data-zoom-src');
      var bucket = el.getAttribute('data-bucket') || 'slips';
      store.getFileUrl(path, bucket).then(function (url) {
        if (!url) return;
        openModal('<img src="' + esc(url) + '" alt="">' +
          '<button class="btn btn--outline btn--block" style="margin-top:12px" onclick="window.__closeModal()">' + esc(S('close')) + '</button>');
      });
    });
  });
}
window.__closeModal = closeModal;

/* Compress a slip/proof photo client-side: max 1200px, JPEG 0.82. */
function compressImage(file) {
  return new Promise(function (resolve) {
    if (!file || !file.type || file.type.indexOf('image/') !== 0) { resolve(file); return; }
    var img = new Image();
    var url = URL.createObjectURL(file);
    img.onload = function () {
      URL.revokeObjectURL(url);
      var max = 1200;
      var w = img.naturalWidth, h = img.naturalHeight;
      var scale = Math.min(1, max / Math.max(w, h));
      var canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(w * scale));
      canvas.height = Math.max(1, Math.round(h * scale));
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(function (blob) {
        if (!blob) { resolve(file); return; }
        resolve(new File([blob], (file.name || 'slip').replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' }));
      }, 'image/jpeg', 0.82);
    };
    img.onerror = function () { URL.revokeObjectURL(url); resolve(file); };
    img.src = url;
  });
}

/* ---------------- state + settings ---------------- */

var state = {
  user: null,
  profile: null,
  isAdmin: false,
  settings: null,
  adminTab: 'overview',
  adminOrderFilter: '',
  adminOrderSearch: '',
  ordersFilter: '',
  ordersSearch: '',
  ledgerRange: 'today',
  booted: false
};

var DEFAULT_SETTINGS = {
  rates: { thb_to_mmk: 141.85, mmk_to_thb: 146.41 },
  fees: { fee_percent: 0, min_thb: 100, max_thb: 50000, min_mmk: 10000, max_mmk: 5000000 },
  payments_thb: { methods: [] },
  payments_mmk: { methods: [] },
  receive_methods: { methods: [
    { label: 'KBZPay', enabled: true },
    { label: 'WavePay', enabled: true },
    { label: 'AYA Pay', enabled: true },
    { label: 'CB Pay', enabled: true },
    { label: 'KBZ Bank', enabled: true },
    { label: 'PromptPay', enabled: true },
    { label: 'Other', enabled: true }
  ] },
  shop: { name: '', announcement: '', is_open: true, open_hours: '', contact_telegram: '', contact_phone: '' }
};

function mergeSettings(stored) {
  var out = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
  if (!stored) return out;
  ['rates', 'fees', 'payments_thb', 'payments_mmk', 'receive_methods', 'shop'].forEach(function (key) {
    if (stored[key] && typeof stored[key] === 'object') {
      Object.keys(stored[key]).forEach(function (k) { out[key][k] = stored[key][k]; });
    }
  });
  return out;
}

async function loadSettings() {
  try {
    var stored = await store.getSettings();
    state.settings = mergeSettings(stored);
  } catch (e) {
    state.settings = mergeSettings(null);
  }
  renderContactFloat();
  return state.settings;
}

function shopName() {
  var name = state.settings && state.settings.shop && state.settings.shop.name;
  return name || S('appName');
}

function statusLabel(status) {
  return S('status' + status.charAt(0).toUpperCase() + status.slice(1));
}

/* Quote math (also documented in README.md):
 * THB_TO_MMK: gross = send * thb_to_mmk (MMK), fee on gross, net = gross - fee.
 * MMK_TO_THB: gross = send / mmk_to_thb (THB), fee on gross, net = gross - fee.
 * Fee is always in the RECEIVE currency. MMK rounds to whole kyat, THB to 2dp. */
function calcQuote(direction, sendAmount, settings) {
  var st = settings || state.settings;
  var send = Number(sendAmount);
  if (!isFinite(send) || send <= 0) return null;
  var feePct = Number(st.fees.fee_percent) || 0;
  if (direction === 'THB_TO_MMK') {
    var rate = Number(st.rates.thb_to_mmk);
    var gross = send * rate;
    var fee = Math.round(gross * feePct / 100);
    return { rate: rate, gross: Math.round(gross), fee: fee, net: Math.round(gross) - fee, sendCurrency: 'THB', receiveCurrency: 'MMK' };
  }
  var rate2 = Number(st.rates.mmk_to_thb);
  var gross2 = send / rate2;
  var fee2 = Math.round(gross2 * feePct / 100 * 100) / 100;
  var net2 = Math.round((gross2 - fee2) * 100) / 100;
  return { rate: rate2, gross: Math.round(gross2 * 100) / 100, fee: fee2, net: net2, sendCurrency: 'MMK', receiveCurrency: 'THB' };
}

function amountLimits(direction, settings) {
  var st = settings || state.settings;
  if (direction === 'THB_TO_MMK') return { min: Number(st.fees.min_thb), max: Number(st.fees.max_thb), currency: 'THB' };
  return { min: Number(st.fees.min_mmk), max: Number(st.fees.max_mmk), currency: 'MMK' };
}

function validateAmount(direction, sendAmount, settings) {
  var send = Number(sendAmount);
  if (!isFinite(send) || send <= 0) return S('invalidAmount');
  var lim = amountLimits(direction, settings);
  if (send < lim.min) return S('belowMin');
  if (send > lim.max) return S('aboveMax');
  return '';
}

var RECEIVE_METHODS = ['KBZPay', 'WavePay', 'AYA Pay', 'CB Pay', 'KBZ Bank', 'PromptPay'];

// Receive methods the admin left enabled (Admin > Settings). The list lives
// in the `receive_methods` settings key so the admin can switch a method off
// when its payment limit is reached; users then cannot pick it for new orders.
function enabledReceiveMethods() {
  var list = state.settings && state.settings.receive_methods && state.settings.receive_methods.methods;
  if (!Array.isArray(list) || !list.length) list = DEFAULT_SETTINGS.receive_methods.methods;
  var enabled = list.filter(function (m) { return m && m.label && m.enabled !== false; }).map(function (m) { return m.label; });
  // Never strand the user: if the admin disabled everything, fall back to the full list.
  if (!enabled.length) enabled = list.filter(function (m) { return m && m.label; }).map(function (m) { return m.label; });
  if (!enabled.length) enabled = RECEIVE_METHODS.concat(['Other']);
  return enabled;
}

function receiveMethodLabel(value) {
  return value === 'Other' ? S('methodOther') : value;
}

/* ---------------- shell (header / nav / demo banner) ---------------- */

var CONTACT_ICONS = {
  telegram: '<svg viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true"><path d="M16.906 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
  viber: '<svg viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true"><path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z"/></svg>'
};

function telegramLink(value) {
  var v = String(value || '').trim();
  if (!v) return '';
  if (/^https?:\/\//i.test(v)) return v;
  if (v.indexOf('t.me/') === 0) return 'https://' + v;
  return 'https://t.me/' + v.replace(/^@/, '');
}

function viberLink(phone) {
  var digits = String(phone || '').replace(/[\s\-().]/g, '');
  if (!digits) return '';
  return 'viber://chat?number=' + encodeURIComponent(digits);
}

function renderContactFloat() {
  var shop = (state.settings && state.settings.shop) || {};
  var tg = telegramLink(shop.contact_telegram);
  var vb = viberLink(shop.contact_phone);
  var el = document.getElementById('contactFloat');
  if (!tg && !vb) { if (el) el.remove(); return; }
  if (!el) {
    el = document.createElement('div');
    el.id = 'contactFloat';
    el.className = 'contact-float';
    document.body.appendChild(el);
  }
  var html = '';
  if (tg) html += '<a href="' + esc(tg) + '" target="_blank" rel="noopener" class="contact-float__btn contact-float__btn--tg" aria-label="Telegram">' + CONTACT_ICONS.telegram + '</a>';
  if (vb) html += '<a href="' + esc(vb) + '" class="contact-float__btn contact-float__btn--vb" aria-label="Viber">' + CONTACT_ICONS.viber + '</a>';
  el.innerHTML = html;
}

function renderShell() {
  var banner = $('#demoBanner');
  if (store.isDemoMode) {
    banner.textContent = S('demoBanner');
    banner.hidden = false;
  } else {
    banner.hidden = true;
  }
  var header = $('#appHeader');
  var name = esc(shopName());
  var right = '';
  if (state.isAdmin) {
    right += '<a class="btn btn--ghost" href="#/admin">' + esc(S('navAdmin')) + '</a>';
  }
  if (state.user) {
    right += '<button class="btn btn--ghost" id="logoutBtn" type="button">' + esc(S('logout')) + '</button>';
  } else {
    right += '<a class="btn btn--ghost" href="#/login">' + esc(S('loginBtn')) + '</a>';
  }
  header.innerHTML = '<h1><a href="#/">' + name + '</a></h1><div class="header-actions">' + right + '</div>';
  var logoutBtn = $('#logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
  document.title = shopName();

  var nav = $('#bottomNav');
  var hash = window.location.hash || '#/';
  // Admin pages have their own tab bar; the user bottom nav (dashboard,
  // new order, ...) does not belong there, so hide it on #/admin.
  var isAdminPage = hash.indexOf('#/admin') === 0;
  nav.style.display = isAdminPage ? 'none' : '';
  document.body.classList.toggle('no-bottom-nav', isAdminPage);
  function activeFor(prefix) { return hash.indexOf(prefix) === 0 ? 'active' : ''; }
  var homeActive = (hash === '#/' || hash === '#' || hash === '') ? 'active' : '';
  var items = '';
  items += '<a href="#/" class="' + homeActive + '"><span class="nav-ico">⌂</span>' + esc(S('navHome')) + '</a>';
  if (state.user) {
    items += '<a href="#/dashboard" class="' + activeFor('#/dashboard') + '"><span class="nav-ico">▤</span>' + esc(S('navDashboard')) + '</a>';
    items += '<a href="#/order/new" class="' + activeFor('#/order/new') + '"><span class="nav-ico">＋</span>' + esc(S('navNewOrder')) + '</a>';
    items += '<a href="#/orders" class="' + activeFor('#/orders') + '"><span class="nav-ico">☰</span>' + esc(S('navOrders')) + '</a>';
    items += '<a href="#/profile" class="' + activeFor('#/profile') + '"><span class="nav-ico">○</span>' + esc(S('navProfile')) + '</a>';
  } else {
    items += '<a href="#/login" class="' + activeFor('#/login') + '"><span class="nav-ico">→</span>' + esc(S('loginBtn')) + '</a>';
    items += '<a href="#/register" class="' + activeFor('#/register') + '"><span class="nav-ico">＋</span>' + esc(S('registerBtn')) + '</a>';
  }
  nav.innerHTML = items;
  renderContactFloat();
}

async function handleLogout() {
  try { await store.signOut(); } catch (e) { /* ignore */ }
  state.user = null; state.profile = null; state.isAdmin = false;
  stopAdminLive();
  renderShell();
  window.location.hash = '#/';
}

function setView(html, wide) {
  var view = $('#view');
  view.classList.toggle('view--wide', !!wide);
  view.innerHTML = html;
  window.scrollTo(0, 0);
}

function spinnerHtml() {
  return '<div class="spinner"><span class="loading-dots">' + esc(S('loading')) + '</span></div>';
}

function errorCard(msg) {
  return '<div class="card"><p>' + esc(msg) + '</p>' +
    '<p><a class="btn btn--outline" href="#/">' + esc(S('backHome')) + '</a></p></div>';
}

/* ---------------- router ---------------- */

function parseHash() {
  var raw = (window.location.hash || '#/').slice(1);
  var parts = raw.split('?');
  var path = parts[0] || '/';
  var query = {};
  if (parts[1]) {
    var params = new URLSearchParams(parts[1]);
    params.forEach(function (v, k) { query[k] = v; });
  }
  return { path: path, query: query, segments: path.split('/').filter(Boolean) };
}

var routeToken = 0;
async function route() {
  stopAdminLive();
  renderShell();
  var token = ++routeToken;
  var parsed = parseHash();
  var seg = parsed.segments;
  var view = $('#view');

  if (seg.length === 0) { renderHome(token); return; }
  if (seg[0] === 'login') { renderLogin(token); return; }
  if (seg[0] === 'register') { renderRegister(token); return; }
  if (seg[0] === 'forgot') { renderForgot(token); return; }
  if (seg[0] === 'dashboard') { requireAuth(token, renderDashboard); return; }
  if (seg[0] === 'orders' && seg.length === 1) { requireAuth(token, renderOrdersList); return; }
  if (seg[0] === 'order' && seg[1] === 'new') { requireAuth(token, renderNewOrder); return; }
  if (seg[0] === 'order' && seg[1]) { requireAuth(token, function (t) { renderOrderDetail(t, seg[1]); }); return; }
  if (seg[0] === 'profile') { requireAuth(token, renderProfile); return; }
  if (seg[0] === 'admin') {
    if (parsed.query.tab) state.adminTab = parsed.query.tab;
    requireAuth(token, renderAdmin);
    return;
  }
  setView(errorCard(S('errorGeneric')));
  void view;
}

function requireAuth(token, renderFn) {
  if (!state.user) {
    setView('<div class="card center"><p>' + esc(S('notLoggedIn')) + '</p>' +
      '<p><a class="btn" href="#/login">' + esc(S('loginBtn')) + '</a></p></div>');
    return;
  }
  renderFn(token);
}

function isStale(token) { return token !== routeToken; }

/* ---------------- auth views ---------------- */

function authErrorMessage(e) {
  if (!e) return S('errorGeneric');
  if (e.code === 'blocked') return S('blockedMsg');
  if (e.code === 'email_in_use') return S('emailInUse');
  if (e.code === 'wrong_password' || e.code === 'invalid_credentials') return S('loginFailed');
  return S('errorGeneric');
}

function renderLogin(token) {
  var demoBtns = '';
  if (store.isDemoMode) {
    demoBtns = '<hr class="divider">' +
      '<button class="btn btn--amber btn--block" id="demoAdminBtn" type="button">' + esc(S('demoLoginBtn')) + '</button>' +
      '<p class="tiny muted center">' + esc(S('demoLoginHint')) + '</p>' +
      '<button class="btn btn--outline btn--block" id="demoUserBtn" type="button">' + esc(S('demoUserBtn')) + '</button>' +
      '<p class="tiny muted center">' + esc(S('demoUserHint')) + '</p>';
  }
  setView(
    '<div class="card"><h2>' + esc(S('loginTitle')) + '</h2>' +
    '<form id="loginForm" novalidate>' +
    '<div class="field"><label for="loginEmail">' + esc(S('email')) + '</label>' +
    '<input class="input" id="loginEmail" type="email" autocomplete="email" required></div>' +
    '<div class="field"><label for="loginPassword">' + esc(S('password')) + '</label>' +
    '<input class="input" id="loginPassword" type="password" autocomplete="current-password" required></div>' +
    '<p class="field-error" id="loginError" role="alert"></p>' +
    '<button class="btn btn--block" id="loginSubmit" type="submit">' + esc(S('loginBtn')) + '</button>' +
    '</form>' +
    '<p class="center small"><a href="#/forgot">' + esc(S('forgotPassword')) + '</a></p>' +
    '<p class="center small">' + esc(S('noAccount')) + ' <a href="#/register">' + esc(S('goRegister')) + '</a></p>' +
    demoBtns + '</div>'
  );
  $('#loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    var email = $('#loginEmail').value.trim();
    var password = $('#loginPassword').value;
    var errEl = $('#loginError');
    errEl.textContent = '';
    if (!email || !password) { errEl.textContent = S('fillAll'); return; }
    $('#loginSubmit').disabled = true;
    try {
      await store.signIn(email, password);
      await afterAuthChanged();
      showToast(S('welcomeBack'));
      window.location.hash = state.isAdmin ? '#/admin' : '#/dashboard';
    } catch (err) {
      errEl.textContent = authErrorMessage(err);
      $('#loginSubmit').disabled = false;
    }
  });
  if (store.isDemoMode) {
    $('#demoAdminBtn').addEventListener('click', function () { demoLogin('admin@demo.local'); });
    $('#demoUserBtn').addEventListener('click', function () { demoLogin('demo1@demo.local'); });
  }
  void token;
}

async function demoLogin(email) {
  try {
    await store.signIn(email, 'demo1234');
    await afterAuthChanged();
    showToast(S('welcomeBack'));
    window.location.hash = state.isAdmin ? '#/admin' : '#/dashboard';
  } catch (e) {
    showToast(authErrorMessage(e), true);
  }
}

function renderRegister(token) {
  setView(
    '<div class="card"><h2>' + esc(S('registerTitle')) + '</h2>' +
    '<form id="registerForm" novalidate>' +
    '<div class="field"><label for="regName">' + esc(S('displayName')) + '</label>' +
    '<input class="input" id="regName" type="text" autocomplete="name" placeholder="' + esc(S('displayNamePh')) + '" required></div>' +
    '<div class="field"><label for="regEmail">' + esc(S('email')) + '</label>' +
    '<input class="input" id="regEmail" type="email" autocomplete="email" required></div>' +
    '<div class="field"><label for="regPassword">' + esc(S('password')) + '</label>' +
    '<input class="input" id="regPassword" type="password" autocomplete="new-password" placeholder="' + esc(S('passwordPh')) + '" required></div>' +
    '<p class="field-error" id="registerError" role="alert"></p>' +
    '<button class="btn btn--block" id="registerSubmit" type="submit">' + esc(S('registerBtn')) + '</button>' +
    '</form>' +
    '<p class="center small">' + esc(S('haveAccount')) + ' <a href="#/login">' + esc(S('goLogin')) + '</a></p></div>'
  );
  $('#registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    var name = $('#regName').value.trim();
    var email = $('#regEmail').value.trim();
    var password = $('#regPassword').value;
    var errEl = $('#registerError');
    errEl.textContent = '';
    if (!name || !email || !password) { errEl.textContent = S('fillAll'); return; }
    if (password.length < 6) { errEl.textContent = S('passwordShort'); return; }
    $('#registerSubmit').disabled = true;
    try {
      var res = await store.signUp(email, password, name);
      if (res && res.needsConfirmation) {
        showToast(S('confirmEmailMsg'));
        window.location.hash = '#/login';
        return;
      }
      await afterAuthChanged();
      showToast(S('accountCreated'));
      window.location.hash = '#/dashboard';
    } catch (err) {
      errEl.textContent = authErrorMessage(err);
      $('#registerSubmit').disabled = false;
    }
  });
  void token;
}

function renderForgot(token) {
  setView(
    '<div class="card"><h2>' + esc(S('resetTitle')) + '</h2>' +
    (store.isDemoMode ? '<p class="muted small">' + esc(S('resetHintDemo')) + '</p>' : '') +
    '<form id="forgotForm" novalidate>' +
    '<div class="field"><label for="forgotEmail">' + esc(S('email')) + '</label>' +
    '<input class="input" id="forgotEmail" type="email" autocomplete="email" required></div>' +
    '<p class="field-error" id="forgotError" role="alert"></p>' +
    '<button class="btn btn--block" id="forgotSubmit" type="submit">' + esc(S('resetBtn')) + '</button>' +
    '</form>' +
    '<p class="center small"><a href="#/login">' + esc(S('goLogin')) + '</a></p></div>'
  );
  $('#forgotForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    var email = $('#forgotEmail').value.trim();
    if (!email) { $('#forgotError').textContent = S('fillAll'); return; }
    $('#forgotSubmit').disabled = true;
    try {
      await store.resetPassword(email);
      showToast(S('resetSent'));
      window.location.hash = '#/login';
    } catch (err) {
      $('#forgotError').textContent = S('errorGeneric');
      $('#forgotSubmit').disabled = false;
    }
  });
  void token;
}

async function afterAuthChanged() {
  var session = await store.getSession();
  state.user = session.user;
  state.profile = null;
  state.isAdmin = false;
  if (state.user) {
    try { state.profile = await store.ensureProfile(state.user); } catch (e) { state.profile = null; }
    if (!state.profile) {
      try { state.profile = await store.getProfile(state.user.id); } catch (e) { /* ignore */ }
    }
    if (state.profile && state.profile.is_blocked) {
      try { await store.signOut(); } catch (e) { /* ignore */ }
      state.user = null; state.profile = null;
      showToast(S('blockedMsg'), true);
      renderShell();
      return;
    }
    try { state.isAdmin = await store.isAdmin(state.user.id); } catch (e) { state.isAdmin = false; }
  }
  renderShell();
}

/* ---------------- home ---------------- */

async function renderHome(token) {
  setView(spinnerHtml());
  await loadSettings();
  var updatedLabel = S('neverUpdated');
  try {
    var latest = await store.getRateHistory(1);
    if (latest && latest.length) updatedLabel = fmtTimeAgo(latest[0].created_at);
  } catch (e) { /* keep fallback */ }
  if (isStale(token)) return;
  var st = state.settings;
  var shop = st.shop;
  var statusPill = shop.is_open
    ? '<span class="pill pill--open">' + esc(S('shopOpen')) + '</span>'
    : '<span class="pill pill--closed">' + esc(S('shopClosed')) + '</span>';
  var announcement = shop.announcement
    ? '<div class="announcement">' + esc(shop.announcement) + '</div>' : '';
  var closedBox = shop.is_open ? '' :
    '<div class="shop-closed" style="margin-top:10px">' + esc(S('shopClosed')) +
    (shop.open_hours ? ' · ' + esc(S('openHours')) + ': ' + esc(shop.open_hours) : '') + '</div>';

  var cta = state.user
    ? '<a class="btn btn--amber btn--block" href="#/order/new">' + esc(S('orderNow')) + '</a>'
    : '<a class="btn btn--amber btn--block" href="#/login">' + esc(S('loginToOrder')) + '</a>';

  setView(
    '<div class="card rate-hero"><div class="row-between"><h2>' + esc(S('rateTitle')) + '</h2>' + statusPill + '</div>' +
    '<div class="rate-line"><span class="rate-dir">' + esc(S('rateDirThb')) + '</span>' +
    '<span class="rate-value">' + esc(S('rateLineThb', { rate: fmtNum(st.rates.thb_to_mmk, 2) })) + '</span></div>' +
    '<div class="rate-line"><span class="rate-dir">' + esc(S('rateDirMmk')) + '</span>' +
    '<span class="rate-value">' + esc(S('rateLineMmk', { rate: fmtNum(st.rates.mmk_to_thb, 2) })) + '</span></div>' +
    '<p class="tiny" style="opacity:.85;margin:8px 0 0">' + esc(S('lastUpdated')) + ': ' + esc(updatedLabel) + '</p></div>' +
    announcement + closedBox +
    '<div class="card"><h2>' + esc(S('calcTitle')) + '</h2>' +
    '<div class="filter-bar" role="group" aria-label="' + esc(S('directionLabel')) + '">' +
    '<button class="chip active" id="calcDirThb" type="button">' + esc(S('directionThbToMmk')) + '</button>' +
    '<button class="chip" id="calcDirMmk" type="button">' + esc(S('directionMmkToThb')) + '</button></div>' +
    '<div class="field"><label for="calcAmount">' + esc(S('youSend')) + '</label>' +
    '<input class="input input--amount" id="calcAmount" type="number" inputmode="decimal" min="0" step="any" placeholder="0"></div>' +
    '<div id="calcResult"></div>' +
    '<p class="tiny muted">' + esc(S('ratesNote')) + '</p></div>' +
    '<div class="card"><h2>' + esc(S('howTitle')) + '</h2><ol class="steps">' +
    '<li><span class="step-no">1</span><span><strong>' + esc(S('step1Title')) + '</strong><br><span class="small muted">' + esc(S('step1Text')) + '</span></span></li>' +
    '<li><span class="step-no">2</span><span><strong>' + esc(S('step2Title')) + '</strong><br><span class="small muted">' + esc(S('step2Text')) + '</span></span></li>' +
    '<li><span class="step-no">3</span><span><strong>' + esc(S('step3Title')) + '</strong><br><span class="small muted">' + esc(S('step3Text')) + '</span></span></li>' +
    '</ol></div>' +
    cta
  );

  var direction = 'THB_TO_MMK';
  function updateCalc() {
    var amount = $('#calcAmount').value;
    var box = $('#calcResult');
    var quote = calcQuote(direction, amount, st);
    if (!quote) { box.innerHTML = ''; return; }
    var err = validateAmount(direction, amount, st);
    box.innerHTML = '<div class="calc-result">' +
      '<div class="kv"><span class="k">' + esc(S('rateUsed')) + '</span><span class="v">' + esc(fmtNum(quote.rate, 2)) + '</span></div>' +
      '<div class="kv"><span class="k">' + esc(S('youReceive')) + '</span><span class="v">' + esc(fmtMoney(quote.gross, quote.receiveCurrency)) + '</span></div>' +
      '<div class="kv"><span class="k">' + esc(S('fee')) + ' (' + esc(fmtNum(st.fees.fee_percent, 2)) + '%)</span><span class="v">' + esc(fmtMoney(quote.fee, quote.receiveCurrency)) + '</span></div>' +
      '<div class="kv"><span class="k">' + esc(S('netReceive')) + '</span><span class="big">' + esc(fmtMoney(quote.net, quote.receiveCurrency)) + '</span></div>' +
      (err ? '<p class="field-error">' + esc(err) + '</p>' : '') + '</div>';
  }
  $('#calcDirThb').addEventListener('click', function () {
    direction = 'THB_TO_MMK';
    $('#calcDirThb').classList.add('active');
    $('#calcDirMmk').classList.remove('active');
    updateCalc();
  });
  $('#calcDirMmk').addEventListener('click', function () {
    direction = 'MMK_TO_THB';
    $('#calcDirMmk').classList.add('active');
    $('#calcDirThb').classList.remove('active');
    updateCalc();
  });
  $('#calcAmount').addEventListener('input', updateCalc);
}

/* ---------------- shared order bits ---------------- */

function orderStatusPill(status) {
  return '<span class="pill pill--' + esc(status) + '">' + esc(statusLabel(status)) + '</span>';
}

function orderDirectionLabel(direction) {
  return direction === 'THB_TO_MMK' ? S('directionThbToMmk') : S('directionMmkToThb');
}

function orderItemHtml(order) {
  return '<a class="order-item" href="#/order/' + esc(order.id) + '">' +
    '<div class="oi-top"><span class="oi-no">' + esc(order.order_no || '') + '</span>' + orderStatusPill(order.status) + '</div>' +
    '<div class="oi-amount">' + esc(fmtMoney(order.send_amount, order.send_currency)) + ' → ' + esc(fmtMoney(order.receive_amount, order.receive_currency)) + '</div>' +
    '<div class="oi-meta">' + esc(orderDirectionLabel(order.direction)) + ' · ' + esc(S('rate')) + ' ' + esc(fmtNum(order.rate, 2)) + ' · ' + esc(fmtDateTime(order.created_at)) + '</div>' +
    '</a>';
}

function timelineHtml(order) {
  var steps = [
    { key: 'created', label: S('timelineCreated'), time: order.created_at, state: 'done' }
  ];
  if (order.status === 'reviewing' || order.status === 'completed') {
    steps.push({ key: 'reviewing', label: S('timelineReviewing'), time: order.updated_at, state: 'done' });
  }
  if (order.status === 'completed') {
    steps.push({ key: 'completed', label: S('timelineCompleted'), time: order.completed_at || order.updated_at, state: 'done' });
  }
  if (order.status === 'rejected') {
    steps.push({ key: 'rejected', label: S('timelineRejected'), time: order.updated_at, state: 'bad' });
  }
  if (order.status === 'cancelled') {
    steps.push({ key: 'cancelled', label: S('timelineCancelled'), time: order.updated_at, state: 'bad' });
  }
  var html = '<ul class="timeline">';
  steps.forEach(function (s) {
    html += '<li class="' + s.state + '"><span class="dot"></span><span>' + esc(s.label) + '</span><span class="t-time">' + esc(fmtDateTime(s.time)) + '</span></li>';
  });
  return html + '</ul>';
}

/* ---------------- dashboard ---------------- */

async function renderDashboard(token) {
  setView(spinnerHtml());
  var orders = [];
  try {
    orders = await store.listOrders({ userId: state.user.id, isAdmin: false });
  } catch (e) {
    if (isStale(token)) return;
    setView(errorCard(S('errorLoad')));
    return;
  }
  if (isStale(token)) return;
  var pending = orders.filter(function (o) { return o.status === 'pending' || o.status === 'reviewing'; }).length;
  var completed = orders.filter(function (o) { return o.status === 'completed'; }).length;
  var name = state.profile && state.profile.display_name ? state.profile.display_name : '';
  var recent = orders.slice(0, 5);
  setView(
    '<h2 class="mt0">' + esc(S('dashboardTitle')) + '</h2>' +
    (name ? '<p class="muted">' + esc(S('hello')) + ' ' + esc(name) + '</p>' : '') +
    '<div class="grid-3">' +
    '<div class="stat"><div class="stat-num">' + esc(String(pending)) + '</div><div class="stat-label">' + esc(S('statPending')) + '</div></div>' +
    '<div class="stat"><div class="stat-num">' + esc(String(completed)) + '</div><div class="stat-label">' + esc(S('statCompleted')) + '</div></div>' +
    '<div class="stat"><div class="stat-num">' + esc(String(orders.length)) + '</div><div class="stat-label">' + esc(S('statTotalOrders')) + '</div></div>' +
    '</div>' +
    '<p style="margin:14px 0"><a class="btn btn--amber btn--block" href="#/order/new">' + esc(S('orderNow')) + '</a></p>' +
    '<div class="card"><div class="row-between"><h2 class="mb0">' + esc(S('recentOrders')) + '</h2>' +
    '<a href="#/orders">' + esc(S('viewAll')) + '</a></div>' +
    '<div style="margin-top:10px">' +
    (recent.length ? recent.map(orderItemHtml).join('') : '<p class="empty">' + esc(S('noOrders')) + '</p>') +
    '</div></div>'
  );
}

/* ---------------- orders list ---------------- */

async function renderOrdersList(token) {
  setView(spinnerHtml());
  var orders = [];
  try {
    orders = await store.listOrders({
      userId: state.user.id, isAdmin: false,
      status: state.ordersFilter || undefined,
      search: state.ordersSearch || undefined
    });
  } catch (e) {
    if (isStale(token)) return;
    setView(errorCard(S('errorLoad')));
    return;
  }
  if (isStale(token)) return;
  var statuses = ['', 'pending', 'reviewing', 'completed', 'rejected', 'cancelled'];
  var chips = statuses.map(function (st) {
    var label = st ? statusLabel(st) : S('filterAll');
    var active = state.ordersFilter === st ? ' active' : '';
    return '<button class="chip' + active + '" data-status="' + esc(st) + '" type="button">' + esc(label) + '</button>';
  }).join('');
  setView(
    '<h2 class="mt0">' + esc(S('ordersTitle')) + '</h2>' +
    '<div class="field"><input class="input" id="orderSearch" type="search" placeholder="' + esc(S('searchPh')) + '" value="' + esc(state.ordersSearch) + '"></div>' +
    '<div class="filter-bar">' + chips + '</div>' +
    '<div id="ordersList">' +
    (orders.length ? orders.map(orderItemHtml).join('') : '<p class="empty">' + esc(S('noOrders')) + '</p>') +
    '</div>'
  );
  $all('[data-status]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.ordersFilter = btn.getAttribute('data-status');
      renderOrdersList(token);
    });
  });
  var searchInput = $('#orderSearch');
  var deb = null;
  searchInput.addEventListener('input', function () {
    if (deb) clearTimeout(deb);
    deb = setTimeout(function () {
      state.ordersSearch = searchInput.value.trim();
      renderOrdersList(token);
    }, 350);
  });
}

/* ---------------- order detail (+ admin actions) ---------------- */

async function renderOrderDetail(token, orderId) {
  setView(spinnerHtml());
  var order = null;
  try { order = await store.getOrder(orderId); } catch (e) { order = null; }
  if (isStale(token)) return;
  if (!order || (!state.isAdmin && order.user_id !== state.user.id)) {
    setView(errorCard(S('orderNotFound')));
    return;
  }
  var canCancel = !state.isAdmin && order.status === 'pending' && order.user_id === state.user.id;
  var slipBlock = order.slip_path
    ? '<img class="slip-img" data-file-path="' + esc(order.slip_path) + '" data-bucket="slips" data-zoom-src="' + esc(order.slip_path) + '" alt="" hidden>' +
      '<p class="small"><button class="btn btn--outline btn--small" type="button" data-zoom-btn="' + esc(order.slip_path) + '">' + esc(S('viewSlip')) + '</button></p>'
    : '<p class="muted small">' + esc(S('noSlip')) + '</p>';
  var proofBlock = order.proof_path
    ? '<img class="slip-img" data-file-path="' + esc(order.proof_path) + '" data-bucket="proofs" data-zoom-src="' + esc(order.proof_path) + '" alt="" hidden>'
    : '<p class="muted small">' + esc(S('noProof')) + '</p>';
  var noteBlock = order.admin_note
    ? '<div class="kv"><span class="k">' + esc(S('adminNote')) + '</span><span class="v">' + esc(order.admin_note) + '</span></div>' : '';

  var adminPanel = '';
  if (state.isAdmin && (order.status === 'pending' || order.status === 'reviewing')) {
    adminPanel = '<div class="card"><h2>' + esc(S('adminTitle')) + '</h2>' +
      '<div class="field"><label for="adminNoteInput">' + esc(S('adminNote')) + '</label>' +
      '<textarea class="input" id="adminNoteInput" placeholder="' + esc(S('rejectReasonPh')) + '">' + esc(order.admin_note || '') + '</textarea></div>' +
      (order.status === 'pending'
        ? '<button class="btn btn--outline btn--block" id="markReviewingBtn" type="button" style="margin-bottom:10px">' + esc(S('markReviewing')) + '</button>' : '') +
      '<div class="field"><label for="proofFile">' + esc(S('proofUpload')) + '</label>' +
      '<input class="input" id="proofFile" type="file" accept="image/*"></div>' +
      '<p class="tiny muted">' + esc(S('completeConfirm')) + '</p>' +
      '<button class="btn btn--dark btn--block" id="completeBtn" type="button" style="margin-bottom:10px">' + esc(S('completeOrder')) + '</button>' +
      '<button class="btn btn--danger btn--block" id="rejectBtn" type="button">' + esc(S('rejectOrder')) + '</button>' +
      '</div>';
  }

  setView(
    '<p><a href="#/orders">← ' + esc(S('ordersTitle')) + '</a></p>' +
    '<div class="card"><div class="row-between"><h2 class="mb0">' + esc(order.order_no || '') + '</h2>' + orderStatusPill(order.status) + '</div>' +
    '<div class="kv"><span class="k">' + esc(S('date')) + '</span><span class="v">' + esc(fmtDateTime(order.created_at)) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('directionLabel')) + '</span><span class="v">' + esc(orderDirectionLabel(order.direction)) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('sendAmount')) + '</span><span class="v">' + esc(fmtMoney(order.send_amount, order.send_currency)) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('rate')) + '</span><span class="v">' + esc(fmtNum(order.rate, 2)) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('fee')) + '</span><span class="v">' + esc(fmtMoney(order.fee || 0, order.receive_currency)) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('receiveAmount')) + '</span><span class="v">' + esc(fmtMoney(order.receive_amount, order.receive_currency)) + '</span></div>' +
    noteBlock + '</div>' +
    '<div class="card"><h2>' + esc(S('receiver')) + '</h2>' +
    '<div class="kv"><span class="k">' + esc(S('receiveMethod')) + '</span><span class="v">' + esc(order.receive_method || '') + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('receiverName')) + '</span><span class="v">' + esc(order.receiver_name || '') + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('receiverAccount')) + '</span><span class="v">' + esc(order.receiver_account || '') + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('receiverPhone')) + '</span><span class="v">' + esc(order.receiver_phone || '') + '</span></div>' +
    '<button class="btn btn--outline btn--small copy-btn" id="copyReceiverBtn" type="button">' + esc(S('copyReceiver')) + '</button></div>' +
    '<div class="card"><h2>' + esc(S('slip')) + '</h2>' +
    (order.slip_txn_id ? '<div class="kv"><span class="k">' + esc(S('slipTxn')) + '</span><span class="v mono">' + esc(order.slip_txn_id) + '</span></div>' : '') +
    slipBlock + '</div>' +
    '<div class="card"><h2>' + esc(S('proof')) + '</h2>' + proofBlock + '</div>' +
    '<div class="card"><h2>' + esc(S('timelineTitle')) + '</h2>' + timelineHtml(order) + '</div>' +
    adminPanel +
    (canCancel ? '<button class="btn btn--danger btn--block" id="cancelOrderBtn" type="button">' + esc(S('cancelOrder')) + '</button>' : '')
  );
  hydrateImages($('#view'));
  $all('[data-zoom-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var path = btn.getAttribute('data-zoom-btn');
      store.getFileUrl(path, 'slips').then(function (url) {
        if (!url) return;
        openModal('<img src="' + esc(url) + '" alt="">' +
          '<button class="btn btn--outline btn--block" style="margin-top:12px" onclick="window.__closeModal()">' + esc(S('close')) + '</button>');
      });
    });
  });
  $('#copyReceiverBtn').addEventListener('click', function () {
    copyText([order.receive_method, order.receiver_name, order.receiver_account, order.receiver_phone].filter(Boolean).join('\n'));
  });
  var cancelBtn = $('#cancelOrderBtn');
  if (cancelBtn) cancelBtn.addEventListener('click', async function () {
    if (!window.confirm(S('cancelConfirm'))) return;
    try {
      await store.cancelOrder(order.id, state.user.id);
      showToast(S('cancelledOk'));
      renderOrderDetail(token, orderId);
    } catch (e) { showToast(S('errorGeneric'), true); }
  });
  var reviewingBtn = $('#markReviewingBtn');
  if (reviewingBtn) reviewingBtn.addEventListener('click', async function () {
    try {
      await store.updateOrderStatus(order.id, 'reviewing', { admin_note: $('#adminNoteInput').value.trim() });
      showToast(S('orderUpdated'));
      renderOrderDetail(token, orderId);
    } catch (e) { showToast(S('errorGeneric'), true); }
  });
  var completeBtn = $('#completeBtn');
  if (completeBtn) completeBtn.addEventListener('click', async function () {
    var fileInput = $('#proofFile');
    if (!fileInput.files || !fileInput.files[0]) { showToast(S('proofRequired'), true); return; }
    completeBtn.disabled = true;
    try {
      var compressed = await compressImage(fileInput.files[0]);
      // Proof goes into the ORDER OWNER's storage folder so the customer
      // can view it (storage SELECT policy: own folder or admin).
      var proofPath = await store.uploadProof(compressed, order.user_id);
      await store.updateOrderStatus(order.id, 'completed', { admin_note: $('#adminNoteInput').value.trim(), proof_path: proofPath });
      showToast(S('orderUpdated'));
      renderOrderDetail(token, orderId);
    } catch (e) {
      showToast(S('errorGeneric'), true);
      completeBtn.disabled = false;
    }
  });
  var rejectBtn = $('#rejectBtn');
  if (rejectBtn) rejectBtn.addEventListener('click', async function () {
    var note = $('#adminNoteInput').value.trim();
    try {
      await store.updateOrderStatus(order.id, 'rejected', { admin_note: note });
      showToast(S('orderUpdated'));
      renderOrderDetail(token, orderId);
    } catch (e) { showToast(S('errorGeneric'), true); }
  });
}

/* ---------------- profile ---------------- */

async function renderProfile(token) {
  setView(spinnerHtml());
  var profile = state.profile;
  try { profile = await store.getProfile(state.user.id); state.profile = profile; } catch (e) { /* keep cached */ }
  if (isStale(token)) return;
  if (!profile) { setView(errorCard(S('errorLoad'))); return; }
  var receivers = profile.receivers || [];
  var receiverRows = receivers.length ? receivers.map(function (r, i) {
    return '<div class="pay-method"><div class="row-between"><strong>' + esc(r.method || '') + '</strong>' +
      '<button class="btn btn--outline btn--small" data-remove-receiver="' + i + '" type="button">' + esc(S('removeReceiver')) + '</button></div>' +
      '<div class="small">' + esc(r.name || '') + ' · ' + esc(r.account || '') + (r.phone ? ' · ' + esc(r.phone) : '') + '</div></div>';
  }).join('') : '<p class="empty">' + esc(S('noReceivers')) + '</p>';
  var methodOptions = enabledReceiveMethods().map(function (m) {
    return '<option value="' + esc(m) + '">' + esc(receiveMethodLabel(m)) + '</option>';
  }).join('');

  setView(
    '<div class="card"><h2>' + esc(S('profileTitle')) + '</h2>' +
    '<form id="profileForm">' +
    '<div class="field"><label for="profileEmail">' + esc(S('email')) + '</label>' +
    '<input class="input" id="profileEmail" type="email" value="' + esc(profile.email || '') + '" disabled>' +
    '<p class="hint">' + esc(S('emailReadonly')) + '</p></div>' +
    '<div class="field"><label for="profileName">' + esc(S('displayName')) + '</label>' +
    '<input class="input" id="profileName" type="text" value="' + esc(profile.display_name || '') + '"></div>' +
    '<div class="field"><label for="profilePhone">' + esc(S('phone')) + '</label>' +
    '<input class="input" id="profilePhone" type="tel" value="' + esc(profile.phone || '') + '"></div>' +
    '<button class="btn btn--block" type="submit">' + esc(S('save')) + '</button></form></div>' +
    '<div class="card"><h2>' + esc(S('receiversTitle')) + '</h2>' + receiverRows +
    '<form id="receiverForm">' +
    '<div class="field"><label for="recvMethod">' + esc(S('methodLabel')) + '</label>' +
    '<select class="input" id="recvMethod">' + methodOptions + '</select></div>' +
    '<div class="field"><label for="recvName">' + esc(S('receiverName')) + '</label>' +
    '<input class="input" id="recvName" type="text"></div>' +
    '<div class="field"><label for="recvAccount">' + esc(S('receiverAccount')) + '</label>' +
    '<input class="input" id="recvAccount" type="text"></div>' +
    '<div class="field"><label for="recvPhone">' + esc(S('receiverPhone')) + '</label>' +
    '<input class="input" id="recvPhone" type="tel"></div>' +
    '<button class="btn btn--outline btn--block" type="submit">' + esc(S('addReceiver')) + '</button></form></div>' +
    '<div class="card"><h2>' + esc(S('changePassword')) + '</h2>' +
    (store.isDemoMode
      ? '<p class="muted small">' + esc(S('passwordChangeDemo')) + '</p>'
      : '<p class="small muted">' + esc(S('changePasswordHint')) + '</p>' +
        '<button class="btn btn--outline btn--block" id="changePwBtn" type="button">' + esc(S('changePasswordBtn')) + '</button>') +
    '</div>'
  );
  $('#profileForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    try {
      state.profile = await store.updateProfile(state.user.id, {
        display_name: $('#profileName').value.trim(),
        phone: $('#profilePhone').value.trim()
      });
      showToast(S('savedOk'));
    } catch (err) { showToast(S('errorGeneric'), true); }
  });
  $('#receiverForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    var name = $('#recvName').value.trim();
    var account = $('#recvAccount').value.trim();
    if (!name || !account) { showToast(S('fillAll'), true); return; }
    var next = receivers.concat([{ method: $('#recvMethod').value, name: name, account: account, phone: $('#recvPhone').value.trim() }]);
    try {
      state.profile = await store.updateProfile(state.user.id, { receivers: next });
      showToast(S('savedOk'));
      renderProfile(token);
    } catch (err) { showToast(S('errorGeneric'), true); }
  });
  $all('[data-remove-receiver]').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      var idx = Number(btn.getAttribute('data-remove-receiver'));
      var next = receivers.filter(function (_, i) { return i !== idx; });
      try {
        state.profile = await store.updateProfile(state.user.id, { receivers: next });
        showToast(S('savedOk'));
        renderProfile(token);
      } catch (err) { showToast(S('errorGeneric'), true); }
    });
  });
  var pwBtn = $('#changePwBtn');
  if (pwBtn) pwBtn.addEventListener('click', async function () {
    try {
      await store.resetPassword(state.user.email);
      showToast(S('resetSent'));
    } catch (e) { showToast(S('errorGeneric'), true); }
  });
}

/* ---------------- new order wizard ---------------- */

var wizard = null;
function freshWizard() {
  return {
    step: 1,
    direction: 'THB_TO_MMK',
    sendAmount: '',
    receiveMethod: 'KBZPay',
    receiverName: '',
    receiverAccount: '',
    receiverPhone: '',
    slipFile: null,
    slipPreviewUrl: '',
    slipTxnId: '',
    saveReceiver: false,
    submitting: false
  };
}

async function renderNewOrder(token) {
  wizard = freshWizard();
  await loadSettings();
  if (isStale(token)) return;
  // Prefill receiver from saved receivers / profile.
  if (state.profile) {
    var saved = state.profile.receivers || [];
    if (saved.length) {
      wizard.receiveMethod = saved[0].method || 'KBZPay';
      wizard.receiverName = saved[0].name || '';
      wizard.receiverAccount = saved[0].account || '';
      wizard.receiverPhone = saved[0].phone || '';
    } else if (state.profile.display_name) {
      wizard.receiverName = state.profile.display_name;
      wizard.receiverPhone = state.profile.phone || '';
    }
  }
  renderWizard(token);
}

function wizardStepsHtml() {
  var steps = [S('wizardStep1'), S('wizardStep2'), S('wizardStep3')];
  return '<div class="wizard-steps">' + steps.map(function (label, i) {
    var n = i + 1;
    var cls = n === wizard.step ? 'current' : (n < wizard.step ? 'done' : '');
    return '<span class="' + cls + '">' + esc(label) + '</span>';
  }).join('') + '</div>';
}

function renderWizard(token) {
  if (wizard.step === 1) renderWizardStep1(token);
  else if (wizard.step === 2) renderWizardStep2(token);
  else renderWizardStep3(token);
}

function renderWizardStep1(token) {
  var st = state.settings;
  var closedWarn = st.shop.is_open ? '' :
    '<div class="shop-closed">' + esc(S('shopClosedWarn')) + '</div>';
  setView(
    '<h2 class="mt0">' + esc(S('newOrderTitle')) + '</h2>' + closedWarn + wizardStepsHtml() +
    '<div class="card"><div class="field"><label>' + esc(S('directionLabel')) + '</label>' +
    '<div class="filter-bar">' +
    '<button class="chip' + (wizard.direction === 'THB_TO_MMK' ? ' active' : '') + '" id="wzDirThb" type="button">' + esc(S('directionThbToMmk')) + '</button>' +
    '<button class="chip' + (wizard.direction === 'MMK_TO_THB' ? ' active' : '') + '" id="wzDirMmk" type="button">' + esc(S('directionMmkToThb')) + '</button>' +
    '</div></div>' +
    '<div class="field"><label for="wzAmount">' + esc(S('youSend')) + '</label>' +
    '<input class="input input--amount" id="wzAmount" type="number" inputmode="decimal" min="0" step="any" value="' + esc(wizard.sendAmount) + '">' +
    '<p class="hint" id="wzLimits"></p></div>' +
    '<div id="wzQuote"></div>' +
    '<p class="field-error" id="wzError" role="alert"></p>' +
    '<button class="btn btn--block" id="wzNext" type="button">' + esc(S('next')) + '</button></div>'
  );
  function refresh() {
    var lim = amountLimits(wizard.direction, st);
    $('#wzLimits').textContent = S('minMax', { min: fmtMoney(lim.min, lim.currency), max: fmtMoney(lim.max, lim.currency) });
    var quote = calcQuote(wizard.direction, $('#wzAmount').value, st);
    var box = $('#wzQuote');
    if (!quote) { box.innerHTML = ''; return; }
    box.innerHTML = '<div class="calc-result">' +
      '<div class="kv"><span class="k">' + esc(S('rateUsed')) + '</span><span class="v">' + esc(fmtNum(quote.rate, 2)) + '</span></div>' +
      '<div class="kv"><span class="k">' + esc(S('youReceive')) + '</span><span class="v">' + esc(fmtMoney(quote.gross, quote.receiveCurrency)) + '</span></div>' +
      '<div class="kv"><span class="k">' + esc(S('fee')) + ' (' + esc(fmtNum(st.fees.fee_percent, 2)) + '%)</span><span class="v">' + esc(fmtMoney(quote.fee, quote.receiveCurrency)) + '</span></div>' +
      '<div class="kv"><span class="k">' + esc(S('netReceive')) + '</span><span class="big">' + esc(fmtMoney(quote.net, quote.receiveCurrency)) + '</span></div></div>';
  }
  $('#wzDirThb').addEventListener('click', function () { wizard.direction = 'THB_TO_MMK'; renderWizardStep1(token); });
  $('#wzDirMmk').addEventListener('click', function () { wizard.direction = 'MMK_TO_THB'; renderWizardStep1(token); });
  $('#wzAmount').addEventListener('input', function () { wizard.sendAmount = $('#wzAmount').value; refresh(); });
  refresh();
  $('#wzNext').addEventListener('click', function () {
    wizard.sendAmount = $('#wzAmount').value;
    var err = validateAmount(wizard.direction, wizard.sendAmount, st);
    if (err) { $('#wzError').textContent = err; return; }
    wizard.step = 2;
    renderWizard(token);
  });
}

function renderWizardStep2(token) {
  var st = state.settings;
  var quote = calcQuote(wizard.direction, wizard.sendAmount, st);
  // Customer pays in the SEND currency, so show the matching accounts.
  var key = wizard.direction === 'THB_TO_MMK' ? 'payments_thb' : 'payments_mmk';
  var methods = ((st[key] && st[key].methods) || []).filter(function (m) { return m.enabled; });
  var methodsHtml;
  if (!methods.length) {
    var contact = [];
    if (st.shop.contact_telegram) contact.push(esc(st.shop.contact_telegram));
    if (st.shop.contact_phone) contact.push(esc(st.shop.contact_phone));
    methodsHtml = '<div class="announcement">' + esc(S('noPayMethod')) +
      (contact.length ? '<br>' + esc(S('contactUs')) + ': ' + contact.join(' · ') : '') + '</div>';
  } else {
    methodsHtml = methods.map(function (m) {
      var qr = m.qr_image_url
        ? '<img class="qr-img" src="' + esc(m.qr_image_url) + '" alt="QR" loading="lazy">'
        : '';
      return '<div class="pay-method"><div class="row-between"><strong>' + esc(m.label || '') + '</strong>' +
        '<button class="btn btn--outline btn--small copy-btn" data-copy="' + esc(m.account_number || '') + '" type="button">' + esc(S('copy')) + '</button></div>' +
        '<div class="kv"><span class="k">' + esc(S('accountName')) + '</span><span class="v">' + esc(m.account_name || '') + '</span></div>' +
        '<div class="kv"><span class="k">' + esc(S('accountNumber')) + '</span><span class="v mono">' + esc(m.account_number || '') + '</span></div>' + qr + '</div>';
    }).join('');
  }
  setView(
    '<h2 class="mt0">' + esc(S('newOrderTitle')) + '</h2>' + wizardStepsHtml() +
    '<div class="card"><h2>' + esc(S('payInstructions')) + '</h2>' +
    '<div class="calc-result" style="margin:0 0 12px"><div class="kv"><span class="k">' + esc(S('youSend')) + '</span><span class="big">' +
    esc(fmtMoney(wizard.sendAmount, quote ? quote.sendCurrency : 'THB')) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('netReceive')) + '</span><span class="v">' + esc(quote ? fmtMoney(quote.net, quote.receiveCurrency) : '') + '</span></div></div>' +
    methodsHtml + '</div>' +
    '<div class="row"><button class="btn btn--outline grow" id="wzBack" type="button">' + esc(S('back')) + '</button>' +
    '<button class="btn grow" id="wzNext2" type="button">' + esc(S('next')) + '</button></div>'
  );
  $all('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () { copyText(btn.getAttribute('data-copy')); });
  });
  $('#wzBack').addEventListener('click', function () { wizard.step = 1; renderWizard(token); });
  $('#wzNext2').addEventListener('click', function () { wizard.step = 3; renderWizard(token); });
}

function renderWizardStep3(token) {
  var st = state.settings;
  var quote = calcQuote(wizard.direction, wizard.sendAmount, st);
  var saved = (state.profile && state.profile.receivers) || [];
  var savedHtml = '';
  if (saved.length) {
    savedHtml = '<div class="field"><label>' + esc(S('savedReceivers')) + '</label>' +
      saved.map(function (r, i) {
        return '<div class="pay-method"><div class="row-between"><span class="small"><strong>' + esc(r.method || '') + '</strong> — ' +
          esc(r.name || '') + ' · ' + esc(r.account || '') + '</span>' +
          '<button class="btn btn--outline btn--small" data-use-saved="' + i + '" type="button">' + esc(S('useSaved')) + '</button></div></div>';
      }).join('') + '</div>';
  }
  var enabledMethods = enabledReceiveMethods();
  if (enabledMethods.indexOf(wizard.receiveMethod) === -1) wizard.receiveMethod = enabledMethods[0];
  var methodOptions = enabledMethods.map(function (m) {
    var sel = wizard.receiveMethod === m ? ' selected' : '';
    return '<option value="' + esc(m) + '"' + sel + '>' + esc(receiveMethodLabel(m)) + '</option>';
  }).join('');
  var preview = wizard.slipPreviewUrl
    ? '<img class="slip-img" src="' + esc(wizard.slipPreviewUrl) + '" alt="" style="margin-top:8px">'
    : '';
  setView(
    '<h2 class="mt0">' + esc(S('newOrderTitle')) + '</h2>' + wizardStepsHtml() +
    '<div class="card"><h2>' + esc(S('confirmTitle')) + '</h2>' +
    '<div class="kv"><span class="k">' + esc(S('youSend')) + '</span><span class="v">' + esc(fmtMoney(wizard.sendAmount, quote.sendCurrency)) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('rate')) + '</span><span class="v">' + esc(fmtNum(quote.rate, 2)) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('fee')) + '</span><span class="v">' + esc(fmtMoney(quote.fee, quote.receiveCurrency)) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('netReceive')) + '</span><span class="v">' + esc(fmtMoney(quote.net, quote.receiveCurrency)) + '</span></div>' +
    '<p class="tiny muted">' + esc(S('confirmText')) + '</p></div>' +
    '<div class="card">' + savedHtml +
    '<div class="field"><label for="wzMethod">' + esc(S('receiveMethod')) + '</label>' +
    '<select class="input" id="wzMethod">' + methodOptions + '</select></div>' +
    '<div class="field"><label for="wzRecvName">' + esc(S('receiverName')) + '</label>' +
    '<input class="input" id="wzRecvName" type="text" value="' + esc(wizard.receiverName) + '"></div>' +
    '<div class="field"><label for="wzRecvAccount">' + esc(S('receiverAccount')) + '</label>' +
    '<input class="input" id="wzRecvAccount" type="text" value="' + esc(wizard.receiverAccount) + '"></div>' +
    '<div class="field"><label for="wzRecvPhone">' + esc(S('receiverPhone')) + '</label>' +
    '<input class="input" id="wzRecvPhone" type="tel" value="' + esc(wizard.receiverPhone) + '"></div>' +
    '<label class="check-row"><input type="checkbox" id="wzSaveReceiver"' + (wizard.saveReceiver ? ' checked' : '') + '> ' + esc(S('saveReceiver')) + '</label></div>' +
    '<div class="card"><div class="field"><label for="wzSlip">' + esc(S('slipUpload')) + '</label>' +
    '<input class="input" id="wzSlip" type="file" accept="image/*">' +
    '<p class="hint">' + esc(S('slipUploadHint')) + '</p>' + preview + '</div>' +
    '<div class="field"><label for="wzTxn">' + esc(S('slipTxn')) + '</label>' +
    '<input class="input" id="wzTxn" type="text" value="' + esc(wizard.slipTxnId) + '">' +
    '<p class="hint">' + esc(S('txnHint')) + '</p></div>' +
    '<p class="field-error" id="wzError3" role="alert"></p></div>' +
    '<div class="row"><button class="btn btn--outline grow" id="wzBack3" type="button">' + esc(S('back')) + '</button>' +
    '<button class="btn grow" id="wzSubmit" type="button">' + esc(S('submitOrder')) + '</button></div>'
  );
  $all('[data-use-saved]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var r = saved[Number(btn.getAttribute('data-use-saved'))];
      if (!r) return;
      wizard.receiveMethod = r.method || 'KBZPay';
      wizard.receiverName = r.name || '';
      wizard.receiverAccount = r.account || '';
      wizard.receiverPhone = r.phone || '';
      renderWizardStep3(token);
    });
  });
  $('#wzSlip').addEventListener('change', async function () {
    var file = $('#wzSlip').files && $('#wzSlip').files[0];
    if (!file) return;
    wizard.slipFile = await compressImage(file);
    if (wizard.slipPreviewUrl) URL.revokeObjectURL(wizard.slipPreviewUrl);
    wizard.slipPreviewUrl = URL.createObjectURL(wizard.slipFile);
    wizard.receiveMethod = $('#wzMethod').value;
    wizard.receiverName = $('#wzRecvName').value;
    wizard.receiverAccount = $('#wzRecvAccount').value;
    wizard.receiverPhone = $('#wzRecvPhone').value;
    wizard.slipTxnId = $('#wzTxn').value;
    wizard.saveReceiver = $('#wzSaveReceiver').checked;
    renderWizardStep3(token);
  });
  $('#wzBack3').addEventListener('click', function () {
    wizard.receiveMethod = $('#wzMethod').value;
    wizard.receiverName = $('#wzRecvName').value;
    wizard.receiverAccount = $('#wzRecvAccount').value;
    wizard.receiverPhone = $('#wzRecvPhone').value;
    wizard.slipTxnId = $('#wzTxn').value;
    wizard.saveReceiver = $('#wzSaveReceiver').checked;
    wizard.step = 2;
    renderWizard(token);
  });
  $('#wzSubmit').addEventListener('click', async function () {
    if (wizard.submitting) return;
    wizard.receiveMethod = $('#wzMethod').value;
    wizard.receiverName = $('#wzRecvName').value.trim();
    wizard.receiverAccount = $('#wzRecvAccount').value.trim();
    wizard.receiverPhone = $('#wzRecvPhone').value.trim();
    wizard.slipTxnId = $('#wzTxn').value.trim();
    wizard.saveReceiver = $('#wzSaveReceiver').checked;
    var errEl = $('#wzError3');
    errEl.textContent = '';
    if (!wizard.receiverName || !wizard.receiverAccount) { errEl.textContent = S('fillAll'); return; }
    if (!wizard.slipFile) { errEl.textContent = S('slipRequired'); return; }
    var err = validateAmount(wizard.direction, wizard.sendAmount, state.settings);
    if (err) { errEl.textContent = err; return; }
    wizard.submitting = true;
    $('#wzSubmit').disabled = true;
    try {
      // Re-read settings so the locked rate is the freshest one.
      await loadSettings();
      var freshQuote = calcQuote(wizard.direction, wizard.sendAmount, state.settings);
      var slipPath = await store.uploadSlip(wizard.slipFile, state.user.id);
      var order = await store.createOrder({
        user_id: state.user.id,
        direction: wizard.direction,
        send_amount: Number(wizard.sendAmount),
        send_currency: freshQuote.sendCurrency,
        receive_amount: freshQuote.net,
        receive_currency: freshQuote.receiveCurrency,
        rate: freshQuote.rate,
        fee: freshQuote.fee,
        receive_method: wizard.receiveMethod,
        receiver_name: wizard.receiverName,
        receiver_account: wizard.receiverAccount,
        receiver_phone: wizard.receiverPhone,
        slip_path: slipPath,
        slip_txn_id: wizard.slipTxnId
      });
      if (wizard.saveReceiver) {
        var current = (state.profile && state.profile.receivers) || [];
        var entry = { method: wizard.receiveMethod, name: wizard.receiverName, account: wizard.receiverAccount, phone: wizard.receiverPhone };
        var exists = current.some(function (r) { return r.method === entry.method && r.account === entry.account; });
        if (!exists) {
          try { state.profile = await store.updateProfile(state.user.id, { receivers: current.concat([entry]) }); } catch (e) { /* non-fatal */ }
        }
      }
      if (wizard.slipPreviewUrl) URL.revokeObjectURL(wizard.slipPreviewUrl);
      showToast(S('orderCreated'));
      window.location.hash = '#/order/' + order.id;
    } catch (e) {
      errEl.textContent = S('errorGeneric');
      wizard.submitting = false;
      $('#wzSubmit').disabled = false;
    }
  });
}

/* ---------------- admin: live updates ---------------- */

var adminLive = { interval: null, unsubscribe: null };
function stopAdminLive() {
  if (adminLive.interval) { clearInterval(adminLive.interval); adminLive.interval = null; }
  if (adminLive.unsubscribe) { try { adminLive.unsubscribe(); } catch (e) { /* ignore */ } adminLive.unsubscribe = null; }
}
function startAdminLive(refreshFn) {
  stopAdminLive();
  if (!store.isDemoMode) {
    try {
      adminLive.unsubscribe = store.subscribeOrders(function () {
        showToast(S('newOrderArrived'));
        guardedRefresh();
      });
    } catch (e) { /* realtime unavailable; polling still runs */ }
  }
  adminLive.interval = setInterval(guardedRefresh, 20000);
  function guardedRefresh() {
    // Never yank a form out from under the admin while they are typing.
    var el = document.activeElement;
    if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT')) return;
    refreshFn();
  }
}

/* ---------------- admin shell + tabs ---------------- */

var ADMIN_TABS = [
  { id: 'overview', labelKey: 'tabOverview' },
  { id: 'orders', labelKey: 'tabOrders' },
  { id: 'rates', labelKey: 'tabRates' },
  { id: 'users', labelKey: 'tabUsers' },
  { id: 'settings', labelKey: 'tabSettings' },
  { id: 'ledger', labelKey: 'tabLedger' }
];

async function renderAdmin(token) {
  if (!state.isAdmin) {
    setView('<div class="card center"><p>' + esc(S('adminOnly')) + '</p>' +
      '<p><a class="btn btn--outline" href="#/">' + esc(S('backHome')) + '</a></p></div>');
    return;
  }
  setView(spinnerHtml(), true);
  var pendingCount = 0;
  try {
    var pending = await store.listOrders({ isAdmin: true, status: 'pending' });
    pendingCount = pending.length;
  } catch (e) { /* badge stays empty */ }
  if (isStale(token)) return;
  var tabsHtml = ADMIN_TABS.map(function (t) {
    var active = state.adminTab === t.id ? ' active' : '';
    var badge = (t.id === 'orders' && pendingCount > 0)
      ? '<span class="badge-count">' + esc(String(pendingCount)) + '</span>' : '';
    return '<a href="#/admin?tab=' + t.id + '" class="' + active + '">' + esc(S(t.labelKey)) + badge + '</a>';
  }).join('');
  setView('<h2 class="mt0">' + esc(S('adminTitle')) + '</h2><div class="admin-tabs">' + tabsHtml + '</div><div id="adminContent"></div>', true);
  var content = $('#adminContent');
  if (state.adminTab === 'orders') renderAdminOrders(token, content);
  else if (state.adminTab === 'rates') renderAdminRates(token, content);
  else if (state.adminTab === 'users') renderAdminUsers(token, content);
  else if (state.adminTab === 'settings') renderAdminSettings(token, content);
  else if (state.adminTab === 'ledger') renderAdminLedger(token, content);
  else renderAdminOverview(token, content);
}

function startOfToday() {
  var d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

/* ---------------- admin: overview ---------------- */

async function renderAdminOverview(token, content) {
  content.innerHTML = spinnerHtml();
  var orders = [];
  try { orders = await store.listOrders({ isAdmin: true }); }
  catch (e) { if (!isStale(token)) content.innerHTML = errorCard(S('errorLoad')); return; }
  if (isStale(token)) return;
  var todayStart = startOfToday();
  var pending = orders.filter(function (o) { return o.status === 'pending'; }).length;
  var completedToday = orders.filter(function (o) { return o.status === 'completed' && new Date(o.completed_at || o.updated_at).getTime() >= todayStart; }).length;
  var todayThb = orders.filter(function (o) { return new Date(o.created_at).getTime() >= todayStart && o.direction === 'THB_TO_MMK'; })
    .reduce(function (s, o) { return s + Number(o.send_amount); }, 0);
  var todayMmk = orders.filter(function (o) { return new Date(o.created_at).getTime() >= todayStart && o.direction === 'MMK_TO_THB'; })
    .reduce(function (s, o) { return s + Number(o.send_amount); }, 0);
  var feesMmk = orders.filter(function (o) { return o.status === 'completed' && o.receive_currency === 'MMK'; })
    .reduce(function (s, o) { return s + Number(o.fee || 0); }, 0);
  var feesThb = orders.filter(function (o) { return o.status === 'completed' && o.receive_currency === 'THB'; })
    .reduce(function (s, o) { return s + Number(o.fee || 0); }, 0);
  var recent = orders.slice(0, 8);
  content.innerHTML =
    '<div class="grid-2">' +
    '<div class="stat"><div class="stat-num">' + esc(String(pending)) + '</div><div class="stat-label">' + esc(S('pendingCount')) + '</div></div>' +
    '<div class="stat"><div class="stat-num">' + esc(String(completedToday)) + '</div><div class="stat-label">' + esc(S('completedCount')) + '</div></div>' +
    '<div class="stat"><div class="stat-num">' + esc(fmtNum(todayThb, 2)) + '</div><div class="stat-label">' + esc(S('todayVolume')) + ' (' + esc(S('thb')) + ')</div></div>' +
    '<div class="stat"><div class="stat-num">' + esc(fmtNum(todayMmk)) + '</div><div class="stat-label">' + esc(S('todayVolume')) + ' (' + esc(S('mmk')) + ')</div></div>' +
    '</div>' +
    '<div class="card" style="margin-top:14px"><h2>' + esc(S('feesCollected')) + '</h2>' +
    '<div class="kv"><span class="k">' + esc(S('ledgerFeesMmk')) + '</span><span class="v">' + esc(fmtMoney(feesMmk, 'MMK')) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('ledgerFeesThb')) + '</span><span class="v">' + esc(fmtMoney(feesThb, 'THB')) + '</span></div></div>' +
    '<div class="card"><div class="row-between"><h2 class="mb0">' + esc(S('recentOrdersAdmin')) + '</h2>' +
    '<a href="#/admin?tab=orders">' + esc(S('viewAll')) + '</a></div><div style="margin-top:10px">' +
    (recent.length ? recent.map(orderItemHtml).join('') : '<p class="empty">' + esc(S('allCaughtUp')) + '</p>') +
    '</div></div>';
  startAdminLive(function () { if (!isStale(token)) renderAdmin(token); });
}

/* ---------------- admin: orders queue ---------------- */

async function renderAdminOrders(token, content) {
  content.innerHTML = spinnerHtml();
  var orders = [];
  try {
    orders = await store.listOrders({
      isAdmin: true,
      status: state.adminOrderFilter || undefined,
      search: state.adminOrderSearch || undefined
    });
  } catch (e) { if (!isStale(token)) content.innerHTML = errorCard(S('errorLoad')); return; }
  if (isStale(token)) return;
  var statuses = ['', 'pending', 'reviewing', 'completed', 'rejected', 'cancelled'];
  var chips = statuses.map(function (st) {
    var label = st ? statusLabel(st) : S('filterAll');
    var active = state.adminOrderFilter === st ? ' active' : '';
    return '<button class="chip' + active + '" data-status="' + esc(st) + '" type="button">' + esc(label) + '</button>';
  }).join('');
  var rows = orders.length ? orders.map(function (o) {
    var thumb = o.slip_path
      ? '<img class="slip-thumb" data-file-path="' + esc(o.slip_path) + '" data-bucket="slips" data-zoom-src="' + esc(o.slip_path) + '" alt="" hidden>'
      : '';
    var quick = o.status === 'pending'
      ? '<button class="btn btn--outline btn--small" data-mark-reviewing="' + esc(o.id) + '" type="button">' + esc(S('markReviewing')) + '</button>'
      : '';
    return '<div class="pay-method"><div class="row">' + thumb +
      '<div class="grow"><div class="row-between"><a href="#/order/' + esc(o.id) + '"><strong>' + esc(o.order_no || '') + '</strong></a>' + orderStatusPill(o.status) + '</div>' +
      '<div class="small">' + esc(fmtMoney(o.send_amount, o.send_currency)) + ' → ' + esc(fmtMoney(o.receive_amount, o.receive_currency)) + '</div>' +
      '<div class="tiny muted">' + esc(o.receive_method || '') + ' · ' + esc(o.receiver_name || '') + ' · ' + esc(fmtDateTime(o.created_at)) + '</div></div></div>' +
      (quick ? '<div style="margin-top:8px" class="row">' + quick +
        '<a class="btn btn--small" href="#/order/' + esc(o.id) + '">' + esc(S('view')) + '</a></div>' : '') +
      '</div>';
  }).join('') : '<p class="empty">' + esc(S('noOrders')) + '</p>';
  content.innerHTML =
    '<div class="field"><input class="input" id="adminOrderSearch" type="search" placeholder="' + esc(S('searchPh')) + '" value="' + esc(state.adminOrderSearch) + '"></div>' +
    '<div class="filter-bar">' + chips + '</div>' + rows;
  hydrateImages(content);
  $all('[data-status]', content).forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.adminOrderFilter = btn.getAttribute('data-status');
      renderAdmin(token);
    });
  });
  var searchInput = $('#adminOrderSearch', content);
  var deb = null;
  searchInput.addEventListener('input', function () {
    if (deb) clearTimeout(deb);
    deb = setTimeout(function () {
      state.adminOrderSearch = searchInput.value.trim();
      renderAdmin(token);
    }, 350);
  });
  $all('[data-mark-reviewing]', content).forEach(function (btn) {
    btn.addEventListener('click', async function () {
      try {
        await store.updateOrderStatus(btn.getAttribute('data-mark-reviewing'), 'reviewing', {});
        showToast(S('orderUpdated'));
        renderAdmin(token);
      } catch (e) { showToast(S('errorGeneric'), true); }
    });
  });
  startAdminLive(function () { if (!isStale(token)) renderAdmin(token); });
}

/* ---------------- admin: rates ---------------- */

async function renderAdminRates(token, content) {
  content.innerHTML = spinnerHtml();
  var history = [];
  try { history = await store.getRateHistory(14); } catch (e) { history = []; }
  if (isStale(token)) return;
  await loadSettings();
  if (isStale(token)) return;
  var st = state.settings;
  var barsHtml = '';
  if (history.length) {
    var values = history.map(function (h) { return Number(h.thb_to_mmk); });
    var min = Math.min.apply(null, values);
    var max = Math.max.apply(null, values);
    var span = (max - min) || 1;
    barsHtml = '<ul class="bars">' + history.map(function (h) {
      var pct = 12 + ((Number(h.thb_to_mmk) - min) / span) * 88;
      return '<li><span class="bar-label">' + esc(fmtDateTime(h.created_at)) + '</span>' +
        '<span class="bar-track"><span class="bar-fill" style="display:block;width:' + pct.toFixed(1) + '%"></span></span>' +
        '<span class="bar-value">' + esc(fmtNum(h.thb_to_mmk, 2)) + '</span></li>';
    }).join('') + '</ul>';
  } else {
    barsHtml = '<p class="empty">' + esc(S('noHistory')) + '</p>';
  }
  content.innerHTML =
    '<div class="card"><h2>' + esc(S('ratesTitle')) + '</h2>' +
    '<p class="small muted">' + esc(S('currentRates')) + ': ' +
    esc(S('rateLineThb', { rate: fmtNum(st.rates.thb_to_mmk, 2) })) + ' · ' +
    esc(S('rateLineMmk', { rate: fmtNum(st.rates.mmk_to_thb, 2) })) + '</p>' +
    '<p class="small">' + esc(S('ratesConfirmHint')) + '</p>' +
    '<form id="ratesForm">' +
    '<div class="field"><label for="rateThb">' + esc(S('rateThbToMmkField')) + '</label>' +
    '<input class="input" id="rateThb" type="number" inputmode="decimal" step="0.01" min="0" value="' + esc(String(st.rates.thb_to_mmk)) + '"></div>' +
    '<div class="field"><label for="rateMmk">' + esc(S('rateMmkToThbField')) + '</label>' +
    '<input class="input" id="rateMmk" type="number" inputmode="decimal" step="0.01" min="0" value="' + esc(String(st.rates.mmk_to_thb)) + '"></div>' +
    '<div class="field"><label for="feePct">' + esc(S('feePercent')) + '</label>' +
    '<input class="input" id="feePct" type="number" inputmode="decimal" step="0.1" min="0" value="' + esc(String(st.fees.fee_percent)) + '"></div>' +
    '<div class="grid-2">' +
    '<div class="field"><label for="minThb">' + esc(S('minThb')) + '</label>' +
    '<input class="input" id="minThb" type="number" inputmode="decimal" step="any" min="0" value="' + esc(String(st.fees.min_thb)) + '"></div>' +
    '<div class="field"><label for="maxThb">' + esc(S('maxThb')) + '</label>' +
    '<input class="input" id="maxThb" type="number" inputmode="decimal" step="any" min="0" value="' + esc(String(st.fees.max_thb)) + '"></div>' +
    '<div class="field"><label for="minMmk">' + esc(S('minMmk')) + '</label>' +
    '<input class="input" id="minMmk" type="number" inputmode="decimal" step="any" min="0" value="' + esc(String(st.fees.min_mmk)) + '"></div>' +
    '<div class="field"><label for="maxMmk">' + esc(S('maxMmk')) + '</label>' +
    '<input class="input" id="maxMmk" type="number" inputmode="decimal" step="any" min="0" value="' + esc(String(st.fees.max_mmk)) + '"></div>' +
    '</div>' +
    '<p class="field-error" id="ratesError" role="alert"></p>' +
    '<button class="btn btn--block" type="submit">' + esc(S('saveRates')) + '</button></form></div>' +
    '<div class="card"><h2>' + esc(S('rateHistoryTitle')) + '</h2>' + barsHtml + '</div>';
  $('#ratesForm', content).addEventListener('submit', async function (e) {
    e.preventDefault();
    var thb = Number($('#rateThb', content).value);
    var mmk = Number($('#rateMmk', content).value);
    var feePct = Number($('#feePct', content).value);
    var fees = {
      fee_percent: feePct,
      min_thb: Number($('#minThb', content).value),
      max_thb: Number($('#maxThb', content).value),
      min_mmk: Number($('#minMmk', content).value),
      max_mmk: Number($('#maxMmk', content).value)
    };
    var errEl = $('#ratesError', content);
    errEl.textContent = '';
    if (!isFinite(thb) || thb <= 0 || !isFinite(mmk) || mmk <= 0 || !isFinite(feePct) || feePct < 0) {
      errEl.textContent = S('invalidAmount');
      return;
    }
    try {
      await store.setRates({ thb_to_mmk: thb, mmk_to_thb: mmk }, state.user.id);
      await store.updateSettings('fees', fees);
      await loadSettings();
      showToast(S('ratesSaved'));
      renderAdmin(token);
    } catch (err) { errEl.textContent = S('errorGeneric'); }
  });
}

/* ---------------- admin: users ---------------- */

async function renderAdminUsers(token, content) {
  content.innerHTML = spinnerHtml();
  var users = [], counts = {};
  try {
    users = await store.listUsers();
    counts = await store.getOrderCountsByUser();
  } catch (e) { if (!isStale(token)) content.innerHTML = errorCard(S('errorLoad')); return; }
  if (isStale(token)) return;
  var query = '';
  function draw() {
    var filtered = users.filter(function (u) {
      if (!query) return true;
      var q = query.toLowerCase();
      return (u.display_name || '').toLowerCase().indexOf(q) !== -1 ||
        (u.email || '').toLowerCase().indexOf(q) !== -1;
    });
    var rows = filtered.map(function (u) {
      var isSelf = u.id === state.user.id;
      var toggle = isSelf ? '' :
        '<button class="btn btn--outline btn--small" data-toggle-block="' + esc(u.id) + '" data-blocked="' + (u.is_blocked ? '1' : '0') + '" type="button">' +
        esc(u.is_blocked ? S('unblock') : S('block')) + '</button>';
      return '<tr><td data-label="' + esc(S('displayName')) + '"><strong>' + esc(u.display_name || '') + '</strong><br>' +
        '<span class="small muted">' + esc(u.email || '') + '</span>' +
        (u.phone ? '<br><span class="small">' + esc(u.phone) + '</span>' : '') + '</td>' +
        '<td data-label="' + esc(S('orderCount')) + '">' + esc(String(counts[u.id] || 0)) + '</td>' +
        '<td data-label="' + esc(S('joined')) + '">' + esc(fmtDateTime(u.created_at)) + '</td>' +
        '<td data-label="' + esc(S('statusLabel')) + '">' +
        '<span class="pill ' + (u.is_blocked ? 'pill--rejected' : 'pill--open') + '">' + esc(u.is_blocked ? S('blocked') : S('active')) + '</span></td>' +
        '<td>' + toggle + '</td></tr>';
    }).join('');
    $('#userRows').innerHTML = rows || '<tr><td>' + esc(S('noHistory')) + '</td></tr>';
    $all('[data-toggle-block]', content).forEach(function (btn) {
      btn.addEventListener('click', async function () {
        var id = btn.getAttribute('data-toggle-block');
        var blocked = btn.getAttribute('data-blocked') === '1';
        try {
          await store.setBlocked(id, !blocked);
          var u = null;
          users.forEach(function (x) { if (x.id === id) u = x; });
          if (u) u.is_blocked = !blocked;
          showToast(S('savedOk'));
          draw();
        } catch (e) { showToast(S('errorGeneric'), true); }
      });
    });
  }
  content.innerHTML =
    '<div class="card"><h2>' + esc(S('usersTitle')) + '</h2>' +
    '<div class="field"><input class="input" id="userSearch" type="search" placeholder="' + esc(S('searchUsersPh')) + '"></div>' +
    '<div class="table-scroll"><table class="data"><thead><tr>' +
    '<th>' + esc(S('displayName')) + '</th><th>' + esc(S('orderCount')) + '</th><th>' + esc(S('joined')) + '</th><th>' + esc(S('statusLabel')) + '</th><th></th>' +
    '</tr></thead><tbody id="userRows"></tbody></table></div></div>';
  $('#userSearch', content).addEventListener('input', function () {
    query = $('#userSearch', content).value.trim();
    draw();
  });
  draw();
}

/* ---------------- admin: settings ---------------- */

var methodDraft = { key: null, editingId: null };

async function renderAdminSettings(token, content) {
  content.innerHTML = spinnerHtml();
  await loadSettings();
  var admins = [];
  try { admins = await store.listAdmins(); } catch (e) { admins = []; }
  if (isStale(token)) return;
  var st = state.settings;
  var shop = st.shop;

  function methodsEditor(key, titleKey) {
    var methods = ((st[key] && st[key].methods) || []);
    var list = methods.length ? methods.map(function (m) {
      return '<div class="pay-method' + (m.enabled ? '' : ' disabled') + '"><div class="row-between"><strong>' + esc(m.label || '') + '</strong>' +
        '<span class="pill ' + (m.enabled ? 'pill--open' : 'pill--closed') + '">' + esc(m.enabled ? S('enabled') : S('blocked')) + '</span></div>' +
        '<div class="small">' + esc(m.account_name || '') + ' · <span class="mono">' + esc(m.account_number || '') + '</span></div>' +
        (m.qr_image_url ? '<div class="tiny muted mono">' + esc(m.qr_image_url) + '</div>' : '') +
        '<div class="row" style="margin-top:8px"><button class="btn btn--outline btn--small" data-edit-method="' + esc(key) + ':' + esc(m.id) + '" type="button">' + esc(S('editMethod')) + '</button>' +
        '<button class="btn btn--outline btn--small" data-delete-method="' + esc(key) + ':' + esc(m.id) + '" type="button">' + esc(S('deleteMethod')) + '</button></div></div>';
    }).join('') : '<p class="empty">' + esc(S('noMethods')) + '</p>';
    var editing = methodDraft.key === key && methodDraft.editingId
      ? methods.filter(function (m) { return m.id === methodDraft.editingId; })[0] : null;
    return '<div class="card"><h2>' + esc(S(titleKey)) + '</h2>' + list +
      '<form data-method-form="' + esc(key) + '">' +
      '<div class="field"><label>' + esc(S('methodNameLabel')) + '</label>' +
      '<input class="input" data-f="label" type="text" value="' + esc(editing ? editing.label || '' : '') + '"></div>' +
      '<div class="field"><label>' + esc(S('accountName')) + '</label>' +
      '<input class="input" data-f="account_name" type="text" value="' + esc(editing ? editing.account_name || '' : '') + '"></div>' +
      '<div class="field"><label>' + esc(S('accountNumber')) + '</label>' +
      '<input class="input" data-f="account_number" type="text" value="' + esc(editing ? editing.account_number || '' : '') + '"></div>' +
      '<div class="field"><label>' + esc(S('qrUrl')) + '</label>' +
      '<input class="input" data-f="qr_image_url" type="url" value="' + esc(editing ? editing.qr_image_url || '' : '') + '"></div>' +
      '<label class="check-row"><input type="checkbox" data-f="enabled"' + (!editing || editing.enabled ? ' checked' : '') + '> ' + esc(S('enabled')) + '</label>' +
      '<button class="btn btn--block" type="submit">' + esc(editing ? S('save') : S('addMethod')) + '</button></form></div>';
  }

  function receiveMethodsEditor() {
    var list = (st.receive_methods && st.receive_methods.methods) || DEFAULT_SETTINGS.receive_methods.methods;
    var rows = list.map(function (m, i) {
      return '<label class="check-row"><input type="checkbox" data-recv-method="' + i + '"' + (m.enabled !== false ? ' checked' : '') + '> ' + esc(receiveMethodLabel(m.label || '')) + '</label>';
    }).join('');
    return '<div class="card"><h2>' + esc(S('receiveMethodsTitle')) + '</h2>' +
      '<p class="small muted">' + esc(S('receiveMethodsHint')) + '</p>' +
      '<form id="recvMethodsForm">' + rows +
      '<button class="btn btn--block" type="submit">' + esc(S('saveSettings')) + '</button></form></div>';
  }

  var adminRows = admins.map(function (a) {
    var isSelf = a.user_id === state.user.id;
    return '<div class="pay-method"><div class="row-between"><span><strong>' + esc(a.display_name || '') + '</strong><br>' +
      '<span class="small muted">' + esc(a.email || '') + '</span></span>' +
      (isSelf ? '' : '<button class="btn btn--outline btn--small" data-remove-admin="' + esc(a.user_id) + '" type="button">' + esc(S('removeAdmin')) + '</button>') +
      '</div></div>';
  }).join('');

  content.innerHTML =
    '<div class="card"><h2>' + esc(S('settingsTitle')) + '</h2>' +
    '<form id="shopForm">' +
    '<div class="field"><label for="shopNameInput">' + esc(S('shopName')) + '</label>' +
    '<input class="input" id="shopNameInput" type="text" value="' + esc(shop.name || '') + '" placeholder="' + esc(S('appName')) + '"></div>' +
    '<div class="field"><label for="shopAnnouncement">' + esc(S('announcement')) + '</label>' +
    '<textarea class="input" id="shopAnnouncement" placeholder="' + esc(S('announcementPh')) + '">' + esc(shop.announcement || '') + '</textarea></div>' +
    '<label class="check-row"><input type="checkbox" id="shopOpen"' + (shop.is_open ? ' checked' : '') + '> ' + esc(S('isOpen')) + '</label>' +
    '<div class="field"><label for="shopHours">' + esc(S('openHours')) + '</label>' +
    '<input class="input" id="shopHours" type="text" value="' + esc(shop.open_hours || '') + '" placeholder="' + esc(S('openHoursPh')) + '"></div>' +
    '<div class="field"><label for="shopTelegram">' + esc(S('contactTelegram')) + '</label>' +
    '<input class="input" id="shopTelegram" type="text" value="' + esc(shop.contact_telegram || '') + '"></div>' +
    '<div class="field"><label for="shopPhone">' + esc(S('contactPhone')) + '</label>' +
    '<input class="input" id="shopPhone" type="tel" value="' + esc(shop.contact_phone || '') + '"></div>' +
    '<button class="btn btn--block" type="submit">' + esc(S('saveSettings')) + '</button></form></div>' +
    methodsEditor('payments_thb', 'paymentsThbTitle') +
    methodsEditor('payments_mmk', 'paymentsMmkTitle') +
    receiveMethodsEditor() +
    '<div class="card"><h2>' + esc(S('adminsTitle')) + '</h2>' + adminRows +
    '<form id="addAdminForm">' +
    '<div class="field"><label for="addAdminEmail">' + esc(S('addAdminByEmail')) + '</label>' +
    '<input class="input" id="addAdminEmail" type="email"></div>' +
    '<p class="field-error" id="addAdminError" role="alert"></p>' +
    '<button class="btn btn--outline btn--block" type="submit">' + esc(S('addAdminBtn')) + '</button></form></div>';

  $('#shopForm', content).addEventListener('submit', async function (e) {
    e.preventDefault();
    try {
      await store.updateSettings('shop', {
        name: $('#shopNameInput', content).value.trim(),
        announcement: $('#shopAnnouncement', content).value.trim(),
        is_open: $('#shopOpen', content).checked,
        open_hours: $('#shopHours', content).value.trim(),
        contact_telegram: $('#shopTelegram', content).value.trim(),
        contact_phone: $('#shopPhone', content).value.trim()
      });
      await loadSettings();
      renderShell();
      showToast(S('settingsSaved'));
    } catch (err) { showToast(S('errorGeneric'), true); }
  });

  var recvMethodsForm = $('#recvMethodsForm', content);
  if (recvMethodsForm) recvMethodsForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    var current = (state.settings.receive_methods && state.settings.receive_methods.methods) || DEFAULT_SETTINGS.receive_methods.methods;
    var list = current.map(function (m) { return { label: m.label, enabled: m.enabled !== false }; });
    $all('[data-recv-method]', recvMethodsForm).forEach(function (cb) {
      var i = Number(cb.getAttribute('data-recv-method'));
      if (list[i]) list[i].enabled = cb.checked;
    });
    try {
      await store.updateSettings('receive_methods', { methods: list });
      await loadSettings();
      showToast(S('settingsSaved'));
    } catch (err) { showToast(S('errorGeneric'), true); }
  });

  $all('[data-method-form]', content).forEach(function (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var key = form.getAttribute('data-method-form');
      var val = function (f) { return $('[data-f="' + f + '"]', form).value.trim(); };
      var label = val('label');
      var accountNumber = val('account_number');
      if (!label || !accountNumber) { showToast(S('fillAll'), true); return; }
      var methods = (((state.settings[key] || {}).methods) || []).slice();
      var entry = {
        id: (methodDraft.key === key && methodDraft.editingId) ? methodDraft.editingId : ('m-' + Date.now()),
        label: label,
        account_name: val('account_name'),
        account_number: accountNumber,
        qr_image_url: val('qr_image_url'),
        enabled: $('[data-f="enabled"]', form).checked
      };
      var idx = -1;
      methods.forEach(function (m, i) { if (m.id === entry.id) idx = i; });
      if (idx >= 0) methods[idx] = entry; else methods.push(entry);
      try {
        await store.updateSettings(key, { methods: methods });
        methodDraft = { key: null, editingId: null };
        await loadSettings();
        showToast(S('settingsSaved'));
        renderAdmin(token);
      } catch (err) { showToast(S('errorGeneric'), true); }
    });
  });
  $all('[data-edit-method]', content).forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parts = btn.getAttribute('data-edit-method').split(':');
      methodDraft = { key: parts[0], editingId: parts.slice(1).join(':') };
      renderAdmin(token);
    });
  });
  $all('[data-delete-method]', content).forEach(function (btn) {
    btn.addEventListener('click', async function () {
      if (!window.confirm(S('confirmDelete'))) return;
      var parts = btn.getAttribute('data-delete-method').split(':');
      var key = parts[0];
      var id = parts.slice(1).join(':');
      var methods = (((state.settings[key] || {}).methods) || []).filter(function (m) { return m.id !== id; });
      try {
        await store.updateSettings(key, { methods: methods });
        await loadSettings();
        showToast(S('savedOk'));
        renderAdmin(token);
      } catch (err) { showToast(S('errorGeneric'), true); }
    });
  });
  $all('[data-remove-admin]', content).forEach(function (btn) {
    btn.addEventListener('click', async function () {
      var id = btn.getAttribute('data-remove-admin');
      if (id === state.user.id) { showToast(S('cannotRemoveSelf'), true); return; }
      if (!window.confirm(S('confirmDelete'))) return;
      try {
        await store.removeAdmin(id);
        showToast(S('adminRemoved'));
        renderAdmin(token);
      } catch (err) { showToast(S('errorGeneric'), true); }
    });
  });
  $('#addAdminForm', content).addEventListener('submit', async function (e) {
    e.preventDefault();
    var email = $('#addAdminEmail', content).value.trim();
    var errEl = $('#addAdminError', content);
    errEl.textContent = '';
    if (!email) { errEl.textContent = S('fillAll'); return; }
    try {
      await store.addAdmin(email);
      showToast(S('adminAdded'));
      renderAdmin(token);
    } catch (err) {
      errEl.textContent = err && err.code === 'user_not_found' ? S('userNotFoundAdmin') : S('errorGeneric');
    }
  });
}

/* ---------------- admin: ledger ---------------- */

async function renderAdminLedger(token, content) {
  content.innerHTML = spinnerHtml();
  var orders = [];
  try { orders = await store.listOrders({ isAdmin: true }); }
  catch (e) { if (!isStale(token)) content.innerHTML = errorCard(S('errorLoad')); return; }
  if (isStale(token)) return;
  var ranges = [
    { id: 'today', labelKey: 'rangeToday', ms: 864e5 },
    { id: '7', labelKey: 'range7', ms: 7 * 864e5 },
    { id: '30', labelKey: 'range30', ms: 30 * 864e5 },
    { id: 'all', labelKey: 'rangeAll', ms: 0 }
  ];
  var cutoff = 0;
  if (state.ledgerRange === 'today') cutoff = startOfToday();
  else if (state.ledgerRange === '7') cutoff = Date.now() - 7 * 864e5;
  else if (state.ledgerRange === '30') cutoff = Date.now() - 30 * 864e5;
  var rows = cutoff ? orders.filter(function (o) { return new Date(o.created_at).getTime() >= cutoff; }) : orders;
  var counts = { pending: 0, reviewing: 0, completed: 0, rejected: 0, cancelled: 0 };
  rows.forEach(function (o) { if (counts[o.status] !== undefined) counts[o.status]++; });
  var completed = rows.filter(function (o) { return o.status === 'completed'; });
  var volThb = completed.filter(function (o) { return o.direction === 'THB_TO_MMK'; })
    .reduce(function (s, o) { return s + Number(o.send_amount); }, 0);
  var volMmk = completed.filter(function (o) { return o.direction === 'MMK_TO_THB'; })
    .reduce(function (s, o) { return s + Number(o.send_amount); }, 0);
  var feesMmk = completed.filter(function (o) { return o.receive_currency === 'MMK'; })
    .reduce(function (s, o) { return s + Number(o.fee || 0); }, 0);
  var feesThb = completed.filter(function (o) { return o.receive_currency === 'THB'; })
    .reduce(function (s, o) { return s + Number(o.fee || 0); }, 0);
  var chips = ranges.map(function (r) {
    return '<button class="chip' + (state.ledgerRange === r.id ? ' active' : '') + '" data-range="' + r.id + '" type="button">' + esc(S(r.labelKey)) + '</button>';
  }).join('');
  var countRows = Object.keys(counts).map(function (st) {
    return '<div class="kv"><span class="k">' + esc(statusLabel(st)) + '</span><span class="v">' + esc(String(counts[st])) + '</span></div>';
  }).join('');
  content.innerHTML =
    '<div class="filter-bar">' + chips + '</div>' +
    '<div class="card"><h2>' + esc(S('ledgerTitle')) + '</h2>' +
    '<div class="kv"><span class="k">' + esc(S('totalOrders')) + '</span><span class="v">' + esc(String(rows.length)) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('ledgerVolumeThbToMmk')) + '</span><span class="v">' + esc(fmtMoney(volThb, 'THB')) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('ledgerVolumeMmkToThb')) + '</span><span class="v">' + esc(fmtMoney(volMmk, 'MMK')) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('ledgerFeesMmk')) + '</span><span class="v">' + esc(fmtMoney(feesMmk, 'MMK')) + '</span></div>' +
    '<div class="kv"><span class="k">' + esc(S('ledgerFeesThb')) + '</span><span class="v">' + esc(fmtMoney(feesThb, 'THB')) + '</span></div>' +
    '<p class="tiny muted">' + esc(S('ledgerNote')) + '</p></div>' +
    '<div class="card"><h2>' + esc(S('ledgerCounts')) + '</h2>' + countRows + '</div>';
  $all('[data-range]', content).forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.ledgerRange = btn.getAttribute('data-range');
      renderAdmin(token);
    });
  });
}

/* ---------------- boot ---------------- */

async function boot() {
  renderShell();
  setView(spinnerHtml());
  try { await afterAuthChanged(); } catch (e) { /* stay logged out */ }
  try { await loadSettings(); } catch (e) { state.settings = mergeSettings(null); }
  renderShell();
  state.booted = true;
  window.addEventListener('hashchange', route);
  route();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
