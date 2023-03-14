import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities/categories.entities"
import { RealEstate } from "../../entities/realEstate.entities"
import { IReturnListCategories } from "../../interfaces/categories.interface"
import { IReturnLstRealEstate } from "../../interfaces/realEstate.interface"

export const listCategoriesService = async (): Promise<IReturnListCategories> => {

    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategories: Array<Category> = await categoriesRepository.find()

    return findCategories
}

export const listCategoriesWithEstate = async(categoryId: number): Promise<IReturnLstRealEstate> => {

    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findCategories: Array<Category> = await categoriesRepository.findBy({
         
        id: categoryId
        
    }) as IReturnListCategories

    const findRealEstates: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true
        },
        where: {
            category: findCategories
        }
    })
    
    return findRealEstates
}