﻿using DG_Backend.Application.Common.Exceptions;
using DG_Backend.Application.TodoItems.Commands.CreateTodoItem;
using DG_Backend.Application.TodoItems.Commands.DeleteTodoItem;
using DG_Backend.Application.TodoLists.Commands.CreateTodoList;
using DG_Backend.Domain.Entities;
using FluentAssertions;
using NUnit.Framework;

namespace DG_Backend.Application.IntegrationTests.TodoItems.Commands;

using static Testing;

public class DeleteTodoItemTests : BaseTestFixture
{
    [Test]
    public async Task ShouldRequireValidTodoItemId()
    {
        var command = new DeleteTodoItemCommand(99);

        await FluentActions.Invoking(() =>
            SendAsync(command)).Should().ThrowAsync<NotFoundException>();
    }

    [Test]
    public async Task ShouldDeleteTodoItem()
    {
        var listId = await SendAsync(new CreateTodoListCommand
        {
            Title = "New List"
        });

        var itemId = await SendAsync(new CreateTodoItemCommand
        {
            ListId = listId,
            Title = "New Item"
        });

        await SendAsync(new DeleteTodoItemCommand(itemId));

        var item = await FindAsync<TodoItem>(itemId);

        item.Should().BeNull();
    }
}
