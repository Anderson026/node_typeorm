import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateContact1640744207990 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "contact",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true
                    },
                    {
                        name: "telefone",
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
        await queryRunner.dropTable("contact");
    }

}
