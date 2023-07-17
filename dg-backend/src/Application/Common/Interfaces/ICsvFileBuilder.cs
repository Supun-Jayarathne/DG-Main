using dg_backend.Application.TodoLists.Queries.ExportTodos;

namespace dg_backend.Application.Common.Interfaces;

public interface ICsvFileBuilder
{
    byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
}
