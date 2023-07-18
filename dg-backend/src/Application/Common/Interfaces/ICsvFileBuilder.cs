using DG_Backend.Application.TodoLists.Queries.ExportTodos;

namespace DG_Backend.Application.Common.Interfaces;

public interface ICsvFileBuilder
{
    byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
}
