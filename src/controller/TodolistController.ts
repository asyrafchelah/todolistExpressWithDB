import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Todolist } from "../entity/Todolist";



export class TodoListController {
    private todolistRepository = getRepository(Todolist);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.todolistRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let todolist = await this.todolistRepository.findOne(request.params.id);
        if (todolist) {
            return todolist
        } else {
            return null
        }

    }



    async save(request: Request, response: Response, next: NextFunction) {
        let todolist = await this.todolistRepository.save({
            description: request.body.description,
            completed: request.body.completed,
            createdAt: request.body.createdAt,
            completedAt: request.body.completedAt,
            notes: request.body.notes,
            category: request.body.category
        });
        return todolist
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let todolistToUpdate = await this.todolistRepository.findOne(request.params.id);
        if (todolistToUpdate) {
            todolistToUpdate.description = request.body.description
            todolistToUpdate.notes = request.body.notes
            todolistToUpdate.category = request.body.category

            return this.todolistRepository.save(todolistToUpdate);
        }
        return {}
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let todolistToRemove = await this.todolistRepository.findOne(request.params.id);
        await this.todolistRepository.remove(todolistToRemove);
        response.send("Successfully delete todo list")
    }

    async filterPersonal(request: Request, response: Response, next: NextFunction) {
        let personal = await this.todolistRepository.find({category: "Personal"});
        response.send(personal);
        // let todolistFilter = this.todolistRepository.find({ category: request.query.category });
        // if (todolistFilter) {
        //     response.send(todolistFilter);
        // }
        // return {}
    }


    async filterWork(request: Request, response: Response, next: NextFunction) {
        let work = await this.todolistRepository.find({ category: "Work" });
        response.send(work);
    }

    async filterfamily(request: Request, response: Response, next: NextFunction) {
        let family = await this.todolistRepository.find({ category: "Family" });
        response.send(family);
    }

    

}
