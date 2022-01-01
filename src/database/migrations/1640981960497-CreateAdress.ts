import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAdress1640981960497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "adress",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "personId",
                        type: "int"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_person",
                        columnNames: ["personId"],
                        referencedTableName: "person",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("adress");
    }

}
