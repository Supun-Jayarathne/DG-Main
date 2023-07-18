using System.Globalization;
using DG_Backend.Application.Common.Interfaces;
using DG_Backend.Application.TodoLists.Queries.ExportTodos;
using DG_Backend.Infrastructure.Files.Maps;
using CsvHelper;

namespace DG_Backend.Infrastructure.Files;

public class CsvFileBuilder : ICsvFileBuilder
{
    public byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records)
    {
        using var memoryStream = new MemoryStream();
        using (var streamWriter = new StreamWriter(memoryStream))
        {
            using var csvWriter = new CsvWriter(streamWriter, CultureInfo.InvariantCulture);

            csvWriter.Context.RegisterClassMap<TodoItemRecordMap>();
            csvWriter.WriteRecords(records);
        }

        return memoryStream.ToArray();
    }
}
