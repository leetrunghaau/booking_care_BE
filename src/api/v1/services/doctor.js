const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const Specialty = require("../models/specialty");
const { Op } = require('sequelize');
const User = require("../models/user");

class DoctorSV {
    static async all() {
        return await Doctor.findAll({ include: [{ model: Hospital }, { model: Specialty }, { model: User }] });
    }
    static async down(id) {
        return await Doctor.destroy({ where: { id: id } });
    }
    static async up(data) {
        return await Doctor.create(data);
    }
    static async allNoHospital() {
        return await Doctor.findAll({
            where: { hospitalId: null },
            include: [{ model: Hospital }, { model: Specialty }, { model: User }]
        });
    }

    static async allInPage(page = 0, search = null, hospital = null, specialty = null) {
        const limit = 5;
        const offset = page * limit;

        const where = {};

        if (search) {
            where.name = {
                [Op.like]: `%${search}%`
            };
        }

        if (hospital) {
            where.hospitalId = Number(hospital);
        }

        if (specialty) {
            where.specialtyId = Number(specialty);
        }

        const { count, rows } = await Doctor.findAndCountAll({
            where,
            limit,
            offset,
            include: [
                { model: Hospital },
                { model: Specialty },
                { model: User }
            ],
            // order: [['createdAt', 'DESC']] // hoặc theo cách bạn muốn
        });

        // const totalPages = Math.ceil(count / limit);

        return {
            data: rows,
            total: count,
        };
    }
    static async doctorPage(page = 0, search = null, address = null, specialty = null) {
        const limit = 9;
        const offset = page * limit;

        const where = {};
        const whereSpecialty = {};
        const whereAddress = {};

        if (search) {
            where.name = {
                [Op.like]: `%${search}%`
            };
        }

        if (address) {
            whereAddress.address = {
                [Op.like]: `%${address}%`
            };
        }

        if (specialty) {
            whereSpecialty.id = Number(specialty);
        }

        const { count, rows } = await Doctor.findAndCountAll({
            where,
            limit,
            offset,
            include: [
                { model: Hospital , where: whereAddress},
                { model: Specialty , where: whereSpecialty},
                { model: User }
            ],
        });


        return {
            data: rows,
            total: count,
        };
    }

    static async noHospital(page = 0, search = null, hospitalId = 0, specialty = null) {
        const limit = 6;
        const offset = page * limit;

        const where = {};

        if (search) {
            where.name = {
                [Op.like]: `%${search}%`
            };
        }

        where.hospitalId = {
            [Op.or]: [
                { [Op.is]: null },
                hospitalId
            ]
          };

        if (specialty) {
            where.specialtyId = Number(specialty);
        }

        const { count, rows } = await Doctor.findAndCountAll({
            where,
            limit,
            offset,
            include: [
                { model: Hospital },
                { model: Specialty },
                { model: User }
            ],
            // order: [['createdAt', 'DESC']] // hoặc theo cách bạn muốn
        });

        // const totalPages = Math.ceil(count / limit);

        return {
            data: rows,
            total: count,
        };
    }

    


    static async all2(specialtiesIds = [], address = []) {
        const hospitalWhere = {};

        if (address.length > 0) {
            hospitalWhere[Op.or] = address.map((addr) => ({
                address: {
                    [Op.like]: `%${addr}%`
                }
            }));
        }

        const doctorWhere = {};
        if (specialtiesIds.length > 0) {
            doctorWhere.specialtyId = {
                [Op.in]: specialtiesIds
            };
        }

        return await Doctor.findAll({
            include: [
                {
                    model: Hospital,
                    where: hospitalWhere
                },
                {
                    model: Specialty
                }
            ],
            where: doctorWhere
        });
    }

    static async allHospital(hospitalId) {
        return await Doctor.findAll({ where: { hospitalId: hospitalId } });
    }
    static async allPid(ids) {
        return await Doctor.findAll({
            include: [
                { model: Hospital },
                {
                    model: Specialty,
                    where: {
                        id: Array.isArray(ids)
                            ? { [Op.in]: ids }
                            : ids
                    }
                }
            ]
        });
    }
    static async edit(id, data) {
        return await Doctor.update(data, { where: { id } });
    }
    static async oneBySlug(slug) {
        return await Doctor.findOne({ where: { slug: slug }, include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async oneEmail(email) {
        return await Doctor.findOne({ where: { email: email }, include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async one(id) {
        return await Doctor.findOne({ where: { id: id }, include: [{ model: Hospital }, { model: Specialty }, { model: User }] });
    }
    static async onByUId(id) {
        return await Doctor.findOne({ where: { userId: id }, include: [{ model: Hospital }, { model: Specialty }, { model: User }] });
    }
}


module.exports = DoctorSV;
