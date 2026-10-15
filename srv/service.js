import cds from "@sap/cds";

export default class demoService extends cds.ApplicationService{
    async init(){
       const {purchaseOrder,companyCode} = this.entities;
        const purchaseOrderConnect = await cds.connect.to('PURCHASEORDER_PROCESS');
        const comConnect = await cds.connect.to('OP_API_COMPANYCODE_SRV');

        this.on('READ',purchaseOrder, async(req) => {
            var response = await purchaseOrderConnect.tx(req).run(req.query);
            return response;
        });

        this.on('READ',companyCode, async(req) => {
            var response = await comConnect.tx(req).run(req.query);

            return response;
        });

        return super.init();
    }
}