using dg_backend.Application.Common.Mappings;
using dg_backend.Domain.Entities;

namespace dg_backend.Application.TodoLists.Queries.ExportTodos;

public class TodoItemRecord : IMapFrom<TodoItem>
{
    public string? Title { get; init; }

    public bool Done { get; init; }
}
