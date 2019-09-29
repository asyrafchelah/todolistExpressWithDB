import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTodolist1569753569170 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "todolist" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "completed" boolean NOT NULL, "created_at" character varying NOT NULL, "completed_at" character varying NOT NULL, "notes" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_ad126e5bdbcae6306ea2266a1f2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "todolist"`, undefined);
    }

}
