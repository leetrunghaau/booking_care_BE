const { createListAddress } = require("../src/api/v1/helpers/addresss")
const HospitalSV = require("../src/api/v1/services/hospital")

const hospital = await HospitalSV.all()
const listFullAddress = hospital.map(i => i.address)
const userAR = "đồng tháp"

const sg = createListAddress(listFullAddress, userAR)
console.log(listFullAddress)
console.log(sg)