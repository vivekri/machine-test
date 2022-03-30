export default class ClinicModel {

    constructor(item) {

        if(item===null)
        {
            this._id = '',
            this.clinic_RegionID = '',
            this.clinic_Region = '',
            this.clinic_id = '',
            this.clinic_name = '',
            this.clinic_code = ''
        }
        else{
            this._id = item._id,
            this.clinic_RegionID = item.clinic_RegionID,
            this.clinic_Region = item.clinic_Region,
            this.clinic_id = item.clinic_id,
            this.clinic_name = item.clinic_name,
            this.clinic_code = item.clinic_code
        }
          

    }

    //Get Data 
    get_Id() {
        return this._id;
    }

    getClinic_RegionID() {
        return this.clinic_RegionID;
    }
    getClinic_Region() {
        return this.clinic_Region;
    }
    getClinic_Id() {
        return this.clinic_id;
    }
    getClinic_Name() {
        return this.clinic_name;
    }
    get_Clinic_Code() {
        return this.clinic_code;
    }


    //set Data

    set_Id(value) {
        this._id = value
    }
    setClinic_RegionID(value) {
        this.clinic_RegionID = value
    }
    setClinic_Region(value) {
        this.clinic_Region = value
    }
    setClinic_Id(value) {
        this.clinic_id = value
    }
    setClinic_Name(value) {
        this.clinic_name = value
    }
    set_Clinic_Code(value) {
        this.clinic_code = value
    }
}