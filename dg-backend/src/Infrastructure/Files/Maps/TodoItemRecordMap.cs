using System.Globalization;
using DG_Backend.Application.TodoLists.Queries.ExportTodos;
using CsvHelper.Configuration;

namespace DG_Backend.Infrastructure.Files.Maps;

public class TodoItemRecordMap : ClassMap<TodoItemRecord>
{
    public TodoItemRecordMap()
    {
        AutoMap(CultureInfo.InvariantCulture);

        Map(m => m.Done).Convert(c => c.Value.Done ? "Yes" : "No");
    }
}
