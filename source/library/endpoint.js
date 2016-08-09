// const baseAddress = 'http://prime-mock-server.ap-northeast-2.elasticbeanstalk.com/intra'; //mock
// const baseAddress = 'http://prime-main-server.ap-northeast-2.elasticbeanstalk.com/intra'; //main
// const baseAddress = 'http://prime-dev-server-jsyi.ap-northeast-2.elasticbeanstalk.com/intra'; //종선님
// const baseAddress = 'http://prime-qa1-server.ap-northeast-2.elasticbeanstalk.com/intra'; //QA
// const baseAddress = 'http://prime.dev/intra';

const apiVersion = 'v1';
const env = process.env.NODE_ENV;
const addresses = {
  production: 'http://prime-production.ap-northeast-2.elasticbeanstalk.com/intra',
  dev: 'http://prime-dev.ap-northeast-2.elasticbeanstalk.com/intra',
  mock: 'http://prime-mock-server.ap-northeast-2.elasticbeanstalk.com/intra',
  qa: 'http://prime-qa1-server.ap-northeast-2.elasticbeanstalk.com/intra',
};
const baseAddress = addresses[env];

const endpoint = {
  banks: `${baseAddress}/${apiVersion}/stores/banks`,
  checkUserID: `${baseAddress}/${apiVersion}/stores/store_users/check`,
  member: {
    store: {
      list: `${baseAddress}/${apiVersion}/stores`,
      register: {
        individual: `${baseAddress}/${apiVersion}/stores/individual`,
        franchiseIndividual: `${baseAddress}/${apiVersion}/stores/franchise_individual`,
        franchiseCorporate: `${baseAddress}/${apiVersion}/stores/franchise_corporate`,
      },
      detail: (id) => (`${baseAddress}/${apiVersion}/stores/${id}`),
      selectList: `${baseAddress}/${apiVersion}/stores/list`,
      adminMemo: (id) => (`${baseAddress}/${apiVersion}/stores/${id}/admin_memo`),
      changeStoreCertificationStatus: (id) => (`${baseAddress}/${apiVersion}/stores/${id}/certification_status`),
      changeStoreOperatingStatus: (id) => (`${baseAddress}/${apiVersion}/stores/${id}/operating_status`),
      getVroongPartnerList: `${baseAddress}/${apiVersion}/deliveries/vroong_partners`,
    },
    client: {
      list: `${baseAddress}/${apiVersion}/businessClients`,
      register: `${baseAddress}/${apiVersion}/businessClients`,
      shortList: `${baseAddress}/${apiVersion}/businessClients/list`,
      detail: (id) => (`${baseAddress}/${apiVersion}/businessClients/${id}`),
      adminMemo: (id) => (`${baseAddress}/${apiVersion}/businessClients/${id}/admin_memo`),
      file: (path) => (`${baseAddress}/${apiVersion}/businessClients/files/${path}`),
      images: (id) => (`${baseAddress}/${apiVersion}/businessClients/${id}/files`),
    },
    notice: {
      list: `${baseAddress}/${apiVersion}/notices`,
      register: `${baseAddress}/${apiVersion}/notices`,
      detail: (id) => (`${baseAddress}/${apiVersion}/notices/${id}`),
    },
    extrafee: {
      list: `${baseAddress}/${apiVersion}/extrafees`,
      register: `${baseAddress}/${apiVersion}/extrafees`,
      detail: (id) => (`${baseAddress}/${apiVersion}/extrafees/${id}`),
      clearTarget: (id) => (`${baseAddress}/${apiVersion}/extrafees/${id}/clear_target`),
    },
    accounting: {
      report: `${baseAddress}/${apiVersion}/accounting/reports`,
      downloadReport: (id) => `${baseAddress}/${apiVersion}/accounting/report/${id}`,
      invoiceList: `${baseAddress}/${apiVersion}/accounting/invoice_histories`,
      invoiceDetail: (id) => (`${baseAddress}/${apiVersion}/accounting/invoice_histories/${id}`),
      downloadInvoice: (id) => `${baseAddress}/${apiVersion}/accounting/invoice/${id}`,
      sendEmail: `${baseAddress}/${apiVersion}/accounting/invoice_emails`,
    },
  },
  live: {
    delivery: {
      list: `${baseAddress}/${apiVersion}/deliveries`,
      detail: (id) => (`${baseAddress}/${apiVersion}/deliveries/${id}`),
      changeAccountingFlag: (id) => (`${baseAddress}/${apiVersion}/deliveries/${id}/accounting_flag`),
      resend: (id) => (`${baseAddress}/${apiVersion}/deliveries/${id}/resend`),
      adminMemo: (id) => (`${baseAddress}/${apiVersion}/deliveries/${id}/admin_memo`),
      changeDeliveryStatusCanceled: (id) => (`${baseAddress}/${apiVersion}/deliveries/${id}/status/CANCELED`),
      changeDeliveryStatusDelivered: (id) => (`${baseAddress}/${apiVersion}/deliveries/${id}/status/DELIVERED`),
      changeBillableCargoPrice: (id) => (`${baseAddress}/${apiVersion}/deliveries/${id}/billable_cargo_price`),
      changeBillableFee: (id) => (`${baseAddress}/${apiVersion}/deliveries/${id}/billable_fee`),
      changeBillableCancelFee: (id) => (`${baseAddress}/${apiVersion}/deliveries/${id}/billable_cancel_fee`),
      changePayment: (id) => (`${baseAddress}/${apiVersion}/deliveries/${id}/payments`),
      vroongPartners: `${baseAddress}/${apiVersion}/deliveries/vroong_partners`,
    },
  },
  regions: {
    basic: `${baseAddress}/${apiVersion}/regions`,
    siDo: `${baseAddress}/${apiVersion}/regions?si_do=`,
    siGunGu: `${baseAddress}/${apiVersion}/regions?si_gun_gu=`,
    geocode: `${baseAddress}/${apiVersion}/regions/geocode?q=`,
    search: `${baseAddress}/${apiVersion}/regions?detail=`,
  },
  login: `${baseAddress}/${apiVersion}/auth/login`,
  signUp: `${baseAddress}/${apiVersion}/auth/sign_up`,
  email: `${baseAddress}/${apiVersion}/auth/email`,
};

export default endpoint;
