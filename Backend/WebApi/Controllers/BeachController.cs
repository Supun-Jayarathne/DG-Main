using Backend.Api.OtherObjects;
using Backend.Application.Beach.CreateBeach;
using Backend.Application.Beach.GetAllBeaches;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers;

[ApiController]
[Authorize]
[Route("[controller]")]
public class BeachController : ControllerBase
{
    private readonly IMediator _mediator;
    public BeachController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Authorize(Roles = StaticUserRoles.USER)]
    public async Task<IActionResult> GetAsync()
    {
        var response = await _mediator.Send(new GetAllBeachesRequest());
        return Ok(response);
    }
    [HttpPost]
    [Authorize(Roles = StaticUserRoles.USER)]
    public async Task<IActionResult> PostAsync(CreateBeachRequest payload)
    {
        var newlyCreateItemId = await _mediator.Send(payload);
        return Ok(newlyCreateItemId);
    }
}