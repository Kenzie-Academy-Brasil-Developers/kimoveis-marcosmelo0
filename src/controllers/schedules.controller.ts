/* import { Request, Response } from "express"
import { createShedulesService } from "../services/shedules/createShedules.service"

export const createSchedulesController = async(req: Request, resp: Response) => {
    
    const scheduleData = req.body

    const newSchedule = await createShedulesService(scheduleData)
    
    return resp.json(newSchedule)
} */