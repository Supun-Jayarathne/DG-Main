using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class addedclientProjectIdwithrelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectStatuses_ClientProjects_ClientProjectId",
                table: "ProjectStatuses");

            migrationBuilder.DropColumn(
                name: "ClientId",
                table: "ProjectStatuses");

            migrationBuilder.AlterColumn<int>(
                name: "ClientProjectId",
                table: "ProjectStatuses",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectStatuses_ClientProjects_ClientProjectId",
                table: "ProjectStatuses",
                column: "ClientProjectId",
                principalTable: "ClientProjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectStatuses_ClientProjects_ClientProjectId",
                table: "ProjectStatuses");

            migrationBuilder.AlterColumn<int>(
                name: "ClientProjectId",
                table: "ProjectStatuses",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ClientId",
                table: "ProjectStatuses",
                type: "int",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectStatuses_ClientProjects_ClientProjectId",
                table: "ProjectStatuses",
                column: "ClientProjectId",
                principalTable: "ClientProjects",
                principalColumn: "Id");
        }
    }
}
