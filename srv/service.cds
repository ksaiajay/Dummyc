using { PURCHASEORDER_PROCESS  } from './external/PURCHASEORDER_PROCESS';
using { OP_API_COMPANYCODE_SRV  } from './external/OP_API_COMPANYCODE_SRV';
service demoService {
   entity purchaseOrder as projection on PURCHASEORDER_PROCESS.A_PurchaseOrder;
   entity companyCode as projection on OP_API_COMPANYCODE_SRV.A_CompanyCode{
    CompanyCode,
    CompanyCodeName
   }
}