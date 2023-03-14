/* import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities/realEstate.entities"
import { Shedule } from "../../entities/shedules.entities"
import { AppError } from "../../errors/app.Error"
import { IReturnShedule, IShedule } from "../../interfaces/shedules.interface"
import { returnSchedulesSchema } from "../../schemas/shedules.schema"

export const createShedulesService = async(shedulesData: IShedule): Promise<IReturnShedule> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    
    const verifyShedules = realEstateRepository.createQueryBuilder("shedules").
    innerJoinAndSelect("real_estate.shedules", "real_estate_shedules").
    innerJoinAndSelect("real_estate.shedules", "real_estate_shedulees").
    where("real_estate_shedules.hour = :hour", {hour: shedulesData.hour}).
    andWhere("real_estate_shedules.date = :date", {date: shedulesData.date}).
    getOne()

    if(verifyShedules) {
        throw new AppError("Não tem schedules ", 400)
    }

    const shedule: Shedule = realEstateRepository.create(shedulesData)

    await realEstateRepository.save(shedule)

    const newShedule: IReturnShedule = returnSchedulesSchema.parse(shedule)

    return newShedule
} */