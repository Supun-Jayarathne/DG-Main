using DG_Backend.Application.Common.Mappings;
using DG_Backend.Domain.Entities;

namespace DG_Backend.Application.TodoLists.Queries.ExportTodos;

public class TodoItemRecord : IMapFrom<TodoItem>
{
    public string? Title { get; init; }

    public bool Done { get; init; }
}
